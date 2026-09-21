import { createFileRoute } from "@tanstack/react-router";
import ConseilReferencementExpertComptable from "@/pages/cabinet/ConseilReferencementExpertComptable";

export const Route = createFileRoute("/conseil-referencement-expert-comptable")({
  component: ConseilReferencementExpertComptable,
});
