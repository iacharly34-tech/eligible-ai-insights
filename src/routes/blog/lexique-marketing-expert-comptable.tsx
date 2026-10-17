import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import LexiqueMarketingExpertComptable from "@/pages/blog/LexiqueMarketingExpertComptable";

export const Route = createFileRoute("/blog/lexique-marketing-expert-comptable")({
  head: () => getContentRouteHead("/blog/lexique-marketing-expert-comptable"),
  component: LexiqueMarketingExpertComptable,
});
