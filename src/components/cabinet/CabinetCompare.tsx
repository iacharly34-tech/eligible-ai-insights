import React from "react";

type Row = { cap: string; sub?: string; eligibly: string; supplier: string; group: string };

const rows: Row[] = [
  { group: "Modèle économique", cap: "Structure tarifaire", sub: "Comment vous payez la donnée", eligibly: "Abonnement adapté au volume", supplier: "Facturation à l'unité, variable" },
  { group: "Modèle économique", cap: "Prévisibilité budgétaire", sub: "Capacité à piloter votre CAC", eligibly: "Stable, indépendante du volume", supplier: "Dépendante du marché et des enchères" },
  { group: "Modèle économique", cap: "Engagement contractuel", eligibly: "Mensuel, préavis 30 jours", supplier: "Engagement annuel fréquent" },
  { group: "Qualité de la donnée", cap: "Exclusivité du contact", sub: "Combien de cabinets reçoivent le même lead", eligibly: "Lead exclusif à votre cabinet", supplier: "Lead mutualisé entre plusieurs cabinets" },
  { group: "Qualité de la donnée", cap: "Filtres de conformité amont", sub: "CAC, procédures collectives, holdings, serial créateurs", eligibly: "ok", supplier: "partial" },
  { group: "Qualité de la donnée", cap: "Ciblage ICP paramétrable", sub: "Forme juridique, secteur, capital, zone, taille", eligibly: "ok", supplier: "no" },
  { group: "Intelligence", cap: "Scoring explicable par lead", sub: "Critères et pondération communiqués", eligibly: "ok", supplier: "no" },
  { group: "Intelligence", cap: "Recommandation d'approche", sub: "Angle, message et timing suggérés", eligibly: "ok", supplier: "no" },
  { group: "Intelligence", cap: "Apprentissage sur vos retours", sub: "Le moteur s'ajuste à vos signaux", eligibly: "ok", supplier: "no" },
  { group: "Opérations", cap: "Diffusion dans vos outils", sub: "Email, Slack, Teams, WhatsApp, CRM", eligibly: "ok", supplier: "partial" },
  { group: "Opérations", cap: "Maîtrise de la source", sub: "Indépendance vis-à-vis d'un tiers", eligibly: "Vous restez propriétaire de votre pipeline", supplier: "Dépendance forte (prix, volume, coupure)" },
  { group: "Conformité", cap: "Cadre RGPD & hébergement UE", sub: "Base légale, registre, sous-traitance", eligibly: "ok", supplier: "partial" },
];

const Cell = ({ v, accent = false }: { v: string; accent?: boolean }) => {
  if (v === "ok")
    return (
      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${accent ? "bg-primary/15 text-primary" : "bg-emerald-50 text-emerald-700"} font-semibold text-sm`}>
        ✓
      </span>
    );
  if (v === "partial")
    return <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-50 text-amber-700 font-semibold text-sm">~</span>;
  if (v === "no")
    return <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted text-muted-foreground/70 font-medium text-sm">—</span>;
  return <span className="text-sm text-foreground/85 leading-snug">{v}</span>;
};

export const CabinetCompare = () => {
  const groups = Array.from(new Set(rows.map((r) => r.group)));

  return (
    <section className="py-20 md:py-28 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">Comparatif</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            Produire ses leads en interne ou <em className="italic text-primary font-medium">les acheter à un tiers</em>.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            La plupart des cabinets comparent Eligibly à un annuaire d'entreprises ou à un outil de prospection généraliste. La bonne référence est ailleurs&nbsp;: c'est la ligne budgétaire que vous consacrez aujourd'hui à un fournisseur de leads partagés. Lecture critère par critère.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="text-left font-semibold text-foreground px-6 py-5 min-w-[320px]">Critère d'évaluation</th>
                <th className="text-center px-6 py-5 bg-primary text-primary-foreground min-w-[220px]">
                  <div className="font-display text-base font-semibold tracking-tight">Eligibly</div>
                  <div className="text-[11px] font-normal opacity-85 mt-0.5">Production de leads en interne</div>
                </th>
                <th className="text-center font-medium text-muted-foreground px-6 py-5 min-w-[220px]">
                  <div className="font-display text-base font-semibold text-foreground/80 tracking-tight">Fournisseur tiers</div>
                  <div className="text-[11px] font-normal mt-0.5">Achat de leads à l'unité</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <React.Fragment key={group}>
                  <tr className="bg-background">
                    <td colSpan={3} className="px-6 pt-6 pb-2 text-[0.7rem] uppercase tracking-[0.16em] text-primary/80 font-semibold">
                      {group}
                    </td>
                  </tr>
                  {rows.filter((r) => r.group === group).map((r) => (
                    <tr key={r.cap} className="border-t border-border/60 hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="text-foreground font-medium">{r.cap}</div>
                        {r.sub && <div className="text-xs text-muted-foreground mt-0.5">{r.sub}</div>}
                      </td>
                      <td className="px-6 py-4 text-center align-middle bg-primary/[0.04]">
                        <Cell v={r.eligibly} accent />
                      </td>
                      <td className="px-6 py-4 text-center align-middle">
                        <Cell v={r.supplier} />
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-5xl">
          {[
            { k: "Propriété", v: "Vos leads restent les vôtres, jamais revendus à un autre cabinet." },
            { k: "Traçabilité", v: "Chaque score est expliqué&nbsp;: vous savez pourquoi un lead est prioritaire." },
            { k: "Indépendance", v: "Un préavis de 30 jours, pas d'engagement annuel ni de hausse au volume." },
          ].map((b) => (
            <div key={b.k} className="rounded-xl border border-border bg-card px-5 py-4">
              <div className="text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold">{b.k}</div>
              <div className="text-sm text-foreground/85 mt-1.5 leading-relaxed" dangerouslySetInnerHTML={{ __html: b.v }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};