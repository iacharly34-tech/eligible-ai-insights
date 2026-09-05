import { createFileRoute } from "@tanstack/react-router";
import SalesAssistant from "@/pages/SalesAssistant";

export const Route = createFileRoute("/sales-assistant")({
  component: SalesAssistant,
});
