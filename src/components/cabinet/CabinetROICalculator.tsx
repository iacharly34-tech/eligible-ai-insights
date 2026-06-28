import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { ArrowRight, Calculator, TrendingDown, Clock, Wallet, Mail, Phone, Linkedin, MapPin, Sparkles } from "lucide-react";
import { useLang, localizedHref } from "@/hooks/useLang";

const STORAGE_KEY = "eligibly_roi_v1";

type Size = "1-4" | "5-10" | "11-20" | "21-30" | "30+";
const sizeHours: Record<Size, number> = {
  "1-4": 20,
  "5-10": 50,
  "11-20": 90,
  "21-30": 130,
  "30+": 180,
};

const copy = {
  fr: {
    eyebrow: "Calculateur ROI",
    h2a: "Combien vous coûte",
    h2b: "vraiment",
    h2c: "votre stack lead actuelle ?",
    sub: "En 30 secondes, mesurez le coût réel de votre acquisition actuelle. Nous vous remettons ensuite une proposition chiffrée, alignée sur votre cabinet.",
    qSpend: "Combien dépensez-vous par mois en leads achetés ?",
    qSpendHint: "Annuaires, plateformes d'apporteurs, places de marché et publicité cumulés.",
    qLeads: "Combien de leads recevez-vous par mois ?",
    qRdv: "Taux de RDV obtenu sur ces leads",
    qSize: "Taille de votre cabinet",
    current: "Votre stack actuelle",
    stat1: "Coût annuel leads",
    stat2: "Coût par lead",
    stat3: "Coût par RDV",
    stat4: "Temps collab perdu",
    withEligibly: "Avec Eligibly · abonnement adapté",
    saving: "Économie potentielle",
    savingValue: "À chiffrer ensemble",
    timeSaved: "Temps collab économisé",
    cta: "Recevoir mon premier lead gratuit",
    mailLink: "ou envoyer ces résultats par email",
    foot: "Estimation indicative basée sur les ratios moyens observés. Le ROI réel dépend de votre exécution commerciale et de votre ICP précis. À valider lors de la démo personnalisée.",
    locale: "fr-FR",
    currency: "€",
    perMonth: "h/mois",
    mailSubject: "Démo Eligibly — résultats calculateur",
    mailBody: (spend: string, leads: string, rdvRate: number, size: string) => `Bonjour,\n\nJe souhaite recevoir une proposition Eligibly. Voici mon contexte actuel :\n\n• Dépense mensuelle leads : ${spend} €\n• Volume leads / mois : ${leads}\n• Taux RDV : ${rdvRate} %\n• Taille cabinet : ${size} collaborateurs\n\nMerci de me communiquer votre tarif et un créneau de démo.\n`,
  },
  en: {
    eyebrow: "ROI calculator",
    h2a: "How much does your current lead stack",
    h2b: "really",
    h2c: "cost you?",
    sub: "In 30 seconds, measure the real cost of your current acquisition. We then hand you a quote aligned with your firm.",
    qSpend: "How much do you spend each month on bought leads?",
    qSpendHint: "Directories, lead platforms, marketplaces and ads combined.",
    qLeads: "How many leads do you receive per month?",
    qRdv: "Meeting-booking rate on these leads",
    qSize: "Your firm size",
    current: "Your current stack",
    stat1: "Annual lead spend",
    stat2: "Cost per lead",
    stat3: "Cost per meeting",
    stat4: "Staff time lost",
    withEligibly: "With Eligibly · tailored subscription",
    saving: "Potential savings",
    savingValue: "To be sized together",
    timeSaved: "Staff time saved",
    cta: "Get my first lead — free",
    mailLink: "or email these results",
    foot: "Indicative estimate based on average observed ratios. Actual ROI depends on your sales execution and your precise ICP. To be validated during a personalized demo.",
    locale: "en-US",
    currency: "€",
    perMonth: "h/month",
    mailSubject: "Eligibly demo — calculator results",
    mailBody: (spend: string, leads: string, rdvRate: number, size: string) => `Hello,\n\nI'd like to receive an Eligibly proposal. Here is my current context:\n\n• Monthly lead spend: €${spend}\n• Leads per month: ${leads}\n• Meeting rate: ${rdvRate}%\n• Firm size: ${size} staff\n\nPlease share your pricing and a demo slot.\n`,
  },
} as const;

