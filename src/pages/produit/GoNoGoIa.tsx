import { ProductModuleLayout } from "@/components/product/ProductModuleLayout";
import { Lightbulb } from "lucide-react";

const GoNoGoIa = () => (
  <ProductModuleLayout
    moduleName="Decide"
    moduleNumber="03"
    icon={Lightbulb}
    accentColor="from-amber-500/20 to-orange-500/20"
    headline="Go/No-Go prédictif par IA"
    subheadline="Évaluez la pertinence de chaque marché en 2 minutes. Score d'adéquation, analyse des risques, estimation de la charge et recommandation stratégique."
    description="60% des AO auxquels répondent les entreprises sont perdus d'avance. Le problème n'est pas la qualité de la réponse mais le choix du marché. Eligibly Decide calcule un score prédictif de réussite basé sur l'analyse croisée de votre profil, des exigences du DCE, de l'historique d'attribution de l'acheteur et du paysage concurrentiel. En 2 minutes, vous savez si un marché vaut l'investissement — avec un niveau de confiance chiffré."
    seoTitle="Go/No-Go IA appels d'offres | Eligibly Decide"
    seoDescription="Décidez plus vite avec le scoring Go/No-Go prédictif. Score de réussite, analyse de risques, recommandation IA. Investissez sur les bons marchés."
    features={[
      { title: "Score prédictif de réussite", description: "Pourcentage de chance de succès basé sur l'analyse de dizaines de variables : profil, exigences, concurrence, historique." },
      { title: "Analyse de la concurrence", description: "Identification des concurrents probables sur le marché et évaluation de votre positionnement relatif." },
      { title: "Estimation de la charge", description: "Calcul automatique du temps et des ressources nécessaires pour produire une réponse compétitive." },
      { title: "Analyse des risques", description: "Identification des risques contractuels, financiers et opérationnels spécifiques à chaque marché." },
      { title: "Historique acheteur", description: "Analyse des attributions passées de l'acheteur : montants, types d'entreprises retenues, critères valorisés." },
      { title: "Recommandation stratégique", description: "Verdict clair — Go, No-Go ou Go conditionnel — avec les arguments pour chaque scénario." },
    ]}
    useCases={[
      { title: "Sélection stratégique", description: "Une ETI reçoit 40 alertes/mois. Le scoring Decide filtre les 8-10 marchés à fort potentiel, multipliant le taux de succès par 2,5." },
      { title: "Comité Go/No-Go", description: "Le directeur commercial utilise la fiche Decide comme support objectif pour les réunions de qualification hebdomadaires." },
      { title: "PME à ressources limitées", description: "Avec une équipe de 2 rédacteurs, chaque AO compte. Decide évite d'investir 40h sur un marché à 15% de chances." },
    ]}
    stats={[
      { value: "2min", label: "Par décision" },
      { value: "2.5x", label: "Taux de succès" },
      { value: "87%", label: "Précision prédictive" },
      { value: "-60%", label: "AO non pertinents" },
    ]}
    relatedArticle={{ url: "/scoring-predictif-ia-marches-publics", title: "IA et scoring prédictif : comment qualifier vos AO" }}
    relatedModules={[
      { url: "/produit/veille-appels-offres", name: "Detect", number: "01" },
      { url: "/produit/analyse-dce-ia", name: "Analyze", number: "02" },
      { url: "/produit/memoire-technique-ia", name: "Write", number: "04" },
      { url: "/produit/conformite-appel-offres", name: "Check", number: "05" },
      { url: "/produit/pilotage-marches-publics", name: "Win", number: "06" },
    ]}
  />
);

export default GoNoGoIa;
