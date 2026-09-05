import { createFileRoute } from "@tanstack/react-router";
import Solutions from "@/pages/Solutions";

export const Route = createFileRoute("/solutions")({
  component: Solutions,
});
