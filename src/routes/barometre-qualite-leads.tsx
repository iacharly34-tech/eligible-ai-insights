import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import BarometreQualiteLeads from "@/pages/cabinet/BarometreQualiteLeads";

export const Route = createFileRoute("/barometre-qualite-leads")({
  head: () => getContentRouteHead("/barometre-qualite-leads"),
  component: BarometreQualiteLeads,
});
