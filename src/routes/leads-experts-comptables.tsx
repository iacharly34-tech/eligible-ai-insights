import { createFileRoute } from "@tanstack/react-router";
import LeadsExpertsComptables from "@/pages/cabinet/LeadsExpertsComptables";

export const Route = createFileRoute("/leads-experts-comptables")({
  component: LeadsExpertsComptables,
});
