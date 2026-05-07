import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Badge } from "@/design-system/primitives/Badge";
import { formatDateShort } from "@/lib/utils";
import type { Trip } from "@/data/trips";

interface BookingCardProps {
  trip: Trip;
  className?: string;
}

const statusConfig = {
  confirmed: { label: "Confirmed", variant: "success" as const },
  "check-in-today": { label: "Check-in today", variant: "warning" as const, pulse: true },
  completed: { label: "Completed", variant: "muted" as const },
  cancelled: { label: "Cancelled", variant: "error" as const },
};

export function BookingCard({ trip, className }: BookingCardProps) {
  const status = statusConfig[trip.status];

  return (
    <Link to={`/trips/${trip.id}`} className={cn("block group", className)}>
      <div
        className={cn(
          "flex gap-4 p-4 rounded-2xl border border-stone-light bg-paper",
          "hover:border-stone hover:shadow-card transition-all duration-200",
          "overflow-hidden" // prevents any child overflow
        )}
      >
        {/* Image */}
        <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-stone-light">
          <img
            src={trip.listing.images[0]}
            alt={trip.listing.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-between min-w-0 flex-1">
          <div>
            <p className="text-sm font-semibold text-ink line-clamp-1">{trip.listing.title}</p>
            <p className="text-xs text-stone mt-0.5 line-clamp-1">{trip.listing.location}</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs text-stone">
              {formatDateShort(trip.checkIn)} – {formatDateShort(trip.checkOut)}
            </p>
            <Badge variant={status.variant} pulse={'pulse' in status ? status.pulse : false}>
              {status.label}
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  );
}
