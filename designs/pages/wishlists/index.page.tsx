/**
 * Wishlists canvas
 * Feature is shipped. Issue #7 was a polish pass on the heart animation (Done).
 * Related PRD: demo-assets/prds/discover/03-wishlists.md
 * Related issue: demo-assets/issues/07-wishlist-polish.md (Done)
 */
import type { TempoPage, TempoRouteStoryboard, TempoStoryboard } from "@tempo/types";
import { HeartButton } from "@/design-system/components/HeartButton";

export default { name: "Wishlists" } satisfies TempoPage;

export const WishlistsGrid: TempoRouteStoryboard = {
  route: "/wishlists",
  name: "Wishlists grid — populated",
  layout: { x: 0, y: 0, width: 1280, height: 900 },
};
export const WishlistsEmpty: TempoRouteStoryboard = {
  route: "/wishlists",
  name: "Wishlists grid — empty state",
  layout: { x: 1320, y: 0, width: 1280, height: 600 },
};
export const HeartUnsaved: TempoStoryboard<typeof HeartButton> = {
  component: HeartButton, name: "HeartButton — unsaved",
  args: { saved: false, size: "lg" },
  layout: { x: 0, y: 940, width: 120, height: 120 },
  container: (Story) => <div style={{ padding: 40, background: "#888", borderRadius: 16 }}><Story /></div>,
};
export const HeartSaved: TempoStoryboard<typeof HeartButton> = {
  component: HeartButton, name: "HeartButton — saved (terracotta fill + spring)",
  args: { saved: true, size: "lg" },
  layout: { x: 140, y: 940, width: 120, height: 120 },
  container: (Story) => <div style={{ padding: 40, background: "#888", borderRadius: 16 }}><Story /></div>,
};
export const HeartOnDark: TempoStoryboard<typeof HeartButton> = {
  component: HeartButton, name: "HeartButton — on dark bg",
  args: { saved: false, size: "lg" },
  layout: { x: 280, y: 940, width: 120, height: 120 },
  container: (Story) => <div style={{ padding: 40, background: "var(--ink)", borderRadius: 16 }}><Story /></div>,
};
