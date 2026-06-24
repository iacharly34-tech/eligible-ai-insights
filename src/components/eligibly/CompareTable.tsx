import { SectionHeader } from "./SectionHeader";

const rows = [
  { f: "Spécialisé cabinet EC français", e: ["yes", "Oui"], p: ["no", "Généraliste FR"], a: ["no", "Généraliste B2B intl"], d: ["partial", "À spécifier"] },
  { f: "Filtres amont qualité (CAC, procédure, holding, serial)", e: ["yes", "Automatiques"], p: ["no", "À filtrer manuellement"], a: ["no", "Données FR limitées"], d: ["partial", "À développer"] },
  { f: "Score expliqué par lead", e: ["yes", "Score + rationale"], p: ["no", "Pas de scoring"], a: ["partial", "Score boîte noire"], d: ["partial", "À modéliser"] },
  { f: "Plan d'action concret par lead", e: ["yes", "Préparer appel + relance"], p: ["no", "Donnée brute"], a: ["partial", "Séquences génériques"], d: ["no", "À développer"] },
  { f: "Sources françaises (INPI/Sirene/BODACC)", e: ["yes", "Quotidien"], p: ["yes", "Oui"], a: ["partial", "Partiel"], d: ["partial", "À intégrer"] },
  { f: "Apprentissage sur votre feedback", e: ["yes", "Continu"], p: ["no", "Non"], a: ["partial", "Limité"], d: ["partial", "À développer"] },
  { f: "Tarif transparent", e: ["yes", "290€ HT / mois"], p: ["partial", "Variable"], a: ["no", "Sur devis"], d: ["no", "Coût élevé"] },
] as const;

const cell = (state: string, label: string, highlight = false) => {
  const colors =
    state === "yes"
      ? "text-sapin"
      : state === "no"
      ? "text-ink-muted"
      : "text-moutarde";
  return (
    <td className={`px-4 py-4 text-sm ${highlight ? "bg-cream/60" : ""} ${colors}`}>
      <span className="font-medium">{label}</span>
    </td>
  );
};

export const CompareTable = () => (
  <section className="py-20 md:py-28 bg-beige/40">
    <div className="container">
      <SectionHeader
        eyebrow="Comparaison"
        title={<>Eligibly vs <em className="text-terracotta">les outils que vous utilisez déjà.</em></>}
        lede="Pappers vous donne la donnée brute. Apollo est un outil généraliste à reconfigurer. Le développement interne coûte cher. Eligibly est conçu pour un seul usage : la prospection de cabinets d'expertise comptable."
      />

      <div className="overflow-x-auto -mx-4 px-4">
        <table className="w-full min-w-[720px] bg-bg-card rounded-2xl border border-border-soft overflow-hidden">
          <thead>
            <tr className="border-b border-border-soft">
              <th className="px-4 py-4 text-left text-xs uppercase tracking-[0.14em] text-ink-muted font-medium">Capacité</th>
              <th className="px-4 py-4 text-left text-xs uppercase tracking-[0.14em] text-terracotta font-semibold bg-cream/60">Eligibly</th>
              <th className="px-4 py-4 text-left text-xs uppercase tracking-[0.14em] text-ink-muted font-medium">Pappers</th>
              <th className="px-4 py-4 text-left text-xs uppercase tracking-[0.14em] text-ink-muted font-medium">Apollo / Cognism</th>
              <th className="px-4 py-4 text-left text-xs uppercase tracking-[0.14em] text-ink-muted font-medium">Dev interne</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-soft">
            {rows.map((r) => (
              <tr key={r.f}>
                <td className="px-4 py-4 text-sm font-medium text-ink">{r.f}</td>
                {cell(r.e[0], r.e[1], true)}
                {cell(r.p[0], r.p[1])}
                {cell(r.a[0], r.a[1])}
                {cell(r.d[0], r.d[1])}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);