import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import Ressources from "@/pages/Ressources";

export const Route = createFileRoute("/ressources")({
  head: () => getContentRouteHead("/ressources"),
  component: Ressources,
});
