import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import FacturationElectroniqueCabinet from "@/pages/blog/FacturationElectroniqueCabinet";

export const Route = createFileRoute("/blog/facturation-electronique-cabinet-expertise-comptable")({
  head: () => getContentRouteHead("/blog/facturation-electronique-cabinet-expertise-comptable"),
  component: FacturationElectroniqueCabinet,
});
