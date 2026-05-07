/**
 * Design system canvas
 * All primitives and components in one place.
 * Edit any component here and see it update everywhere it's used.
 * Related issue: demo-assets/issues/02-edit-a-component.md
 */
import type { TempoPage, TempoStoryboard } from "@tempo/types";
import { Button } from "@/design-system/primitives/Button";
import { Badge } from "@/design-system/primitives/Badge";
import { Avatar } from "@/design-system/primitives/Avatar";
import { Input } from "@/design-system/primitives/Input";
import { FilterChip } from "@/design-system/components/FilterChip";
import { HeartButton } from "@/design-system/components/HeartButton";
import { ListingCard } from "@/design-system/components/ListingCard";
import { RatingStars } from "@/design-system/components/RatingStars";
import { SearchBar } from "@/design-system/components/SearchBar";
import { BookingCard } from "@/design-system/components/BookingCard";
import { LISTINGS } from "@/data/listings";
import { TRIPS } from "@/data/trips";

export default { name: "Design system" } satisfies TempoPage;

// Buttons
export const ButtonPrimary: TempoStoryboard<typeof Button> = {
  component: Button, name: "Button — primary",
  args: { children: "Reserve", variant: "primary", size: "md" },
  layout: { x: 0, y: 0, width: 240, height: 100 },
  container: (Story) => <div style={{ padding: 32, background: "var(--paper)" }}><Story /></div>,
};
export const ButtonSecondary: TempoStoryboard<typeof Button> = {
  component: Button, name: "Button — secondary",
  args: { children: "Browse all", variant: "secondary", size: "md" },
  layout: { x: 260, y: 0, width: 240, height: 100 },
  container: (Story) => <div style={{ padding: 32, background: "var(--paper)" }}><Story /></div>,
};
export const ButtonOutline: TempoStoryboard<typeof Button> = {
  component: Button, name: "Button — outline",
  args: { children: "Share", variant: "outline", size: "md" },
  layout: { x: 520, y: 0, width: 240, height: 100 },
  container: (Story) => <div style={{ padding: 32, background: "var(--paper)" }}><Story /></div>,
};
export const ButtonDestructive: TempoStoryboard<typeof Button> = {
  component: Button, name: "Button — destructive",
  args: { children: "Confirm cancellation", variant: "destructive", size: "md" },
  layout: { x: 780, y: 0, width: 280, height: 100 },
  container: (Story) => <div style={{ padding: 32, background: "var(--paper)" }}><Story /></div>,
};

// Badges
export const BadgeSuccess: TempoStoryboard<typeof Badge> = {
  component: Badge, name: "Badge — confirmed (success)",
  args: { children: "Confirmed", variant: "success" },
  layout: { x: 0, y: 140, width: 200, height: 80 },
  container: (Story) => <div style={{ padding: 24, background: "var(--paper)" }}><Story /></div>,
};
export const BadgeWarning: TempoStoryboard<typeof Badge> = {
  component: Badge, name: "Badge — check-in today (pulsing)",
  args: { children: "Check-in today", variant: "warning", pulse: true },
  layout: { x: 220, y: 140, width: 220, height: 80 },
  container: (Story) => <div style={{ padding: 24, background: "var(--paper)" }}><Story /></div>,
};
export const BadgeAccent: TempoStoryboard<typeof Badge> = {
  component: Badge, name: "Badge — guest favourite",
  args: { children: "Guest favourite", variant: "accent" },
  layout: { x: 460, y: 140, width: 220, height: 80 },
  container: (Story) => <div style={{ padding: 24, background: "var(--paper)" }}><Story /></div>,
};

// Avatar
export const AvatarPhoto: TempoStoryboard<typeof Avatar> = {
  component: Avatar, name: "Avatar — with photo",
  args: { src: LISTINGS[0].host.avatar, alt: LISTINGS[0].host.name, size: "lg" },
  layout: { x: 0, y: 260, width: 140, height: 120 },
  container: (Story) => <div style={{ padding: 32, background: "var(--paper)" }}><Story /></div>,
};
export const AvatarInitials: TempoStoryboard<typeof Avatar> = {
  component: Avatar, name: "Avatar — initials fallback",
  args: { alt: "Tom Chen", size: "lg" },
  layout: { x: 160, y: 260, width: 140, height: 120 },
  container: (Story) => <div style={{ padding: 32, background: "var(--paper)" }}><Story /></div>,
};

