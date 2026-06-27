import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle, Shield, Sparkles, Star, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";

const bullets = [
  "Données souveraines issues de l'INPI, du Sirene et du BODACC — jamais mutualisées",
  "Qualification automatisée selon vos critères ICP (secteur, capital, zone, forme juridique)",
  "Scoring explicable, auditable, et affiné par les retours de vos associés",
];

const morningLeads = [
  { ini: "SM", name: "Sophie Martin", co: "Nova SaaS SASU", meta: "Paris 11e · capital 5 k€ · NAF 62.01Z", score: 94 },
  { ini: "LR", name: "Léo Rouvière",  co: "Atelier Bois SAS", meta: "Lyon 7e · capital 10 k€ · NAF 16.29Z", score: 88 },
  { ini: "AD", name: "Amélie Dubois", co: "Clinique du Sport SEL", meta: "Bordeaux · capital 8 k€ · santé", score: 82 },
];

export const CabinetHero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-hero pt-16 pb-20 sm:pt-20 sm:pb-28"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" aria-hidden="true" />
      <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 -right-32 w-[28rem] h-[28rem] bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container mx-auto relative px-4">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT — copy column */}
          <div className="animate-fade-in">
            <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 px-3 py-1.5 text-xs sm:text-sm mb-6 inline-flex">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
              Plateforme de détection de prospects pour cabinets d'expertise comptable
            </Badge>

            <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground font-semibold">
              La prospection des cabinets d'expertise comptable,{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent italic font-display">
                enfin maîtrisée.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Eligibly identifie chaque jour les sociétés nouvellement immatriculées correspondant à votre clientèle cible, les qualifie selon vos critères, et livre à vos associés une sélection priorisée — dans Slack, Teams ou par email. <strong className="text-foreground font-semibold">Une source de développement structurée, prévisible, et conforme.</strong>
            </p>

            <ul className="mt-6 space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base">
                  <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10">
                    <CheckCircle className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  </span>
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <SafeLink to="/demo">
                <Button variant="tengo" className="w-full sm:w-auto h-12 px-6 text-sm font-semibold group">
                  Demander une démonstration
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </SafeLink>
              <SafeLink to="/demo">
                <Button variant="outline" className="w-full sm:w-auto h-12 px-6 text-sm font-semibold">
                  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                  Échanger avec un conseiller
                </Button>
              </SafeLink>
            </div>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" aria-hidden="true" />
                <span className="text-muted-foreground">Sources officielles <strong className="text-foreground">INPI · Sirene · BODACC</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[0,1,2,3,4].map(i => <Star key={i} className="w-4 h-4 fill-warning text-warning" aria-hidden="true" />)}
                </div>
                <span className="text-muted-foreground">Conçu avec <strong className="text-foreground">4 cabinets pilotes</strong> en France</span>
              </div>
            </div>
          </div>

          {/* RIGHT — morning email mockup */}
          <div className="relative animate-fade-in lg:pl-4">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl blur-2xl" aria-hidden="true" />

            <div className="relative bg-card rounded-2xl shadow-elegant border border-border/60 overflow-hidden">
              {/* Email header */}
              <div className="px-5 py-4 border-b border-border/60 bg-muted/20">
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground mb-2">
                  <Mail className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  <span>Boîte de réception · 07h02</span>
                  <span className="ml-auto px-2 py-0.5 rounded-full bg-success/10 text-success font-semibold">Nouveau</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">eligibly@</span> à associés@cabinet.fr
                </div>
                <div className="mt-1 font-display text-base sm:text-lg font-semibold text-foreground leading-snug">
                  Sélection du jour — <em className="italic text-primary">3 prospects prioritaires</em>
                </div>
              </div>

              {/* Email body */}
              <div className="p-5 sm:p-6 space-y-3">
                {morningLeads.map((l, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-border/60 bg-background/50 hover:border-primary/40 transition-colors">
                    <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-xs font-semibold flex-shrink-0">{l.ini}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground truncate">{l.name} · {l.co}</div>
                      <div className="text-[11px] text-muted-foreground truncate">{l.meta}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Score</div>
                      <div className="font-display text-lg font-semibold text-primary tabular-nums">{l.score}</div>
                    </div>
                  </div>
                ))}

                <div className="pt-3 mt-2 border-t border-border/40 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">+ 11 prospects qualifiés disponibles dans votre espace</span>
                  <span className="text-primary font-semibold">Consulter →</span>
                </div>
              </div>
            </div>

            {/* Floating: autonomy badge */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 bg-card rounded-xl shadow-elegant border border-border/60 p-3 pr-5">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Données exclusives à votre cabinet</div>
                <div className="text-xs text-muted-foreground">Aucune revente, aucune mutualisation</div>
              </div>
            </div>

            {/* Floating: pricing badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 items-center gap-3 bg-card rounded-xl shadow-elegant border border-border/60 p-3 pr-5">
              <div>
                <div className="text-xs text-muted-foreground">Tarif unique, sans engagement</div>
                <div className="font-display text-lg font-semibold text-foreground">290 € HT / mois</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};