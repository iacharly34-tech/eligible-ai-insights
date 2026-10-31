import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/diagnostic-visibilite-ia")({
  server: { handlers: { POST: async ({ request }) => {
    const { handleVisibilityAudit } = await import("@/lib/ai-visibility/audit.server");
    return handleVisibilityAudit(request, {
      key: process.env["LOVABLE_API_KEY"], url: process.env["SUPABASE_URL"],
      publishableKey: process.env["SUPABASE_PUBLISHABLE_KEY"],
    });
  } } },
});