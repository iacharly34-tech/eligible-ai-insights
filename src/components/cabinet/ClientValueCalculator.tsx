import { useState } from "react";
import { calculateClientValue } from "@/lib/client-value";
import { SafeLink } from "@/components/SafeLink";

export function ClientValueCalculator() {
  const [fees, setFees] = useState(250);
  const [months, setMonths] = useState(36);
  const [margin, setMargin] = useState(40);
  const [cost, setCost] = useState(300);
  const result = calculateClientValue(fees, months, margin, cost);
  const eur = (n: number) => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  const fields = [
    { id: "client-fees", label: "Honoraires mensuels HT (€)", value: fees, set: setFees },
    { id: "client-retention", label: "Durée de relation estimée (mois)", value: months, set: setMonths },
    { id: "client-margin", label: "Marge contributive estimée (%)", value: margin, set: setMargin, max: 100 },
    { id: "client-cac", label: "Coût d'acquisition complet HT (€)", value: cost, set: setCost },
  ];
  return <section id="valeur-client" className="border-y border-border py-12 my-12">
    <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">Combien vaut un nouveau client pour un cabinet comptable ?</h2>
    <p className="max-w-3xl text-muted-foreground leading-relaxed">À 250 € HT par mois, un nouveau client représente 3 000 € HT d'honoraires sur douze mois complets. Ce n'est ni une marge ni un bénéfice. Sa valeur économique dépend du temps de production, de la durée de relation et du coût de conquête.</p>
    <div className="grid lg:grid-cols-2 gap-8 mt-6">
      <div className="grid sm:grid-cols-2 gap-5">{fields.map(field => <div key={field.id}>
        <label htmlFor={field.id} className="block text-sm font-medium mb-2">{field.label}</label>
        <input id={field.id} type="number" min={0} max={field.max} value={field.value} onChange={e => field.set(Math.min(field.max ?? Infinity, Math.max(0, Number(e.target.value) || 0)))} className="w-full h-11 rounded-md border border-input bg-background px-3 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
      </div>)}</div>
      <dl className="divide-y divide-border">{[
        ["Honoraires sur 12 mois complets", eur(result.annualFees)],
        ["Honoraires sur la durée estimée", eur(result.lifetimeFees)],
        ["Contribution après acquisition", eur(result.contributionAfterAcquisition)],
        ["Délai de récupération du coût d'acquisition", result.paybackMonths === null ? "Non calculable" : `${result.paybackMonths.toLocaleString("fr-FR", { maximumFractionDigits: 1 })} mois`],
      ].map(([label, value]) => <div key={label} className="py-3 flex justify-between gap-4"><dt className="text-sm text-muted-foreground">{label}</dt><dd className="font-semibold tabular-nums shrink-0">{value}</dd></div>)}</dl>
    </div>
    <div className="mt-6 max-w-3xl text-sm text-muted-foreground space-y-2 leading-relaxed">
      <p>Formules : honoraires = mensualité × durée ; contribution = honoraires × marge contributive − coût d'acquisition ; délai de récupération = coût d'acquisition ÷ contribution mensuelle.</p>
      <p>Exemple hypothétique : 250 € × 36 mois = 9 000 € HT ; à 40 % de marge et 300 € de coût d'acquisition, contribution estimée de 3 300 €. Hypothèses ajustables, sans actualisation, impayés ni hausse des honoraires ; aucune performance promise.</p>
      <p>Le coût d'acquisition inclut les leads, les outils et le temps commercial. La marge contributive déduit les coûts de production affectables, mais pas nécessairement tous les frais de structure. <SafeLink to="/blog/cout-acquisition-client-cabinet-comptable" className="underline">Calculer le CAC</SafeLink> · <SafeLink to="/blog/churn-cabinet-expertise-comptable" className="underline">Mesurer la rétention</SafeLink> · <SafeLink to="/trouver-des-clients-cabinet-comptable" className="underline">Développer le portefeuille</SafeLink>.</p>
    </div>
  </section>;
}