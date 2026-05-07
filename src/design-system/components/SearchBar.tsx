import { useState } from "react";
import { Search, MapPin, Users, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/design-system/primitives/Button";

interface SearchBarProps {
  compact?: boolean;
  defaultDestination?: string;
  onSearch?: (params: { destination: string; checkIn?: string; checkOut?: string; guests: number }) => void;
  className?: string;
}

export function SearchBar({ compact = false, defaultDestination = "", onSearch, className }: SearchBarProps) {
  const [destination, setDestination] = useState(defaultDestination);
  const [guests, setGuests] = useState(1);

  function handleSearch() {
    onSearch?.({ destination, guests });
  }

  if (compact) {
    return (
      <button
        onClick={() => onSearch?.({ destination, guests })}
        className={cn(
          "flex items-center gap-3 h-12 px-4 bg-paper rounded-full border border-stone-light shadow-card",
          "hover:shadow-card-hover transition-shadow duration-200 text-left",
          className
        )}
      >
        <Search size={16} className="text-terracotta flex-shrink-0" />
        <span className="text-sm text-ink font-medium truncate">
          {destination || "Where to?"}
        </span>
        <span className="ml-auto text-xs text-stone border-l border-stone-light pl-3">
          {guests} guest{guests !== 1 ? "s" : ""}
        </span>
      </button>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center bg-paper rounded-full border border-stone-light shadow-card",
        "hover:shadow-card-hover transition-shadow duration-200",
        className
      )}
    >
      {/* Destination */}
      <div className="flex items-center gap-2 flex-1 px-5 py-3 border-r border-stone-light">
        <MapPin size={16} className="text-terracotta flex-shrink-0" />
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-semibold text-ink">Where</span>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Search destinations"
            className="bg-transparent text-sm text-ink placeholder:text-stone focus:outline-none w-full"
          />
        </div>
      </div>

      {/* Dates */}
      <div className="flex items-center gap-2 px-5 py-3 border-r border-stone-light cursor-pointer hover:bg-paper-dark/50 transition-colors">
        <Calendar size={16} className="text-stone flex-shrink-0" />
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-ink">When</span>
          <span className="text-sm text-stone">Add dates</span>
        </div>
      </div>

      {/* Guests */}
      <div className="flex items-center gap-2 px-5 py-3 cursor-pointer hover:bg-paper-dark/50 transition-colors rounded-r-full">
        <Users size={16} className="text-stone flex-shrink-0" />
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-ink">Who</span>
          <span className="text-sm text-stone">{guests} guest{guests !== 1 ? "s" : ""}</span>
        </div>
      </div>

      {/* Search button */}
      <div className="pr-2">
        <Button
          onClick={handleSearch}
          className="rounded-full w-12 h-12 p-0 flex items-center justify-center"
          aria-label="Search"
        >
          <Search size={18} />
        </Button>
      </div>
    </div>
  );
}
