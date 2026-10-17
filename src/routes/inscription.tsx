import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import Demo from "@/pages/Demo";

export const Route = createFileRoute("/inscription")({
  head: () => getContentRouteHead("/inscription"),
  component: Demo,
});
