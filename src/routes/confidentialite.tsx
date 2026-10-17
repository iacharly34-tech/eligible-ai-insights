import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import Confidentialite from "@/pages/Confidentialite";

export const Route = createFileRoute("/confidentialite")({
  head: () => getContentRouteHead("/confidentialite"),
  component: Confidentialite,
});
