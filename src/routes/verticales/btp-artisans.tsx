import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import VerticaleBtpArtisans from "@/pages/verticales/VerticaleBtpArtisans";

export const Route = createFileRoute("/verticales/btp-artisans")({
  head: () => getContentRouteHead("/verticales/btp-artisans"),
  component: VerticaleBtpArtisans,
});
