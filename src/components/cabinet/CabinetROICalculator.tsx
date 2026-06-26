import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { ArrowRight, Calculator, TrendingDown, Clock, Wallet } from "lucide-react";

const STORAGE_KEY = "eligibly_roi_v1";

type Size = "1-4" | "5-10" | "11-20" | "21-30" | "30+";
const sizeHours: Record<Size, number> = {
  "1-4": 20,
  "5-10": 50,
  "11-20": 90,
  "21-30": 130,
  "30+": 180,
};

const fmt = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(Math.max(0, Math.round(n)));

export const CabinetROICalculator = () => {
  const [spend, setSpend] = useState<number>(800);
  const [leads, setLeads] = useState<number>(15);
  const [rdvRate, setRdvRate] = useState<number>(8);
  const [size, setSize] = useState<Size>("11-20");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const v = JSON.parse(raw);
        if (typeof v.spend === "number") setSpend(v.spend);
        if (typeof v.leads === "number") setLeads(v.leads);
        if (typeof v.rdvRate === "number") setRdvRate(v.rdvRate);
        if (typeof v.size === "string") setSize(v.size as Size);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ spend, leads, rdvRate, size }));
    } catch {}
  }, [spend, leads, rdvRate, size]);

  const results = useMemo(() => {
    const yearlyCurrent = spend * 12;
    const costPerLead = leads > 0 ? spend / leads : 0;
    const rdvCount = leads * (rdvRate / 100);
    const costPerRdv = rdvCount > 0 ? spend / rdvCount : 0;
    const hoursLost = sizeHours[size];
    const eligiblyYear = 290 * 12;
    const saving = yearlyCurrent - eligiblyYear;
    const daysSaved = (hoursLost * 12) / 7;
    return { yearlyCurrent, costPerLead, costPerRdv, hoursLost, eligiblyYear, saving, daysSaved };
  }, [spend, leads, rdvRate, size]);

  const mailtoBody = encodeURIComponent(
    `Bonjour,\n\nJe souhaite réserver une démo Eligibly. Voici mon contexte actuel :\n\n• Dépense mensuelle leads : ${fmt(spend)} €\n• Volume leads / mois : ${fmt(leads)}\n• Taux RDV : ${rdvRate} %\n• Taille cabinet : ${size} collaborateurs\n\nEstimation Eligibly :\n• Économie annuelle nette : ${fmt(results.saving)} €\n• Temps collab économisé : ${fmt(results.hoursLost)} h/mois\n\nMerci,`
  );

  return (
    <section id="roi" className="py-20 md:py-28 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4 flex items-center gap-2">
            <Calculator className="w-3.5 h-3.5" /> Calculateur ROI
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            Combien vous coûte <em className="italic text-primary font-medium">vraiment</em> votre stack lead actuelle ?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            En 30 secondes, mesurez l'écart entre votre dépense actuelle en leads achetés et le coût d'Eligibly (290 € HT flat).
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Inputs */}
          <div className="rounded-2xl border-2 border-primary/40 bg-card p-7 sm:p-8">
            <div className="space-y-7">
              <div>
                <label className="block font-display italic text-base text-foreground mb-2">
                  Combien dépensez-vous par mois en leads achetés ?
                </label>
                <p className="text-xs text-muted-foreground mb-3">Compta-Online, Companeo, Pages Jaunes, Google Ads cumulés.</p>
                <div className="relative">
                  <input
                    type="number"
                    min={0}
                    value={spend}
                    onChange={(e) => setSpend(Math.max(0, Number(e.target.value) || 0))}
                    className="w-full h-12 px-4 pr-10 rounded-xl border border-border bg-background text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">€</span>
                </div>
              </div>

              <div>
                <label className="block font-display italic text-base text-foreground mb-2">
                  Combien de leads recevez-vous par mois ?
                </label>
                <input
                  type="number"
                  min={0}
                  value={leads}
                  onChange={(e) => setLeads(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div>
                <label className="flex items-baseline justify-between font-display italic text-base text-foreground mb-2">
                  <span>Taux de RDV obtenu sur ces leads</span>
                  <span className="text-primary font-semibold not-italic font-sans">{rdvRate} %</span>
                </label>
                <input
                  type="range"
                  min={0}
                  max={30}
                  value={rdvRate}
                  onChange={(e) => setRdvRate(Number(e.target.value))}
                  className="w-full accent-primary"
                />
              </div>

              <div>
                <label className="block font-display italic text-base text-foreground mb-2">
                  Taille de votre cabinet
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {(Object.keys(sizeHours) as Size[]).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      className={`h-10 rounded-lg border text-sm font-medium transition-all ${
                        size === s
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-foreground/80 hover:border-primary/50"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Output */}
          <div className="rounded-2xl bg-foreground text-background p-7 sm:p-8 flex flex-col">
            <div className="text-[0.74rem] uppercase tracking-[0.14em] text-background/60 font-semibold mb-5">
              Votre stack actuelle
            </div>
            <div className="grid grid-cols-2 gap-4 mb-7">
              <Stat label="Coût annuel leads" value={`${fmt(results.yearlyCurrent)} €`} />
              <Stat label="Coût par lead" value={`${fmt(results.costPerLead)} €`} />
              <Stat label="Coût par RDV" value={`${fmt(results.costPerRdv)} €`} />
              <Stat label="Temps collab perdu" value={`${fmt(results.hoursLost)} h/mois`} />
            </div>

            <div className="border-t border-background/20 pt-6 mb-6">
              <div className="text-[0.74rem] uppercase tracking-[0.14em] text-primary/90 font-semibold mb-4 flex items-center gap-2">
                <TrendingDown className="w-3.5 h-3.5" /> Avec Eligibly · 290 € HT flat
              </div>
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-background/70 text-sm flex items-center gap-2"><Wallet className="w-4 h-4" /> Économie annuelle nette</span>
                  <span className="font-display italic text-3xl sm:text-4xl text-primary font-semibold">
                    {fmt(results.saving)} €
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-background/70 text-sm flex items-center gap-2"><Clock className="w-4 h-4" /> Équivalent en jours collab</span>
                  <span className="font-display italic text-xl text-background font-semibold">
                    {fmt(results.daysSaved)} j/an
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-4">
              <SafeLink to={`/demo?roi=1`}>
                <Button variant="tengo" className="w-full h-12 text-sm font-semibold group">
                  Réserver ma démo personnalisée
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SafeLink>
              <a
                href={`mailto:contact@eligibly.ai?subject=${encodeURIComponent("Démo Eligibly — résultats calculateur")}&body=${mailtoBody}`}
                className="block mt-2 text-center text-xs text-background/60 hover:text-background/90 underline underline-offset-2"
              >
                ou envoyer ces résultats par email
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-muted-foreground max-w-3xl">
          Estimation indicative basée sur les ratios moyens observés. Le ROI réel dépend de votre exécution commerciale et de votre ICP précis. À valider lors de la démo personnalisée.
        </p>
      </div>
    </section>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-xs text-background/60 mb-1">{label}</div>
    <div className="font-display text-xl text-background font-semibold tabular-nums">{value}</div>
  </div>
);