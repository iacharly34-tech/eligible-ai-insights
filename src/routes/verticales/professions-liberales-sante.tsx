import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import VerticaleProfessionsLiberalesSante from "@/pages/verticales/VerticaleProfessionsLiberalesSante";

export const Route = createFileRoute("/verticales/professions-liberales-sante")({
  head: () => getContentRouteHead("/verticales/professions-liberales-sante"),
  component: VerticaleProfessionsLiberalesSante,
});
