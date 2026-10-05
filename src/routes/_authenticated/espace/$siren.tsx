import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { getLead, updateLeadStatus } from "@/lib/espace.functions";
import { EspaceShell, fmtDate, daysSince, STATUTS, NIVEAU_LABEL, CANAL_LABEL } from "@/components/espace/EspaceShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import type { LeadPayload } from "@/lib/lead-v1";

export const Route = createFileRoute("/_authenticated/espace/$siren")({ component: LeadPage });

const FIAB: Record<string, string> = { vert: "fiable", jaune: "probable", orange: "incertain", rouge: "à éviter" };

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{label}</div>
      <div className="text-sm text-foreground">{value ?? "—"}</div>
    </div>
  );
}

function LeadPage() {
  const { siren } = Route.useParams();
  const qc = useQueryClient();
  const fetchLead = useServerFn(getLead);
  const save = useServerFn(updateLeadStatus);
  const { data: lead, isLoading } = useQuery({ queryKey: ["lead", siren], queryFn: () => fetchLead({ data: { siren } }) });
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  useEffect(() => { if (lead) setNote(lead.note ?? ""); }, [lead]);

  if (isLoading) return <EspaceShell><p className="text-muted-foreground">Chargement…</p></EspaceShell>;
  if (!lead) return <EspaceShell><p>Lead introuvable ou non attribué à votre cabinet.</p><Link to="/espace" className="text-primary">← Mes leads</Link></EspaceShell>;

  const p = lead.payload as LeadPayload;
  const s = p.societe, sg = p.siege, d = p.dirigeant, pr = p.priorite, c = p.contact, cf = p.conformite;
  const age = daysSince(s.date_creation);

  const setStatut = async (statut: (typeof STATUTS)[number]["v"]) => {
    setBusy(true);
    try { await save({ data: { siren, statut, note } }); await qc.invalidateQueries({ queryKey: ["lead", siren] }); qc.invalidateQueries({ queryKey: ["my-leads"] }); }
    finally { setBusy(false); }
  };

  const card = "rounded-xl border border-border bg-card p-6";
  const h = "text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3";

  return (
    <EspaceShell>
      <Link to="/espace" className="text-sm text-muted-foreground hover:text-foreground">← Mes leads</Link>
      <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground">{s.denomination}</h1>
          <p className="text-sm text-muted-foreground mt-1">{s.forme_juridique} · {s.naf_code} {s.naf_libelle} · SIREN {lead.siren}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="outline">Créée le {fmtDate(s.date_creation)}</Badge>
            <Badge variant="outline">Récence : {age ?? "—"} j</Badge>
            <Badge variant="outline">Détecté le {fmtDate(cf.detecte_le)}</Badge>
            <Badge variant="outline">{p.verticale}</Badge>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Score</div>
          <div className="font-display text-4xl font-semibold text-primary tabular-nums">{pr.score}<span className="text-xl text-muted-foreground">/100</span></div>
          <Badge className="mt-1">{NIVEAU_LABEL[pr.niveau] ?? pr.niveau}</Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mt-6">
        <div className={`${card} lg:col-span-2`}>
          <div className={h}>Pourquoi ce score</div>
          <ul className="space-y-1.5 text-sm">
            {pr.raisons_positives?.map((x) => <li key={x}>✓ {x}</li>)}
            {pr.points_d_attention?.map((x) => <li key={x} className="text-muted-foreground">! {x}</li>)}
          </ul>
          {pr.angle && (<><div className={`${h} mt-6`}>Angle d'approche</div><p className="text-sm rounded-lg border border-border bg-background p-4">{pr.angle}</p></>)}
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <Field label="Clôture du premier exercice" value={fmtDate(p.premier_bilan?.date_cloture_premier_exercice)} />
            <Field label="Capital" value={s.capital_eur != null ? `${Number(s.capital_eur).toLocaleString("fr-FR")} €` : null} />
            <Field label="Dépôt au registre (RNE)" value={fmtDate(s.date_formalite_rne)} />
            <Field label="NAF 2025" value={s.naf_2025} />
          </div>
        </div>

        <div className={card}>
          <div className={h}>Suivi</div>
          <div className="flex flex-wrap gap-2">
            {STATUTS.map((st) => (
              <Button key={st.v} size="sm" disabled={busy} variant={lead.statut === st.v ? "default" : "outline"} onClick={() => setStatut(st.v)}>{st.l}</Button>
            ))}
          </div>
          <label className="text-xs text-muted-foreground mt-4 block" htmlFor="note">Note interne</label>
          <Textarea id="note" value={note} onChange={(e) => setNote(e.target.value)} rows={4} className="mt-1" />
          <Button size="sm" variant="secondary" className="mt-2" disabled={busy} onClick={() => setStatut(lead.statut)}>Enregistrer la note</Button>
        </div>

        <div className={card}>
          <div className={h}>Dirigeant</div>
          <div className="space-y-3">
            <Field label="Nom" value={[d.prenom, d.nom].filter(Boolean).join(" ")} />
            <Field label="Âge" value={d.age ? `${d.age} ans` : null} />
            <Field label="Profil" value={d.profil_libelle} />
            {d.profil_explication && <p className="text-xs text-muted-foreground">{d.profil_explication}</p>}
          </div>
        </div>

        <div className={card}>
          <div className={h}>Contact</div>
          <div className="space-y-3">
            <Field label="Canal recommandé" value={c.canal_recommande ? CANAL_LABEL[c.canal_recommande] ?? c.canal_recommande : null} />
            <Field label="Email" value={c.email ? <><a className="text-primary" href={`mailto:${c.email.valeur}`}>{c.email.valeur}</a> <span className="text-xs text-muted-foreground">({FIAB[c.email.fiabilite] ?? c.email.fiabilite})</span></> : "non trouvé"} />
            <Field label="Téléphone" value={c.telephone ? `${c.telephone.valeur}${c.telephone.type ? ` (${c.telephone.type})` : ""}` : "non trouvé"} />
            <Field label="LinkedIn" value={c.linkedin?.url ? <a className="text-primary" href={c.linkedin.url} target="_blank" rel="noopener noreferrer">Profil</a> : "non trouvé"} />
            <Field label="Site web" value={c.site_web ? <a className="text-primary" href={c.site_web} target="_blank" rel="noopener noreferrer">{c.site_web}</a> : "non trouvé"} />
            {c.rdv_en_ligne && <Field label="RDV en ligne" value={<a className="text-primary" href={c.rdv_en_ligne} target="_blank" rel="noopener noreferrer">Réserver</a>} />}
          </div>
        </div>

        <div className={card}>
          <div className={h}>Siège</div>
          <div className="space-y-3">
            <Field label="Adresse" value={[sg.adresse, sg.code_postal, sg.ville].filter(Boolean).join(" ")} />
            <Field label="Courrier" value={sg.courrier_possible ? "adresse vérifiée au numéro" : "non vérifiée"} />
            <Field label="Domiciliation" value={sg.en_domiciliation ? "oui" : "non"} />
            <Field label="Domicilié chez un cabinet comptable" value={sg.domicilie_chez_cabinet_comptable ? "oui" : "non"} />
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-border bg-muted/30 p-4 text-xs text-muted-foreground">
        Base légale : {cf.base_legale ?? "—"} · Diffusion Sirene : {cf.statut_diffusion_sirene ?? "—"} · Suppression automatique le {fmtDate(cf.a_supprimer_le)}. Consultation journalisée.
      </div>
    </EspaceShell>
  );
}
