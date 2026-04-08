import { ArticleLayout } from "@/components/ArticleLayout";
import { Brain } from "lucide-react";

const IAScoringPredictif = () => (
  <ArticleLayout
    badge="IA et marchés publics"
    badgeIcon={<Brain className="w-4 h-4" />}
    title="Scoring prédictif IA : comment ça marche concrètement ?"
    subtitle="Derrière le score de compatibilité d'Eligibly, il y a un modèle IA entraîné sur des milliers de marchés. Décryptage."
    date="15 mars 2026"
    readTime="9 min de lecture"
    url="/scoring-predictif-ia-marches-publics"
  >
    <h2>Qu'est-ce que le scoring prédictif ?</h2>
    <p>Le scoring prédictif est une approche qui utilise l'<strong>intelligence artificielle</strong> pour estimer la probabilité de succès d'une entreprise sur un marché public donné. Au lieu de qualifier les AO à l'intuition, vous obtenez un score objectif basé sur des données.</p>

    <h2>Les données qui alimentent le score</h2>
    <h3>1. Votre profil entreprise</h3>
    <ul>
      <li>Secteurs d'activité et codes CPV maîtrisés</li>
      <li>Zone géographique d'intervention</li>
      <li>Taille et capacités (CA, effectifs, certifications)</li>
      <li>Historique de marchés remportés</li>
    </ul>

    <h3>2. L'analyse du DCE</h3>
    <ul>
      <li>Critères d'attribution et leurs pondérations</li>
      <li>Exigences techniques et financières</li>
      <li>Profil recherché par l'acheteur (taille d'entreprise, références)</li>
      <li>Délais et conditions d'exécution</li>
    </ul>

    <h3>3. Les données d'attribution historiques</h3>
    <ul>
      <li>Qui a remporté des marchés similaires dans le passé ?</li>
      <li>À quel prix ? Avec quelles caractéristiques ?</li>
      <li>Quelle est la fidélité de l'acheteur envers ses prestataires ?</li>
      <li>Combien de candidats en moyenne sur ce type de marché ?</li>
    </ul>

    <h2>Comment le score est calculé</h2>
    <p>Le modèle IA croise ces trois dimensions pour générer un <strong>score de 0 à 100</strong> :</p>
    <ul>
      <li><strong>0-30</strong> : faible compatibilité — ne candidatez pas</li>
      <li><strong>31-60</strong> : compatibilité moyenne — à étudier selon votre charge</li>
      <li><strong>61-80</strong> : bonne compatibilité — candidature recommandée</li>
      <li><strong>81-100</strong> : excellente compatibilité — priorité maximale</li>
    </ul>

    <h2>La différence avec un simple filtre par mots-clés</h2>
    <p>Les agrégateurs classiques filtrent les AO par mots-clés, codes CPV et localisation. C'est nécessaire mais insuffisant. Le scoring prédictif ajoute une couche d'analyse que le filtre ne peut pas offrir :</p>
    <ul>
      <li>Analyse sémantique du DCE (pas juste des mots-clés)</li>
      <li>Évaluation de la concurrence probable</li>
      <li>Historique de l'acheteur et de ses attributions</li>
      <li>Adéquation fine entre vos compétences et les exigences</li>
    </ul>

    <h2>L'impact sur votre taux de succès</h2>
    <p>Les premières données montrent que les entreprises qui ne candidatent que sur des marchés à score &gt;70 augmentent leur taux de succès de <strong>15% à plus de 35%</strong>. Le ROI est immédiat : moins de réponses, mais plus de victoires.</p>
  </ArticleLayout>
);

export default IAScoringPredictif;
