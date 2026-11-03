import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { availableSlots, formatParis, isValidSlot } from "./demo-booking";

const SITE = "https://eligibly.ai";
const REPLY_TO = "contact@eligibly.ai";
export const bookingUrl = (token: string) => `${SITE}/rdv/${token}`;

async function admin() {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  return supabaseAdmin;
}

async function safeSend(name: string, to: string, data: Record<string, unknown>, key: string) {
  const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
  try {
    return await sendTemplateEmail(name, to, { templateData: data, idempotencyKey: key, replyTo: REPLY_TO });
  } catch (e) {
    console.error(`email ${name} failed`, e);
    return { sent: false as const, reason: "error" };
  }
}

const DemoSchema = z.object({
  fullName: z.string().trim().min(1).max(120),
  email: z.string().trim().toLowerCase().email().max(254),
  company: z.string().trim().min(1).max(150),
  phone: z.string().trim().max(30).regex(/^[0-9+().\s-]*$/).optional().or(z.literal("")),
  departements: z.string().trim().max(120).optional().or(z.literal("")),
  tailleCabinet: z.enum(["", "1", "2-5", "6-20", "20+"]).optional(),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

const TAILLE_LABEL: Record<string, string> = { "1": "Expert-comptable seul", "2-5": "2 à 5 personnes", "6-20": "6 à 20 personnes", "20+": "Plus de 20 personnes" };

/** Public: demo form submission → saves request, sends confirmation with booking link + owner notification. */
export const submitDemoRequest = createServerFn({ method: "POST" })
  .inputValidator((d) => DemoSchema.parse(d))
  .handler(async ({ data }) => {
    const db = await admin();
    const req = getRequest();
    const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0]?.trim() ?? "";
    const ua = (req.headers.get("user-agent") || "").slice(0, 400);
    const hourAgo = new Date(Date.now() - 3600_000).toISOString();
    const { count } = await db.from("demo_requests").select("id", { count: "exact", head: true }).eq("email", data.email).gte("created_at", hourAgo);
    if ((count ?? 0) >= 3) throw new Error("Trop de demandes pour cet e-mail, réessayez plus tard.");

    const { data: row, error } = await db.from("demo_requests").insert({
      full_name: data.fullName, email: data.email, company: data.company,
      phone: data.phone || null, departements: data.departements || null,
      taille_cabinet: data.tailleCabinet ? (TAILLE_LABEL[data.tailleCabinet] ?? null) : null,
      message: data.message || null, source: "/demo",
      user_agent: ip ? `[${ip}] ${ua}` : ua,
    }).select("id, booking_token, created_at").single();
    if (error || !row) { console.error(error); throw new Error("Enregistrement impossible"); }

    const url = bookingUrl(row.booking_token);
    const details = [
      data.phone && `Tél. : ${data.phone}`,
      data.departements && `Départements : ${data.departements}`,
      data.tailleCabinet && `Taille : ${TAILLE_LABEL[data.tailleCabinet]}`,
    ].filter(Boolean).join(" · ");
    await Promise.all([
      safeSend("demo-confirmation", data.email, { fullName: data.fullName, company: data.company, message: data.message || undefined, bookingUrl: url }, `demo-confirmation-${row.id}`),
      safeSend("lead-notification", REPLY_TO, {
        fullName: data.fullName, email: data.email, company: data.company,
        message: [details, data.message].filter(Boolean).join("\n\n") || undefined,
        source: "/demo", submittedAt: new Date(row.created_at).toLocaleString("fr-FR", { timeZone: "Europe/Paris" }),
      }, `lead-notification-${row.id}`),
    ]);
    return { ok: true, bookingToken: row.booking_token as string };
  });

const TokenSchema = z.object({ token: z.string().uuid() });

/** Public (capability token): returns the request's first name, status and free slots. */
export const getBooking = createServerFn({ method: "POST" })
  .inputValidator((d) => TokenSchema.parse(d))
  .handler(async ({ data }) => {
    const db = await admin();
    const { data: r } = await db.from("demo_requests").select("full_name, company, rdv_at, statut").eq("booking_token", data.token).maybeSingle();
    if (!r) return { found: false as const };
    const { data: taken } = await db.from("demo_requests").select("rdv_at").not("rdv_at", "is", null).gte("rdv_at", new Date().toISOString());
    return {
      found: true as const,
      firstName: r.full_name.split(" ")[0],
      company: r.company,
      rdvAt: r.rdv_at as string | null,
      slots: availableSlots(new Date(), (taken ?? []).map((t) => t.rdv_at as string)),
    };
  });

export const bookSlot = createServerFn({ method: "POST" })
  .inputValidator((d) => TokenSchema.extend({ slot: z.string().datetime() }).parse(d))
  .handler(async ({ data }) => {
    const db = await admin();
    const { data: r } = await db.from("demo_requests").select("*").eq("booking_token", data.token).maybeSingle();
    if (!r) throw new Error("Lien invalide");
    const { data: taken } = await db.from("demo_requests").select("rdv_at").not("rdv_at", "is", null).neq("id", r.id);
    if (!isValidSlot(data.slot, new Date(), (taken ?? []).map((t) => t.rdv_at as string))) throw new Error("Ce créneau n'est plus disponible.");
    const slot = new Date(data.slot).toISOString();
    const { error } = await db.from("demo_requests").update({ rdv_at: slot, statut: "rdv_pris" }).eq("id", r.id);
    if (error) throw new Error(error.code === "23505" ? "Ce créneau vient d'être réservé." : "Réservation impossible");
    const when = formatParis(slot);
    await Promise.all([
      safeSend("rdv-confirmation", r.email, { fullName: r.full_name.split(" ")[0], when, bookingUrl: bookingUrl(r.booking_token) }, `rdv-confirmation-${r.id}-${slot}`),
      safeSend("rdv-notification", REPLY_TO, { fullName: r.full_name, email: r.email, phone: r.phone, company: r.company, departements: r.departements, tailleCabinet: r.taille_cabinet, when }, `rdv-notification-${r.id}-${slot}`),
    ]);
    return { ok: true, rdvAt: slot };
  });

async function assertAdmin(context: { supabase: any; userId: string }) {
  const { data } = await context.supabase.rpc("has_role", { _user_id: context.userId, _role: "admin" });
  if (!data) throw new Response("Forbidden", { status: 403 });
}

export const listDemoRequests = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const { data } = await context.supabase.from("demo_requests")
      .select("id, full_name, email, phone, company, departements, taille_cabinet, message, statut, rdv_at, followup_count, created_at")
      .order("created_at", { ascending: false }).limit(200);
    return data ?? [];
  });

