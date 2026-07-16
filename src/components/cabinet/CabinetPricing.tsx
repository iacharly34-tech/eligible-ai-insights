import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { SafeLink } from "@/components/SafeLink";
import { useLang, localizedHref } from "@/hooks/useLang";

const copy = {
  fr: {
    eyebrow: "Tarification",
    h2a: "À partir de 10 € le lead qualifié,",
    h2b: "tarif sur devis",
    sub: "Notre tarification démarre à 10 € par lead qualifié et s'ajuste à votre volume, votre zone et la taille de votre cabinet. Nous la finalisons après un échange de cadrage de 20 minutes — pour caler ensemble vos critères ICP et votre cible mensuelle.",
    priceTitle: "À partir de 10 € / lead",
    priceSub: "Tarif final sur devis selon votre volume mensuel et la taille de votre cabinet.",
    guaranteeLabel: "Engagement de qualité par filtres amont",
    guarantee: "Aucun lead avec CAC mandaté, procédure collective, cessation, holding pure (10+ sociétés) ou serial entrepreneur (5+ sociétés). Lead non conforme détecté → remplacement gratuit.",
    guaranteeEm: "Pas de garantie de résultats sur le nombre de RDV : votre conversion dépend de votre exécution commerciale.",
    features: [
      "Leads quotidiens scorés par l'IA, priorisés selon votre ICP",
      "Alertes livrées où vous le souhaitez",
      "Push automatique vers vos outils de prospection",
      "Pour chaque lead : scoring IA expliqué, signaux positifs, points à vérifier",
      "Recommandation IA d'accroche personnalisée (email + LinkedIn) prête à envoyer",
      "Filtres IA amont systématiques (CAC, procédure, cessation, holding, serial)",
      "Copilote IA conversationnel pour préparer chaque appel",
      "Apprentissage continu de l'IA sur le feedback de votre cabinet",
      "Support email + visio mensuelle de bilan",
    ],
    cta: "Demander un échantillon de 3 leads",
    ctaNote: "Échantillon livré sous 48 h, sans engagement · devis envoyé sous 24 h ouvrées",
  },
  en: {
    eyebrow: "Pricing",
    h2a: "Starting at €10 per qualified lead,",
    h2b: "pricing on quote",
    sub: "Pricing starts at €10 per qualified lead and adjusts to your volume, area and firm size. We finalize it after a 20-minute scoping call — to align on your ICP and monthly target together.",
    priceTitle: "From €10 / lead",
    priceSub: "Final quote based on your monthly volume and firm size.",
    guaranteeLabel: "Upstream quality commitment",
    guarantee: "No lead with a mandated auditor, insolvency proceedings, dissolution, pure holding (10+ companies) or serial founder (5+ companies). Any non-compliant lead is replaced free of charge.",
    guaranteeEm: "No guarantee on the number of meetings: conversion depends on your sales execution.",
    features: [
      "Daily AI-scored leads, prioritized against your ICP",
      "Alerts delivered where you want them",
      "Auto-push to your prospecting tools",
      "For each lead: explained AI scoring, positive signals, points to verify",
      "AI-generated outreach recommendation (email + LinkedIn) ready to send",
      "Systematic upstream AI filters (auditor, insolvency, dissolution, holding, serial)",
      "Conversational AI copilot to prep every call",
      "Continuous AI learning from your firm's feedback",
      "Email support + monthly review call",
    ],
    cta: "Request a 3-lead sample",
    ctaNote: "Sample delivered within 48 h, no commitment · quote sent within 24 business hours",
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
          <div className="p-8 md:p-10 pt-10">
            <div className="text-center mb-2">
              <span className="font-display text-4xl md:text-5xl font-semibold text-foreground italic">{t.priceTitle}</span>
            </div>
            <p className="text-center text-sm text-muted-foreground mb-8">
              {t.priceSub}
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