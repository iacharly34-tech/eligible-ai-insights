import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import MarketingCabinetComptable from "@/pages/cabinet/MarketingCabinetComptable";

export const Route = createFileRoute("/marketing-cabinet-comptable")({
  head: () => getContentRouteHead("/marketing-cabinet-comptable"),
  component: MarketingCabinetComptable,
});
