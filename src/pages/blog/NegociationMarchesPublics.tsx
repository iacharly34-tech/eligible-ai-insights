import { ArticleLayout } from "@/components/ArticleLayout";
import { Target } from "lucide-react";

const NegociationMarchesPublics = () => (
  <ArticleLayout
    badge="Optimiser sa réponse"
    badgeIcon={<Target className="w-4 h-4" />}
    title="Négociation en marchés publics : quand et comment négocier ?"
    subtitle="La négociation n'est pas interdite en marchés publics. Mais elle obéit à des règles précises. Voici comment en tirer parti."
    date="21 mars 2026"
    readTime="7 min de lecture"
    url="/negociation-marches-publics"
  >
    <h2>Négociation ≠ marchandage</h2>
    <p>En marchés publics, la négociation est un <strong>échange structuré</strong> entre l'acheteur et les candidats. Elle porte sur tous les aspects de l'offre : prix, qualité technique, délais, conditions d'exécution.</p>

    <h2>Quand la négociation est-elle possible ?</h2>
    <h3>Procédure adaptée (MAPA)</h3>
    <p>L'acheteur est libre d'organiser ou non une négociation. Il le mentionne dans l'avis de publicité ou le règlement de consultation.</p>

    <h3>Procédure concurrentielle avec négociation</h3>
    <p>Réservée aux marchés formalisés dans des cas définis (complexité, absence de solution existante). La négociation est prévue et encadrée dès le départ.</p>

    <h3>Appel d'offres ouvert ou restreint</h3>
    <p><strong>Aucune négociation possible</strong>. L'offre déposée est définitive. C'est pourquoi le scoring de votre compatibilité est encore plus crucial dans ces procédures.</p>

    <h2>Comment préparer une négociation</h2>
    <ul>
      <li><strong>Identifiez vos marges</strong> : sur le prix, les délais, les moyens. Sachez jusqu'où vous pouvez aller</li>
      <li><strong>Préparez vos arguments</strong> : pourquoi votre offre est la meilleure, pas juste la moins chère</li>
      <li><strong>Anticipez les demandes</strong> : l'acheteur cherchera à améliorer le rapport qualité/prix</li>
      <li><strong>Documentez tout</strong> : confirmez par écrit chaque point négocié</li>
    </ul>

    <h2>Les erreurs courantes</h2>
    <ul>
      <li>Baisser le prix sans contrepartie (suppression d'une prestation, allongement des délais)</li>
      <li>Modifier l'offre au-delà de ce qui est négociable (les critères d'attribution ne changent pas)</li>
      <li>Ne pas préparer de plan B si la négociation échoue</li>
    </ul>

    <h2>Comment Eligibly vous aide</h2>
    <p>Le scoring d'Eligibly identifie si une procédure prévoit une phase de négociation. Cela change fondamentalement votre stratégie de réponse : dans une procédure négociée, votre offre initiale n'est pas votre offre finale.</p>
  </ArticleLayout>
);

export default NegociationMarchesPublics;
