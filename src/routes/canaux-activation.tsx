import { createFileRoute } from "@tanstack/react-router";
import CanauxActivation from "@/pages/cabinet/CanauxActivation";

export const Route = createFileRoute("/canaux-activation")({
  component: CanauxActivation,
});
