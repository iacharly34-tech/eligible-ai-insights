import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import SimulateurIACabinet from "@/pages/SimulateurIACabinet";

export const Route = createFileRoute("/simulateur-roi-ia-cabinet")({
  head: () => getContentRouteHead("/simulateur-roi-ia-cabinet"),
  component: SimulateurIACabinet,
});
