import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

/**
 * Calculateur d'impact de la visibilité pour un cabinet d'expertise comptable.
 * Modèle volontairement simple et auditable : recherches locales → clics → contacts → signatures.
 * Aucune donnée n'est envoyée : tout est calculé côté navigateur.
 */
export const CabinetVisibilityROI = () => {
  const [impressions, setImpressions] = useState(1200); // recherches locales / mois sur vos requêtes
  const [ctrBefore, setCtrBefore] = useState(2); // % de clics en position actuelle
  const [ctrAfter, setCtrAfter] = useState(9); // % de clics dans le pack local / top 3
  const [contactRate, setContactRate] = useState(6); // % de visiteurs qui prennent contact
  const [closeRate, setCloseRate] = useState(35); // % de contacts signés
  const [arpa, setArpa] = useState(2400); // honoraires annuels moyens par client

  const r = useMemo(() => {
    const clicksBefore = (impressions * ctrBefore) / 100;
    const clicksAfter = (impressions * ctrAfter) / 100;
    const contacts = (c: number) => (c * contactRate) / 100;
    const signed = (c: number) => (contacts(c) * closeRate) / 100;
    const deltaSigned = signed(clicksAfter) - signed(clicksBefore);
    return {
      clicksBefore,
      clicksAfter,
      contactsBefore: contacts(clicksBefore),
      contactsAfter: contacts(clicksAfter),
      signedBefore: signed(clicksBefore),
      signedAfter: signed(clicksAfter),
      deltaSigned,
      annualDelta: deltaSigned * 12 * arpa,
    };
  }, [impressions, ctrBefore, ctrAfter, contactRate, closeRate, arpa]);

  const fmt = (n: number, d = 0) =>
    new Intl.NumberFormat("fr-FR", { maximumFractionDigits: d, minimumFractionDigits: d }).format(
      Math.max(0, n),
    );

  return (
    <section id="calculateur-visibilite" className="py-16 md:py-20 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3 flex items-center gap-2">
          <Calculator className="w-3.5 h-3.5" aria-hidden="true" /> Calculateur d'impact visibilité
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
          Ce que vaut une place dans le pack local
        </h2>
        <p className="mt-3 text-muted-foreground max-w-3xl leading-relaxed">
          Le modèle est délibérément élémentaire : recherches locales mensuelles, taux de clic avant/après,
          taux de prise de contact, taux de signature, honoraires annuels moyens. Ajustez chaque paramètre avec
          vos données Search Console et votre CRM — les valeurs par défaut sont des ordres de grandeur observés
          sur des cabinets de 5 à 20 collaborateurs, pas une promesse.
        </p>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 space-y-6">
            <Field
              label="Recherches locales mensuelles sur vos requêtes cibles"
              hint="Impressions Search Console + volume estimé « expert-comptable + ville »."
              value={impressions}
              onChange={setImpressions}
              suffix="/ mois"
            />
            <Slider label="Taux de clic actuel" value={ctrBefore} onChange={setCtrBefore} max={30} />
            <Slider label="Taux de clic visé (top 3 / pack local)" value={ctrAfter} onChange={setCtrAfter} max={30} />
            <Slider label="Taux de prise de contact du site" value={contactRate} onChange={setContactRate} max={25} />
            <Slider label="Taux de signature sur contacts entrants" value={closeRate} onChange={setCloseRate} max={80} />
            <Field
              label="Honoraires annuels moyens par client"
              value={arpa}
              onChange={setArpa}
              suffix="€ HT / an"
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
                    <th className="text-right font-medium pb-2">Actuel</th>
                    <th className="text-right font-medium pb-2">Visé</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-background/15">
                  <Row label="Visites depuis la recherche locale" a={fmt(r.clicksBefore)} b={fmt(r.clicksAfter)} />
                  <Row label="Prises de contact" a={fmt(r.contactsBefore, 1)} b={fmt(r.contactsAfter, 1)} />
                  <Row label="Clients signés" a={fmt(r.signedBefore, 1)} b={fmt(r.signedAfter, 1)} />
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
                <span className="text-background/85 text-sm">Honoraires récurrents ajoutés (12 mois)</span>
                <span className="font-display text-2xl font-semibold text-background tabular-nums">
                  {fmt(r.annualDelta)} €
                </span>
              </div>
            </div>

            <p className="mt-auto pt-6 text-[0.72rem] text-background/70 leading-relaxed">
              Lecture : la visibilité agit sur le haut de l'entonnoir entrant. Elle ne couvre pas les créateurs
              qui ne vous cherchent pas — d'où la complémentarité avec la détection d'immatriculations dans la
              fenêtre de 90 jours.
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
