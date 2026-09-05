import { createFileRoute } from "@tanstack/react-router";
import VisibiliteExpertComptable from "@/pages/cabinet/VisibiliteExpertComptable";

export const Route = createFileRoute("/visibilite-expert-comptable")({
  component: VisibiliteExpertComptable,
});
