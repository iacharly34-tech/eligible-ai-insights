import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import CreationsEntreprises2025 from "@/pages/blog/CreationsEntreprises2025";

export const Route = createFileRoute("/blog/creations-entreprises-france-2025")({
  head: () => getContentRouteHead("/blog/creations-entreprises-france-2025"),
  component: CreationsEntreprises2025,
});
