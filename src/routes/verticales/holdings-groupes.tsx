import { createFileRoute } from "@tanstack/react-router";
import VerticaleHoldingsGroupes from "@/pages/verticales/VerticaleHoldingsGroupes";

export const Route = createFileRoute("/verticales/holdings-groupes")({
  component: VerticaleHoldingsGroupes,
});
