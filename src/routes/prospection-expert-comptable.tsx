import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import ProspectionExpertComptable from "@/pages/cabinet/ProspectionExpertComptable";

export const Route = createFileRoute("/prospection-expert-comptable")({
  head: () => getContentRouteHead("/prospection-expert-comptable"),
  component: ProspectionExpertComptable,
});
