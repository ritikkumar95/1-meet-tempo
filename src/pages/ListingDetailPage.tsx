import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Share, Wifi, UtensilsCrossed, Waves, Star, MapPin, Key, Users, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/design-system/layout/Container";
import { Button } from "@/design-system/primitives/Button";
import { Badge } from "@/design-system/primitives/Badge";
import { Avatar } from "@/design-system/primitives/Avatar";
import { HeartButton } from "@/design-system/components/HeartButton";
import { RatingStars } from "@/design-system/components/RatingStars";
import { formatPrice } from "@/lib/utils";
import { getListingById } from "@/data/listings";

const amenityIcons: Record<string, React.ReactNode> = {
  Wifi: <Wifi size={18} />,
  Kitchen: <UtensilsCrossed size={18} />,
  Pool: <Waves size={18} />,
};

export function ListingDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const listing = getListingById(id ?? "");
  const [showBooking, setShowBooking] = useState(false);
  const [booked, setBooked] = useState(false);

  if (!listing) {
    return (
      <Container className="py-24 text-center">
        <p className="font-display text-2xl">Listing not found</p>
        <Button onClick={() => navigate("/search")} className="mt-4" variant="secondary">
          Back to search
        </Button>
      </Container>
    );
  }

  const nights = 5;
  const cleaning = 85;
  const service = Math.round(listing.pricePerNight * nights * 0.12);
  const taxes = Math.round(listing.pricePerNight * nights * 0.08);
  const total = listing.pricePerNight * nights + cleaning + service + taxes;

  return (
    <div className="pb-32 lg:pb-0">
      {/* Back nav */}
      <div className="sticky top-16 z-30 bg-paper/90 backdrop-blur-md border-b border-stone-light">
        <Container className="flex items-center justify-between h-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-sm text-stone hover:text-ink transition-colors"
          >
            <ChevronLeft size={16} /> Back
          </button>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 text-sm text-stone hover:text-ink transition-colors p-2 rounded-lg hover:bg-paper-dark">
              <Share size={16} /> Share
            </button>
            <HeartButton size="sm" />
          </div>
        </Container>
      </div>

      <Container className="pt-6">
        {/* Photo gallery */}
        <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-2xl overflow-hidden h-80 sm:h-[420px] mb-8">
          <div className="col-span-2 row-span-2 relative">
            <img
              src={listing.images[0]}
              alt={listing.title}
              className="w-full h-full object-cover"
            />
          </div>
          {listing.images.slice(1, 3).map((img, i) => (
            <div key={i} className="relative">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
          {/* Placeholder tiles for remaining photos */}
          {[...Array(Math.max(0, 2 - listing.images.length + 1))].map((_, i) => (
            <div key={`ph-${i}`} className="bg-stone-light" />
          ))}
        </div>

        <div className="lg:grid lg:grid-cols-[1fr_360px] lg:gap-16">
          {/* Left column */}
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-start gap-3 mb-2">
                {listing.badge && <Badge variant="accent">{listing.badge}</Badge>}
              </div>
              <h1 className="font-display font-light text-display-md text-ink mb-2 text-balance">
                {listing.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-stone">
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {listing.location}
                </span>
                <span>·</span>
                <RatingStars rating={listing.rating} count={listing.reviewCount} />
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-stone">
                <span className="flex items-center gap-1"><Users size={14} /> {listing.maxGuests} guests</span>
                <span>·</span>
                <span>{listing.beds} beds</span>
                <span>·</span>
                <span>{listing.baths} {listing.baths === 1 ? "bath" : "baths"}</span>
              </div>
            </div>

            <div className="h-px bg-stone-light mb-6" />

            {/* Host */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Avatar src={listing.host.avatar} alt={listing.host.name} size="lg" />
                <div>
                  <p className="font-medium text-ink">Hosted by {listing.host.name}</p>
                  <p className="text-sm text-stone">
                    {listing.host.superhost && "Superhost · "}
                    {listing.host.responseRate}% response rate
                  </p>
                </div>
              </div>
              {listing.host.superhost && (
                <Badge variant="success">
                  <Star size={10} className="fill-emerald-700" />
                  Superhost
                </Badge>
              )}
            </div>

            <div className="h-px bg-stone-light mb-6" />

            {/* Description */}
            <div className="mb-8">
              <p className="text-ink leading-relaxed">{listing.description}</p>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="font-display text-xl text-ink mb-4">What this place offers</h2>
              <div className="grid grid-cols-2 gap-3">
                {listing.amenities.slice(0, 8).map((a) => (
                  <div key={a} className="flex items-center gap-3 text-sm text-ink">
                    <span className="text-stone">
                      {amenityIcons[a] ?? <Key size={18} />}
                    </span>
                    {a}
                  </div>
                ))}
              </div>
              {listing.amenities.length > 8 && (
                <Button variant="outline" size="sm" className="mt-4">
                  Show all {listing.amenities.length} amenities
                </Button>
              )}
            </div>

            {/* Reviews */}
            <div className="h-px bg-stone-light mb-6" />
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="font-display text-xl text-ink">Reviews</h2>
                <RatingStars rating={listing.rating} count={listing.reviewCount} size="md" />
              </div>
              {/* Placeholder review cards */}
              <div className="space-y-4">
                {[
                  { name: "Sarah M.", date: "March 2026", text: "Absolutely stunning. The views were exactly as advertised, and Lucia was incredibly responsive. One of our best trips." },
                  { name: "Tom & Rie", date: "February 2026", text: "Perfect base for exploring the area. The cottage is charming and comfortable — we'd go back every year if we could." },
                ].map((r) => (
                  <div key={r.name} className="p-4 rounded-xl border border-stone-light">
                    <div className="flex items-center gap-2 mb-2">
                      <Avatar alt={r.name} size="sm" />
                      <div>
                        <p className="text-sm font-medium text-ink">{r.name}</p>
                        <p className="text-xs text-stone">{r.date}</p>
                      </div>
                    </div>
                    <p className="text-sm text-ink leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — Booking widget */}
          <div className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-stone-light p-6 shadow-card">
              <div className="flex items-baseline justify-between mb-6">
                <p className="text-ink">
                  <span className="font-display text-2xl font-light">{formatPrice(listing.pricePerNight)}</span>
                  <span className="text-stone text-sm"> / night</span>
                </p>
                <RatingStars rating={listing.rating} count={listing.reviewCount} />
              </div>

              {/* Date + guest pickers */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[{ label: "CHECK-IN", val: listing.dateRange.split("–")[0].trim() }, { label: "CHECKOUT", val: listing.dateRange.split("–")[1]?.trim() ?? "–" }].map((d) => (
                  <div key={d.label} className="p-3 rounded-xl border border-stone-light cursor-pointer hover:border-stone transition-colors">
                    <p className="text-[10px] font-semibold text-stone tracking-wider">{d.label}</p>
                    <p className="text-sm font-medium text-ink mt-0.5">{d.val}</p>
                  </div>
                ))}
              </div>
              <div className="p-3 rounded-xl border border-stone-light cursor-pointer hover:border-stone transition-colors mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold text-stone tracking-wider">GUESTS</p>
                  <p className="text-sm font-medium text-ink mt-0.5">2 guests</p>
                </div>
                <Calendar size={14} className="text-stone" />
              </div>

              <Button
                size="lg"
                className="w-full mb-4"
                onClick={() => setShowBooking(true)}
              >
                Reserve
              </Button>

              <p className="text-center text-xs text-stone mb-4">You won't be charged yet</p>

              {/* Price breakdown */}
              <div className="space-y-2.5 text-sm">
                {[
                  { label: `${formatPrice(listing.pricePerNight)} × ${nights} nights`, value: listing.pricePerNight * nights },
                  { label: "Cleaning fee", value: cleaning },
                  { label: "Havn service fee", value: service },
                  { label: "Taxes", value: taxes },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between">
                    <span className="text-stone">{row.label}</span>
                    <span className="text-ink">{formatPrice(row.value)}</span>
                  </div>
                ))}
                <div className="h-px bg-stone-light" />
                <div className="flex justify-between font-semibold text-ink">
                  <span>Total before taxes</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-paper/95 backdrop-blur-md border-t border-stone-light px-4 py-3 flex items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-ink">{formatPrice(listing.pricePerNight)}<span className="font-normal text-stone text-sm"> / night</span></p>
          <RatingStars rating={listing.rating} />
        </div>
        <Button size="lg" onClick={() => setShowBooking(true)}>Reserve</Button>
      </div>

      {/* Booking modal */}
      {showBooking && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-ink/30 backdrop-blur-sm" onClick={() => setShowBooking(false)}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="bg-paper rounded-3xl shadow-modal w-full max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {booked ? (
              <div className="text-center py-6">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-display text-2xl text-ink mb-2">Booking confirmed!</h3>
                <p className="text-stone text-sm">Confirmation code: <strong className="text-ink font-mono">HMXK9W</strong></p>
                <Button className="mt-6 w-full" onClick={() => setShowBooking(false)}>Done</Button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <img src={listing.images[0]} alt="" className="w-16 h-16 rounded-xl object-cover" />
                  <div>
                    <p className="font-medium text-ink line-clamp-1">{listing.title}</p>
                    <p className="text-sm text-stone">{listing.location}</p>
                  </div>
                </div>
                <div className="space-y-2.5 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-stone">Dates</span>
                    <span className="text-ink">{listing.dateRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone">Guests</span>
                    <span className="text-ink">2</span>
                  </div>
                  <div className="h-px bg-stone-light" />
                  <div className="flex justify-between font-semibold text-ink">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
                <p className="text-xs text-stone mb-4 bg-paper-dark rounded-xl p-3">
                  <strong className="text-ink">Cancellation policy:</strong> Free cancellation until 14 days before check-in, then 50% refund until 7 days before.
                </p>
                <Button size="lg" className="w-full mb-2" onClick={() => setBooked(true)}>Confirm and pay</Button>
                <Button variant="ghost" size="md" className="w-full" onClick={() => setShowBooking(false)}>Back</Button>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
