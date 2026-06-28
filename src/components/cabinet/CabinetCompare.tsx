const rows: Array<{ cap: string; eligibly: string; supplier: string }> = [
  { cap: "Coût mensuel", eligibly: "Forfait flat (sur devis)", supplier: "500–1 500 € selon volume" },
  { cap: "Coût par lead", eligibly: "Très bas (production en autonomie)", supplier: "50–200 € selon qualité" },
  { cap: "Volume de leads PREMIUM /mois", eligibly: "30–50 (paramétrable ICP)", supplier: "5–20 (selon budget)" },
  { cap: "Exclusivité du lead", eligibly: "Vos leads à vous", supplier: "Souvent mutualisés (3–5 cabinets)" },
  { cap: "Filtres qualité amont (CAC, procédure, holding, serial)", eligibly: "ok", supplier: "partial" },
  { cap: "Score expliqué par lead", eligibly: "ok", supplier: "no" },
  { cap: "Plan d'action prêt à dérouler", eligibly: "ok", supplier: "no" },
  { cap: "Apprentissage sur votre feedback", eligibly: "ok", supplier: "no" },
  { cap: "Dépendance fournisseur", eligibly: "Aucune (vous maîtrisez la source)", supplier: "Totale (prix, volume, coupure)" },
  { cap: "Engagement", eligibly: "Mensuel · préavis 30 j", supplier: "Souvent contrats annuels" },
  { cap: "Scalabilité", eligibly: "Volume stable, prix stable", supplier: "Volume × prix unitaire" },
];

const Cell = ({ v }: { v: string }) => {
  if (v === "ok") return <span className="text-emerald-600 font-semibold">✓</span>;
  if (v === "partial") return <span className="text-amber-600 font-semibold">~</span>;
  if (v === "no") return <span className="text-muted-foreground/60">—</span>;
  return <span className="text-sm text-foreground/80">{v}</span>;
};

export const CabinetCompare = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">Comparatif</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            Produire ses leads vs <em className="italic text-primary font-medium">les acheter à la pièce</em>.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Le vrai concurrent business n'est ni Pappers ni Apollo. C'est votre dépense actuelle chez un fournisseur tiers d'achat de leads.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left font-semibold text-foreground px-5 py-4 min-w-[260px]">Capacité</th>
                <th className="text-center font-semibold px-5 py-4 bg-primary text-primary-foreground min-w-[200px]">
                  Eligibly<br /><span className="text-[11px] font-normal opacity-90">Forfait flat · tarif sur demande</span>
                </th>
                <th className="text-center font-medium text-muted-foreground px-5 py-4 min-w-[220px]">
                  Achat de leads<br /><span className="text-[11px] font-normal">chez un fournisseur tiers</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.cap} className={i % 2 === 0 ? "bg-background/40" : ""}>
                  <td className="px-5 py-3 text-foreground/85">{r.cap}</td>
                  <td className="px-5 py-3 text-center bg-primary/5 font-medium"><Cell v={r.eligibly} /></td>
                  <td className="px-5 py-3 text-center"><Cell v={r.supplier} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-xs text-muted-foreground max-w-3xl">
          Pour 60-80 % moins cher, vous produisez vos leads vous-mêmes plutôt que de les acheter en vrac à un fournisseur — et vous gagnez l'autonomie sur votre source.
        </p>
      </div>
    </section>
  );
};