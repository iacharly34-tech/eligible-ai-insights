import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import CGU from "@/pages/CGU";

export const Route = createFileRoute("/cgu")({
  head: () => getContentRouteHead("/cgu"),
  component: CGU,
});
