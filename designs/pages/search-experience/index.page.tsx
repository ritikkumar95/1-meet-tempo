/**
 * Search experience canvas
 * Related PRD: demo-assets/prds/discover/01-search-and-filters.md
 * Related PRD: demo-assets/prds/discover/02-map-view.md (no frames yet — see TODO below)
 * Related issue: demo-assets/issues/03-price-filter.md (In Progress)
 * Related issue: demo-assets/issues/05-map-view.md (Todo — design not started)
 */
import type { TempoPage, TempoRouteStoryboard, TempoStoryboard } from "@tempo/types";
import { FilterChip } from "@/design-system/components/FilterChip";
import { SearchBar } from "@/design-system/components/SearchBar";

export default { name: "Search experience" } satisfies TempoPage;

export const SearchResultsList: TempoRouteStoryboard = {
  route: "/search",
  name: "Search results — list view",
  layout: { x: 0, y: 0, width: 1440, height: 900 },
};
export const SearchResultsFiltered: TempoRouteStoryboard = {
  route: "/search?q=coastal",
  name: "Search results — filtered by 'coastal'",
  layout: { x: 1480, y: 0, width: 1440, height: 900 },
};
export const SearchBarEmpty: TempoStoryboard<typeof SearchBar> = {
  component: SearchBar, name: "Search bar — empty",
  args: {},
  layout: { x: 0, y: 940, width: 720, height: 120 },
  container: (Story) => <div style={{ padding: 32, background: "var(--paper)" }}><Story /></div>,
};
export const SearchBarFilled: TempoStoryboard<typeof SearchBar> = {
  component: SearchBar, name: "Search bar — destination typed",
  args: { defaultDestination: "Cinque Terre, Italy" },
  layout: { x: 0, y: 1080, width: 720, height: 120 },
  container: (Story) => <div style={{ padding: 32, background: "var(--paper)" }}><Story /></div>,
};
export const FilterChipsNone: TempoStoryboard<typeof FilterChip> = {
  component: FilterChip, name: "Filter chips — none active",
  args: { label: "Price" },
  layout: { x: 0, y: 1220, width: 160, height: 80 },
  container: (Story) => <div style={{ display: "flex", gap: 8, padding: 20, background: "var(--paper)" }}><Story /></div>,
};
export const FilterChipPriceActive: TempoStoryboard<typeof FilterChip> = {
  component: FilterChip, name: "Filters drawer — price chip active",
  args: { label: "Price", count: 1, active: true },
  layout: { x: 180, y: 1220, width: 200, height: 80 },
  container: (Story) => <div style={{ display: "flex", gap: 8, padding: 20, background: "var(--paper)" }}><Story /></div>,
};
export const FilterChipMultiActive: TempoStoryboard<typeof FilterChip> = {
  component: FilterChip, name: "Filters drawer — 3 active",
  args: { label: "Price", count: 3, active: true },
  layout: { x: 400, y: 1220, width: 200, height: 80 },
  container: (Story) => <div style={{ display: "flex", gap: 8, padding: 20, background: "var(--paper)" }}><Story /></div>,
};
// TODO (Issue #5): Add map view frames here when design starts.
// Expected: MapViewSplit, MapViewFull, ListingPin, PinCluster, ListingPinPreview
