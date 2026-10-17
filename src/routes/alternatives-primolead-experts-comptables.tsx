import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import AlternativesPrimolead from "@/pages/cabinet/AlternativesPrimolead";

export const Route = createFileRoute("/alternatives-primolead-experts-comptables")({
  head: () => getContentRouteHead("/alternatives-primolead-experts-comptables"),
  component: AlternativesPrimolead,
});
