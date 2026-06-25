// @tempo-home — Tempo home canvas (the workspace Run button opens this). Managed marker; do not remove.
import type { TempoPage, TempoStoryboard, TempoRouteStoryboard } from 'tempo-sdk';

const page: TempoPage = {
  name: "Home",
};

export default page;

export const Home: TempoRouteStoryboard = {
  route: "/",
  layout: { x: 0, y: 0, width: 600, height: 400 },
};
