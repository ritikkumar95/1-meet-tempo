import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  count?: number;
  size?: "sm" | "md";
  className?: string;
}

export function RatingStars({ rating, count, size = "sm", className }: RatingStarsProps) {
  const iconSize = size === "sm" ? 12 : 16;

  return (
    <span className={cn("inline-flex items-center gap-1 text-ink", className)}>
      <Star
        size={iconSize}
        className="fill-terracotta text-terracotta"
      />
      <span className={cn("font-medium tabular-nums", size === "sm" ? "text-sm" : "text-base")}>
        {rating.toFixed(2)}
      </span>
      {count !== undefined && (
        <span className={cn("text-stone", size === "sm" ? "text-sm" : "text-base")}>
          ({count.toLocaleString()})
        </span>
      )}
    </span>
  );
}
