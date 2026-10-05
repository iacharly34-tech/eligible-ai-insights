import { z } from "zod";

const nstr = z.string().nullable().optional();

export const leadV1Schema = z.object({
  schema_version: z.literal("1.0"),
  siren: z.string().regex(/^\d{9}$/),
  verticale: z.enum(["tech", "conseil", "commerce", "medical", "sci"]),
  societe: z.object({
    denomination: z.string().min(1),
    forme_juridique_code: nstr,
    forme_juridique: nstr,
    naf_code: nstr,
    naf_libelle: nstr,
    naf_2025: nstr,
    date_creation: nstr,
    date_formalite_rne: nstr,
    capital_eur: z.number().nullable().optional(),
    siret_siege: nstr,
  }).passthrough(),
  siege: z.object({
    adresse: nstr,
    code_postal: nstr,
    ville: nstr,
    departement: z.string().min(1),
    courrier_possible: z.boolean().nullable().optional(),
    en_domiciliation: z.boolean().nullable().optional(),
    domicilie_chez_cabinet_comptable: z.boolean().nullable().optional(),
    cabinet_comptable_meme_adresse: z.any().optional(),
  }).passthrough(),
  dirigeant: z.object({}).passthrough(),
  priorite: z.object({
    niveau: z.enum(["PREMIUM", "STANDARD", "A_VERIFIER"]),
    score: z.number().int().min(0).max(100),
    raisons_positives: z.array(z.string()).default([]),
    points_d_attention: z.array(z.string()).default([]),
    angle: nstr,
  }).passthrough(),
  premier_bilan: z.object({ date_cloture_premier_exercice: nstr }).passthrough().nullable().optional(),
  contact: z.object({}).passthrough(),
  conformite: z.object({
    statut_diffusion_sirene: nstr,
    opposition_commerciale_rne: z.boolean().nullable().optional(),
    base_legale: nstr,
    detecte_le: z.string().regex(/^\d{4}-\d{2}-\d{2}/),
    a_supprimer_le: z.string().regex(/^\d{4}-\d{2}-\d{2}/),
  }).passthrough(),
}).passthrough();

export const batchSchema = z.object({
  schema_version: z.literal("1.0"),
  genere_le: z.string().optional(),
  leads: z.array(z.unknown()).max(500).default([]),
  suppressions: z.array(z.string().regex(/^\d{9}$/)).default([]),
});

export type LeadV1 = z.infer<typeof leadV1Schema>;

/** Forme lisible côté UI (payload stocké en JSON). */
export type LeadPayload = {
  verticale: string;
  societe: any;
  siege: any;
  dirigeant: any;
  priorite: { niveau: string; score: number; raisons_positives: string[]; points_d_attention: string[]; angle?: string | null };
  premier_bilan?: { date_cloture_premier_exercice?: string | null } | null;
  contact: any;
  conformite: any;
};
