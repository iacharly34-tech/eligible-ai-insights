import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import ChurnCabinetExpertiseComptable from "@/pages/blog/ChurnCabinetExpertiseComptable";

export const Route = createFileRoute("/blog/churn-cabinet-expertise-comptable")({
  head: () => getContentRouteHead("/blog/churn-cabinet-expertise-comptable"),
  component: ChurnCabinetExpertiseComptable,
});
