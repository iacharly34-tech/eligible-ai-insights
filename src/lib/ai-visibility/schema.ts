import { z } from "zod";

export function publicSiteUrl(value: string): URL {
  if (value.length > 2048) throw new Error("URL trop longue.");
  let url: URL;
  try { url = new URL(value.includes("://") ? value : `https://${value}`); }
  catch { throw new Error("Saisissez une URL de site valide."); }
  const host = url.hostname.toLowerCase();
  if (url.protocol !== "https:" || url.username || url.password || url.port ||
      !/^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,63}$/.test(host) ||
      /\.(localhost|local|internal|test|invalid|example)$/.test(host) ||
      ["localhost", "metadata.google.internal"].includes(host)) {
    throw new Error("Seuls les sites publics en HTTPS, sans identifiants ni port spécifique, sont acceptés.");
  }
  url.hash = "";
  url.search = "";
  return url;
}

export const auditSchema = z.object({
  assessment: z.enum(["bases_solides", "a_renforcer", "insuffisant", "non_evaluable"]),
  summary: z.string(),
  confidence: z.enum(["faible", "moyenne", "elevee"]),
  findings: z.array(z.object({
    area: z.string(), status: z.enum(["point_fort", "a_ameliorer", "non_verifie"]),
    observation: z.string(), evidenceUrl: z.string().nullable(),
  }).strict()),
  actions: z.array(z.object({
    priority: z.enum(["P1", "P2", "P3"]), title: z.string(),
    detail: z.string(), example: z.string(), effort: z.string(),
  }).strict()),
  prompts: z.array(z.string()),
  limitations: z.array(z.string()),
}).strict();

export type VisibilityAudit = z.infer<typeof auditSchema>;
export type AuditSource = { url: string; title: string };
export type AuditEvent =
  | { type: "progress"; text: string }
  | { type: "result"; report: VisibilityAudit; sources: AuditSource[]; checkedAt: string; siteUrl: string }
  | { type: "error"; message: string; status: number };

export function isSiteSource(value: string, host: string): boolean {
  try { const u = publicSiteUrl(value); return u.hostname === host || u.hostname.endsWith(`.${host.replace(/^www\./, "")}`) || u.hostname === host.replace(/^www\./, ""); }
  catch { return false; }
}