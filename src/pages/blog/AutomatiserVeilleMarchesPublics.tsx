import { ArticleLayout } from "@/components/ArticleLayout";
import { Brain } from "lucide-react";

const AutomatiserVeilleMarchesPublics = () => (
  <ArticleLayout
    badge="IA et marchés publics"
    badgeIcon={<Brain className="w-4 h-4" />}
    title="Automatiser sa veille marchés publics : du BOAMP au scoring IA"
    subtitle="De la veille manuelle sur le BOAMP à la détection automatique avec scoring : itinéraire d'une transformation digitale."
    date="6 mars 2026"
    readTime="8 min de lecture"
    url="/automatiser-veille-marches-publics"
  >
    <h2>L'évolution de la veille marchés publics</h2>
    <h3>Niveau 0 : la veille manuelle</h3>
    <p>Consulter le BOAMP, PLACE et les profils d'acheteurs un par un, chaque matin. Copier les AO intéressants dans un tableur. Partager par email. Temps : <strong>6-10h par semaine</strong>.</p>

    <h3>Niveau 1 : l'agrégateur simple</h3>
    <p>S'abonner à un outil qui agrège les sources et envoie des alertes par email. Gain de temps sur la détection, mais aucune aide à la qualification. Vous recevez 50 alertes par jour dont 45 ne vous concernent pas.</p>

    <h3>Niveau 2 : l'agrégateur intelligent</h3>
    <p>Filtrage par mots-clés, codes CPV, zone géographique. Réduction du bruit, mais le filtre reste binaire : un AO est dedans ou dehors. Pas de nuance, pas de priorisation.</p>

    <h3>Niveau 3 : le scoring prédictif</h3>
    <p>Chaque AO est analysé par l'IA et reçoit un score de compatibilité. Vous ne voyez que les marchés pertinents, classés par probabilité de succès. La qualification Go/No-Go se fait en quelques minutes au lieu de quelques heures.</p>

    <h2>Le coût caché de la veille inefficace</h2>
    <p>Calculons le coût réel d'une veille non optimisée :</p>
    <ul>
      <li><strong>Temps de veille</strong> : 8h/semaine × 48 semaines = 384h/an</li>
      <li><strong>Coût horaire chargé</strong> : ~50€ (responsable commercial)</li>
      <li><strong>Coût annuel veille</strong> : 19 200€</li>
      <li><strong>Réponses perdantes</strong> : 10 réponses × 3 000€ = 30 000€</li>
      <li><strong>Total gaspillé</strong> : ~49 000€/an</li>
    </ul>

    <h2>Comment passer au niveau 3</h2>
    <ul>
      <li><strong>Étape 1</strong> : Créer votre profil entreprise (secteurs, compétences, zone géographique)</li>
      <li><strong>Étape 2</strong> : Connecter vos sources (Eligibly agrège 200+ sources automatiquement)</li>
      <li><strong>Étape 3</strong> : Configurer vos alertes (seuil de score minimum, types de marchés)</li>
      <li><strong>Étape 4</strong> : Consulter votre flux scoré chaque matin (5 min au lieu de 2h)</li>
    </ul>

    <h2>Le ROI de l'automatisation</h2>
    <p>Avec un outil de scoring prédictif :</p>
    <ul>
      <li><strong>Temps de veille</strong> : 2h/semaine (au lieu de 8h)</li>
      <li><strong>Économie</strong> : 14 400€/an en temps</li>
      <li><strong>Réponses mieux ciblées</strong> : taux de succès ×2</li>
      <li><strong>ROI net</strong> : positif dès le 2ème mois</li>
    </ul>
  </ArticleLayout>
);

export default AutomatiserVeilleMarchesPublics;
