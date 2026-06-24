import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { SafeLink } from "@/components/SafeLink";

const sampleLeads = [
  {
    initials: "SM",
    name: "Sophie Martin",
    company: "SAS LumeTech · Paris 11e",
    score: 82,
    badge: "PREMIUM",
    why: "Primo-entrepreneur SaaS, email pro vérifié, aucun CAC mandaté.",
    tone: "premium",
  },
  {
    initials: "KB",
    name: "Karim Belkacem",
    company: "SASU Atelier Nord · Lille",
    score: 71,
    badge: "STANDARD",
    why: "Artisan indépendant, capital 1 500 €, LinkedIn matché.",
    tone: "standard",
  },
  {
    initials: "EC",
    name: "Élodie Carbonne",
    company: "SAS Mosaïque Conseil · Lyon 2e",
    score: 64,
    badge: "À VÉRIFIER",
    why: "Téléphone direct manquant, secteur conseil aligné ICP.",
    tone: "warn",
  },
  {
    initials: "TR",
    name: "Thomas Renard",
    company: "SAS Renard & Co · Nantes",
    score: 58,
    badge: "STANDARD",
    why: "2e société en 3 ans — à recroiser avec votre stratégie.",
    tone: "standard",
  },
];

const toneClasses: Record<string, string> = {
  premium: "bg-primary/10 text-primary border-primary/20",
  standard: "bg-muted text-foreground border-border",
  warn: "bg-amber-100/80 text-amber-900 border-amber-200 dark:bg-amber-950/40 dark:text-amber-200",
};

export const CabinetHero = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-background via-background to-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          {/* Narration */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              CRM de prospection vertical · cabinets d'expertise comptable
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.05] mb-6">
              Vos prochains clients sont <em className="italic text-primary font-medium">fraîchement immatriculés.</em>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Eligibly consolide chaque jour les SASU et SAS créées en France, applique des filtres amont (CAC mandaté, procédure collective, holding, serial entrepreneur) et vous présente les leads potentiellement adressables avec un score expliqué et un plan d'action.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <SafeLink to="/demo">
                <Button size="lg" className="h-12 px-6 text-sm font-semibold uppercase tracking-[0.1em] gap-2">
                  Démarrer mon pilote 14 jours
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </SafeLink>
              <a href="#preview">
                <Button size="lg" variant="outline" className="h-12 px-6 text-sm font-semibold uppercase tracking-[0.1em]">
                  Voir le produit
                </Button>
              </a>
            </div>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-primary" />14 jours gratuits, sans CB</li>
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" />Filtres qualité amont</li>
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" />RGPD compliant</li>
              <li className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-primary" />Made in France</li>
            </ul>
          </div>

          {/* Mockup */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 blur-3xl rounded-[3rem]" aria-hidden="true" />
            <div className="relative rounded-2xl border border-border bg-card shadow-2xl shadow-foreground/5 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-muted/50">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <span className="text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground font-medium">
                  Top leads recommandés · 24 juin
                </span>
              </div>
              <ul className="divide-y divide-border">
                {sampleLeads.map((lead) => (
                  <li key={lead.name} className="px-5 py-4 flex items-start gap-4 hover:bg-muted/40 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center text-sm font-semibold shrink-0">
                      {lead.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <p className="font-semibold text-foreground truncate">{lead.name}</p>
                        <span className={`text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${toneClasses[lead.tone]}`}>
                          {lead.badge} · {lead.score}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1.5">{lead.company}</p>
                      <p className="text-sm text-foreground/80 leading-snug">
                        <span className="font-medium text-foreground">Pourquoi :</span> {lead.why}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};