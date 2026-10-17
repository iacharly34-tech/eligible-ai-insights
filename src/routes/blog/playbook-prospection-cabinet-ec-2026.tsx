import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import PlaybookProspectionCabinet from "@/pages/blog/PlaybookProspectionCabinet";

export const Route = createFileRoute("/blog/playbook-prospection-cabinet-ec-2026")({
  head: () => getContentRouteHead("/blog/playbook-prospection-cabinet-ec-2026"),
  component: PlaybookProspectionCabinet,
});
