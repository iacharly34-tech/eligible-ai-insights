import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import Produit from "@/pages/Produit";

export const Route = createFileRoute("/produit")({
  head: () => getContentRouteHead("/produit"),
  component: Produit,
});
