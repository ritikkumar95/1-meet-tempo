/**
 * Listing detail canvas
 * Related PRD: demo-assets/prds/book/01-listing-detail.md
 * Related PRD: demo-assets/prds/book/02-booking-widget.md
 * Related PRD: demo-assets/prds/book/03-reviews-on-listing.md
 * Related issue: demo-assets/issues/04-booking-modal.md (In Review)
 */
import type { TempoPage, TempoRouteStoryboard } from "@tempo/types";

export default { name: "Listing detail" } satisfies TempoPage;

export const ListingAboveFold: TempoRouteStoryboard = {
  route: "/listing/lst-001",
  name: "Listing — above the fold (hero + title + price)",
  layout: { x: 0, y: 0, width: 1440, height: 900 },
};
export const ListingFullPage: TempoRouteStoryboard = {
  route: "/listing/lst-001",
  name: "Listing — full scroll (all sections)",
  layout: { x: 1480, y: 0, width: 1440, height: 2200 },
};
export const ListingRareFind: TempoRouteStoryboard = {
  route: "/listing/lst-002",
  name: "Listing — Rare find badge",
  layout: { x: 0, y: 940, width: 1440, height: 900 },
};
export const ListingMobile: TempoRouteStoryboard = {
  route: "/listing/lst-003",
  name: "Listing — mobile 375px (bottom bar)",
  layout: { x: 1480, y: 940, width: 375, height: 812 },
};
export const BookingConfirmModal: TempoRouteStoryboard = {
  route: "/listing/lst-001",
  name: "Booking confirmation modal — default (Issue #4)",
  layout: { x: 0, y: 1920, width: 1440, height: 900 },
};
