import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { SafeLink } from "@/components/SafeLink";

const features = [
  "Leads quotidiens scorés par l'IA, priorisés selon votre ICP",
  "Alertes livrées où vous le souhaitez",
  "Push automatique vers vos outils de prospection",
  "Pour chaque lead : scoring IA expliqué, signaux positifs, points à vérifier",
  "Filtres IA amont systématiques (CAC, procédure, cessation, holding, serial)",
  "Copilote IA conversationnel pour préparer chaque appel",
  "Apprentissage continu de l'IA sur le feedback de votre cabinet",
  "Support email + visio mensuelle de bilan",
];

export const CabinetPricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">Tarification</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            Un seul forfait, <em className="italic text-primary font-medium">sur devis personnalisé</em>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Notre tarif est unique pour tous les cabinets. Nous le communiquons après un premier échange de cadrage de 20 minutes — pour vérifier ensemble que votre verticale, votre zone et votre volume cible sont éligibles.
          </p>
        </div>

        <div className="max-w-2xl mx-auto rounded-2xl border-2 border-primary bg-card shadow-xl shadow-primary/10 overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[0.65rem] uppercase tracking-[0.16em] font-bold px-4 py-1 rounded-b-md">
            Forfait Pro
          </div>
          <div className="p-8 md:p-10 pt-12">
            <div className="text-center mb-2">
              <span className="font-display text-4xl md:text-5xl font-semibold text-foreground italic">Tarif sur devis</span>
            </div>
            <p className="text-center text-sm text-muted-foreground mb-8">
              Forfait flat unique · 14 premiers jours gratuits, sans CB · résiliable avec préavis 30 jours
            </p>

            <div className="rounded-lg bg-primary/5 border border-primary/15 p-4 mb-8">
              <p className="text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold mb-2">
                Engagement de qualité par filtres amont
              </p>
              <p className="text-sm text-foreground/85 leading-relaxed">
                Aucun lead avec CAC mandaté, procédure collective, cessation, holding pure (10+ sociétés) ou serial entrepreneur (5+ sociétés). Lead non conforme détecté → remplacement gratuit.{" "}
                <em className="italic text-muted-foreground">Pas de garantie de résultats sur le nombre de RDV : votre conversion dépend de votre exécution commerciale.</em>
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex gap-3 text-[0.95rem]">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/85">{f}</span>
                </li>
              ))}
            </ul>

            <SafeLink to="/demo" className="block">
              <Button variant="tengo" className="w-full h-12 px-6 text-sm font-semibold group">
                Recevoir notre proposition
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </SafeLink>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Réponse sous 24 h ouvrées · aucune relance commerciale agressive
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};