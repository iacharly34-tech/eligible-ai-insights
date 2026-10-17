import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import CasUsageFullRemote from "@/pages/cabinet/CasUsageFullRemote";

export const Route = createFileRoute("/cabinet/cas-usage/cabinet-full-remote-startups-ecommerce")({
  head: () => getContentRouteHead("/cabinet/cas-usage/cabinet-full-remote-startups-ecommerce"),
  component: CasUsageFullRemote,
});
