import { createFileRoute } from "@tanstack/react-router";
import { timingSafeEqual } from "crypto";
import { batchSchema, leadV1Schema } from "@/lib/lead-v1";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

function authorized(request: Request): boolean {
  const expected = process.env["PIPELINE_INGEST_KEY"];
  const header = request.headers.get("authorization") ?? "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!expected || !token) return false;
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export const Route = createFileRoute("/api/public/pipeline/leads")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (!authorized(request)) return json({ error: "unauthorized" }, 401);

        let raw: unknown;
        try { raw = await request.json(); } catch { return json({ error: "invalid_json" }, 400); }
        const batch = batchSchema.safeParse(raw);
        if (!batch.success) return json({ error: "invalid_batch", details: batch.error.issues.slice(0, 10) }, 400);

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        let inseres = 0, mis_a_jour = 0, supprimes = 0;
        const rejets: { index: number; siren?: string; erreur: string }[] = [];

        // Suppressions d'abord (opposition, droit à l'oubli, purge).
        if (batch.data.suppressions.length) {
          const { data, error } = await supabaseAdmin.from("leads").delete().in("siren", batch.data.suppressions).select("siren");
          if (error) return json({ error: "suppression_failed" }, 500);
          supprimes += data?.length ?? 0;
        }

        for (let i = 0; i < batch.data.leads.length; i++) {
          const parsed = leadV1Schema.safeParse(batch.data.leads[i]);
          if (!parsed.success) {
            rejets.push({ index: i, siren: (batch.data.leads[i] as any)?.siren, erreur: parsed.error.issues[0]?.message ?? "invalide" });
            continue;
          }
          const l = parsed.data;
          const { _exemple, ...payload } = l as any;
          const fields = {
            verticale: l.verticale,
            departement: l.siege.departement,
            niveau: l.priorite.niveau,
            score: l.priorite.score,
            denomination: l.societe.denomination,
            date_creation: l.societe.date_creation ?? null,
            detecte_le: l.conformite.detecte_le.slice(0, 10),
            a_supprimer_le: l.conformite.a_supprimer_le.slice(0, 10),
            opposition_rne: Boolean(l.conformite.opposition_commerciale_rne),
            payload,
            updated_at: new Date().toISOString(),
          };
          const { data: existing } = await supabaseAdmin.from("leads").select("siren").eq("siren", l.siren).maybeSingle();
          if (existing) {
            // Mise à jour : le cabinet attributaire n'est jamais modifié.
            const { error } = await supabaseAdmin.from("leads").update(fields).eq("siren", l.siren);
            if (error) rejets.push({ index: i, siren: l.siren, erreur: "update_failed" }); else mis_a_jour++;
          } else {
            const { data: cab } = await supabaseAdmin.rpc("assign_lead_cabinet", { _departement: fields.departement, _verticale: fields.verticale });
            const cabinet_id = (cab as string | null) ?? null;
            const { error } = await supabaseAdmin.from("leads").insert({
              siren: l.siren, ...fields, cabinet_id, assigned_at: cabinet_id ? new Date().toISOString() : null,
            });
            if (error) rejets.push({ index: i, siren: l.siren, erreur: "insert_failed" }); else inseres++;
          }
        }

        const { data: purged } = await supabaseAdmin.rpc("purge_expired_leads");
        supprimes += (purged as number | null) ?? 0;

        await supabaseAdmin.from("pipeline_runs").insert({
          genere_le: batch.data.genere_le ?? null, recus: batch.data.leads.length, inseres, mis_a_jour, supprimes,
        });

        return json({ recus: batch.data.leads.length, inseres, mis_a_jour, supprimes, rejets });
      },
    },
  },
});
