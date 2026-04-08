import { ArticleLayout } from "@/components/ArticleLayout";
import { BookOpen } from "lucide-react";

const SeuilsMarchesPublics = () => (
  <ArticleLayout
    badge="Comprendre les marchés publics"
    badgeIcon={<BookOpen className="w-4 h-4" />}
    title="Seuils des marchés publics 2026 : guide complet"
    subtitle="Tous les seuils de procédure à connaître pour répondre aux bons marchés. Mise à jour avec les seuils européens en vigueur."
    date="8 avril 2026"
    readTime="8 min de lecture"
    url="/seuils-marches-publics"
  >
    <h2>Qu'est-ce qu'un seuil de marché public ?</h2>
    <p>Les seuils de marchés publics déterminent la procédure de passation applicable. En dessous d'un certain montant, l'acheteur peut recourir à une procédure simplifiée. Au-dessus, il doit respecter des règles de publicité et de mise en concurrence plus strictes.</p>
    <p>Comprendre ces seuils est essentiel pour <strong>anticiper les procédures</strong> et adapter votre stratégie de réponse. Un marché en procédure adaptée (MAPA) ne se prépare pas comme un appel d'offres formel.</p>

    <h2>Les seuils européens 2026</h2>
    <h3>Marchés de fournitures et services</h3>
    <ul>
      <li><strong>État et établissements publics</strong> : 143 000€ HT</li>
      <li><strong>Collectivités territoriales</strong> : 221 000€ HT</li>
      <li><strong>Secteurs spéciaux</strong> (eau, énergie, transports) : 443 000€ HT</li>
    </ul>
    <h3>Marchés de travaux</h3>
    <p>Le seuil unique pour les marchés de travaux est fixé à <strong>5 538 000€ HT</strong>, quel que soit le type d'acheteur.</p>

    <h2>En dessous des seuils : la procédure adaptée (MAPA)</h2>
    <p>Les marchés en dessous des seuils européens sont passés en <strong>procédure adaptée</strong>. L'acheteur fixe librement les modalités de publicité et de mise en concurrence. C'est souvent plus rapide, mais pas moins compétitif.</p>
    <p>Conseil : les MAPA représentent une opportunité considérable pour les PME. Avec le scoring prédictif d'Eligibly, vous pouvez identifier ceux qui correspondent vraiment à votre profil.</p>

    <h2>Les marchés à procédure formalisée</h2>
    <p>Au-dessus des seuils, les procédures sont strictement encadrées :</p>
    <ul>
      <li><strong>Appel d'offres ouvert</strong> : tout candidat peut soumissionner</li>
      <li><strong>Appel d'offres restreint</strong> : présélection des candidats</li>
      <li><strong>Procédure concurrentielle avec négociation</strong></li>
      <li><strong>Dialogue compétitif</strong> : pour les projets complexes</li>
    </ul>

    <h2>Impact des seuils sur votre stratégie</h2>
    <p>Les seuils conditionnent votre approche :</p>
    <ul>
      <li><strong>MAPA</strong> : réactivité, candidatures plus fréquentes, réponses plus légères</li>
      <li><strong>Procédure formalisée</strong> : préparation intensive, mémoire technique approfondi, investissement plus lourd</li>
    </ul>
    <p>C'est précisément là que le <strong>scoring prédictif</strong> prend tout son sens : savoir si le jeu en vaut la chandelle <em>avant</em> d'investir du temps dans une réponse.</p>

    <h2>Comment Eligibly vous aide</h2>
    <p>Eligibly détecte automatiquement le type de procédure de chaque marché et ajuste le score de compatibilité en conséquence. Vous savez immédiatement si un marché correspond à votre capacité de réponse.</p>
  </ArticleLayout>
);

export default SeuilsMarchesPublics;
