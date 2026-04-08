import { ArticleLayout } from "@/components/ArticleLayout";
import { BookOpen } from "lucide-react";

const DematerialisationAO = () => (
  <ArticleLayout
    badge="Comprendre les marchés publics"
    badgeIcon={<BookOpen className="w-4 h-4" />}
    title="Dématérialisation des marchés publics : tout comprendre en 2026"
    subtitle="Depuis 2018, tous les marchés publics au-dessus de 40 000€ doivent être dématérialisés. Comment naviguer dans cet écosystème numérique ?"
    date="5 avril 2026"
    readTime="7 min de lecture"
    url="/dematerialisation-marches-publics"
  >
    <h2>La dématérialisation obligatoire</h2>
    <p>Depuis le 1er octobre 2018, toutes les procédures de marchés publics au-dessus de 40 000€ HT doivent être dématérialisées. Les candidatures et offres doivent être transmises par voie électronique via les <strong>profils d'acheteurs</strong>.</p>

    <h2>Les principales plateformes de dématérialisation</h2>
    <ul>
      <li><strong>PLACE</strong> : plateforme des achats de l'État</li>
      <li><strong>AWS</strong> (Appels d'offres Web Services) : utilisée par de nombreuses collectivités</li>
      <li><strong>Maximilien</strong> : Île-de-France</li>
      <li><strong>Megalis</strong> : Bretagne</li>
      <li><strong>e-Marchés publics</strong> : solution multi-collectivités</li>
      <li><strong>Klekoon</strong>, <strong>Achat Public</strong>, et dizaines d'autres plateformes régionales</li>
    </ul>

    <h2>Le problème de la fragmentation</h2>
    <p>Avec plus de <strong>50 plateformes de dématérialisation</strong> différentes en France, surveiller manuellement chaque profil d'acheteur est une mission impossible. C'est le principal argument en faveur d'outils automatisés de veille.</p>
    <p>Eligibly agrège <strong>200+ sources</strong> officielles pour vous éviter cette veille épuisante et vous concentrer sur la qualification des marchés pertinents.</p>

    <h2>Le DUME : votre passeport numérique</h2>
    <p>Le <strong>Document Unique de Marché Européen (DUME)</strong> simplifie la candidature en remplaçant les multiples attestations par un formulaire unique. C'est un gain de temps considérable, surtout si vous répondez à plusieurs marchés par mois.</p>

    <h2>Signature électronique : ce qu'il faut savoir</h2>
    <p>Les offres doivent généralement être signées électroniquement. Investissez dans un certificat de signature qualifié — c'est un investissement qui se rentabilise dès la première candidature.</p>

    <h2>Conseils pratiques</h2>
    <ul>
      <li>Préparez vos documents administratifs à l'avance (DC1, DC2, DUME)</li>
      <li>Testez le dépôt sur chaque plateforme <strong>avant</strong> la date limite</li>
      <li>Prévoyez un délai de sécurité de 48h minimum pour le dépôt</li>
      <li>Utilisez un outil comme Eligibly pour centraliser la veille sur toutes les plateformes</li>
    </ul>
  </ArticleLayout>
);

export default DematerialisationAO;
