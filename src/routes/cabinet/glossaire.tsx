import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import Glossaire from "@/pages/cabinet/Glossaire";

export const Route = createFileRoute("/cabinet/glossaire")({
  head: () => getContentRouteHead("/cabinet/glossaire"),
  component: Glossaire,
});
