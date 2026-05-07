import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { Container } from "@/design-system/layout/Container";
import { SearchBar } from "@/design-system/components/SearchBar";
import { FilterChip } from "@/design-system/components/FilterChip";
import { ListingCard } from "@/design-system/components/ListingCard";
import { Button } from "@/design-system/primitives/Button";
import { LISTINGS } from "@/data/listings";

const FILTERS = ["Price", "Type of place", "Beds", "Amenities", "More filters"];

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilters, setActiveFilters] = useState<Record<string, boolean>>({});
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const query = searchParams.get("q") ?? "";

  const results = useMemo(() => {
    let list = [...LISTINGS];
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(
        (l) =>
          l.title.toLowerCase().includes(q) ||
          l.location.toLowerCase().includes(q) ||
          l.region.toLowerCase().includes(q)
      );
    }
    if (maxPrice) {
      list = list.filter((l) => l.pricePerNight <= maxPrice);
    }
    return list;
  }, [query, maxPrice]);

  function toggleFilter(label: string) {
    setActiveFilters((prev) => ({ ...prev, [label]: !prev[label] }));
  }

  function clearAllFilters() {
    setActiveFilters({});
    setMaxPrice(null);
  }

  const hasActiveFilters = Object.values(activeFilters).some(Boolean) || maxPrice !== null;

  return (
    <div className="min-h-screen pb-16">
      {/* Sticky search + filter bar */}
      <div className="sticky top-16 z-30 bg-paper/90 backdrop-blur-md border-b border-stone-light">
        <Container className="py-3">
          <div className="hidden sm:block mb-3">
            <SearchBar
              compact
              defaultDestination={query}
              onSearch={({ destination }) => {
                if (destination) setSearchParams({ q: destination });
                else setSearchParams({});
              }}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {FILTERS.map((f) => (
              <FilterChip
                key={f}
                label={f}
                active={activeFilters[f]}
                onClick={() => toggleFilter(f)}
              />
            ))}
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="inline-flex items-center gap-1 text-sm text-stone hover:text-ink transition-colors ml-auto flex-shrink-0"
              >
                <X size={14} /> Clear all
              </button>
            )}
          </div>
        </Container>
      </div>

      {/* Results */}
      <Container className="pt-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-stone">
            <span className="font-semibold text-ink">{results.length}</span>{" "}
            {results.length === 1 ? "place" : "places"} found
            {query && (
              <span>
                {" "}for{" "}
                <span className="text-ink font-medium">"{query}"</span>
              </span>
            )}
          </p>
          <Button variant="outline" size="sm" className="gap-2">
            <SlidersHorizontal size={14} />
            Sort
          </Button>
        </div>

        {results.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-display text-2xl text-ink mb-2">No results found</p>
            <p className="text-stone mb-6">Try adjusting your filters or search for a different destination.</p>
            <Button onClick={clearAllFilters} variant="secondary">
              Clear filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 stagger-children">
            {results.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
