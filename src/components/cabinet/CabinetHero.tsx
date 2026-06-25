import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Building2, FileSearch, Radar, Sparkles, BadgeCheck, Mail, Phone, Target } from "lucide-react";
import { SafeLink } from "@/components/SafeLink";

const sourceNodes = [
  { label: "INPI", icon: Building2 },
  { label: "Sirene", icon: Database },
  { label: "BODACC", icon: FileSearch },
  { label: "Pappers", icon: Radar },
];

const signalNodes = [
  { label: "Nouveau lead détecté", sub: "SAS · Paris 11e · capital 5 k€", icon: Sparkles },
  { label: "Score expliqué : 92", sub: "Primo-entrepreneur · pas de CAC", icon: BadgeCheck },
  { label: "Email pro vérifié", sub: "sophie.martin@lumetech.fr", icon: Mail },
  { label: "Téléphone direct trouvé", sub: "Mobile décideur · ligne pro", icon: Phone },
];

export const CabinetHero = () => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-background via-background to-muted/40"
    >
      {/* Soft ambient backdrop */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-gradient-to-br from-primary/10 via-accent/5 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        {/* Narrative — centered, Topo-style */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Conçu avec 4 cabinets d'expertise comptable
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.02] mb-4">
            Vos prochains clients
            <br />
            <em className="italic font-normal text-primary">viennent de signer leur Kbis.</em>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Eligibly détecte chaque matin les SASU et SAS de votre zone géographique les plus susceptibles de chercher un expert-comptable. Filtres amont, score expliqué, plan d'action.
          </p>

          {/* CTA bar — Topo signature */}
          <div className="max-w-lg mx-auto mb-4">
            <div className="flex flex-col sm:flex-row gap-2 p-1.5 rounded-2xl border border-border bg-card shadow-lg shadow-foreground/5">
              <input
                type="email"
                placeholder="votre.email@cabinet.fr"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                aria-label="Email professionnel"
              />
              <SafeLink to="/demo">
                <Button className="w-full sm:w-auto h-11 px-5 text-sm font-semibold gap-2 rounded-xl">
                  Réserver une démo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </SafeLink>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              14 jours pilote gratuit · Sans CB · Annulation en 1 clic
            </p>
          </div>
        </div>

        {/* Orchestration visual — sources → agent orb → signals */}
        <div className="relative max-w-6xl mx-auto mt-16 md:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 items-center">
            {/* Sources */}
            <div className="space-y-3">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground font-semibold text-center lg:text-right mb-4">
                Sources officielles
              </p>
              {sourceNodes.map((node) => (
                <div
                  key={node.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card/80 backdrop-blur shadow-sm lg:ml-auto lg:w-fit hover:border-primary/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <node.icon className="w-4 h-4 text-foreground/70" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{node.label}</span>
                </div>
              ))}
            </div>

            {/* Agent orb */}
            <div className="relative flex items-center justify-center py-8 lg:py-0">
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-2xl animate-pulse" />
              </div>
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary to-accent shadow-2xl shadow-primary/30 flex items-center justify-center">
                <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-background/10 to-transparent" />
                <div className="absolute inset-0 rounded-full border border-primary-foreground/20" />
                <div className="relative text-center px-6">
                  <Target className="w-8 h-8 text-primary-foreground mx-auto mb-2" />
                  <p className="text-primary-foreground font-display text-sm md:text-base font-semibold leading-tight">
                    Agent<br />Eligibly
                  </p>
                </div>
              </div>
              {/* Connector lines (desktop only) */}
              <svg className="hidden lg:block absolute -left-10 top-1/2 -translate-y-1/2 w-10 h-40 text-border" aria-hidden="true">
                <path d="M0 20 Q 20 80 40 80" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                <path d="M0 80 L 40 80" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                <path d="M0 140 Q 20 80 40 80" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 3" />
              </svg>
              <svg className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 w-10 h-40 text-border" aria-hidden="true">
                <path d="M40 20 Q 20 80 0 80" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                <path d="M40 80 L 0 80" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                <path d="M40 140 Q 20 80 0 80" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 3" />
              </svg>
            </div>

            {/* Signals */}
            <div className="space-y-3">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-primary font-semibold text-center lg:text-left mb-4">
                Signaux livrés ce matin
              </p>
              {signalNodes.map((node) => (
                <div
                  key={node.label}
                  className="flex items-start gap-3 px-4 py-3 rounded-xl border border-primary/20 bg-card shadow-sm lg:w-fit hover:border-primary/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <node.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground leading-tight">{node.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{node.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};