import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import MentionsLegales from "@/pages/MentionsLegales";

export const Route = createFileRoute("/mentions-legales")({
  head: () => getContentRouteHead("/mentions-legales"),
  component: MentionsLegales,
});
