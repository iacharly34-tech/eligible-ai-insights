import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import ModerniserCabinetIA from "@/pages/blog/ModerniserCabinetIA";

export const Route = createFileRoute("/blog/moderniser-cabinet-expertise-comptable-ia")({
  head: () => getContentRouteHead("/blog/moderniser-cabinet-expertise-comptable-ia"),
  component: ModerniserCabinetIA,
});
