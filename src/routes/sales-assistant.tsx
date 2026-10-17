import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import SalesAssistant from "@/pages/SalesAssistant";

export const Route = createFileRoute("/sales-assistant")({
  head: () => getContentRouteHead("/sales-assistant"),
  component: SalesAssistant,
});
