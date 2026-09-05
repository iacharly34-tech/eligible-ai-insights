import { createFileRoute } from "@tanstack/react-router";
import Ressources from "@/pages/Ressources";

export const Route = createFileRoute("/ressources")({
  component: Ressources,
});
