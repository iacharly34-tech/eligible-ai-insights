import { createFileRoute } from "@tanstack/react-router";
import VerticaleBtpArtisans from "@/pages/verticales/VerticaleBtpArtisans";

export const Route = createFileRoute("/verticales/btp-artisans")({
  component: VerticaleBtpArtisans,
});
