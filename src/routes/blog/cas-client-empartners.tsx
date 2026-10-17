import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import CasClientEmpartners from "@/pages/blog/CasClientEmpartners";

export const Route = createFileRoute("/blog/cas-client-empartners")({
  head: () => getContentRouteHead("/blog/cas-client-empartners"),
  component: CasClientEmpartners,
});
