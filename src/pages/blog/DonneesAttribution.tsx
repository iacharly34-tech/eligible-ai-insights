import { ArticleLayout } from "@/components/ArticleLayout";
import { Brain } from "lucide-react";

const DonneesAttribution = () => (
  <ArticleLayout
    badge="IA et marchés publics"
    badgeIcon={<Brain className="w-4 h-4" />}
    title="Données d'attribution : l'arme secrète pour gagner les marchés publics"
    subtitle="Les données d'attribution sont publiques. Peu d'entreprises les exploitent. Celles qui le font gagnent plus. Voici comment."
    date="9 mars 2026"
    readTime="8 min de lecture"
    url="/donnees-attribution-marches-publics"
  >
    <h2>Que sont les données d'attribution ?</h2>
    <p>Chaque marché public attribué génère un <strong>avis d'attribution</strong> publié au BOAMP ou au JOUE. Cet avis contient des informations précieuses :</p>
    <ul>
      <li>Nom du titulaire (qui a gagné)</li>
      <li>Montant du marché (à quel prix)</li>
      <li>Nombre de candidats</li>
      <li>Date d'attribution</li>
    </ul>

    <h2>Pourquoi c'est une mine d'or</h2>
    <p>En analysant les attributions passées, vous pouvez déduire :</p>
    <ul>
      <li><strong>Qui gagne quoi</strong> : quels concurrents sont actifs sur votre segment</li>
      <li><strong>À quel prix</strong> : fourchette de prix gagnante pour un type de marché</li>
      <li><strong>La fidélité des acheteurs</strong> : un acheteur reconduit-il souvent le même prestataire ?</li>
      <li><strong>Le nombre de candidats</strong> : un marché très concurrencé (10+ candidats) vs un marché de niche (2-3 candidats)</li>
    </ul>

    <h2>Comment exploiter ces données manuellement</h2>
    <p>C'est possible mais fastidieux :</p>
    <ul>
      <li>Recherche sur le BOAMP et data.gouv.fr</li>
      <li>Croisement avec les avis de publicité</li>
      <li>Construction d'un tableur par acheteur / concurrent</li>
      <li>Analyse des tendances sur 2-3 ans</li>
    </ul>
    <p>Temps estimé : <strong>plusieurs heures par acheteur cible</strong>.</p>

    <h2>Ce que l'IA change</h2>
    <p>Eligibly intègre les données d'attribution directement dans son modèle de scoring. Concrètement :</p>
    <ul>
      <li>Le score intègre le <strong>niveau de concurrence historique</strong> sur des marchés similaires</li>
      <li>Il détecte si l'acheteur a tendance à renouveler ses prestataires</li>
      <li>Il compare votre profil aux profils des entreprises qui ont gagné par le passé</li>
      <li>Il estime la fourchette de prix gagnante</li>
    </ul>

    <h2>Cas pratique</h2>
    <p>Imaginons un marché de maintenance informatique pour une collectivité. L'analyse des attributions passées montre :</p>
    <ul>
      <li>Le titulaire sortant est le même depuis 3 renouvellements</li>
      <li>Le montant a augmenté de 5% à chaque renouvellement</li>
      <li>Il y avait 4 candidats en moyenne</li>
    </ul>
    <p>Conclusion : marché difficile à remporter (effet de fidélité), mais pas impossible si vous proposez une innovation significative. Score : 45/100 — à candidater uniquement si votre charge le permet.</p>

    <h2>Les limites</h2>
    <p>Toutes les données d'attribution ne sont pas publiques (marchés en dessous de 40 000€). Et les données publiées peuvent être incomplètes. C'est pourquoi le scoring combine attribution + analyse du DCE + profil entreprise pour une prédiction plus robuste.</p>
  </ArticleLayout>
);

export default DonneesAttribution;
