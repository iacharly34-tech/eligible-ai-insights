import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import Demo from "@/pages/Demo";

export const Route = createFileRoute("/demo")({
  head: () => getContentRouteHead("/demo"),
  component: Demo,
});
