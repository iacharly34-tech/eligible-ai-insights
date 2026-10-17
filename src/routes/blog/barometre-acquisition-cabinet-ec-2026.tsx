import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import BarometreAcquisitionCabinet from "@/pages/blog/BarometreAcquisitionCabinet";

export const Route = createFileRoute("/blog/barometre-acquisition-cabinet-ec-2026")({
  head: () => getContentRouteHead("/blog/barometre-acquisition-cabinet-ec-2026"),
  component: BarometreAcquisitionCabinet,
});
