import { ArticleLayout } from "@/components/ArticleLayout";
import { Target } from "lucide-react";

const GroupementEntreprises = () => (
  <ArticleLayout
    badge="Optimiser sa réponse"
    badgeIcon={<Target className="w-4 h-4" />}
    title="Groupement d'entreprises pour les marchés publics : guide pratique"
    subtitle="Se grouper pour répondre à un marché public trop gros seul ? Mode d'emploi des co-traitances et sous-traitances."
    date="24 mars 2026"
    readTime="8 min de lecture"
    url="/groupement-entreprises-marches-publics"
  >
    <h2>Pourquoi se grouper ?</h2>
    <p>Certains marchés publics exigent des compétences ou des capacités que votre entreprise ne possède pas seule. Le <strong>groupement d'entreprises</strong> permet de candidater en combinant les forces de plusieurs acteurs.</p>
    <p>C'est particulièrement pertinent pour les PME qui veulent accéder à des marchés de taille intermédiaire.</p>

    <h2>Les types de groupement</h2>
    <h3>Groupement conjoint</h3>
    <p>Chaque membre du groupement s'engage sur une partie identifiée du marché. Le mandataire coordonne mais chacun est responsable de sa part.</p>

    <h3>Groupement solidaire</h3>
    <p>Tous les membres sont solidairement responsables de l'exécution du marché. Plus risqué mais plus rassurant pour l'acheteur.</p>

    <h3>Sous-traitance</h3>
    <p>Le titulaire confie une partie de l'exécution à un sous-traitant. La sous-traitance doit être déclarée et acceptée par l'acheteur.</p>

    <h2>Comment constituer un groupement efficace</h2>
    <ul>
      <li><strong>Complémentarité</strong> : choisissez des partenaires qui apportent des compétences que vous n'avez pas</li>
      <li><strong>Fiabilité</strong> : privilégiez des entreprises avec lesquelles vous avez déjà travaillé</li>
      <li><strong>Convention de groupement</strong> : formalisez les rôles, responsabilités et la répartition financière avant de candidater</li>
      <li><strong>Désignation du mandataire</strong> : celui qui porte la candidature et coordonne l'exécution</li>
    </ul>

    <h2>Les pièges à éviter</h2>
    <ul>
      <li>Groupement de circonstance sans réelle complémentarité</li>
      <li>Absence de convention écrite avant le dépôt</li>
      <li>Mandataire qui ne joue pas son rôle de coordination</li>
      <li>Sous-traitance non déclarée (risque de résiliation du marché)</li>
    </ul>

    <h2>Comment Eligibly vous aide</h2>
    <p>Le scoring d'Eligibly identifie les compétences requises par chaque marché. Si votre score est bas sur un critère spécifique (ex: références en réseaux), c'est peut-être le signe qu'un groupement avec un spécialiste de ce domaine renforcerait votre candidature.</p>
  </ArticleLayout>
);

export default GroupementEntreprises;
