import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

async function assertAdmin(context: { supabase: any; userId: string }) {
  const { data } = await context.supabase.rpc("has_role", { _user_id: context.userId, _role: "admin" });
  if (!data) throw new Response("Forbidden", { status: 403 });
}

export const adminOverview = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const s = context.supabase;
    const [cab, zones, members, unassigned, runs] = await Promise.all([
      s.from("cabinets").select("id, nom, actif, created_at").order("created_at"),
      s.from("cabinet_zones").select("id, cabinet_id, departement, verticale, last_assigned_at"),
      s.from("cabinet_members").select("user_id, cabinet_id, email"),
      s.from("leads").select("siren, denomination, verticale, departement, niveau, score, detecte_le, opposition_rne").is("cabinet_id", null).order("detecte_le", { ascending: false }).limit(200),
      s.from("pipeline_runs").select("*").order("at", { ascending: false }).limit(10),
    ]);
    return {
      cabinets: cab.data ?? [], zones: zones.data ?? [], members: members.data ?? [],
      unassigned: unassigned.data ?? [], runs: runs.data ?? [],
    };
  });

export const createCabinet = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ nom: z.string().trim().min(2).max(120) }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { error } = await context.supabase.from("cabinets").insert({ nom: data.nom });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const toggleCabinet = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ id: z.string().uuid(), actif: z.boolean() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { error } = await context.supabase.from("cabinets").update({ actif: data.actif }).eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const addZone = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({
    cabinet_id: z.string().uuid(),
    departement: z.string().regex(/^(\d{2,3}|2A|2B)$/),
    verticale: z.enum(["tech", "conseil", "commerce", "medical", "sci"]),
  }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { error } = await context.supabase.from("cabinet_zones").insert(data);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const removeZone = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { error } = await context.supabase.from("cabinet_zones").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const inviteMember = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ cabinet_id: z.string().uuid(), email: z.string().trim().email(), redirectTo: z.string().url() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: inv, error } = await supabaseAdmin.auth.admin.inviteUserByEmail(data.email, { redirectTo: data.redirectTo });
    if (error || !inv.user) throw new Error(error?.message ?? "Invitation impossible");
    const { error: e2 } = await supabaseAdmin.from("cabinet_members").upsert({ user_id: inv.user.id, cabinet_id: data.cabinet_id, email: data.email });
    if (e2) throw new Error(e2.message);
    return { ok: true };
  });

export const reassignLead = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ siren: z.string().regex(/^\d{9}$/), cabinet_id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { error } = await context.supabase.from("leads").update({ cabinet_id: data.cabinet_id }).eq("siren", data.siren).is("cabinet_id", null);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
