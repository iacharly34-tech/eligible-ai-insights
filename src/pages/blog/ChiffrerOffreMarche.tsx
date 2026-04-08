import { ArticleLayout } from "@/components/ArticleLayout";
import { Target } from "lucide-react";

const ChiffrerOffreMarche = () => (
  <ArticleLayout
    badge="Optimiser sa réponse"
    badgeIcon={<Target className="w-4 h-4" />}
    title="Comment chiffrer son offre en marché public : éviter les pièges"
    subtitle="Le BPU, le DQE, les prix unitaires et forfaitaires : tout comprendre pour chiffrer juste et rester compétitif."
    date="18 mars 2026"
    readTime="8 min de lecture"
    url="/chiffrer-offre-marche-public"
  >
    <h2>Les documents financiers du marché</h2>
    <h3>BPU (Bordereau des Prix Unitaires)</h3>
    <p>Le BPU liste les prix unitaires de chaque prestation. C'est votre grille tarifaire. Chaque prix doit être cohérent individuellement et dans l'ensemble.</p>

    <h3>DQE (Détail Quantitatif Estimatif)</h3>
    <p>Le DQE multiplie vos prix unitaires par les quantités estimées par l'acheteur. C'est sur ce montant total que vous serez comparé aux concurrents.</p>

    <h3>DPGF (Décomposition du Prix Global et Forfaitaire)</h3>
    <p>Pour les marchés forfaitaires, le DPGF détaille comment vous arrivez au prix global. Il permet à l'acheteur de vérifier la cohérence de votre offre.</p>

    <h2>Stratégies de chiffrage</h2>
    <h3>Le juste prix vs le prix le plus bas</h3>
    <p>Un prix trop bas éveille les soupçons de l'acheteur (offre anormalement basse). Un prix trop haut vous élimine. Le bon prix est celui qui :</p>
    <ul>
      <li>Couvre vos coûts réels + marge raisonnable</li>
      <li>Reflète la qualité de votre prestation</li>
      <li>Reste compétitif par rapport au marché</li>
    </ul>

    <h3>L'offre anormalement basse</h3>
    <p>L'acheteur peut écarter une offre dont le prix est <strong>anormalement bas</strong>. Il doit d'abord demander des justifications. Si vous ne pouvez pas justifier vos prix, votre offre sera rejetée.</p>

    <h2>Les pièges du chiffrage</h2>
    <ul>
      <li><strong>Oublier des postes</strong> : relisez le CCTP ligne par ligne</li>
      <li><strong>Sous-estimer les aléas</strong> : prévoyez une marge pour imprévus</li>
      <li><strong>Incohérence prix unitaires/total</strong> : vérifiez les calculs 3 fois</li>
      <li><strong>Révision des prix</strong> : intégrez la clause de révision dans votre calcul</li>
    </ul>

    <h2>Comment Eligibly vous aide</h2>
    <p>Le scoring d'Eligibly inclut une analyse du volet financier : montant estimé du marché, données d'attribution historiques (prix des marchés similaires remportés). Vous savez avant de chiffrer si le budget est compatible avec vos tarifs.</p>
  </ArticleLayout>
);

export default ChiffrerOffreMarche;
