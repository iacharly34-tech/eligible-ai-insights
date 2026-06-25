import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, Shield, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";

const stats = [
  { value: "3 000+", label: "SASU / SAS créées chaque semaine", colorClass: "text-primary" },
  { value: "92 %", label: "précision du scoring lead", colorClass: "text-accent" },
  { value: "-80 %", label: "temps de prospection", colorClass: "text-success" },
  { value: "14 j", label: "pilote gratuit sans CB", colorClass: "text-warning" },
];

const trustBadges = [
  { icon: Shield, text: "Données officielles INPI / Sirene", iconClass: "text-success" },
  { icon: TrendingUp, text: "Rentable dès le 1er dossier signé", iconClass: "text-primary" },
  { icon: Users, text: "Conçu avec 4 cabinets EC", iconClass: "text-accent" },
];

export const CabinetHero = () => {
  return (
    <section
      id="hero"
      className="section-spacing bg-gradient-hero relative overflow-hidden min-h-[70vh] sm:min-h-[85vh] flex items-center"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true" />

      <div className="container mx-auto relative">
        {/* Social Proof Banner */}
        <div className="text-center mb-6 sm:mb-8">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 sm:px-4 py-2 text-xs sm:text-sm">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-2" aria-hidden="true" />
            3 000 SASU/SAS créées chaque semaine en France
          </Badge>
        </div>

        {/* Main Content - Centered Layout */}
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="space-y-6 sm:space-y-8">
            <div className="text-xs sm:text-sm font-medium text-muted-foreground tracking-widest uppercase">
              CRM de prospection · Cabinets d'expertise comptable
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight tracking-tight px-2">
              <span className="text-primary font-medium bg-gradient-primary bg-clip-text text-transparent">
                Vos prochains clients
              </span>{" "}
              viennent de signer leur Kbis.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto px-4">
              Eligibly détecte chaque matin les SASU et SAS de votre zone géographique les plus susceptibles de chercher un expert-comptable. Filtres amont, score expliqué, plan d'action par lead.
            </p>

            <div className="space-y-3 text-sm text-muted-foreground max-w-md mx-auto px-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <span>Leads filtrés : pas de CAC, pas de holding, pas de serial</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <span>Score expliqué + email pro et téléphone direct</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <span>Plan d'action prêt à dérouler par votre équipe</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full max-w-sm mx-auto sm:max-w-none sm:mx-0 sm:flex-row sm:gap-4 sm:justify-center">
              <SafeLink to="/demo">
                <Button variant="tengo" className="w-full h-12 text-sm font-semibold px-6 group min-h-[44px] whitespace-nowrap overflow-hidden">
                  Réserver une démo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" aria-hidden="true" />
                </Button>
              </SafeLink>
              <SafeLink to="/demo">
                <Button variant="outline" className="w-full h-12 text-sm font-semibold px-6 group min-h-[44px] whitespace-nowrap overflow-hidden">
                  <Play className="w-4 h-4 mr-2 flex-shrink-0" aria-hidden="true" />
                  <span className="truncate">Voir un lead en direct</span>
                </Button>
              </SafeLink>
            </div>

            <div className="text-xs text-muted-foreground">
              ✨ 14 jours pilote gratuit · Sans CB · Annulation en 1 clic
            </div>
          </div>
        </div>

        {/* Social proof stats */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            🚀 Conçu avec 4 cabinets d'expertise comptable français
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card/80 backdrop-blur-sm rounded-xl p-4 shadow-card border border-border/50">
                <div className={`text-2xl sm:text-3xl font-bold ${stat.colorClass}`}>{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            {trustBadges.map((badge, index) => (
              <span key={index} className="flex items-center gap-1 bg-card/60 px-3 py-1.5 rounded-full">
                <badge.icon className={`w-3 h-3 ${badge.iconClass}`} aria-hidden="true" /> {badge.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};