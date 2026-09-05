import { createFileRoute } from "@tanstack/react-router";
import ProspectionCabinetComptable from "@/pages/cabinet/ProspectionCabinetComptable";

export const Route = createFileRoute("/prospection-cabinet-comptable")({
  component: ProspectionCabinetComptable,
});
