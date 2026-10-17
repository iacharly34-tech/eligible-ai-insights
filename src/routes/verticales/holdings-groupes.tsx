import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import VerticaleHoldingsGroupes from "@/pages/verticales/VerticaleHoldingsGroupes";

export const Route = createFileRoute("/verticales/holdings-groupes")({
  head: () => getContentRouteHead("/verticales/holdings-groupes"),
  component: VerticaleHoldingsGroupes,
});
