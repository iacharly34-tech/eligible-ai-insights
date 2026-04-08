import { ArticleLayout } from "@/components/ArticleLayout";
import { BookOpen } from "lucide-react";

const AllotissementMarchesPublics = () => (
  <ArticleLayout
    badge="Comprendre les marchés publics"
    badgeIcon={<BookOpen className="w-4 h-4" />}
    title="Allotissement des marchés publics : opportunité pour les PME"
    subtitle="L'obligation d'allotir favorise l'accès des PME aux marchés publics. Comment en tirer parti pour multiplier vos chances ?"
    date="2 avril 2026"
    readTime="7 min de lecture"
    url="/allotissement-marches-publics"
  >
    <h2>Le principe d'allotissement</h2>
    <p>Depuis le Code de la commande publique (2019), les acheteurs ont l'<strong>obligation de principe d'allotir</strong> leurs marchés. Cela signifie diviser un marché en lots distincts plutôt que de passer un marché global.</p>
    <p>L'objectif ? Permettre aux PME de candidater sur des lots à leur taille, sans être écartées par la massification des commandes.</p>

    <h2>Pourquoi c'est une opportunité pour les PME</h2>
    <ul>
      <li><strong>Accès facilité</strong> : vous candidatez sur un lot correspondant à votre spécialité</li>
      <li><strong>Concurrence réduite</strong> : moins de candidats sur des lots spécifiques</li>
      <li><strong>Références ciblées</strong> : vos références sur des projets similaires en taille sont valorisées</li>
      <li><strong>Capacité financière adaptée</strong> : les exigences sont proportionnées au lot</li>
    </ul>

    <h2>Comment identifier les marchés allotis</h2>
    <p>Les avis de publicité mentionnent systématiquement le nombre de lots et leur objet. Avec Eligibly, chaque lot est analysé indépendamment et reçoit son propre <strong>score de compatibilité</strong>.</p>
    <p>Un même marché peut avoir un lot à 92% de compatibilité et un autre à 15%. Le scoring lot par lot vous fait gagner un temps considérable.</p>

    <h2>Stratégie multi-lots</h2>
    <p>Vous pouvez candidater sur <strong>plusieurs lots du même marché</strong>. Certains acheteurs limitent le nombre de lots attribuables à un même prestataire, mais rien ne vous empêche de candidater sur tous.</p>
    <p>Conseil : concentrez vos efforts sur les 2-3 lots où votre score est le plus élevé plutôt que de disperser vos ressources sur tous les lots.</p>

    <h2>Les exceptions à l'allotissement</h2>
    <p>L'acheteur peut déroger à l'allotissement s'il justifie que :</p>
    <ul>
      <li>L'objet du marché ne permet pas l'allotissement</li>
      <li>L'allotissement risque de rendre le marché techniquement ou financièrement irréalisable</li>
      <li>L'allotissement restreindrait la concurrence</li>
    </ul>

    <h2>Comment Eligibly vous aide</h2>
    <p>Eligibly analyse automatiquement chaque lot d'un marché alloti et génère un score par lot. Vous identifiez instantanément les lots qui correspondent à votre profil, sans lire l'intégralité du DCE.</p>
  </ArticleLayout>
);

export default AllotissementMarchesPublics;
