import { createFileRoute } from "@tanstack/react-router";
import WaitlistSuccess from "@/pages/WaitlistSuccess";

export const Route = createFileRoute("/waitlist/success")({
  component: WaitlistSuccess,
});
