import { ArticleLayout } from "@/components/ArticleLayout";
import { ArticleStructuredData } from "@/components/ArticleStructuredData";

const BoampGuide = () => (
  <ArticleLayout
    title="BOAMP : Guide complet du Bulletin Officiel des Annonces de Marchés Publics"
    description="Qu'est-ce que le BOAMP ? Comment l'utiliser pour trouver des appels d'offres ? Guide pratique 2026 avec sources alternatives et outils IA pour automatiser votre veille."
    category="Comprendre"
    readTime="10 min"
    publishDate="2026-04-09"
  >
    <ArticleStructuredData
      title="BOAMP : Guide complet du Bulletin Officiel des Annonces de Marchés Publics"
      description="Qu'est-ce que le BOAMP ? Comment l'utiliser pour trouver des appels d'offres publics ? Guide pratique avec sources alternatives et outils IA."
      publishDate="2026-04-09"
      category="Comprendre"
      slug="boamp-guide"
    />

    <h2>Qu'est-ce que le BOAMP ?</h2>
    <p>
      Le <strong>BOAMP (Bulletin Officiel des Annonces de Marchés Publics)</strong> est la publication officielle
      française dédiée aux annonces de marchés publics. Géré par la DILA (Direction de l'Information Légale et Administrative),
      il centralise les avis d'appels publics à la concurrence (AAPC) et les avis d'attribution.
    </p>
    <p>
      Pour toute entreprise souhaitant <strong>répondre aux marchés publics</strong>, le BOAMP constitue une source
      incontournable. Cependant, il ne couvre pas l'intégralité des opportunités : de nombreux marchés sont publiés
      uniquement sur les <strong>profils acheteurs</strong> ou les plateformes de dématérialisation.
    </p>

    <h2>Types d'annonces publiées sur le BOAMP</h2>
    <p>Le BOAMP publie plusieurs catégories d'annonces :</p>
    <ul>
      <li><strong>Avis de marché (AAPC)</strong> : annonces d'appels d'offres ouverts, restreints, et procédures adaptées (MAPA)</li>
      <li><strong>Avis de concession</strong> : délégations de service public et concessions de travaux</li>
      <li><strong>Avis d'attribution</strong> : résultats des marchés avec le nom du titulaire et le montant</li>
      <li><strong>Avis de modification</strong> : avenants et rectificatifs aux marchés en cours</li>
      <li><strong>Avis divers</strong> : systèmes d'acquisition dynamique, accords-cadres</li>
    </ul>

    <h2>BOAMP vs JOUE : quelle différence ?</h2>
    <p>
      Le <strong>JOUE (Journal Officiel de l'Union Européenne)</strong> via la plateforme TED (Tenders Electronic Daily)
      publie les marchés dépassant les seuils européens. En pratique :
    </p>
    <ul>
      <li><strong>BOAMP</strong> : marchés nationaux, toutes procédures confondues</li>
      <li><strong>JOUE/TED</strong> : marchés au-dessus des seuils européens (~144 000 € pour les services, ~5,5 M€ pour les travaux)</li>
      <li>Les marchés européens sont souvent publiés <strong>simultanément</strong> au BOAMP et au JOUE</li>
    </ul>

    <h2>Limites du BOAMP seul</h2>
    <p>Se limiter au BOAMP présente plusieurs inconvénients :</p>
    <ul>
      <li><strong>Couverture incomplète</strong> : les MAPA sous 90 000 € HT ne sont pas toujours publiés au BOAMP</li>
      <li><strong>Pas de scoring</strong> : impossible de savoir si un marché correspond réellement à votre profil</li>
      <li><strong>Volume écrasant</strong> : des milliers d'avis par jour, sans filtrage intelligent</li>
      <li><strong>Pas d'analyse du DCE</strong> : le BOAMP publie l'annonce, pas les documents de consultation</li>
    </ul>

    <h2>Alternatives et compléments au BOAMP</h2>
    <p>Pour une veille exhaustive, combinez le BOAMP avec :</p>
    <ul>
      <li><strong>JOUE/TED</strong> : marchés européens</li>
      <li><strong>Profils acheteurs</strong> : AWS, Maximilien, Mégalis, e-marchespublics</li>
      <li><strong>Plateformes de veille IA</strong> : agrégation de 200+ sources avec scoring automatique</li>
      <li><strong>Données d'attribution</strong> : historique des marchés attribués pour anticiper les renouvellements</li>
    </ul>

    <h2>Comment Charly IA va au-delà du BOAMP</h2>
    <p>
      <strong>Charly IA</strong>, l'agent intelligent d'Eligibly, ne se contente pas de surveiller le BOAMP.
      Il agrège <strong>200+ sources</strong> (BOAMP, JOUE, profils acheteurs, presse spécialisée) et applique
      un <strong>scoring prédictif</strong> à chaque opportunité détectée.
    </p>
    <p>
      Résultat : au lieu de parcourir des centaines d'avis, vous recevez uniquement les marchés où votre
      probabilité de succès est la plus élevée, avec un score de 0 à 100 et une analyse automatique du DCE.
    </p>
    <p>
      <strong>En 5 minutes</strong>, vous savez si un marché vaut la peine d'être candidaté — là où une veille
      manuelle sur le BOAMP prend plusieurs heures par jour.
    </p>
  </ArticleLayout>
);

export default BoampGuide;
