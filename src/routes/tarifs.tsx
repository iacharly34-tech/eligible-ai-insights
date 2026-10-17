import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import Tarifs from "@/pages/Tarifs";

export const Route = createFileRoute("/tarifs")({
  head: () => getContentRouteHead("/tarifs"),
  component: Tarifs,
});