export const CabinetROICalculator = () => {
  const lang = useLang();
  const t = copy[lang];
  const fmt = (n: number) =>
    new Intl.NumberFormat(t.locale, { maximumFractionDigits: 0 }).format(Math.max(0, Math.round(n)));
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
    const daysSaved = (hoursLost * 12) / 7;
    return { yearlyCurrent, costPerLead, costPerRdv, hoursLost, daysSaved };
  }, [spend, leads, rdvRate, size]);

  const mailtoBody = encodeURIComponent(t.mailBody(fmt(spend), fmt(leads), rdvRate, size));

  return (
    <section id="roi" className="py-20 md:py-28 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4 flex items-center gap-2">
            <Calculator className="w-3.5 h-3.5" /> {t.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            {t.h2a} <em className="italic text-primary font-medium">{t.h2b}</em> {t.h2c}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.sub}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Inputs */}
          <div className="rounded-2xl border-2 border-primary/40 bg-card p-7 sm:p-8">
            <div className="space-y-7">
              <div>
                <label className="block font-display italic text-base text-foreground mb-2">
                  {t.qSpend}
                </label>
                <p className="text-xs text-muted-foreground mb-3">{t.qSpendHint}</p>
                <div className="relative">
                  <input
                    type="number"
                    min={0}
                    value={spend}
                    onChange={(e) => setSpend(Math.max(0, Number(e.target.value) || 0))}
                    className="w-full h-12 px-4 pr-10 rounded-xl border border-border bg-background text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">{t.currency}</span>
                </div>
              </div>

              <div>
                <label className="block font-display italic text-base text-foreground mb-2">
                  {t.qLeads}
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
                  <span>{t.qRdv}</span>
                  <span className="text-primary font-semibold not-italic font-sans">{rdvRate} %</span>
                </label>
                <input
                  type="range"
                  min={0}
                  max={30}
                  value={rdvRate}
                  onChange={(e) => setRdvRate(Number(e.target.value))}
                  className="w-full accent-primary"
                  aria-label={t.qRdv}
                  aria-valuemin={0}
                  aria-valuemax={30}
                  aria-valuenow={rdvRate}
                />
              </div>

              <div>
                <label className="block font-display italic text-base text-foreground mb-2">
                  {t.qSize}
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
            <div className="text-[0.74rem] uppercase tracking-[0.14em] text-background/80 font-semibold mb-5">
              {t.current}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-7">
              <Stat label={t.stat1} value={`${fmt(results.yearlyCurrent)} ${t.currency}`} />
              <Stat label={t.stat2} value={`${fmt(results.costPerLead)} ${t.currency}`} />
              <Stat label={t.stat3} value={`${fmt(results.costPerRdv)} ${t.currency}`} />
              <Stat label={t.stat4} value={`${fmt(results.hoursLost)} ${t.perMonth}`} />
            </div>

            <div className="border-t border-background/20 pt-6 mb-6">
              <div className="text-[0.74rem] uppercase tracking-[0.14em] text-primary/90 font-semibold mb-4 flex items-center gap-2">
                <TrendingDown className="w-3.5 h-3.5" /> {t.withEligibly}
              </div>
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-background/85 text-sm flex items-center gap-2"><Wallet className="w-4 h-4" /> {t.saving}</span>
                  <span className="font-display italic text-2xl sm:text-3xl text-primary font-semibold">
                    {t.savingValue}
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-background/85 text-sm flex items-center gap-2"><Clock className="w-4 h-4" /> {t.timeSaved}</span>
                  <span className="font-display italic text-xl text-background font-semibold">
                    ~{fmt(results.hoursLost)} {t.perMonth}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-4">
              <div className="mb-5 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <div className="text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold mb-2 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  {lang === "fr" ? "Inclus : 4 touchpoints par lead" : "Included: 4 touchpoints per lead"}
                </div>
                <div className="grid grid-cols-2 gap-2 text-[0.78rem]">
                  <div className="flex items-center gap-2 text-background/85"><Mail className="w-3.5 h-3.5 text-primary" /> {lang === "fr" ? "Email pro vérifié" : "Verified work email"}</div>
                  <div className="flex items-center gap-2 text-background/85"><Phone className="w-3.5 h-3.5 text-primary" /> {lang === "fr" ? "Téléphone pro" : "Work phone"}</div>
                  <div className="flex items-center gap-2 text-background/85"><Linkedin className="w-3.5 h-3.5 text-primary" /> {lang === "fr" ? "LinkedIn dirigeant" : "Founder LinkedIn"}</div>
                  <div className="flex items-center gap-2 text-background/85"><MapPin className="w-3.5 h-3.5 text-primary" /> {lang === "fr" ? "Adresse postale siège" : "Registered address"}</div>
                </div>
                <p className="mt-2 text-[0.7rem] text-background/70 italic">
                  {lang === "fr" ? "+ recommandation IA d'accroche (email + LinkedIn) prête à envoyer." : "+ AI outreach recommendation (email + LinkedIn) ready to send."}
                </p>
              </div>
              <SafeLink to={`${localizedHref("/demo", lang)}?roi=1`}>
                <Button variant="tengo" className="w-full h-12 text-sm font-semibold group">
                  {t.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SafeLink>
              <a
                href={`mailto:contact@eligibly.ai?subject=${encodeURIComponent(t.mailSubject)}&body=${mailtoBody}`}
                className="block mt-2 text-center text-xs text-background/80 hover:text-background underline underline-offset-2"
              >
                {t.mailLink}
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-muted-foreground max-w-3xl">
          {t.foot}
        </p>
      </div>
    </section>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-xs text-background/80 mb-1">{label}</div>
    <div className="font-display text-xl text-background font-semibold tabular-nums">{value}</div>
  </div>
);