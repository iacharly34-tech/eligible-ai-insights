import { Button } from "@/components/ui/button";
import { Check, Phone, ArrowRight } from "lucide-react";
import { SafeLink } from "@/components/SafeLink";
import { useLang, localizedHref } from "@/hooks/useLang";

const copy = {
  fr: {
    eyebrow: "Aperçu produit",
    h2a: "À quoi ressemble",
    h2b: "une alerte Eligibly",
    p1: "Chaque matin à 7h00, vos leads PREMIUM scorés par l'IA arrivent où vous travaillez déjà. Pour chacun : score expliqué, signaux positifs, points à vérifier.",
    p2: "Scoring IA expliqué, pas boîte noire.",
    bullets: [
      { t: "Identité dirigeant", d: "nom, fonction, LinkedIn matchés par notre IA." },
      { t: "Contactabilité", d: "email pro vérifié, téléphone direct quand disponible." },
      { t: "Signaux primo", d: "entrepreneur indépendant vs multi-sociétés." },
      { t: "Filtres IA amont", d: "CAC, procédure, cessation, holding, serial systématiquement écartés." },
      { t: "Alerte livrée", d: "directement dans vos canaux et outils de prospection." },
    ],
    cardRole: "Présidente · SAS LumeTech",
    cardWhyLabel: "Pourquoi ce lead est prioritaire",
    cardWhy: "Primo-entrepreneur confirmé, secteur SaaS aligné ICP cabinet, email pro vérifié et URL LinkedIn matchée. Société récente sans CAC mandaté ni signal de procédure. Score amplifié par le profil primo (×1.4).",
    kv: [["Immatriculation", "12 juin 2026"], ["Capital", "5 000 €"], ["Secteur", "NAF 5829C · Édition logiciels"], ["Siège", "Paris 11e"]] as [string, string][],
    btnA: "Préparer mon appel",
    btnB: "Envoyer vers mon outil",
  },
  en: {
    eyebrow: "Product preview",
    h2a: "What",
    h2b: "an Eligibly alert",
    p1: "Every morning at 7:00 AM, your AI-scored PREMIUM leads arrive where you already work. For each one: explained score, positive signals, points to verify.",
    p2: "Transparent AI scoring — not a black box.",
    bullets: [
      { t: "Founder identity", d: "name, role, LinkedIn matched by our AI." },
      { t: "Contactability", d: "verified work email, direct phone when available." },
      { t: "First-time signals", d: "solo founder vs. multi-company operator." },
      { t: "Upstream AI filters", d: "auditors, insolvency, dissolution, holdings, serial founders systematically excluded." },
      { t: "Alert delivered", d: "straight into your channels and prospecting tools." },
    ],
    cardRole: "President · LumeTech",
    cardWhyLabel: "Why this lead is a priority",
    cardWhy: "Confirmed first-time founder, SaaS sector aligned with your firm's ICP, verified work email and matched LinkedIn URL. Recent company with no mandated auditor and no insolvency signal. Score boosted by first-time profile (×1.4).",
    kv: [["Registered", "June 12, 2026"], ["Capital", "€5,000"], ["Industry", "NAICS 5112 · Software publishing"], ["HQ", "Paris 11e"]] as [string, string][],
    btnA: "Prep my call",
    btnB: "Push to my tool",
  },
} as const;

export const CabinetPreview = () => {
  const lang = useLang();
  const t = copy[lang];
  return (
    <section id="preview" className="py-20 md:py-28 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">
              {t.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight mb-5">
              {t.h2a} <em className="italic text-primary font-medium">{t.h2b}</em>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-2">
              {t.p1}
            </p>
            <p className="text-sm font-medium text-foreground mb-6">
              {t.p2}
            </p>
            <ul className="space-y-3">
              {t.bullets.map((b) => (
                <li key={b.t} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground/85">
                    <span className="font-semibold text-foreground">{b.t}</span> · {b.d}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-border bg-card shadow-2xl shadow-foreground/5 overflow-hidden">
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center text-lg font-semibold">
                      SM
                    </div>
                    <div>
                      <p className="font-display text-xl font-semibold text-foreground">Sophie Martin</p>
                      <p className="text-sm text-muted-foreground">{t.cardRole}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-display italic text-3xl font-semibold text-primary leading-none">82</p>
                    <span className="inline-block mt-1 text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      PREMIUM
                    </span>
                  </div>
                </div>

                <div className="rounded-lg bg-primary/5 border-l-[3px] border-primary p-4 mb-5">
                  <p className="text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold mb-2">
                    {t.cardWhyLabel}
                  </p>
                  <p className="text-sm text-foreground/85 leading-relaxed">
                    {t.cardWhy}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                  {t.kv.map(([k, v]) => (
                    <div key={k} className="rounded-md bg-muted/60 px-3 py-2">
                      <p className="text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground font-medium">{k}</p>
                      <p className="text-foreground font-medium">{v}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <SafeLink to={localizedHref("/demo", lang)} className="flex-1">
                    <Button variant="tengo" className="w-full h-12 px-6 text-sm font-semibold group">
                      <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                      {t.btnA}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </SafeLink>
                  <Button variant="outline" className="flex-1 h-12 px-6 text-sm font-semibold">
                    {t.btnB}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};