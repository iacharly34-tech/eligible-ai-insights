import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import Newsletter from "@/pages/Newsletter";

export const Route = createFileRoute("/newsletter")({
  head: () => getContentRouteHead("/newsletter"),
  component: Newsletter,
});
