import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import CasUsage8Collaborateurs from "@/pages/cabinet/CasUsage8Collaborateurs";

export const Route = createFileRoute("/cabinet/cas-usage/cabinet-8-collaborateurs-departement")({
  head: () => getContentRouteHead("/cabinet/cas-usage/cabinet-8-collaborateurs-departement"),
  component: CasUsage8Collaborateurs,
});
