import { createFileRoute } from "@tanstack/react-router";
import Glossaire from "@/pages/cabinet/Glossaire";

export const Route = createFileRoute("/cabinet/glossaire")({
  component: Glossaire,
});
