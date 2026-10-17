import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import VerticaleRestaurationChr from "@/pages/verticales/VerticaleRestaurationChr";

export const Route = createFileRoute("/verticales/restauration-chr")({
  head: () => getContentRouteHead("/verticales/restauration-chr"),
  component: VerticaleRestaurationChr,
});
