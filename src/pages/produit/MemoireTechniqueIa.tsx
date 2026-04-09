import { ProductModuleLayout } from "@/components/product/ProductModuleLayout";
import { PenTool } from "lucide-react";

const MemoireTechniqueIa = () => (
  <ProductModuleLayout
    moduleName="Write"
    moduleNumber="04"
    icon={PenTool}
    accentColor="from-emerald-500/20 to-green-500/20"
    headline="Rédaction de mémoire technique par IA"
    subheadline="Générez des mémoires techniques personnalisés à partir de vos références, CV et méthodologies. L'IA structure, rédige et adapte chaque réponse au DCE."
    description="La rédaction d'un mémoire technique représente 60 à 80% de l'effort total de réponse à un appel d'offres. Eligibly Write utilise la technologie RAG (Retrieval-Augmented Generation) pour générer des mémoires techniques sur mesure. L'IA puise dans votre base de connaissances — références passées, CV des équipes, méthodologies éprouvées, certifications — et produit un document structuré en miroir des critères d'attribution du DCE. Chaque section est argumentée, chiffrée et personnalisée pour l'acheteur."
    seoTitle="Mémoire technique IA | Rédaction assistée | Eligibly Write"
    seoDescription="Rédigez vos mémoires techniques 5x plus vite avec l'IA RAG. Structure miroir du DCE, contenu personnalisé, références intégrées automatiquement."
    features={[
      { title: "Génération RAG personnalisée", description: "L'IA combine vos données internes (références, CV, méthodos) avec les exigences du DCE pour produire un contenu unique et pertinent." },
      { title: "Structure miroir automatique", description: "Le mémoire est automatiquement structuré en miroir exact des critères d'attribution pour maximiser la note." },
      { title: "Intégration des références", description: "Sélection et mise en forme automatique des références les plus pertinentes pour chaque marché." },
      { title: "Adaptation au ton de l'acheteur", description: "L'IA adapte le niveau de technicité et le vocabulaire au profil de l'acheteur (collectivité, hôpital, ministère...)." },
      { title: "Suggestions de valeur ajoutée", description: "Propositions d'améliorations et d'innovations au-delà du cahier des charges pour se différencier." },
      { title: "Export multi-format", description: "Export Word, PDF avec mise en page professionnelle, prêt à déposer sur la plateforme de l'acheteur." },
    ]}
    useCases={[
      { title: "Réponse à fort volume", description: "Une ESN qui répond à 10+ AO/mois utilise Write pour produire une première version en 2h au lieu de 2 jours, puis affine avec ses experts." },
      { title: "PME sans rédacteur dédié", description: "Le dirigeant d'une PME de 20 personnes rédige lui-même les mémoires. Write génère une base solide qu'il personnalise en quelques heures." },
      { title: "Marchés techniques complexes", description: "Sur un CCTP de 150 pages, Write extrait les exigences clés et structure la réponse point par point avec les preuves correspondantes." },
    ]}
    stats={[
      { value: "5x", label: "Plus rapide" },
      { value: "-70%", label: "Temps de rédaction" },
      { value: "100%", label: "Critères couverts" },
      { value: "+35%", label: "Note technique" },
    ]}
    relatedArticle={{ url: "/memoire-technique-marches-publics", title: "Rédiger un mémoire technique gagnant : méthode complète" }}
    relatedModules={[
      { url: "/produit/veille-appels-offres", name: "Detect", number: "01" },
      { url: "/produit/analyse-dce-ia", name: "Analyze", number: "02" },
      { url: "/produit/go-no-go-ia", name: "Decide", number: "03" },
      { url: "/produit/conformite-appel-offres", name: "Check", number: "05" },
      { url: "/produit/pilotage-marches-publics", name: "Win", number: "06" },
    ]}
  />
);

export default MemoireTechniqueIa;
