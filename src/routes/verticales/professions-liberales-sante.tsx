import { createFileRoute } from "@tanstack/react-router";
import VerticaleProfessionsLiberalesSante from "@/pages/verticales/VerticaleProfessionsLiberalesSante";

export const Route = createFileRoute("/verticales/professions-liberales-sante")({
  component: VerticaleProfessionsLiberalesSante,
});
