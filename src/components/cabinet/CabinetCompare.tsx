const rows: Array<{ cap: string; eligibly: string; pappers: string; apollo: string; diy: string }> = [
  { cap: "Spécialisé cabinet EC français", eligibly: "ok", pappers: "no", apollo: "no", diy: "partial" },
  { cap: "Filtres IA amont (CAC, procédure, holding, serial)", eligibly: "ok", pappers: "no", apollo: "no", diy: "partial" },
  { cap: "Scoring IA expliqué par lead", eligibly: "ok", pappers: "no", apollo: "partial", diy: "partial" },
  { cap: "Alertes Slack / Teams / Email natives", eligibly: "ok", pappers: "no", apollo: "partial", diy: "no" },
  { cap: "Push automatique vers HubSpot / Pipedrive", eligibly: "ok", pappers: "no", apollo: "ok", diy: "partial" },
  { cap: "Sources françaises consolidées (INPI/Sirene/BODACC)", eligibly: "ok", pappers: "ok", apollo: "partial", diy: "partial" },
  { cap: "Apprentissage IA sur feedback cabinet", eligibly: "ok", pappers: "no", apollo: "no", diy: "partial" },
  { cap: "Coût mensuel typique", eligibly: "290 € HT", pappers: "~100 € HT", apollo: "500–1500 € HT", diy: "Dev + maintenance" },
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
        <div className="max-w-2xl mb-12">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">Comparatif</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            Eligibly vs <em className="italic text-primary font-medium">les alternatives</em>.
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left font-semibold text-foreground px-5 py-4 min-w-[260px]">Capacité</th>
                <th className="text-center font-semibold px-5 py-4 bg-primary text-primary-foreground min-w-[120px]">Eligibly</th>
                <th className="text-center font-medium text-muted-foreground px-5 py-4 min-w-[120px]">Pappers</th>
                <th className="text-center font-medium text-muted-foreground px-5 py-4 min-w-[140px]">Apollo / Cognism</th>
                <th className="text-center font-medium text-muted-foreground px-5 py-4 min-w-[140px]">Dev interne</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.cap} className={i % 2 === 0 ? "bg-background/40" : ""}>
                  <td className="px-5 py-3 text-foreground/85">{r.cap}</td>
                  <td className="px-5 py-3 text-center bg-primary/5 font-medium"><Cell v={r.eligibly} /></td>
                  <td className="px-5 py-3 text-center"><Cell v={r.pappers} /></td>
                  <td className="px-5 py-3 text-center"><Cell v={r.apollo} /></td>
                  <td className="px-5 py-3 text-center"><Cell v={r.diy} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};