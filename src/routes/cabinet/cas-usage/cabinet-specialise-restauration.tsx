import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import CasUsageRestauration from "@/pages/cabinet/CasUsageRestauration";

export const Route = createFileRoute("/cabinet/cas-usage/cabinet-specialise-restauration")({
  head: () => getContentRouteHead("/cabinet/cas-usage/cabinet-specialise-restauration"),
  component: CasUsageRestauration,
});
