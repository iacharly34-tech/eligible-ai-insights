import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import LeadsExpertsComptables from "@/pages/cabinet/LeadsExpertsComptables";

export const Route = createFileRoute("/leads-experts-comptables")({
  head: () => getContentRouteHead("/leads-experts-comptables"),
  component: LeadsExpertsComptables,
});
