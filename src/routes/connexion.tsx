import { createFileRoute } from "@tanstack/react-router";
import Connexion from "@/pages/Connexion";

export const Route = createFileRoute("/connexion")({
  component: Connexion,
});
