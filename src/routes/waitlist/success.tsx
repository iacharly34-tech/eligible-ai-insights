import { getContentRouteHead } from "@/lib/seo-route-head";
import { createFileRoute } from "@tanstack/react-router";
import WaitlistSuccess from "@/pages/WaitlistSuccess";

export const Route = createFileRoute("/waitlist/success")({
  head: () => getContentRouteHead("/waitlist/success"),
  component: WaitlistSuccess,
});
