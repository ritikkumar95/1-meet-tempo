/**
 * Messaging canvas — design is AHEAD of the PRD here.
 * This is a "design first, spec WIP" workflow example.
 * Related PRD (draft): demo-assets/prds/trips/02-messaging.md
 * Related issue: demo-assets/issues/06-inbox-refresh.md (In Design)
 */
import type { TempoPage, TempoRouteStoryboard } from "@tempo/types";

export default { name: "Messaging" } satisfies TempoPage;

export const InboxUnread: TempoRouteStoryboard = {
  route: "/messages",
  name: "Inbox — with unread messages",
  layout: { x: 0, y: 0, width: 1200, height: 800 },
};
export const InboxAllRead: TempoRouteStoryboard = {
  route: "/messages",
  name: "Inbox — all read",
  layout: { x: 1240, y: 0, width: 1200, height: 800 },
};
export const InboxMobile: TempoRouteStoryboard = {
  route: "/messages",
  name: "Inbox — mobile 375px",
  layout: { x: 0, y: 840, width: 375, height: 812 },
};
export const ThreadView: TempoRouteStoryboard = {
  route: "/messages",
  name: "Thread — conversation view",
  layout: { x: 400, y: 840, width: 1200, height: 800 },
};
export const ThreadMobile: TempoRouteStoryboard = {
  route: "/messages",
  name: "Thread — mobile 375px",
  layout: { x: 1640, y: 840, width: 375, height: 812 },
};
