import { createFileRoute } from "@tanstack/react-router";
import FichierSiretVsPlanAction from "@/pages/blog/FichierSiretVsPlanAction";

export const Route = createFileRoute("/blog/fichier-siret-vs-plan-action-comptable")({
  component: FichierSiretVsPlanAction,
});
