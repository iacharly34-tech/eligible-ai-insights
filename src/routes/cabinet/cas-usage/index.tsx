import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import CasUsageIndex from "@/pages/cabinet/CasUsageIndex";

export const Route = createFileRoute("/cabinet/cas-usage/")({
  head: () => getContentRouteHead("/cabinet/cas-usage/"),
  component: CasUsageIndex,
});
