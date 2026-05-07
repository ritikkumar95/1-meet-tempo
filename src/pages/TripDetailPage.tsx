import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ChevronLeft, MapPin, MessageSquare, Lock, Key, Users, Smartphone, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/design-system/layout/Container";
import { Avatar } from "@/design-system/primitives/Avatar";
import { Badge } from "@/design-system/primitives/Badge";
import { Button } from "@/design-system/primitives/Button";
import { formatDate, formatPrice } from "@/lib/utils";
import { getTripById } from "@/data/trips";

const checkInIcons = {
  lockbox: <Lock size={18} />,
  "smart-lock": <Smartphone size={18} />,
  "host-greet": <Users size={18} />,
  "building-staff": <Building2 size={18} />,
};

const checkInLabels = {
  lockbox: "Lockbox",
  "smart-lock": "Smart lock",
  "host-greet": "Host greets you",
  "building-staff": "Building staff",
};

export function TripDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const trip = getTripById(id ?? "");
  const [showCancel, setShowCancel] = useState(false);
  const [cancelStep, setCancelStep] = useState<1 | 2 | 3 | "done">(1);

  if (!trip) {
    return (
      <Container className="py-24 text-center">
        <p className="font-display text-2xl">Trip not found</p>
        <Button onClick={() => navigate("/trips")} className="mt-4" variant="secondary">Back to trips</Button>
      </Container>
    );
  }

  const isPast = trip.status === "completed" || trip.status === "cancelled";
  const refundAmount = trip.cancellationPolicy === "flexible"
    ? trip.totalPrice
    : trip.cancellationPolicy === "moderate"
    ? Math.round(trip.totalPrice * 0.5)
    : 0;

  return (
    <div className="min-h-screen pb-16">
      <div className="sticky top-16 z-30 bg-paper/90 backdrop-blur-md border-b border-stone-light">
        <Container className="flex items-center h-12">
          <button onClick={() => navigate("/trips")} className="flex items-center gap-1.5 text-sm text-stone hover:text-ink transition-colors">
            <ChevronLeft size={16} /> All trips
          </button>
        </Container>
      </div>

      <Container className="pt-8 max-w-2xl">
        {/* Unread message banner */}
        {trip.unreadMessages > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between gap-3 p-4 mb-6 rounded-2xl bg-terracotta/8 border border-terracotta/20"
          >
            <div className="flex items-center gap-3">
              <MessageSquare size={18} className="text-terracotta flex-shrink-0" />
              <p className="text-sm text-ink">
                <strong>{trip.listing.host.name}</strong> sent you {trip.unreadMessages === 1 ? "a message" : `${trip.unreadMessages} messages`}
              </p>
            </div>
            <Link to="/messages">
              <Button size="sm" variant="outline">Read</Button>
            </Link>
          </motion.div>
        )}

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden h-56 mb-6">
          <img src={trip.listing.images[0]} alt={trip.listing.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h1 className="font-display font-light text-xl text-paper">{trip.listing.title}</h1>
            <p className="text-sm text-paper/80 flex items-center gap-1 mt-1">
              <MapPin size={13} /> {trip.listing.location}
            </p>
          </div>
          <div className="absolute top-4 right-4">
            <Badge
              variant={trip.status === "check-in-today" ? "warning" : trip.status === "confirmed" ? "success" : "muted"}
              pulse={trip.status === "check-in-today"}
            >
              {trip.status === "check-in-today" ? "Check-in today" : trip.status === "confirmed" ? "Confirmed" : "Completed"}
            </Badge>
          </div>
        </div>

        {/* Your trip */}
        <section className="mb-6 p-5 rounded-2xl border border-stone-light">
          <h2 className="font-display text-lg text-ink mb-4">Your trip</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-stone text-xs uppercase tracking-wider mb-1">Check-in</p>
              <p className="font-medium text-ink">{formatDate(trip.checkIn)}</p>
              <p className="text-stone text-xs mt-0.5">After 3:00 PM</p>
            </div>
            <div>
              <p className="text-stone text-xs uppercase tracking-wider mb-1">Checkout</p>
              <p className="font-medium text-ink">{formatDate(trip.checkOut)}</p>
              <p className="text-stone text-xs mt-0.5">Before 11:00 AM</p>
            </div>
            <div>
              <p className="text-stone text-xs uppercase tracking-wider mb-1">Guests</p>
              <p className="font-medium text-ink">{trip.guests} guest{trip.guests !== 1 ? "s" : ""}</p>
            </div>
            <div>
              <p className="text-stone text-xs uppercase tracking-wider mb-1">Total paid</p>
              <p className="font-medium text-ink">{formatPrice(trip.totalPrice)}</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-light flex items-center gap-2 text-sm">
            <MapPin size={14} className="text-stone flex-shrink-0" />
            <a href="#" className="text-terracotta hover:underline">{trip.listing.location} — open in Maps</a>
          </div>
        </section>

        {/* Getting there */}
        {!isPast && trip.checkInInstructions.length > 0 && (
          <section className="mb-6 p-5 rounded-2xl border border-stone-light">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-terracotta">{checkInIcons[trip.checkInMethod]}</span>
              <h2 className="font-display text-lg text-ink">Getting there</h2>
              <Badge variant="muted">{checkInLabels[trip.checkInMethod]}</Badge>
            </div>
            <ol className="space-y-3">
              {trip.checkInInstructions.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-ink">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Host */}
        <section className="mb-6 p-5 rounded-2xl border border-stone-light">
          <h2 className="font-display text-lg text-ink mb-4">Your host</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar src={trip.listing.host.avatar} alt={trip.listing.host.name} size="lg" />
              <div>
                <p className="font-medium text-ink">{trip.listing.host.name}</p>
                <p className="text-sm text-stone">{trip.listing.host.responseRate}% response rate</p>
              </div>
            </div>
            <Link to="/messages">
              <Button variant="outline" size="sm" className="gap-2">
                <MessageSquare size={14} /> Message
              </Button>
            </Link>
          </div>
        </section>

        {/* Confirmation */}
        <section className="mb-8 p-4 rounded-2xl bg-paper-dark">
          <p className="text-xs text-stone">
            Confirmation code: <strong className="text-ink font-mono">{trip.confirmationCode}</strong>
          </p>
        </section>

        {/* Cancel */}
        {!isPast && (
          <button
            onClick={() => setShowCancel(true)}
            className="text-sm text-stone hover:text-ink underline decoration-stone-light transition-colors"
          >
            Cancel this reservation
          </button>
        )}
      </Container>

      {/* Cancellation flow sheet */}
      {showCancel && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-ink/30 backdrop-blur-sm"
          onClick={() => { if (cancelStep === 1 || cancelStep === 2) setShowCancel(false); }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="bg-paper rounded-3xl shadow-modal w-full max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {cancelStep === 1 && (
              <>
                <h3 className="font-display text-xl text-ink mb-1">Cancel this reservation?</h3>
                <p className="text-stone text-sm mb-6">{trip.listing.title} · {formatDate(trip.checkIn)} – {formatDate(trip.checkOut)}</p>
                <div className="p-4 rounded-2xl bg-paper-dark mb-6 text-center">
                  <p className="text-xs text-stone mb-1">Your refund</p>
                  <p className="font-display text-3xl text-moss font-light">{formatPrice(refundAmount)}</p>
                  <p className="text-xs text-stone mt-1">
                    {trip.cancellationPolicy === "flexible"
                      ? "Full refund — free cancellation applies"
                      : trip.cancellationPolicy === "moderate"
                      ? "50% refund — within moderate cancellation window"
                      : "No refund — strict policy applies"}
                  </p>
                </div>
                <Button className="w-full mb-2" variant="secondary" onClick={() => setCancelStep(2)}>Continue to cancel</Button>
                <Button className="w-full" variant="ghost" onClick={() => setShowCancel(false)}>Keep my reservation</Button>
              </>
            )}
            {cancelStep === 2 && (
              <>
                <h3 className="font-display text-xl text-ink mb-4">Why are you cancelling?</h3>
                <div className="space-y-2 mb-6">
                  {["Plans changed", "Dates wrong", "Found a better option", "Emergency", "Other"].map((r) => (
                    <button key={r} className="w-full text-left p-3 rounded-xl border border-stone-light hover:border-stone text-sm text-ink transition-colors">
                      {r}
                    </button>
                  ))}
                </div>
                <button className="text-sm text-stone hover:text-ink underline mb-4 block" onClick={() => setCancelStep(3)}>Skip</button>
                <Button className="w-full mb-2" variant="secondary" onClick={() => setCancelStep(3)}>Continue</Button>
                <Button className="w-full" variant="ghost" onClick={() => setShowCancel(false)}>Back</Button>
              </>
            )}
            {cancelStep === 3 && (
              <>
                <h3 className="font-display text-xl text-ink mb-4">Confirm cancellation</h3>
                <div className="p-4 rounded-2xl bg-paper-dark mb-6 text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-stone">Reservation</span>
                    <span className="text-ink font-mono text-xs">{trip.confirmationCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone">Refund</span>
                    <span className="text-moss font-semibold">{formatPrice(refundAmount)}</span>
                  </div>
                  <p className="text-xs text-stone pt-2 border-t border-stone-light">
                    Refund arrives in 5–10 business days to your original payment method.
                  </p>
                </div>
                <Button className="w-full mb-2" variant="destructive" onClick={() => setCancelStep("done")}>Confirm cancellation</Button>
                <Button className="w-full" variant="ghost" onClick={() => setCancelStep(2)}>Back</Button>
              </>
            )}
            {cancelStep === "done" && (
              <div className="text-center py-6">
                <p className="text-4xl mb-4">✓</p>
                <h3 className="font-display text-2xl text-ink mb-2">Reservation cancelled</h3>
                <p className="text-stone text-sm mb-2">You'll receive {formatPrice(refundAmount)} within 5–10 business days.</p>
                <Button className="mt-6 w-full" onClick={() => { setShowCancel(false); navigate("/trips"); }}>Back to trips</Button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
