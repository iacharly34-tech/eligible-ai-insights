import { ProductModuleLayout } from "@/components/product/ProductModuleLayout";
import { BarChart3 } from "lucide-react";

const PilotageMarches = () => (
  <ProductModuleLayout
    moduleName="Win"
    moduleNumber="06"
    icon={BarChart3}
    accentColor="from-primary/20 to-primary/10"
    headline="Pilotage de la performance marchés publics"
    subheadline="Dashboard stratégique avec taux de succès, analyse des retours acheteurs, benchmarks sectoriels et recommandations d'amélioration continue."
    description="La plupart des entreprises ne mesurent pas leur performance sur les marchés publics. Elles ne savent pas quel est leur vrai taux de succès, quels types de marchés elles gagnent le plus, ni pourquoi elles perdent. Eligibly Win centralise toutes vos données de réponse — marchés tentés, résultats, scores obtenus, retours acheteurs — et les transforme en indicateurs actionnables. Vous identifiez vos forces, corrigez vos faiblesses et optimisez votre stratégie AO trimestre après trimestre."
    seoTitle="Pilotage marchés publics | KPIs et performance | Eligibly Win"
    seoDescription="Pilotez votre performance marchés publics avec des KPIs actionnables. Taux de succès, analyse retours acheteurs, benchmarks sectoriels."
    features={[
      { title: "Dashboard temps réel", description: "Vue consolidée de tous vos indicateurs : taux de succès, volume d'AO, chiffre d'affaires gagné, pipeline en cours." },
      { title: "Analyse des retours acheteurs", description: "Structuration et analyse des lettres de rejet et débriefings pour identifier les axes d'amélioration récurrents." },
      { title: "Benchmarks sectoriels", description: "Comparaison de vos performances avec les moyennes de votre secteur et taille d'entreprise." },
      { title: "Analyse par segment", description: "Performance détaillée par type de marché, zone géographique, acheteur, montant et critère d'attribution." },
      { title: "Recommandations IA", description: "Suggestions personnalisées pour améliorer vos scores basées sur l'analyse de vos résultats passés." },
      { title: "Rapports automatiques", description: "Génération de rapports mensuels et trimestriels pour le comité de direction avec tendances et prévisions." },
    ]}
    useCases={[
      { title: "Revue stratégique trimestrielle", description: "Le directeur commercial utilise le dashboard Win pour présenter les résultats AO au COMEX avec des données factuelles et des recommandations." },
      { title: "Amélioration continue", description: "L'analyse des retours acheteurs révèle que la note technique baisse sur les critères RSE. L'équipe cible ses efforts sur ce point." },
      { title: "Pilotage multi-agences", description: "Un groupe avec 5 agences régionales compare les performances et partage les meilleures pratiques des équipes les plus performantes." },
    ]}
    stats={[
      { value: "+47%", label: "Taux de succès" },
      { value: "360°", label: "Vue consolidée" },
      { value: "100%", label: "Retours analysés" },
      { value: "Auto", label: "Rapports mensuels" },
    ]}
    relatedArticle={{ url: "/kpi-marches-publics", title: "KPIs marchés publics : les indicateurs qui comptent vraiment" }}
    relatedModules={[
      { url: "/produit/veille-appels-offres", name: "Detect", number: "01" },
      { url: "/produit/analyse-dce-ia", name: "Analyze", number: "02" },
      { url: "/produit/go-no-go-ia", name: "Decide", number: "03" },
      { url: "/produit/memoire-technique-ia", name: "Write", number: "04" },
      { url: "/produit/conformite-appel-offres", name: "Check", number: "05" },
    ]}
  />
);

export default PilotageMarches;
