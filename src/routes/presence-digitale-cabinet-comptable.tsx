import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import PresenceDigitaleCabinetComptable from "@/pages/cabinet/PresenceDigitaleCabinetComptable";

export const Route = createFileRoute("/presence-digitale-cabinet-comptable")({
  head: () => getContentRouteHead("/presence-digitale-cabinet-comptable"),
  component: PresenceDigitaleCabinetComptable,
});
