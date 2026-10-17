import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import CinqLeviersCroissanceCabinet from "@/pages/blog/CinqLeviersCroissanceCabinet";

export const Route = createFileRoute("/blog/5-leviers-croissance-cabinet-expertise-comptable")({
  head: () => getContentRouteHead("/blog/5-leviers-croissance-cabinet-expertise-comptable"),
  component: CinqLeviersCroissanceCabinet,
});
