import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import VerticaleSasuTech from "@/pages/verticales/VerticaleSasuTech";

export const Route = createFileRoute("/verticales/sasu-tech")({
  head: () => getContentRouteHead("/verticales/sasu-tech"),
  component: VerticaleSasuTech,
});
