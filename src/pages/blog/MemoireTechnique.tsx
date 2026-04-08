import { ArticleLayout } from "@/components/ArticleLayout";
import { Target } from "lucide-react";

const MemoireTechnique = () => (
  <ArticleLayout
    badge="Optimiser sa réponse"
    badgeIcon={<Target className="w-4 h-4" />}
    title="Rédiger un mémoire technique gagnant : méthode complète"
    subtitle="Le mémoire technique est souvent le critère qui fait la différence. Voici la méthode pour rédiger un mémoire qui convainc les acheteurs."
    date="27 mars 2026"
    readTime="10 min de lecture"
    url="/memoire-technique-marches-publics"
  >
    <h2>Pourquoi le mémoire technique est crucial</h2>
    <p>Dans 80% des marchés publics, le mémoire technique représente entre <strong>40 et 60% de la note finale</strong>. C'est souvent là que se joue la différence entre les candidats. Un bon mémoire peut compenser un prix légèrement plus élevé.</p>

    <h2>La structure type d'un mémoire technique</h2>
    <h3>1. Compréhension du besoin</h3>
    <p>Montrez que vous avez lu et compris le cahier des charges. Reformulez le besoin dans vos propres mots. Identifiez les enjeux implicites que l'acheteur n'a peut-être pas explicités.</p>

    <h3>2. Méthodologie proposée</h3>
    <p>Décrivez votre approche étape par étape. Soyez concret : qui fait quoi, quand, comment. Utilisez un planning Gantt si pertinent.</p>

    <h3>3. Moyens humains</h3>
    <p>Présentez l'équipe dédiée avec CV et références. Mettez en avant l'expérience pertinente pour ce marché spécifique.</p>

    <h3>4. Moyens techniques</h3>
    <p>Détaillez les outils, équipements, logiciels que vous utiliserez. Montrez que vous avez l'infrastructure nécessaire.</p>

    <h3>5. Références similaires</h3>
    <p>Choisissez 3 à 5 références en lien direct avec le marché. Pour chaque référence : contexte, mission, résultats chiffrés, contact du donneur d'ordres.</p>

    <h3>6. Valeur ajoutée</h3>
    <p>C'est votre atout différenciateur. Proposez des améliorations, innovations, ou engagements au-delà du cahier des charges.</p>

    <h2>Les erreurs qui font perdre des points</h2>
    <ul>
      <li><strong>Réponse générique</strong> : un mémoire copié-collé d'un marché à l'autre se voit immédiatement</li>
      <li><strong>Hors-sujet</strong> : ne répondez pas à ce qu'on ne vous demande pas</li>
      <li><strong>Trop long</strong> : respectez les limites de pages si elles sont imposées</li>
      <li><strong>Pas de chiffres</strong> : quantifiez tout ce qui peut l'être</li>
      <li><strong>Mise en forme négligée</strong> : pagination, sommaire, tableaux clairs</li>
    </ul>

    <h2>La règle du miroir</h2>
    <p>Structurez votre mémoire en <strong>miroir exact des critères d'attribution</strong>. Si le RC mentionne 4 sous-critères techniques, votre mémoire doit avoir 4 parties correspondantes, dans le même ordre.</p>

    <h2>Comment Eligibly vous aide</h2>
    <p>Le scoring d'Eligibly analyse les critères et pondérations de chaque marché. Vous savez avant de rédiger quels points sont les plus importants pour l'acheteur, et vous pouvez ajuster votre investissement rédactionnel en conséquence.</p>
  </ArticleLayout>
);

export default MemoireTechnique;
