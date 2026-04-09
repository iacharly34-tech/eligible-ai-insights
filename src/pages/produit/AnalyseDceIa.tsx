import { ProductModuleLayout } from "@/components/product/ProductModuleLayout";
import { FileSearch } from "lucide-react";

const AnalyseDceIa = () => (
  <ProductModuleLayout
    moduleName="Analyze"
    moduleNumber="02"
    icon={FileSearch}
    accentColor="from-violet-500/20 to-purple-500/20"
    headline="Analyse DCE intelligente par IA"
    subheadline="L'IA décompose chaque dossier de consultation en secondes : exigences, critères de notation, points de vigilance et synthèse stratégique."
    description="L'analyse d'un DCE prend en moyenne 4 à 8 heures pour un consultant expérimenté. Eligibly Analyze réduit ce temps à quelques minutes grâce à l'extraction automatique des informations clés : exigences techniques, critères d'attribution et pondérations, délais, pénalités, clauses sensibles. L'IA identifie les points de vigilance, compare les exigences avec votre profil et génère une synthèse stratégique exploitable immédiatement. Plus besoin de lire 200 pages de CCTP — Eligibly les lit pour vous."
    seoTitle="Analyse DCE IA | Eligibly Analyze"
    seoDescription="Analysez vos DCE en quelques minutes avec l'IA. Extraction automatique des exigences, scoring de compatibilité, synthèse stratégique."
    features={[
      { title: "Extraction automatique des exigences", description: "L'IA identifie et structure toutes les exigences techniques, administratives et financières du DCE." },
      { title: "Analyse des critères d'attribution", description: "Détection automatique des critères, sous-critères et pondérations pour orienter votre stratégie de réponse." },
      { title: "Scoring de compatibilité profil/marché", description: "Évaluation instantanée de l'adéquation entre vos compétences et les exigences du marché." },
      { title: "Identification des points de vigilance", description: "Détection des clauses à risque, pénalités inhabituelles, délais serrés et exigences atypiques." },
      { title: "Synthèse stratégique", description: "Résumé exécutif du DCE avec recommandations d'approche et points différenciateurs à mettre en avant." },
      { title: "Comparaison multi-lots", description: "Pour les marchés allotis, analyse comparative de chaque lot pour identifier les plus pertinents." },
    ]}
    useCases={[
      { title: "Répondeur régulier (5+ AO/mois)", description: "Un bureau d'études qui répond à 8 AO/mois économise 30h d'analyse DCE par mois grâce à l'extraction automatique." },
      { title: "Direction commerciale", description: "Le directeur commercial reçoit une fiche synthétique de chaque DCE pour décider rapidement si l'AO mérite un investissement." },
      { title: "Marchés complexes multi-lots", description: "Sur un marché à 12 lots, l'IA compare les exigences de chaque lot et recommande ceux qui correspondent le mieux au profil." },
    ]}
    stats={[
      { value: "4h→5min", label: "Temps d'analyse" },
      { value: "100%", label: "Exigences extraites" },
      { value: "98%", label: "Précision scoring" },
      { value: "3x", label: "Plus d'AO analysés" },
    ]}
    relatedArticle={{ url: "/ia-analyse-dce", title: "Comment l'IA révolutionne l'analyse des DCE" }}
    relatedModules={[
      { url: "/produit/veille-appels-offres", name: "Detect", number: "01" },
      { url: "/produit/go-no-go-ia", name: "Decide", number: "03" },
      { url: "/produit/memoire-technique-ia", name: "Write", number: "04" },
      { url: "/produit/conformite-appel-offres", name: "Check", number: "05" },
      { url: "/produit/pilotage-marches-publics", name: "Win", number: "06" },
    ]}
  />
);

export default AnalyseDceIa;
