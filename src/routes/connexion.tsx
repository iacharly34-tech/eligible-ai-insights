import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import Connexion from "@/pages/Connexion";

export const Route = createFileRoute("/connexion")({
  head: () => getContentRouteHead("/connexion"),
  component: Connexion,
});
