import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

/**
 * Calculateur d'impact : volume de leads détectés × qualité de la mise en relation × taux de signature.
 * La couche visibilité (moteurs de recherche + assistants IA) n'est pas une fin en soi :
 * elle agit comme un multiplicateur sur le taux de réponse et le taux de signature des leads travaillés.
 * Tout est calculé côté navigateur, aucune donnée n'est envoyée.
 */
export const CabinetVisibilityROI = () => {
  const [leadsPerWeek, setLeadsPerWeek] = useState(2); // objectif : 2 leads qualifiés / semaine
  const [reachRate, setReachRate] = useState(70); // % de leads réellement joints (WhatsApp, appel, email, LinkedIn)
  const [closeBase, setCloseBase] = useState(20); // % de signature sans couche visibilité
  const [closeVisible, setCloseVisible] = useState(40); // % de signature avec couche visibilité
  const [monthlyArpa, setMonthlyArpa] = useState(250); // honoraires mensuels moyens par client

  const r = useMemo(() => {
    const leadsMonth = leadsPerWeek * 4.33;
    const reached = (leadsMonth * reachRate) / 100;
    const signedBase = (reached * closeBase) / 100;
    const signedVisible = (reached * closeVisible) / 100;
    const deltaSigned = signedVisible - signedBase;
    return {
      leadsMonth,
      reached,
      signedBase,
      signedVisible,
      deltaSigned,
      annualBase: signedBase * 12 * monthlyArpa,
      annualVisible: signedVisible * 12 * monthlyArpa,
      annualDelta: deltaSigned * 12 * monthlyArpa,
    };
  }, [leadsPerWeek, reachRate, closeBase, closeVisible, monthlyArpa]);

  const fmt = (n: number, d = 0) =>
    new Intl.NumberFormat("fr-FR", { maximumFractionDigits: d, minimumFractionDigits: d }).format(
      Math.max(0, n),
    );

  return (
    <section id="calculateur-visibilite" className="py-16 md:py-20 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3 flex items-center gap-2">
          <Calculator className="w-3.5 h-3.5" aria-hidden="true" /> Calculateur d'impact leads
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
          Ce que valent 2 leads par semaine, signés à 40 %
        </h2>
        <p className="mt-3 text-muted-foreground max-w-3xl leading-relaxed">
          Le modèle part du volume de leads détectés, pas du référencement. La couche marque &amp; visibilité
          (fiche Google, avis, site indexable, présence dans ChatGPT / Perplexity / Gemini) intervient comme
          multiplicateur : à volume de leads identique, un cabinet que le créateur peut vérifier en ligne signe
          nettement plus. Ajustez les curseurs avec vos propres taux.
        </p>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 space-y-6">
            <Field
              label="Leads qualifiés détectés par semaine"
              hint="Objectif de référence : 2 immatriculations scorées et exploitables par semaine."
              value={leadsPerWeek}
              onChange={setLeadsPerWeek}
              suffix="/ semaine"
            />
            <Slider
              label="Taux de mise en relation (WhatsApp, appel, email, LinkedIn)"
              value={reachRate}
              onChange={setReachRate}
              max={100}
            />
            <Slider
              label="Taux de signature sans couche visibilité"
              value={closeBase}
              onChange={setCloseBase}
              max={80}
            />
            <Slider
              label="Taux de signature avec visibilité search + IA"
              value={closeVisible}
              onChange={setCloseVisible}
              max={80}
            />
            <Field
              label="Honoraires mensuels moyens par client"
              value={monthlyArpa}
              onChange={setMonthlyArpa}
              suffix="€ HT / mois"
            />
          </div>

          <div className="rounded-2xl bg-foreground text-background p-6 sm:p-7 flex flex-col">
            <div className="text-[0.74rem] uppercase tracking-[0.14em] text-background/80 font-semibold mb-5">
              Projection mensuelle
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm tabular-nums">
                <thead>
                  <tr className="text-background/70 text-xs uppercase tracking-wider">
                    <th className="text-left font-medium pb-2">Étape</th>
                    <th className="text-right font-medium pb-2">Sans visibilité</th>
                    <th className="text-right font-medium pb-2">Avec visibilité</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-background/15">
                  <Row label="Leads détectés / mois" a={fmt(r.leadsMonth, 1)} b={fmt(r.leadsMonth, 1)} />
                  <Row label="Créateurs réellement joints" a={fmt(r.reached, 1)} b={fmt(r.reached, 1)} />
                  <Row label="Clients signés" a={fmt(r.signedBase, 1)} b={fmt(r.signedVisible, 1)} />
                  <Row
                    label="Honoraires récurrents ajoutés (12 mois)"
                    a={`${fmt(r.annualBase)} €`}
                    b={`${fmt(r.annualVisible)} €`}
                  />
                </tbody>
              </table>
            </div>

            <div className="mt-6 border-t border-background/20 pt-5 space-y-3">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-background/85 text-sm">Clients supplémentaires / mois</span>
                <span className="font-display text-2xl font-semibold text-primary tabular-nums">
                  +{fmt(r.deltaSigned, 1)}
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-background/85 text-sm">Écart d'honoraires sur 12 mois</span>
                <span className="font-display text-2xl font-semibold text-background tabular-nums">
                  {fmt(r.annualDelta)} €
                </span>
              </div>
            </div>

            <p className="mt-auto pt-6 text-[0.72rem] text-background/70 leading-relaxed">
              Lecture : la détection fixe le volume, la visibilité fixe le taux de transformation. Un créateur
              qui vérifie votre cabinet sur Google, vos avis et via un assistant IA avant de répondre ne signe
              pas au même taux qu'un cabinet introuvable — d'où l'enchaînement visibilité puis prospection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


const Row = ({ label, a, b }: { label: string; a: string; b: string }) => (
  <tr>
    <td className="py-2.5 text-background/85">{label}</td>
    <td className="py-2.5 text-right text-background/70">{a}</td>
    <td className="py-2.5 text-right font-semibold text-background">{b}</td>
  </tr>
);

const Field = ({
  label,
  hint,
  value,
  onChange,
  suffix,
}: {
  label: string;
  hint?: string;
  value: number;
  onChange: (n: number) => void;
  suffix?: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
    {hint && <p className="text-xs text-muted-foreground mb-2">{hint}</p>}
    <div className="relative">
      <input
        type="number"
        min={0}
        value={value}
        onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
        aria-label={label}
        className="w-full h-11 px-4 pr-24 rounded-xl border border-border bg-background text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
      {suffix && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">{suffix}</span>
      )}
    </div>
  </div>
);

const Slider = ({
  label,
  value,
  onChange,
  max,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  max: number;
}) => (
  <div>
    <label className="flex items-baseline justify-between text-sm font-medium text-foreground mb-2">
      <span>{label}</span>
      <span className="text-primary font-semibold tabular-nums">{value} %</span>
    </label>
    <input
      type="range"
      min={0}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      aria-label={label}
      className="w-full accent-primary"
    />
  </div>
);
