import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import VerticaleEcommerce from "@/pages/verticales/VerticaleEcommerce";

export const Route = createFileRoute("/verticales/e-commerce")({
  head: () => getContentRouteHead("/verticales/e-commerce"),
  component: VerticaleEcommerce,
});
