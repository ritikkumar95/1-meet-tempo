/**
 * [Start here] Tutorial workspace tour
 * Related PRD: demo-assets/prds/tutorial/01-welcome.md
 * Related issue: demo-assets/issues/01-welcome.md
 */
import type { TempoPage, TempoStoryboard, TempoRouteStoryboard } from "@tempo/types";
import { ListingCard } from "@/design-system/components/ListingCard";
import { FilterChip } from "@/design-system/components/FilterChip";
import { HeartButton } from "@/design-system/components/HeartButton";
import { SearchBar } from "@/design-system/components/SearchBar";
import { LISTINGS } from "@/data/listings";

export default { name: "[Start here] Tutorial workspace tour" } satisfies TempoPage;

export const Homepage: TempoRouteStoryboard = {
  route: "/",
  name: "Homepage — hero + featured listings",
  layout: { x: 0, y: 0, width: 1440, height: 900 },
};
export const SearchBarDefault: TempoStoryboard<typeof SearchBar> = {
  component: SearchBar,
  name: "Search bar — default",
  args: {},
  layout: { x: 1480, y: 0, width: 700, height: 120 },
  container: (Story) => <div style={{ padding: 32, background: "var(--paper)" }}><Story /></div>,
};
export const ListingCardDefault: TempoStoryboard<typeof ListingCard> = {
  component: ListingCard,
  name: "ListingCard — default",
  args: { listing: LISTINGS[0] },
  layout: { x: 1480, y: 160, width: 320, height: 460 },
};
export const ListingCardSaved: TempoStoryboard<typeof ListingCard> = {
  component: ListingCard,
  name: "ListingCard — saved",
  args: { listing: LISTINGS[1], saved: true },
  layout: { x: 1820, y: 160, width: 320, height: 460 },
};
export const HeartUnsaved: TempoStoryboard<typeof HeartButton> = {
  component: HeartButton,
  name: "HeartButton — unsaved",
  args: { saved: false, size: "lg" },
  layout: { x: 1480, y: 660, width: 120, height: 120 },
  container: (Story) => <div style={{ padding: 40, background: "#888" }}><Story /></div>,
};
export const HeartSaved: TempoStoryboard<typeof HeartButton> = {
  component: HeartButton,
  name: "HeartButton — saved",
  args: { saved: true, size: "lg" },
  layout: { x: 1620, y: 660, width: 120, height: 120 },
  container: (Story) => <div style={{ padding: 40, background: "#888" }}><Story /></div>,
};
export const FilterChipDefault: TempoStoryboard<typeof FilterChip> = {
  component: FilterChip,
  name: "FilterChip — inactive",
  args: { label: "Price" },
  layout: { x: 1480, y: 820, width: 200, height: 80 },
  container: (Story) => <div style={{ padding: 20, background: "var(--paper)" }}><Story /></div>,
};
export const FilterChipActive: TempoStoryboard<typeof FilterChip> = {
  component: FilterChip,
  name: "FilterChip — active",
  args: { label: "Price", count: 1, active: true },
  layout: { x: 1700, y: 820, width: 200, height: 80 },
  container: (Story) => <div style={{ padding: 20, background: "var(--paper)" }}><Story /></div>,
};