/** Admin: volume tracking of demo form submissions (monthly/weekly counts, RDV conversion). */
export const demoVolumeStats = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const since = new Date(Date.now() - 365 * 24 * 3600_000).toISOString();
    const { data } = await context.supabase.from("demo_requests")
      .select("created_at, statut, rdv_at").gte("created_at", since);
    const rows = data ?? [];
    const byMonth = new Map<string, number>();
    const byWeek = new Map<string, number>();
    for (const r of rows) {
      const d = new Date(r.created_at as string);
      const m = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      byMonth.set(m, (byMonth.get(m) ?? 0) + 1);
      const day = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
      day.setUTCDate(day.getUTCDate() - ((day.getUTCDay() + 6) % 7));
      const w = day.toISOString().slice(0, 10);
      byWeek.set(w, (byWeek.get(w) ?? 0) + 1);
    }
    const sort = (m: Map<string, number>) => [...m.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([period, count]) => ({ period, count }));
    return {
      total: rows.length,
      rdvPris: rows.filter((r) => r.rdv_at).length,
      signes: rows.filter((r) => r.statut === "signe").length,
      byMonth: sort(byMonth),
      byWeek: sort(byWeek).slice(-12),
    };
  });

export const updateDemoStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ id: z.string().uuid(), statut: z.enum(["nouveau", "relance", "rdv_pris", "signe", "perdu"]) }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { error } = await context.supabase.from("demo_requests").update({ statut: data.statut }).eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
