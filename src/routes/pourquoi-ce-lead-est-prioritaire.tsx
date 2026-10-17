import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import PourquoiCeLeadEstPrioritaire from "@/pages/cabinet/PourquoiCeLeadEstPrioritaire";

export const Route = createFileRoute("/pourquoi-ce-lead-est-prioritaire")({
  head: () => getContentRouteHead("/pourquoi-ce-lead-est-prioritaire"),
  component: PourquoiCeLeadEstPrioritaire,
});
