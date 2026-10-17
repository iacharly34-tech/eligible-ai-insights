import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import ReferencementLocalExpertComptable from "@/pages/blog/ReferencementLocalExpertComptable";

export const Route = createFileRoute("/blog/referencement-local-expert-comptable")({
  head: () => getContentRouteHead("/blog/referencement-local-expert-comptable"),
  component: ReferencementLocalExpertComptable,
});
