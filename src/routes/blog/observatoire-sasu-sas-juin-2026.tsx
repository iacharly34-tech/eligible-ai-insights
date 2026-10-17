import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import ObservatoireSasuSas from "@/pages/blog/ObservatoireSasuSas";

export const Route = createFileRoute("/blog/observatoire-sasu-sas-juin-2026")({
  head: () => getContentRouteHead("/blog/observatoire-sasu-sas-juin-2026"),
  component: ObservatoireSasuSas,
});
