import { createFileRoute } from "@tanstack/react-router";
import PresenceDigitaleCabinetComptable from "@/pages/cabinet/PresenceDigitaleCabinetComptable";

export const Route = createFileRoute("/presence-digitale-cabinet-comptable")({
  component: PresenceDigitaleCabinetComptable,
});
