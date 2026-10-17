import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import SiteWebExpertComptable from "@/pages/blog/SiteWebExpertComptable";

export const Route = createFileRoute("/blog/creer-site-web-expert-comptable-guide")({
  head: () => getContentRouteHead("/blog/creer-site-web-expert-comptable-guide"),
  component: SiteWebExpertComptable,
});
