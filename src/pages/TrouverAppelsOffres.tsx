import { ArticleLayout } from "@/components/ArticleLayout";
import { ArticleStructuredData } from "@/components/ArticleStructuredData";

const TrouverAppelsOffres = () => (
  <ArticleLayout
    title="Comment trouver des appels d'offres : les meilleures sources en 2026"
    description="Guide des sources gratuites et payantes pour trouver des appels d'offres publics et privés en France. BOAMP, JOUE, profils acheteurs et plateformes IA."
    category="Comprendre"
    readTime="8 min"
    publishDate="2026-04-09"
  >
    <ArticleStructuredData
      title="Comment trouver des appels d'offres : les meilleures sources en 2026"
      description="Guide des sources gratuites et payantes pour trouver des appels d'offres publics et privés."
      publishDate="2026-04-09"
      category="Comprendre"
      slug="trouver-appels-offres"
    />

    <h2>Où trouver des appels d'offres publics ?</h2>
    <p>
      <strong>Trouver des appels d'offres</strong> pertinents est la première étape pour développer votre activité
      sur les marchés publics. Les sources sont nombreuses, mais toutes n'offrent pas la même couverture.
    </p>

    <h2>Sources gratuites officielles</h2>

    <h3>BOAMP (boamp.fr)</h3>
    <p>
      Le <strong>Bulletin Officiel des Annonces de Marchés Publics</strong> est la source officielle française.
      Il publie les avis de marchés et les attributions. Gratuit et exhaustif pour les marchés nationaux,
      mais sans filtrage intelligent ni scoring.
    </p>

    <h3>JOUE / TED (ted.europa.eu)</h3>
    <p>
      Le <strong>Journal Officiel de l'Union Européenne</strong> publie les marchés européens dépassant les seuils
      communautaires. Indispensable pour les marchés de services (>144 000 €) et de travaux (>5,5 M€).
    </p>

    <h3>Profils acheteurs</h3>
    <p>
      Chaque acheteur public dispose d'un <strong>profil acheteur</strong> sur lequel il publie ses consultations.
      Les principales plateformes :
    </p>
    <ul>
      <li><strong>AWS (achatpublic.com)</strong> : utilisé par de nombreuses collectivités</li>
      <li><strong>Maximilien</strong> : Île-de-France</li>
      <li><strong>Mégalis Bretagne</strong> : collectivités bretonnes</li>
      <li><strong>e-marchespublics.com</strong> : plateforme nationale</li>
      <li><strong>Marchés sécurisés</strong> : utilisé par de nombreux hôpitaux et établissements publics</li>
    </ul>

    <h3>place-marche.fr et marches-publics.gouv.fr</h3>
    <p>
      Plateformes gouvernementales qui centralisent les marchés de l'État et de certains établissements publics.
    </p>

    <h2>Sources payantes et plateformes de veille</h2>

    <h3>Agrégateurs classiques</h3>
    <p>
      Les plateformes comme Doubletrade, Libel ou Weka agrègent les sources officielles et ajoutent des
      fonctionnalités de filtrage, d'alertes par email et de gestion documentaire. Elles offrent un gain
      de temps significatif mais restent des outils de veille « passive ».
    </p>

    <h3>Plateformes IA de nouvelle génération</h3>
    <p>
      Les solutions comme <strong>Eligibly</strong> vont au-delà de l'agrégation : elles analysent chaque marché
      par rapport à votre profil d'entreprise et prédisent vos chances de succès grâce au <strong>scoring prédictif</strong>.
    </p>

    <h2>Appels d'offres privés : où les trouver ?</h2>
    <p>
      Les marchés privés ne sont pas soumis aux mêmes obligations de publication. Pour les détecter :
    </p>
    <ul>
      <li><strong>Réseaux professionnels</strong> : LinkedIn, salons, fédérations sectorielles</li>
      <li><strong>Plateformes spécialisées</strong> : certaines plateformes couvrent aussi les marchés privés</li>
      <li><strong>Veille presse</strong> : annonces de projets dans la presse économique régionale</li>
      <li><strong>Données de permis de construire</strong> : anticipation des marchés de travaux</li>
    </ul>

    <h2>Veille manuelle vs veille automatisée : le comparatif</h2>
    <p>
      La veille manuelle (consulter chaque source individuellement) est gratuite mais chronophage.
      Voici le comparatif :
    </p>
    <ul>
      <li><strong>Veille manuelle</strong> : 2-4h/jour, couverture partielle, risque d'oubli, pas de qualification</li>
      <li><strong>Agrégateur classique</strong> : 30 min/jour, couverture large, filtrage par mots-clés, pas de scoring</li>
      <li><strong>Plateforme IA (Eligibly)</strong> : 5 min/jour, 200+ sources, scoring prédictif, analyse DCE automatique</li>
    </ul>

    <h2>Comment Charly IA centralise vos sources</h2>
    <p>
      <strong>Charly IA</strong> d'Eligibly surveille en continu <strong>200+ sources</strong> (BOAMP, JOUE, profils
      acheteurs, presse spécialisée) et vous notifie uniquement des marchés où votre score de compatibilité
      dépasse votre seuil personnalisé.
    </p>
    <p>
      Plus besoin de jongler entre 10 plateformes. Un seul tableau de bord, un seul score, une seule décision :
      Go ou No-Go.
    </p>
  </ArticleLayout>
);

export default TrouverAppelsOffres;
