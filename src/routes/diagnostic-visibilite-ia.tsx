import { createFileRoute } from "@tanstack/react-router";
import { getContentRouteHead } from "@/lib/seo-route-head";
import { AIVisibilityDiagnostic } from "@/components/AIVisibilityDiagnostic";

export const Route = createFileRoute("/diagnostic-visibilite-ia")({
  head: () => getContentRouteHead("/diagnostic-visibilite-ia"),
  component: AIVisibilityDiagnostic,
});