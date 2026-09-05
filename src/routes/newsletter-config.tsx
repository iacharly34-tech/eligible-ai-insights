import { createFileRoute } from "@tanstack/react-router";
import NewsletterConfig from "@/pages/NewsletterConfig";

export const Route = createFileRoute("/newsletter-config")({
  component: NewsletterConfig,
});
