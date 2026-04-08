import { ArticleLayout } from "@/components/ArticleLayout";
import { BookOpen } from "lucide-react";

const CriteresAttribution = () => (
  <ArticleLayout
    badge="Comprendre les marchés publics"
    badgeIcon={<BookOpen className="w-4 h-4" />}
    title="Critères d'attribution des marchés publics : décryptage complet"
    subtitle="Comment les acheteurs notent-ils les offres ? Comprendre les critères d'attribution pour rédiger une réponse gagnante."
    date="30 mars 2026"
    readTime="9 min de lecture"
    url="/criteres-attribution-marches-publics"
  >
    <h2>Les critères d'attribution : de quoi parle-t-on ?</h2>
    <p>Les critères d'attribution sont les règles du jeu. Ils définissent comment l'acheteur va <strong>noter et classer les offres</strong>. Les connaître et les comprendre est la clé d'une réponse gagnante.</p>

    <h2>Le critère prix : rarement le seul</h2>
    <p>Contrairement à une idée reçue, le prix le plus bas ne gagne pas toujours. La majorité des marchés publics utilisent le critère de l'<strong>offre économiquement la plus avantageuse</strong>, qui combine prix et qualité.</p>
    <p>Pondérations typiques :</p>
    <ul>
      <li><strong>Prix</strong> : 30 à 60% selon le marché</li>
      <li><strong>Valeur technique</strong> : 30 à 50%</li>
      <li><strong>Délai d'exécution</strong> : 5 à 15%</li>
      <li><strong>Critères environnementaux</strong> : 5 à 20% (en forte hausse)</li>
    </ul>

    <h2>Les sous-critères techniques</h2>
    <p>Le critère technique est souvent décomposé en sous-critères :</p>
    <ul>
      <li><strong>Méthodologie</strong> : comment vous allez exécuter la prestation</li>
      <li><strong>Moyens humains</strong> : qualification et expérience de l'équipe</li>
      <li><strong>Moyens techniques</strong> : outils, matériel, logiciels</li>
      <li><strong>Références similaires</strong> : preuves d'expérience comparable</li>
      <li><strong>Innovation</strong> : propositions d'amélioration ou de valeur ajoutée</li>
    </ul>

    <h2>Critères RSE et environnementaux</h2>
    <p>Depuis la loi Climat et Résilience (2021), les considérations environnementales doivent être intégrées dans les marchés publics. Les critères RSE gagnent en poids dans la notation :</p>
    <ul>
      <li>Bilan carbone de la prestation</li>
      <li>Politique sociale du prestataire</li>
      <li>Insertion professionnelle</li>
      <li>Économie circulaire</li>
    </ul>

    <h2>Comment exploiter les critères pour gagner</h2>
    <p><strong>Règle d'or</strong> : chaque critère est un mini-concours. Structurez votre mémoire technique en miroir exact des critères. Si le critère "méthodologie" vaut 30%, consacrez 30% de votre mémoire à votre méthodologie.</p>
    <p>C'est exactement ce que le scoring prédictif d'Eligibly analyse : la correspondance entre votre profil et les critères pondérés du marché.</p>

    <h2>Comment Eligibly vous aide</h2>
    <p>L'IA d'Eligibly extrait automatiquement les critères, sous-critères et pondérations de chaque DCE. Le score de compatibilité intègre cette analyse pour vous dire précisément où vous êtes fort et où vous devez renforcer votre offre.</p>
  </ArticleLayout>
);

export default CriteresAttribution;
