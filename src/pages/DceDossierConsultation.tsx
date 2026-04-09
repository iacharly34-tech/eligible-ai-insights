import { ArticleLayout } from "@/components/ArticleLayout";

const DceDossierConsultation = () => (
  <ArticleLayout
    title="DCE : comprendre le dossier de consultation des entreprises"
    subtitle="Qu'est-ce que le DCE ? Composition, analyse et bonnes pratiques pour décrypter un dossier de consultation et maximiser vos chances sur les marchés publics."
    badge="Comprendre"
    badgeIcon={<BookOpen className="w-4 h-4" />}
    url="/dce-dossier-consultation"
    readTime="9 min de lecture"
    date="9 avril 2026"
  >
    <h2>Qu'est-ce que le DCE ?</h2>
    <p>
      Le <strong>DCE (Dossier de Consultation des Entreprises)</strong> est l'ensemble des documents mis à
      disposition des candidats par l'acheteur public lors d'un appel d'offres. Il contient toutes les
      informations nécessaires pour comprendre le besoin, préparer sa candidature et formuler son offre.
    </p>
    <p>
      Bien analyser le DCE est la clé d'une réponse gagnante. Une lecture superficielle peut conduire à
      des erreurs éliminatoires ou à une offre mal calibrée.
    </p>

    <h2>Composition type d'un DCE</h2>

    <h3>1. Le Règlement de Consultation (RC)</h3>
    <p>
      Document fondamental qui définit les règles du jeu : critères de sélection et leur pondération,
      délais de réponse, modalités de dépôt, pièces à fournir. C'est le premier document à lire.
    </p>

    <h3>2. L'Acte d'Engagement (AE)</h3>
    <p>
      Document contractuel par lequel le candidat s'engage. Il précise les conditions du marché
      (durée, prix, reconductions éventuelles).
    </p>

    <h3>3. Le CCAP (Cahier des Clauses Administratives Particulières)</h3>
    <p>
      Conditions administratives et financières du marché : pénalités, délais de paiement, assurances,
      sous-traitance, résiliation.
    </p>

    <h3>4. Le CCTP (Cahier des Clauses Techniques Particulières)</h3>
    <p>
      Le cœur technique du marché : spécifications détaillées, niveaux de service attendus,
      contraintes techniques. C'est la base de votre mémoire technique.
    </p>

    <h3>5. Le BPU et le DQE</h3>
    <p>
      Le <strong>Bordereau des Prix Unitaires (BPU)</strong> liste les postes à chiffrer.
      Le <strong>Détail Quantitatif Estimatif (DQE)</strong> applique les quantités estimées
      pour obtenir un montant total.
    </p>

    <h3>6. Annexes techniques</h3>
    <p>
      Plans, inventaires, diagnostics, rapports existants — tout ce qui aide à comprendre le contexte
      et le périmètre du marché.
    </p>

    <h2>Méthodologie d'analyse du DCE</h2>
    <p>Une analyse rigoureuse du DCE en 5 étapes :</p>
    <ul>
      <li><strong>1. Lecture du RC</strong> : critères, pondération, pièces exigées, délais</li>
      <li><strong>2. Analyse du CCTP</strong> : comprendre le besoin technique en profondeur</li>
      <li><strong>3. Vérification de conformité</strong> : avez-vous les références, certifications et moyens exigés ?</li>
      <li><strong>4. Analyse financière</strong> : le BPU/DQE est-il cohérent avec votre structure de coûts ?</li>
      <li><strong>5. Décision Go/No-Go</strong> : synthèse objective de l'adéquation profil/marché</li>
    </ul>

    <h2>Les pièges courants dans les DCE</h2>
    <ul>
      <li><strong>Exigences cachées</strong> : certifications ou références mentionnées en annexe uniquement</li>
      <li><strong>Critères implicites</strong> : l'acheteur attend des éléments non explicitement demandés</li>
      <li><strong>Contradictions</strong> : incohérences entre RC, CCAP et CCTP</li>
      <li><strong>Variantes</strong> : possibilité (ou interdiction) de proposer des alternatives techniques</li>
      <li><strong>Tranches conditionnelles</strong> : engagement sur des prestations incertaines</li>
    </ul>

    <h2>Comment Charly IA analyse le DCE en 5 minutes</h2>
    <p>
      <strong>Charly IA</strong> d'Eligibly lit et analyse automatiquement l'ensemble du DCE pour extraire :
    </p>
    <ul>
      <li>Les <strong>critères d'attribution</strong> et leur pondération</li>
      <li>Les <strong>exigences techniques</strong> clés (certifications, références, moyens)</li>
      <li>Les <strong>délais</strong> critiques (réponse, démarrage, exécution)</li>
      <li>Les <strong>risques</strong> identifiés (pénalités, clauses inhabituelles)</li>
      <li>Un <strong>score de compatibilité</strong> entre le DCE et votre profil d'entreprise</li>
    </ul>
    <p>
      Ce qui prend une demi-journée manuellement est fait en <strong>5 minutes</strong>,
      avec un diagnostic objectif pour votre décision Go/No-Go.
    </p>
  </ArticleLayout>
);

export default DceDossierConsultation;
