import { ArticleLayout } from "@/components/ArticleLayout";
import { BookOpen } from "lucide-react";

const RepondreAppelOffres = () => (
  <ArticleLayout
    title="Comment répondre à un appel d'offres public : guide étape par étape"
    subtitle="De la détection à la soumission : toutes les étapes pour répondre efficacement à un appel d'offres public. Conseils pratiques, erreurs à éviter et outils IA."
    badge="Pratique"
    badgeIcon={<BookOpen className="w-4 h-4" />}
    url="/repondre-appel-offres"
    readTime="15 min de lecture"
    date="9 avril 2026"
  >
    <h2>Les étapes pour répondre à un appel d'offres</h2>
    <p>
      <strong>Répondre à un appel d'offres public</strong> est un processus structuré qui demande méthode et rigueur.
      Que vous soyez PME ou grand groupe, les étapes fondamentales restent les mêmes.
    </p>

    <h2>Étape 1 : Détecter les opportunités pertinentes</h2>
    <p>
      Avant de répondre, il faut trouver les bons marchés. Les sources principales sont :
    </p>
    <ul>
      <li><strong>BOAMP</strong> : Bulletin Officiel des Annonces de Marchés Publics</li>
      <li><strong>JOUE/TED</strong> : marchés européens au-dessus des seuils</li>
      <li><strong>Profils acheteurs</strong> : plateformes des collectivités et administrations</li>
      <li><strong>Plateformes de veille IA</strong> : agrégation automatique de 200+ sources</li>
    </ul>

    <h2>Étape 2 : Analyser le DCE (Dossier de Consultation)</h2>
    <p>
      Le <strong>DCE</strong> contient tous les documents nécessaires pour comprendre le besoin de l'acheteur :
    </p>
    <ul>
      <li><strong>Règlement de consultation (RC)</strong> : procédure, critères, délais</li>
      <li><strong>Cahier des Clauses Administratives Particulières (CCAP)</strong> : conditions contractuelles</li>
      <li><strong>Cahier des Clauses Techniques Particulières (CCTP)</strong> : spécifications techniques</li>
      <li><strong>Bordereau des prix (BPU/DQE)</strong> : structure de la proposition financière</li>
    </ul>

    <h2>Étape 3 : Décider Go/No-Go</h2>
    <p>
      Toutes les opportunités ne méritent pas une réponse. La décision <strong>Go/No-Go</strong> doit être
      basée sur des critères objectifs :
    </p>
    <ul>
      <li>Adéquation entre vos compétences et les exigences du marché</li>
      <li>Références exigées vs références disponibles</li>
      <li>Capacité à respecter les délais de réponse et d'exécution</li>
      <li>Rentabilité estimée du marché</li>
      <li>Concurrence attendue sur ce type de marché</li>
    </ul>

    <h2>Étape 4 : Constituer le dossier de candidature</h2>
    <p>Le dossier comprend deux parties distinctes :</p>
    <h3>La candidature (DC1, DC2)</h3>
    <ul>
      <li><strong>DC1</strong> : lettre de candidature et désignation du mandataire</li>
      <li><strong>DC2</strong> : déclaration du candidat (capacités, chiffre d'affaires, effectifs)</li>
      <li>Attestations fiscales et sociales</li>
      <li>Assurance professionnelle</li>
    </ul>
    <h3>L'offre (mémoire technique + prix)</h3>
    <ul>
      <li><strong>Mémoire technique</strong> : compréhension du besoin, méthodologie, moyens, planning</li>
      <li><strong>Offre financière</strong> : BPU, DQE, décomposition du prix global</li>
    </ul>

    <h2>Étape 5 : Rédiger le mémoire technique</h2>
    <p>
      Le <strong>mémoire technique</strong> est souvent l'élément décisif. Il représente 40% à 60% de la note
      dans la plupart des marchés publics. Clés de réussite :
    </p>
    <ul>
      <li><strong>Personnalisation</strong> : adaptez chaque réponse au cahier des charges spécifique</li>
      <li><strong>Structure miroir</strong> : reprenez exactement les critères du RC</li>
      <li><strong>Preuves concrètes</strong> : références similaires, CV des intervenants, certifications</li>
      <li><strong>Visuels</strong> : organigrammes, plannings, schémas d'intervention</li>
    </ul>

    <h2>Étape 6 : Déposer l'offre (dématérialisation)</h2>
    <p>
      Depuis 2018, la <strong>dématérialisation</strong> est obligatoire pour les marchés au-dessus de 40 000 € HT.
      Déposez votre offre sur la plateforme de l'acheteur (profil acheteur) avant la date et l'heure limites.
    </p>
    <ul>
      <li>Vérifiez la taille maximale des fichiers</li>
      <li>Utilisez les formats acceptés (PDF, ZIP)</li>
      <li>Conservez l'accusé de réception comme preuve de dépôt</li>
      <li>Déposez au moins 24h avant la deadline pour éviter les problèmes techniques</li>
    </ul>

    <h2>Les erreurs les plus fréquentes</h2>
    <ul>
      <li><strong>Dossier incomplet</strong> : pièce manquante = élimination automatique</li>
      <li><strong>Mémoire technique générique</strong> : copier-coller sans adaptation au marché</li>
      <li><strong>Prix trop bas ou trop haut</strong> : offre anormalement basse = rejet</li>
      <li><strong>Dépôt tardif</strong> : même une seconde de retard est éliminatoire</li>
      <li><strong>Candidater à tout</strong> : disperser ses ressources sur des marchés non qualifiés</li>
    </ul>

    <h2>Comment Charly IA accélère chaque étape</h2>
    <p>
      <strong>Charly IA</strong> d'Eligibly automatise les étapes les plus chronophages :
    </p>
    <ul>
      <li><strong>Détection</strong> : veille automatique sur 200+ sources, alertes personnalisées</li>
      <li><strong>Qualification</strong> : scoring prédictif pour un Go/No-Go objectif en 5 minutes</li>
      <li><strong>Analyse DCE</strong> : extraction automatique des critères, exigences et délais</li>
      <li><strong>Réponse</strong> : suggestions basées sur vos réponses passées et le contexte du marché</li>
    </ul>
    <p>
      Résultat : les équipes qui utilisent Eligibly passent de <strong>10h à 2h de veille par semaine</strong>
      et augmentent leur taux de succès de <strong>15% à 38%</strong>.
    </p>
  </ArticleLayout>
);

export default RepondreAppelOffres;
