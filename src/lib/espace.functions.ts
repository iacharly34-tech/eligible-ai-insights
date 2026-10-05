import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const getMe = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const [{ data: isAdmin }, { data: member }] = await Promise.all([
      context.supabase.rpc("has_role", { _user_id: context.userId, _role: "admin" }),
      context.supabase.from("cabinet_members").select("cabinet_id, cabinets(nom)").eq("user_id", context.userId).maybeSingle(),
    ]);
    return {
      isAdmin: Boolean(isAdmin),
      cabinetId: member?.cabinet_id ?? null,
      cabinetNom: (member as any)?.cabinets?.nom ?? null,
    };
  });

export const listMyLeads = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: member } = await context.supabase.from("cabinet_members").select("cabinet_id").eq("user_id", context.userId).maybeSingle();
    if (!member) return [];
    const { data, error } = await context.supabase
      .from("leads")
      .select("siren, denomination, verticale, departement, niveau, score, date_creation, detecte_le, a_supprimer_le, statut, payload")
      .eq("cabinet_id", member.cabinet_id)
      .order("detecte_le", { ascending: false })
      .order("score", { ascending: false })
      .limit(500);
    if (error) throw new Error(error.message);
    return (data ?? []).map((l: any) => ({
      siren: l.siren, denomination: l.denomination, verticale: l.verticale, departement: l.departement,
      niveau: l.niveau, score: l.score, date_creation: l.date_creation, detecte_le: l.detecte_le,
      a_supprimer_le: l.a_supprimer_le, statut: l.statut,
      ville: l.payload?.siege?.ville ?? null,
      canal: l.payload?.contact?.canal_recommande ?? null,
      profil: l.payload?.dirigeant?.profil_libelle ?? null,
    }));
  });

export const getLead = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ siren: z.string().regex(/^\d{9}$/) }).parse(d))
  .handler(async ({ data, context }) => {
    const { data: lead, error } = await context.supabase.from("leads").select("*").eq("siren", data.siren).maybeSingle();
    if (error) throw new Error(error.message);
    if (!lead) return null;
    await context.supabase.from("lead_access_log").insert({ user_id: context.userId, siren: data.siren, action: "consultation" });
    return lead as any;
  });

export const updateLeadStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({
    siren: z.string().regex(/^\d{9}$/),
    statut: z.enum(["nouveau", "contacte", "rdv", "signe", "ecarte"]),
    note: z.string().max(2000).optional(),
  }).parse(d))
  .handler(async ({ data, context }) => {
    const patch: { statut: string; note?: string } = { statut: data.statut };
    if (data.note !== undefined) patch.note = data.note;
    const { error } = await context.supabase.from("leads").update(patch).eq("siren", data.siren);
    if (error) throw new Error(error.message);
    await context.supabase.from("lead_access_log").insert({ user_id: context.userId, siren: data.siren, action: `statut:${data.statut}` });
    return { ok: true };
  });
