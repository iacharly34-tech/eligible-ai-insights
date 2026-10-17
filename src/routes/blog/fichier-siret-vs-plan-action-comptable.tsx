import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import FichierSiretVsPlanAction from "@/pages/blog/FichierSiretVsPlanAction";

export const Route = createFileRoute("/blog/fichier-siret-vs-plan-action-comptable")({
  head: () => getContentRouteHead("/blog/fichier-siret-vs-plan-action-comptable"),
  component: FichierSiretVsPlanAction,
});
