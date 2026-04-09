import { ProductModuleLayout } from "@/components/product/ProductModuleLayout";
import { ShieldCheck } from "lucide-react";

const ConformiteAppelOffres = () => (
  <ProductModuleLayout
    moduleName="Check"
    moduleNumber="05"
    icon={ShieldCheck}
    accentColor="from-rose-500/20 to-pink-500/20"
    headline="Conformité et anti-omission pour vos réponses AO"
    subheadline="Matrice de traçabilité automatique reliant chaque exigence DCE à votre réponse. Zéro oubli, zéro non-conformité, zéro élimination administrative."
    description="30% des candidatures aux marchés publics sont éliminées pour non-conformité administrative ou omission d'une pièce demandée. Eligibly Check génère automatiquement une matrice de traçabilité entre les exigences du DCE et votre dossier de réponse. Chaque document demandé, chaque critère technique, chaque clause administrative est vérifié. L'IA identifie les manques, les incohérences et les risques d'élimination avant que vous ne déposiez votre offre."
    seoTitle="Conformité appel d'offres | Anti-omission IA | Eligibly Check"
    seoDescription="Vérifiez la conformité de vos réponses AO avec l'IA. Matrice de traçabilité DCE, checklist anti-omission, zéro élimination administrative."
    features={[
      { title: "Matrice de traçabilité DCE/réponse", description: "Tableau automatique reliant chaque exigence du DCE à l'élément correspondant dans votre réponse. Rien n'est oublié." },
      { title: "Checklist administrative dynamique", description: "Vérification de toutes les pièces administratives requises : DC1, DC2, DUME, attestations, habilitations." },
      { title: "Détection des incohérences", description: "L'IA repère les contradictions entre votre offre technique et votre offre financière, ou entre sections du mémoire." },
      { title: "Alerte clauses à risque", description: "Identification des clauses pénalités, conditions résolutoires et engagements inhabituels nécessitant une vigilance particulière." },
      { title: "Vérification des délais", description: "Contrôle automatique de la cohérence des plannings proposés avec les délais contractuels du DCE." },
      { title: "Score de conformité global", description: "Note de 0 à 100 évaluant le niveau de conformité de votre dossier avant dépôt, avec recommandations correctives." },
    ]}
    useCases={[
      { title: "Dernier contrôle avant dépôt", description: "À J-1 de la date limite, Check vérifie en 5 minutes que le dossier est complet et conforme — plus de stress de dernière minute." },
      { title: "Équipe multi-contributeurs", description: "Quand 4 personnes contribuent au dossier, Check détecte les doublons, les contradictions et les sections manquantes." },
      { title: "Marchés à conformité stricte", description: "Sur les marchés de défense ou de santé où la moindre omission est éliminatoire, Check garantit un dossier irréprochable." },
    ]}
    stats={[
      { value: "0%", label: "Éliminations admin." },
      { value: "100%", label: "Exigences vérifiées" },
      { value: "5min", label: "Audit complet" },
      { value: "-30%", label: "Rejets évités" },
    ]}
    relatedArticle={{ url: "/checklist-conformite-ao", title: "Checklist conformité AO : ne plus jamais être éliminé" }}
    relatedModules={[
      { url: "/produit/veille-appels-offres", name: "Detect", number: "01" },
      { url: "/produit/analyse-dce-ia", name: "Analyze", number: "02" },
      { url: "/produit/go-no-go-ia", name: "Decide", number: "03" },
      { url: "/produit/memoire-technique-ia", name: "Write", number: "04" },
      { url: "/produit/pilotage-marches-publics", name: "Win", number: "06" },
    ]}
  />
);

export default ConformiteAppelOffres;
