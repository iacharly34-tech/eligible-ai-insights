import { createFileRoute } from "@tanstack/react-router";
import CGU from "@/pages/CGU";

export const Route = createFileRoute("/cgu")({
  component: CGU,
});
