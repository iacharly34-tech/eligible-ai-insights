import { createFileRoute } from "@tanstack/react-router";
import VerticaleEcommerce from "@/pages/verticales/VerticaleEcommerce";

export const Route = createFileRoute("/verticales/e-commerce")({
  component: VerticaleEcommerce,
});
