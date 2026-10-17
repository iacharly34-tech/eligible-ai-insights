import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import CanauxActivation from "@/pages/cabinet/CanauxActivation";

export const Route = createFileRoute("/canaux-activation")({
  head: () => getContentRouteHead("/canaux-activation"),
  component: CanauxActivation,
});
