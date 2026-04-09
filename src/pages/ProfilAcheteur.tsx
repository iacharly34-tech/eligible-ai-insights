import { ArticleLayout } from "@/components/ArticleLayout";
import { ArticleStructuredData } from "@/components/ArticleStructuredData";

const ProfilAcheteur = () => (
  <ArticleLayout
    title="Profil acheteur : comment l'utiliser pour détecter les marchés publics"
    description="Qu'est-ce qu'un profil acheteur ? Liste des principales plateformes et stratégies pour exploiter ces sources d'appels d'offres souvent méconnues."
    category="Comprendre"
    readTime="8 min"
    publishDate="2026-04-09"
  >
    <ArticleStructuredData
      title="Profil acheteur : comment l'utiliser pour détecter les marchés publics"
      description="Guide des profils acheteurs : principales plateformes et stratégies pour trouver des marchés publics."
      publishDate="2026-04-09"
      category="Comprendre"
      slug="profil-acheteur"
    />

    <h2>Qu'est-ce qu'un profil acheteur ?</h2>
    <p>
      Le <strong>profil acheteur</strong> est la plateforme de dématérialisation sur laquelle un acheteur public
      publie ses consultations, met à disposition les DCE et reçoit les offres électroniques.
      Depuis 2018, tous les acheteurs publics sont tenus de disposer d'un profil acheteur.
    </p>
    <p>
      C'est une source d'appels d'offres souvent <strong>sous-exploitée</strong> par les entreprises qui se
      limitent au BOAMP, alors que de nombreux MAPA sont publiés uniquement sur ces plateformes.
    </p>

    <h2>Les principales plateformes de profils acheteurs</h2>

    <h3>Plateformes nationales</h3>
    <ul>
      <li><strong>PLACE (marches-publics.gouv.fr)</strong> : marchés de l'État et de ses établissements</li>
      <li><strong>e-marchespublics.com</strong> : plateforme mutualisée pour de nombreuses collectivités</li>
      <li><strong>achatpublic.com (AWS)</strong> : l'un des plus anciens profils acheteurs français</li>
      <li><strong>Marchés sécurisés</strong> : hôpitaux, établissements de santé, universités</li>
    </ul>

    <h3>Plateformes régionales</h3>
    <ul>
      <li><strong>Maximilien</strong> : Île-de-France (collectivités et organismes franciliens)</li>
      <li><strong>Mégalis Bretagne</strong> : collectivités bretonnes</li>
      <li><strong>e-Bourgogne</strong> : Bourgogne-Franche-Comté</li>
      <li><strong>Klekoon / Dematis</strong> : différentes régions</li>
      <li><strong>Synapse / Provigis</strong> : secteur privé et mixte</li>
    </ul>

    <h2>Pourquoi surveiller les profils acheteurs</h2>
    <ul>
      <li><strong>MAPA non publiés au BOAMP</strong> : les marchés de 40 000 € à 90 000 € HT apparaissent souvent uniquement sur le profil acheteur</li>
      <li><strong>Première source</strong> : certains marchés sont publiés sur le profil avant le BOAMP</li>
      <li><strong>DCE complet</strong> : accès immédiat aux documents de consultation</li>
      <li><strong>Historique</strong> : certaines plateformes affichent les marchés passés et les attributions</li>
    </ul>

    <h2>Stratégie de veille sur les profils acheteurs</h2>
    <p>
      Surveiller manuellement 50+ profils acheteurs est irréaliste. Deux approches :
    </p>

    <h3>Approche manuelle (gratuite, limitée)</h3>
    <ul>
      <li>Identifiez les 5-10 acheteurs principaux de votre secteur</li>
      <li>Créez un compte sur chaque plateforme</li>
      <li>Paramétrez les alertes email disponibles</li>
      <li>Consultez chaque plateforme au moins 2 fois par semaine</li>
    </ul>

    <h3>Approche automatisée (IA)</h3>
    <ul>
      <li>Un outil centralise toutes les plateformes en un seul flux</li>
      <li>Le scoring IA filtre les marchés pertinents</li>
      <li>Notification instantanée dès qu'un marché compatible est publié</li>
      <li>Analyse automatique du DCE sans téléchargement manuel</li>
    </ul>

    <h2>Comment Charly IA centralise les profils acheteurs</h2>
    <p>
      <strong>Charly IA</strong> d'Eligibly surveille en continu les profils acheteurs de <strong>200+ sources</strong>,
      y compris les plateformes régionales et sectorielles que les agrégateurs classiques ne couvrent pas toujours.
    </p>
    <p>
      Chaque marché détecté est automatiquement scoré par rapport à votre profil d'entreprise.
      Vous recevez uniquement les opportunités avec un score de compatibilité élevé, avec un accès
      direct au DCE et une analyse automatique des critères.
    </p>
  </ArticleLayout>
);

export default ProfilAcheteur;
