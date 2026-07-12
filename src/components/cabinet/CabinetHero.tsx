import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, CheckCircle, Shield, Star, Mail } from "lucide-react";
import { SafeLink } from "@/components/SafeLink";
import { useLang, localizedHref } from "@/hooks/useLang";

const copy = {
  fr: {
    badge: "Détection de prospects pour cabinets d'expertise comptable",
    h1a: "L'IA transforme aussi",
    h1b: "votre prospection.",
    sub: "Chaque matin, Eligibly identifie les sociétés fraîchement immatriculées qui ressemblent à vos meilleurs clients, les qualifie et les livre directement à vos associés.",
    bullets: [
      "Sources officielles INPI · Sirene · BODACC, hébergées en France",
      "Critères ICP : secteur, capital, zone, forme juridique",
      "Score expliqué, affiné par les retours de vos associés",
    ],
    ctaPrimary: "Demander un échantillon de 3 leads",
    ctaSecondary: "Discuter sur WhatsApp",
    ctaNote: "Livraison sous 48 h. Pas d'abonnement à signer pour tester.",
    trustSources: "Sources officielles",
    trustBuiltWith: "Conçu avec",
    trustPilots: "4 cabinets partenaires",
    trustIn: "en France",
    mailInbox: "Boîte de réception · 07h02",
    mailNew: "Nouveau",
    mailFrom: "à associés@cabinet.fr",
    mailSubjectA: "Sélection du jour —",
    mailSubjectB: "3 prospects prioritaires",
    mailMore: "+ 11 prospects qualifiés disponibles dans votre espace",
    mailCta: "Consulter →",
    floatA: "Données exclusives à votre cabinet",
    floatB: "Aucune revente, aucune mutualisation",
    floatC: "À partir de",
    floatD: "10 € / lead qualifié",
    leads: [
      { ini: "SM", name: "Sophie Martin", co: "Nova SaaS SASU", meta: "Paris 11e · capital 5 k€ · NAF 62.01Z", score: 94 },
      { ini: "LR", name: "Léo Rouvière",  co: "Atelier Bois SAS", meta: "Lyon 7e · capital 10 k€ · NAF 16.29Z", score: 88 },
      { ini: "AD", name: "Amélie Dubois", co: "Clinique du Sport SEL", meta: "Bordeaux · capital 8 k€ · santé", score: 82 },
    ],
  },
  en: {
    badge: "Lead detection for accounting firms",
    h1a: "AI is rewriting",
    h1b: "your prospecting too.",
    sub: "Every morning, Eligibly spots the newly registered companies that look like your best clients, qualifies them and delivers them straight to your partners.",
    bullets: [
      "Official sources — INPI · Sirene · BODACC, hosted in France",
      "ICP filters: industry, capital, area, legal form",
      "Explainable score, sharpened by your partners' feedback",
    ],
    ctaPrimary: "Request a 3-lead sample",
    ctaSecondary: "Chat on WhatsApp",
    ctaNote: "Delivered within 48 h. No subscription required to try.",
    trustSources: "Official sources",
    trustBuiltWith: "Built with",
    trustPilots: "4 partner firms",
    trustIn: "in France",
    mailInbox: "Inbox · 7:02 AM",
    mailNew: "New",
    mailFrom: "to partners@firm.com",
    mailSubjectA: "Today's selection —",
    mailSubjectB: "3 priority prospects",
    mailMore: "+ 11 qualified prospects available in your workspace",
    mailCta: "Open →",
    floatA: "Data exclusive to your firm",
    floatB: "Never resold, never shared",
    floatC: "Starting at",
    floatD: "€10 / qualified lead",
    leads: [
      { ini: "SM", name: "Sophie Martin", co: "Nova SaaS Inc.", meta: "Paris 11e · €5k capital · NAICS 5112", score: 94 },
      { ini: "LR", name: "Léo Rouvière",  co: "Atelier Bois Ltd.", meta: "Lyon 7e · €10k capital · NAICS 3219", score: 88 },
      { ini: "AD", name: "Amélie Dubois", co: "Clinique du Sport", meta: "Bordeaux · €8k capital · health", score: 82 },
    ],
  },
} as const;

