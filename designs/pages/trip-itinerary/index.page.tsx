/**
 * Trip itinerary canvas
 * Includes cancellation flow frames — flow launches from itinerary.
 * Related PRD: demo-assets/prds/trips/01-trip-itinerary.md
 * Related PRD: demo-assets/prds/trips/03-cancellation-flow.md
 * Related issue: demo-assets/issues/08-itinerary-bug.md (Bug — mobile overflow)
 */
import type { TempoPage, TempoRouteStoryboard, TempoStoryboard } from "@tempo/types";
import { BookingCard } from "@/design-system/components/BookingCard";
import { TRIPS } from "@/data/trips";

export default { name: "Trip itinerary" } satisfies TempoPage;

export const TripsList: TempoRouteStoryboard = {
  route: "/trips",
  name: "Trips list — upcoming",
  layout: { x: 0, y: 0, width: 700, height: 900 },
};
export const TripsListMobile: TempoRouteStoryboard = {
  route: "/trips",
  name: "Trips list — mobile 375px ← Bug #8 here",
  layout: { x: 740, y: 0, width: 375, height: 812 },
};
export const BookingCardConfirmed: TempoStoryboard<typeof BookingCard> = {
  component: BookingCard, name: "BookingCard — confirmed",
  args: { trip: TRIPS[0] },
  layout: { x: 0, y: 940, width: 560, height: 130 },
};
export const BookingCardCheckInToday: TempoStoryboard<typeof BookingCard> = {
  component: BookingCard, name: "BookingCard — check-in today (pulsing)",
  args: { trip: TRIPS[2] },
  layout: { x: 0, y: 1090, width: 560, height: 130 },
};
export const BookingCardCompleted: TempoStoryboard<typeof BookingCard> = {
  component: BookingCard, name: "BookingCard — completed",
  args: { trip: TRIPS[3] },
  layout: { x: 0, y: 1240, width: 560, height: 130 },
};
export const TripDetailFull: TempoRouteStoryboard = {
  route: "/trips/trp-001",
  name: "Itinerary — full (all sections)",
  layout: { x: 0, y: 1400, width: 700, height: 1200 },
};
export const TripDetailCheckIn: TempoRouteStoryboard = {
  route: "/trips/trp-003",
  name: "Itinerary — check-in today (banner + amber badge)",
  layout: { x: 740, y: 1400, width: 700, height: 900 },
};
export const TripDetailPast: TempoRouteStoryboard = {
  route: "/trips/trp-004",
  name: "Itinerary — past trip (no cancel link)",
  layout: { x: 0, y: 2640, width: 700, height: 900 },
};
export const TripDetailMobile: TempoRouteStoryboard = {
  route: "/trips/trp-001",
  name: "Itinerary — mobile 375px ← Bug #8: check cancel tap target",
  layout: { x: 740, y: 2640, width: 375, height: 812 },
};
export const CancellationStep1Full: TempoRouteStoryboard = {
  route: "/trips/trp-001",
  name: "Cancellation — step 1 (full refund)",
  layout: { x: 0, y: 3580, width: 700, height: 900 },
};
export const CancellationStep1Strict: TempoRouteStoryboard = {
  route: "/trips/trp-002",
  name: "Cancellation — step 1 (strict — no refund)",
  layout: { x: 740, y: 3580, width: 700, height: 900 },
};
