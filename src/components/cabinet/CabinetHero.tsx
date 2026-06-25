import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle, Shield, Building2, Mail, Sparkles, Clock, Star, Bell, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";

const bullets = [
  "Détection quotidienne, 100% digitalisée",
  "Cabinet aligné avec l'Ordre & le RGPD",
];

// Destinations where qualified leads are pushed
const destinations = [
  { name: "Slack",   sub: "#nouveaux-leads",        color: "bg-[#4A154B]", initial: "S" },
  { name: "Teams",   sub: "Canal Prospection",      color: "bg-[#4B53BC]", initial: "T" },
  { name: "HubSpot", sub: "Pipeline · Nouveau",     color: "bg-[#FF7A59]", initial: "H" },
  { name: "Email",   sub: "associés@cabinet.fr",    color: "bg-foreground/80", initial: "@" },
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
              Nouveau · 14 jours pilote offerts · Sans CB
            </Badge>

            <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground font-semibold">
              Le moteur d'alertes{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent italic font-display">
                nouveaux clients
              </span>{" "}
              pour cabinets d'expertise comptable
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Chaque matin, les <strong className="text-foreground font-semibold">SASU & SAS fraîchement immatriculées</strong> qui matchent votre profil idéal sont poussées directement dans <strong className="text-foreground font-semibold">Slack, Teams, votre CRM ou votre boîte mail</strong>. Pas un outil de plus à ouvrir.
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
              <li className="flex items-start gap-3 text-sm sm:text-base">
                <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10">
                  <CheckCircle className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                </span>
                <span className="text-foreground/90">
                  Conçu <strong className="font-semibold">avec 4 cabinets EC</strong>, pas par des growth hackers
                </span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <SafeLink to="/demo">
                <Button variant="tengo" className="w-full sm:w-auto h-12 px-6 text-sm font-semibold group">
                  Réserver une démo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </SafeLink>
              <SafeLink to="/demo">
                <Button variant="outline" className="w-full sm:w-auto h-12 px-6 text-sm font-semibold">
                  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                  Voir un lead en direct
                </Button>
              </SafeLink>
            </div>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" aria-hidden="true" />
                <span className="text-muted-foreground">Sources <strong className="text-foreground">INPI · Sirene · BODACC</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[0,1,2,3,4].map(i => <Star key={i} className="w-4 h-4 fill-warning text-warning" aria-hidden="true" />)}
                </div>
                <span className="text-muted-foreground"><strong className="text-foreground">4 cabinets pilotes</strong> en France</span>
              </div>
            </div>
          </div>

          {/* RIGHT — alert flow visual: Detection → destinations */}
          <div className="relative animate-fade-in lg:pl-4">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl blur-2xl" aria-hidden="true" />

            <div className="relative bg-card rounded-2xl shadow-elegant border border-border/60 overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-muted/30">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-warning/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-success/60" />
                </div>
                <div className="ml-3 text-xs text-muted-foreground font-mono">eligibly · flux d'alertes · 07h00</div>
              </div>

              <div className="p-5 sm:p-6">
                {/* Source: detected lead */}
                <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10">
                      <Zap className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                    </span>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Signal détecté</div>
                    <Badge className="ml-auto bg-success/10 text-success border-success/20 text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-success mr-1.5 animate-pulse" />
                      En direct
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-xs font-semibold">SM</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground truncate">Sophie Martin · Nova SaaS SASU</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Building2 className="w-3 h-3" aria-hidden="true" />
                        Immatriculée il y a 2 j · Paris 11e · score <strong className="text-primary">94</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flow arrow */}
                <div className="flex flex-col items-center my-2" aria-hidden="true">
                  <div className="w-px h-4 bg-border" />
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded-full bg-muted/40">Poussé vers</div>
                  <div className="w-px h-4 bg-border" />
                </div>

                {/* Destinations */}
                <div className="grid grid-cols-2 gap-2.5">
                  {destinations.map((d, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl border border-border/50 bg-background/50 hover:border-primary/30 transition-colors">
                      <div className={`w-8 h-8 rounded-lg ${d.color} text-white flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                        {d.initial}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-foreground truncate">{d.name}</div>
                        <div className="text-[11px] text-muted-foreground truncate">{d.sub}</div>
                      </div>
                      <CheckCircle className="w-3.5 h-3.5 text-success ml-auto flex-shrink-0" aria-hidden="true" />
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-border/40 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Bell className="w-3.5 h-3.5 text-primary" aria-hidden="true" /> 14 alertes ce matin</span>
                  <span>Latence &lt; 60s</span>
                </div>
              </div>
            </div>

            {/* Floating card 1 — Livraison */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 bg-card rounded-xl shadow-elegant border border-border/60 p-3 pr-5">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Livré à 7h00</div>
                <div className="text-xs text-muted-foreground">Slack · Teams · Email</div>
              </div>
            </div>

            {/* Floating card 2 — Aucun outil de plus */}
            <div className="hidden sm:flex absolute -top-4 -right-4 items-center gap-3 bg-card rounded-xl shadow-elegant border border-border/60 p-3 pr-5">
              <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-accent" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Zéro app à ouvrir</div>
                <div className="text-xs text-muted-foreground">Vos canaux actuels suffisent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};