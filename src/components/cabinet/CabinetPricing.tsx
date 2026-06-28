import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { SafeLink } from "@/components/SafeLink";
import { useLang, localizedHref } from "@/hooks/useLang";

const copy = {
  fr: {
    eyebrow: "Tarification",
    h2a: "Un tarif calibré sur votre cabinet,",
    h2b: "sur devis personnalisé",
    sub: "Notre tarif est unique pour tous les cabinets. Nous le communiquons après un premier échange de cadrage de 20 minutes — pour vérifier ensemble que votre verticale, votre zone et votre volume cible sont éligibles.",
    plan: "Plan Pro",
    priceTitle: "Tarif sur devis",
    priceNote: "Abonnement adapté à votre volume et à la taille de votre cabinet · 14 premiers jours gratuits, sans CB · résiliable avec préavis 30 jours",
    guaranteeLabel: "Engagement de qualité par filtres amont",
    guarantee: "Aucun lead avec CAC mandaté, procédure collective, cessation, holding pure (10+ sociétés) ou serial entrepreneur (5+ sociétés). Lead non conforme détecté → remplacement gratuit.",
    guaranteeEm: "Pas de garantie de résultats sur le nombre de RDV : votre conversion dépend de votre exécution commerciale.",
    features: [
      "Leads quotidiens scorés par l'IA, priorisés selon votre ICP",
      "Alertes livrées où vous le souhaitez",
      "Push automatique vers vos outils de prospection",
      "Pour chaque lead : scoring IA expliqué, signaux positifs, points à vérifier",
      "Filtres IA amont systématiques (CAC, procédure, cessation, holding, serial)",
      "Copilote IA conversationnel pour préparer chaque appel",
      "Apprentissage continu de l'IA sur le feedback de votre cabinet",
      "Support email + visio mensuelle de bilan",
    ],
    cta: "Recevoir mon premier lead gratuit",
    ctaNote: "1 lead réel livré sous 48 h, sans CB · proposition tarifaire envoyée sous 24 h ouvrées",
  },
  en: {
    eyebrow: "Pricing",
    h2a: "Pricing tailored to your firm,",
    h2b: "on personalized quote",
    sub: "Our pricing is consistent across firms. We share it after a 20-minute scoping call — to confirm together that your vertical, geography and target volume are a fit.",
    plan: "Pro plan",
    priceTitle: "Pricing on request",
    priceNote: "Subscription tailored to your volume and firm size · first 14 days free, no card · 30-day notice to cancel",
    guaranteeLabel: "Upstream quality commitment",
    guarantee: "No lead with a mandated auditor, insolvency proceedings, dissolution, pure holding (10+ companies) or serial founder (5+ companies). Any non-compliant lead is replaced free of charge.",
    guaranteeEm: "No guarantee on the number of meetings: conversion depends on your sales execution.",
    features: [
      "Daily AI-scored leads, prioritized against your ICP",
      "Alerts delivered where you want them",
      "Auto-push to your prospecting tools",
      "For each lead: explained AI scoring, positive signals, points to verify",
      "Systematic upstream AI filters (auditor, insolvency, dissolution, holding, serial)",
      "Conversational AI copilot to prep every call",
      "Continuous AI learning from your firm's feedback",
      "Email support + monthly review call",
    ],
    cta: "Get my first lead — free",
    ctaNote: "1 real lead delivered within 48 h, no card · pricing proposal sent within 24 business hours",
  },
} as const;

export const CabinetPricing = () => {
  const lang = useLang();
  const t = copy[lang];
  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">{t.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            {t.h2a} <em className="italic text-primary font-medium">{t.h2b}</em>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.sub}
          </p>
        </div>

        <div className="max-w-2xl mx-auto rounded-2xl border-2 border-primary bg-card shadow-xl shadow-primary/10 overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[0.65rem] uppercase tracking-[0.16em] font-bold px-4 py-1 rounded-b-md">
            {t.plan}
          </div>
          <div className="p-8 md:p-10 pt-12">
            <div className="text-center mb-2">
              <span className="font-display text-4xl md:text-5xl font-semibold text-foreground italic">{t.priceTitle}</span>
            </div>
            <p className="text-center text-sm text-muted-foreground mb-8">
              {t.priceNote}
            </p>

            <div className="rounded-lg bg-primary/5 border border-primary/15 p-4 mb-8">
              <p className="text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold mb-2">
                {t.guaranteeLabel}
              </p>
              <p className="text-sm text-foreground/85 leading-relaxed">
                {t.guarantee}{" "}
                <em className="italic text-muted-foreground">{t.guaranteeEm}</em>
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {t.features.map((f) => (
                <li key={f} className="flex gap-3 text-[0.95rem]">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/85">{f}</span>
                </li>
              ))}
            </ul>

            <SafeLink to={localizedHref("/demo", lang)} className="block">
              <Button variant="tengo" className="w-full h-12 px-6 text-sm font-semibold group">
                {t.cta}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </SafeLink>
            <p className="text-center text-xs text-muted-foreground mt-3">
              {t.ctaNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};