import { ProductModuleLayout } from "@/components/product/ProductModuleLayout";
import { Radar } from "lucide-react";

const VeilleAppelsOffres = () => (
  <ProductModuleLayout
    moduleName="Detect"
    moduleNumber="01"
    icon={Radar}
    accentColor="from-blue-500/20 to-cyan-500/20"
    headline="Veille appels d'offres automatisée par IA"
    subheadline="Surveillez +200 sources officielles en temps réel. L'IA filtre, qualifie et vous alerte uniquement sur les marchés pertinents pour votre activité."
    description="Les entreprises qui répondent aux marchés publics perdent en moyenne 15 heures par semaine à chercher les bons appels d'offres. Eligibly Detect automatise cette veille en surveillant en continu le BOAMP, PLACE, TED, les profils acheteurs et 200+ sources françaises et européennes. L'IA apprend vos critères métier — secteur, zone géographique, budget, mots-clés techniques — et ne vous envoie que les opportunités avec un réel potentiel de succès. Résultat : vous passez de la recherche à la décision en quelques secondes."
    seoTitle="Veille appels d'offres IA | Eligibly Detect"
    seoDescription="Automatisez votre veille appels d'offres avec l'IA. Surveillance de 200+ sources, alertes temps réel, filtrage intelligent. Gagnez 15h/semaine."
    features={[
      { title: "Surveillance multi-sources", description: "BOAMP, PLACE, TED, profils acheteurs, journaux d'annonces légales — toutes les sources centralisées en un seul flux." },
      { title: "Filtrage IA par critères métier", description: "L'algorithme apprend votre profil et affine ses recommandations à chaque interaction. Secteur, zone géographique, budget, compétences." },
      { title: "Alertes temps réel multi-canal", description: "Notifications instantanées par email, Slack, Teams ou SMS dès qu'un marché correspondant est publié." },
      { title: "Scoring de pertinence automatique", description: "Chaque opportunité reçoit un score de compatibilité profil/marché pour prioriser vos efforts." },
      { title: "Veille européenne", description: "Couverture des marchés TED et des plateformes européennes pour les entreprises à ambition internationale." },
      { title: "Historique et tendances", description: "Analyse des publications passées par acheteur pour anticiper les renouvellements de marchés." },
    ]}
    useCases={[
      { title: "PME BTP multi-régionale", description: "Une PME de 50 salariés surveille les marchés de travaux publics sur 5 régions. Eligibly Detect remplace 3 abonnements séparés et fait gagner 12h/semaine." },
      { title: "ESN spécialisée santé", description: "Un éditeur de logiciels de santé cible les AO des CHU et ARS. Le filtrage sectoriel élimine 95% du bruit et ne remonte que les marchés IT santé." },
      { title: "Cabinet de conseil RSE", description: "Veille sur les marchés intégrant des critères environnementaux. L'IA détecte les mots-clés RSE même quand ils ne sont pas dans le titre." },
    ]}
    stats={[
      { value: "200+", label: "Sources surveillées" },
      { value: "15h", label: "Gagnées par semaine" },
      { value: "<2min", label: "Délai d'alerte" },
      { value: "95%", label: "Bruit éliminé" },
    ]}
    relatedArticle={{ url: "/automatiser-veille-marches-publics", title: "Comment automatiser sa veille marchés publics en 2026" }}
    relatedModules={[
      { url: "/produit/analyse-dce-ia", name: "Analyze", number: "02" },
      { url: "/produit/go-no-go-ia", name: "Decide", number: "03" },
      { url: "/produit/memoire-technique-ia", name: "Write", number: "04" },
      { url: "/produit/conformite-appel-offres", name: "Check", number: "05" },
      { url: "/produit/pilotage-marches-publics", name: "Win", number: "06" },
    ]}
  />
);

export default VeilleAppelsOffres;
