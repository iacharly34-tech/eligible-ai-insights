import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import GuideDemarchageClientCabinet from "@/pages/blog/GuideDemarchageClientCabinet";

export const Route = createFileRoute("/blog/guide-demarchage-client-expert-comptable")({
  head: () => getContentRouteHead("/blog/guide-demarchage-client-expert-comptable"),
  component: GuideDemarchageClientCabinet,
});