export const CabinetHero = () => {
  const lang = useLang();
  const t = copy[lang];
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background pt-24 pb-20 sm:pt-28 sm:pb-24 border-b border-border/60"
    >
      <div className="container mx-auto relative px-4">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* LEFT — copy column */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.14em] font-semibold text-primary mb-6">
              <span className="inline-block w-6 h-px bg-primary/60" aria-hidden="true" />
              {t.badge}
            </div>

            <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-[3.75rem] leading-[1.05] tracking-tight text-foreground font-semibold">
              {t.h1a} <span className="text-primary">{t.h1b}</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              {t.sub}
            </p>

            <ul className="mt-8 space-y-3">
              {t.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" aria-hidden="true" strokeWidth={2.5} />
                  <span className="text-foreground/85">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <SafeLink to={localizedHref("/demo", lang)}>
                <Button variant="tengo" className="w-full sm:w-auto h-12 px-6 text-sm font-semibold group">
                  {t.ctaPrimary}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </SafeLink>
              <a href="https://wa.me/33603263100?text=Bonjour%20Eligibly%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20la%20d%C3%A9tection%20de%20leads" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto h-12 px-6 text-sm font-semibold">
                  <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                  {t.ctaSecondary}
                </Button>
              </a>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              {t.ctaNote}
            </p>

            {/* Trust strip */}
            <div className="mt-10 pt-8 border-t border-border/60 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" aria-hidden="true" />
                <span className="text-muted-foreground">{t.trustSources} <strong className="text-foreground">INPI · Sirene · BODACC</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[0,1,2,3,4].map(i => <Star key={i} className="w-4 h-4 fill-warning text-warning" aria-hidden="true" />)}
                </div>
                <span className="text-muted-foreground">{t.trustBuiltWith} <strong className="text-foreground">{t.trustPilots}</strong> {t.trustIn}</span>
              </div>
            </div>
          </div>

          {/* RIGHT — morning email mockup */}
          <div className="relative animate-fade-in lg:pl-4">
            <div className="relative bg-card rounded-2xl border border-border overflow-hidden shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_40px_-16px_rgba(15,23,42,0.12)]">
              {/* Email header */}
              <div className="px-5 py-4 border-b border-border bg-muted/40">
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground mb-2">
                  <Mail className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  <span>{t.mailInbox}</span>
                  <span className="ml-auto px-2 py-0.5 rounded-full bg-success/10 text-success font-semibold">{t.mailNew}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">eligibly@</span> {t.mailFrom}
                </div>
                <div className="mt-1 font-display text-base sm:text-lg font-semibold text-foreground leading-snug">
                  {t.mailSubjectA} <span className="text-primary font-semibold">{t.mailSubjectB}</span>
                </div>
              </div>

              {/* Email body */}
              <div className="p-5 sm:p-6 space-y-3">
                {t.leads.map((l, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background hover:border-primary/40 transition-colors">
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold flex-shrink-0 tabular-nums">{l.ini}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground truncate">{l.name} · {l.co}</div>
                      <div className="text-[11px] text-muted-foreground truncate">{l.meta}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Score</div>
                      <div className="font-display text-lg font-semibold text-foreground tabular-nums">{l.score}</div>
                    </div>
                  </div>
                ))}

                <div className="pt-3 mt-2 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{t.mailMore}</span>
                  <span className="text-primary font-semibold">{t.mailCta}</span>
                </div>
              </div>
            </div>

            {/* Data footnote — sober inline, no floating cards */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-2">
                <Shield className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-foreground">{t.floatA}</div>
                  <div className="text-muted-foreground">{t.floatB}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-muted-foreground">{t.floatC}</div>
                <div className="font-display text-base font-semibold text-foreground">{t.floatD}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};