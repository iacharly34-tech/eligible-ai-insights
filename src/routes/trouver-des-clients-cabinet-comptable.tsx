import { createFileRoute } from "@tanstack/react-router";
import TrouverClientsCabinetComptable from "@/pages/cabinet/TrouverClientsCabinetComptable";

export const Route = createFileRoute("/trouver-des-clients-cabinet-comptable")({
  component: TrouverClientsCabinetComptable,
});
