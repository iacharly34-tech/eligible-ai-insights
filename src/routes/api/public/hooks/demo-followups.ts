import { createFileRoute } from "@tanstack/react-router";
import { followupDue } from "@/lib/demo-booking";

// Daily job: sends J+2 and J+5 reminders (with booking link) to demo requesters
// who have not booked a meeting yet. Caller must present the server-only job
// secret stored in internal_job_secrets (never exposed to browsers).
export const Route = createFileRoute("/api/public/hooks/demo-followups")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const token = (request.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
        const { supabaseAdmin: db } = await import("@/integrations/supabase/client.server");
        const { data: sec } = await db.from("internal_job_secrets").select("secret").eq("name", "demo_followups").maybeSingle();
        if (!token || !sec?.secret || token !== sec.secret) return new Response("Unauthorized", { status: 401 });

        const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
        const now = new Date();
        const since = new Date(now.getTime() - 30 * 86400000).toISOString();
        const { data: rows } = await db.from("demo_requests")
          .select("id, full_name, company, email, booking_token, created_at, statut, followup_count, rdv_at")
          .in("statut", ["nouveau", "relance"]).is("rdv_at", null).lt("followup_count", 2).gte("created_at", since);

        let sent = 0;
        for (const r of rows ?? []) {
          const step = followupDue(r, now);
          if (!step) continue;
          try {
            const res = await sendTemplateEmail("demo-followup", r.email, {
              templateData: { fullName: r.full_name.split(" ")[0], company: r.company, bookingUrl: `https://eligibly.ai/rdv/${r.booking_token}`, step },
              idempotencyKey: `demo-followup-${r.id}-${step}`,
              replyTo: "contact@eligibly.ai",
            });
            await db.from("demo_requests").update({ followup_count: step, last_followup_at: now.toISOString(), statut: "relance" }).eq("id", r.id);
            if (res.sent) sent++;
          } catch (e) {
            console.error("followup failed", r.id, e);
          }
        }
        return Response.json({ ok: true, sent });
      },
    },
  },
});
