import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import Solutions from "@/pages/Solutions";

export const Route = createFileRoute("/solutions")({
  head: () => getContentRouteHead("/solutions"),
  component: Solutions,
});
