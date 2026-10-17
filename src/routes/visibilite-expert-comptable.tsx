import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import VisibiliteExpertComptable from "@/pages/cabinet/VisibiliteExpertComptable";

export const Route = createFileRoute("/visibilite-expert-comptable")({
  head: () => getContentRouteHead("/visibilite-expert-comptable"),
  component: VisibiliteExpertComptable,
});
