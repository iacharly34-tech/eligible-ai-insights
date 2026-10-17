import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import NewsletterConfig from "@/pages/NewsletterConfig";

export const Route = createFileRoute("/newsletter-config")({
  head: () => getContentRouteHead("/newsletter-config"),
  component: NewsletterConfig,
});
