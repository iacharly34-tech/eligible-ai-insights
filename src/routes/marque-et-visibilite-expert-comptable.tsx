import { createFileRoute } from "@tanstack/react-router";
import MarqueVisibiliteHub from "@/pages/cabinet/MarqueVisibiliteHub";

export const Route = createFileRoute("/marque-et-visibilite-expert-comptable")({
  component: MarqueVisibiliteHub,
});
