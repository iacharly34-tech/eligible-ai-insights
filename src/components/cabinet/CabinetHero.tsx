import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle, Shield, TrendingUp, Users, Building2, Mail, Sparkles, Clock, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";

const bullets = [
  "Détection quotidienne, 100% digitalisée",
  "Cabinet aligné avec l'Ordre & le RGPD",
];

// Mock leads displayed in the dashboard preview
const mockLeads = [
  { name: "Sophie Martin", company: "Nova SaaS SASU", city: "Paris 11e", score: 94, tag: "Hot", tagClass: "bg-primary/10 text-primary" },
  { name: "Karim Bensalah", company: "Atelier K. SAS", city: "Lyon 3e", score: 87, tag: "Tiède", tagClass: "bg-warning/10 text-warning" },
  { name: "Léa Dubois", company: "Studio Léa SASU", city: "Bordeaux", score: 81, tag: "À qualifier", tagClass: "bg-muted text-muted-foreground" },
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
              Eligibly,{" "}
              <span className="block sm:inline">le CRM de prospection des </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent italic font-display">
                cabinets d'expertise comptable
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Chaque matin, recevez les <strong className="text-foreground font-semibold">SASU & SAS fraîchement immatriculées</strong>, filtrées et scorées selon votre profil idéal. Adieu Pappers, Excel et la prospection à l'aveugle.
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

          {/* RIGHT — dashboard mockup */}
          <div className="relative animate-fade-in lg:pl-4">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl blur-2xl" aria-hidden="true" />

            {/* Main card */}
            <div className="relative bg-card rounded-2xl shadow-elegant border border-border/60 overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-muted/30">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-warning/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-success/60" />
                </div>
                <div className="ml-3 text-xs text-muted-foreground font-mono">eligibly.ai/leads · ce matin</div>
              </div>

              {/* Header row */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Leads détectés</div>
                    <div className="font-display text-2xl font-semibold text-foreground">14 prospects qualifiés</div>
                  </div>
                  <Badge className="bg-success/10 text-success border-success/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mr-1.5 animate-pulse" />
                    En direct
                  </Badge>
                </div>

                {/* Lead list */}
                <div className="space-y-2.5">
                  {mockLeads.map((lead, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-semibold flex-shrink-0">
                        {lead.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <div className="font-medium text-sm text-foreground truncate">{lead.name}</div>
                          <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${lead.tagClass}`}>{lead.tag}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Building2 className="w-3 h-3" aria-hidden="true" />
                          <span className="truncate">{lead.company} · {lead.city}</span>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-lg font-display font-semibold text-primary leading-none">{lead.score}</div>
                        <div className="text-[10px] text-muted-foreground">score</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini stats */}
                <div className="mt-5 grid grid-cols-3 gap-2 pt-4 border-t border-border/40">
                  <div>
                    <div className="text-xs text-muted-foreground">Email vérifié</div>
                    <div className="text-sm font-semibold text-foreground">12/14</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Sans CAC</div>
                    <div className="text-sm font-semibold text-foreground">14/14</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Tél. direct</div>
                    <div className="text-sm font-semibold text-foreground">9/14</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card 1 — Réponse rapide */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 bg-card rounded-xl shadow-elegant border border-border/60 p-3 pr-5">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Livré à 7h00</div>
                <div className="text-xs text-muted-foreground">Chaque matin, 6j/7</div>
              </div>
            </div>

            {/* Floating card 2 — Email */}
            <div className="hidden sm:flex absolute -top-4 -right-4 items-center gap-3 bg-card rounded-xl shadow-elegant border border-border/60 p-3 pr-5">
              <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-accent" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">+38% de RDV</div>
                <div className="text-xs text-muted-foreground">vs prospection Pappers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};