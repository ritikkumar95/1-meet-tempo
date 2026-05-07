import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { RatingStars } from "./RatingStars";
import { HeartButton } from "./HeartButton";
import { formatPrice } from "@/lib/utils";
import type { Listing } from "@/data/listings";

interface ListingCardProps {
  listing: Listing;
  saved?: boolean;
  onSaveToggle?: (id: string, saved: boolean) => void;
  className?: string;
  priority?: boolean;
}

export function ListingCard({ listing, saved = false, onSaveToggle, className }: ListingCardProps) {
  return (
    <article className={cn("group relative flex flex-col", className)}>
      {/* Image */}
      <Link to={`/listing/${listing.id}`} className="block">
        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-stone-light">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          {listing.badge && (
            <span className="absolute top-3 left-3 bg-paper text-ink text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
              {listing.badge}
            </span>
          )}
        </div>
      </Link>

      {/* Heart */}
      <div className="absolute top-3 right-3">
        <HeartButton
          saved={saved}
          onToggle={(s) => onSaveToggle?.(listing.id, s)}
          size="md"
        />
      </div>

      {/* Info */}
      <div className="mt-3 flex flex-col gap-0.5">
        <div className="flex items-start justify-between gap-2">
          <Link
            to={`/listing/${listing.id}`}
            className="font-medium text-ink text-sm leading-snug line-clamp-1 hover:underline decoration-stone-light"
          >
            {listing.title}
          </Link>
          <RatingStars rating={listing.rating} className="flex-shrink-0 mt-0.5" />
        </div>
        <p className="text-stone text-sm line-clamp-1">{listing.location}</p>
        <p className="text-stone text-sm">{listing.dateRange}</p>
        <p className="text-ink text-sm mt-1">
          <span className="font-semibold">{formatPrice(listing.pricePerNight)}</span>{" "}
          <span className="text-stone">/ night</span>
        </p>
      </div>
    </article>
  );
}
