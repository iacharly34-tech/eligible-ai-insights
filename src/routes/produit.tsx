import { createFileRoute } from "@tanstack/react-router";
import Produit from "@/pages/Produit";

export const Route = createFileRoute("/produit")({
  component: Produit,
});
