import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import APropos from "@/pages/APropos";

export const Route = createFileRoute("/a-propos")({
  head: () => getContentRouteHead("/a-propos"),
  component: APropos,
});