// Input
export const InputDefault: TempoStoryboard<typeof Input> = {
  component: Input, name: "Input — default",
  args: { label: "Destination", placeholder: "Search destinations" },
  layout: { x: 0, y: 420, width: 400, height: 120 },
  container: (Story) => <div style={{ padding: 32, background: "var(--paper)" }}><Story /></div>,
};
export const InputError: TempoStoryboard<typeof Input> = {
  component: Input, name: "Input — error state",
  args: { label: "Email", placeholder: "you@example.com", error: "Please enter a valid email" },
  layout: { x: 420, y: 420, width: 400, height: 140 },
  container: (Story) => <div style={{ padding: 32, background: "var(--paper)" }}><Story /></div>,
};

// Rating + Filter
export const RatingDefault: TempoStoryboard<typeof RatingStars> = {
  component: RatingStars, name: "RatingStars — with count",
  args: { rating: 4.97, count: 184 },
  layout: { x: 0, y: 580, width: 280, height: 80 },
  container: (Story) => <div style={{ padding: 24, background: "var(--paper)" }}><Story /></div>,
};
export const FilterChipInactive: TempoStoryboard<typeof FilterChip> = {
  component: FilterChip, name: "FilterChip — inactive",
  args: { label: "Price" },
  layout: { x: 0, y: 680, width: 180, height: 80 },
  container: (Story) => <div style={{ padding: 20, background: "var(--paper)" }}><Story /></div>,
};
export const FilterChipActiveCount: TempoStoryboard<typeof FilterChip> = {
  component: FilterChip, name: "FilterChip — active (count badge)",
  args: { label: "Price", count: 1, active: true },
  layout: { x: 200, y: 680, width: 200, height: 80 },
  container: (Story) => <div style={{ padding: 20, background: "var(--paper)" }}><Story /></div>,
};

// HeartButton
export const HeartDefault: TempoStoryboard<typeof HeartButton> = {
  component: HeartButton, name: "HeartButton — unsaved",
  args: { saved: false, size: "lg" },
  layout: { x: 0, y: 800, width: 120, height: 120 },
  container: (Story) => <div style={{ padding: 32, background: "#888" }}><Story /></div>,
};
export const HeartSavedState: TempoStoryboard<typeof HeartButton> = {
  component: HeartButton, name: "HeartButton — saved (terracotta)",
  args: { saved: true, size: "lg" },
  layout: { x: 140, y: 800, width: 120, height: 120 },
  container: (Story) => <div style={{ padding: 32, background: "#888" }}><Story /></div>,
};

// ListingCard
export const ListingCardDefault: TempoStoryboard<typeof ListingCard> = {
  component: ListingCard, name: "ListingCard — default",
  args: { listing: LISTINGS[0] },
  layout: { x: 0, y: 960, width: 320, height: 460 },
};
export const ListingCardBadge: TempoStoryboard<typeof ListingCard> = {
  component: ListingCard, name: "ListingCard — with badge",
  args: { listing: LISTINGS[1] },
  layout: { x: 340, y: 960, width: 320, height: 460 },
};
export const ListingCardSaved: TempoStoryboard<typeof ListingCard> = {
  component: ListingCard, name: "ListingCard — saved state",
  args: { listing: LISTINGS[4], saved: true },
  layout: { x: 680, y: 960, width: 320, height: 460 },
};

// SearchBar
export const SearchBarFull: TempoStoryboard<typeof SearchBar> = {
  component: SearchBar, name: "SearchBar — full",
  args: {},
  layout: { x: 0, y: 1460, width: 800, height: 120 },
  container: (Story) => <div style={{ padding: 32, background: "var(--paper)" }}><Story /></div>,
};
export const SearchBarCompact: TempoStoryboard<typeof SearchBar> = {
  component: SearchBar, name: "SearchBar — compact (navbar)",
  args: { compact: true, defaultDestination: "Marrakech" },
  layout: { x: 0, y: 1600, width: 400, height: 80 },
  container: (Story) => <div style={{ padding: 24, background: "var(--paper)" }}><Story /></div>,
};

// BookingCard
export const BookingCardConfirmed: TempoStoryboard<typeof BookingCard> = {
  component: BookingCard, name: "BookingCard — confirmed",
  args: { trip: TRIPS[0] },
  layout: { x: 0, y: 1720, width: 480, height: 130 },
};
export const BookingCardCheckIn: TempoStoryboard<typeof BookingCard> = {
  component: BookingCard, name: "BookingCard — check-in today",
  args: { trip: TRIPS[2] },
  layout: { x: 0, y: 1870, width: 480, height: 130 },
};
