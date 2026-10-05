import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useMemo, useState } from "react";
import { listMyLeads } from "@/lib/espace.functions";
import { EspaceShell, useMe, fmtDate, daysSince, STATUTS, NIVEAU_LABEL, CANAL_LABEL, VERTICALES } from "@/components/espace/EspaceShell";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/_authenticated/espace/")({ component: EspacePage });

function EspacePage() {
  const { data: me } = useMe();
  const fn = useServerFn(listMyLeads);
  const { data: leads = [], isLoading } = useQuery({ queryKey: ["my-leads"], queryFn: () => fn() });
  const [niveau, setNiveau] = useState("");
  const [statut, setStatut] = useState("");
  const [verticale, setVerticale] = useState("");

  const filtered = useMemo(() => leads.filter((l) =>
    (!niveau || l.niveau === niveau) && (!statut || l.statut === statut) && (!verticale || l.verticale === verticale)), [leads, niveau, statut, verticale]);

  const counts = useMemo(() => ({
    total: leads.length,
    nouveaux: leads.filter((l) => l.statut === "nouveau").length,
    premium: leads.filter((l) => l.niveau === "PREMIUM").length,
    signes: leads.filter((l) => l.statut === "signe").length,
  }), [leads]);

  const sel = "h-9 rounded-md border border-input bg-background px-2 text-sm";

  return (
    <EspaceShell>
      <h1 className="font-display text-2xl font-semibold text-foreground">Mes leads</h1>
      {me && !me.cabinetId && !me.isAdmin && (
        <p className="mt-4 text-sm text-muted-foreground">Votre compte n'est rattaché à aucun cabinet. Contactez Eligibly.</p>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {[["Leads actifs", counts.total], ["À traiter", counts.nouveaux], ["Premium", counts.premium], ["Signés", counts.signes]].map(([l, v]) => (
          <div key={l} className="rounded-xl border border-border bg-card p-4">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
            <div className="font-display text-2xl font-semibold tabular-nums text-foreground">{v}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        <select aria-label="Niveau" className={sel} value={niveau} onChange={(e) => setNiveau(e.target.value)}>
          <option value="">Tous niveaux</option>{Object.entries(NIVEAU_LABEL).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
        </select>
        <select aria-label="Statut" className={sel} value={statut} onChange={(e) => setStatut(e.target.value)}>
          <option value="">Tous statuts</option>{STATUTS.map((s) => <option key={s.v} value={s.v}>{s.l}</option>)}
        </select>
        <select aria-label="Verticale" className={sel} value={verticale} onChange={(e) => setVerticale(e.target.value)}>
          <option value="">Toutes verticales</option>{VERTICALES.map((v) => <option key={v} value={v}>{v}</option>)}
        </select>
      </div>

      <div className="mt-4 rounded-xl border border-border bg-card overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
            <tr><th className="p-3">Société</th><th className="p-3">Score</th><th className="p-3">Récence</th><th className="p-3">Profil</th><th className="p-3">Canal</th><th className="p-3">Statut</th><th className="p-3">Suppression</th></tr>
          </thead>
          <tbody>
            {isLoading && <tr><td colSpan={7} className="p-6 text-muted-foreground">Chargement…</td></tr>}
            {!isLoading && filtered.length === 0 && <tr><td colSpan={7} className="p-6 text-muted-foreground">Aucun lead pour ces critères. Les lots arrivent chaque matin vers 8 h.</td></tr>}
            {filtered.map((l) => (
              <tr key={l.siren} className="border-b border-border last:border-0 hover:bg-muted/40">
                <td className="p-3">
                  <Link to="/espace/$siren" params={{ siren: l.siren }} className="font-medium text-foreground hover:text-primary">{l.denomination}</Link>
                  <div className="text-xs text-muted-foreground">{l.verticale} · {l.ville ?? l.departement}</div>
                </td>
                <td className="p-3"><span className="font-semibold tabular-nums">{l.score}</span> <Badge variant="outline" className="ml-1">{NIVEAU_LABEL[l.niveau] ?? l.niveau}</Badge></td>
                <td className="p-3 tabular-nums">{daysSince(l.date_creation) ?? "—"} j</td>
                <td className="p-3 text-muted-foreground">{l.profil ?? "—"}</td>
                <td className="p-3">{l.canal ? CANAL_LABEL[l.canal] ?? l.canal : "—"}</td>
                <td className="p-3">{STATUTS.find((s) => s.v === l.statut)?.l}</td>
                <td className="p-3 text-muted-foreground">{fmtDate(l.a_supprimer_le)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </EspaceShell>
  );
}
