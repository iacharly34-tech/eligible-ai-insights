import { ArticleShell } from "./ArticleShell";
import {
  EmpartnersSiteMockup,
  EmpartnersCtaVariants,
  EmpartnersGoogleReviews,
  EmpartnersLeadsDigest,
  EmpartnersDealsWon,
} from "@/components/blog/EmpartnersVisuals";

const CasClientEmpartners = () => (
  <ArticleShell
    badge="Cas client cabinet EC"
    title="Cas client Empartners : 3 leads qualifiés par semaine, dès 3 mois, sur un site générant quelques centaines de visites"
    subtitle="Comment Eligibly a accompagné Mickael Beddok et son cabinet Empartners.fr de l'image de marque au site web, en passant par le référencement local et la prospection ciblée sur les nouvelles immatriculations."
    date="2026-08-24"
    readTime="9 min de lecture"
    url="/blog/cas-client-empartners"
    description="Cas client Empartners.fr : cabinet d'expertise comptable accompagné par Eligibly sur l'image de marque, le site web, le référencement local et la génération de leads. Résultat : 3 leads qualifiés par semaine dès 3 mois, depuis février 2026."
    category="Cas client cabinet EC"
    sources={[
      { label: "Empartners — site officiel", url: "https://empartners.fr" },
      { label: "OEC — Code de déontologie des professionnels de l'expertise comptable", url: "https://www.experts-comptables.fr/code-de-deontologie" },
      { label: "Google Business Profile — Aide officielle", url: "https://support.google.com/business" },
      { label: "INSEE — Créations d'entreprises", url: "https://www.insee.fr/fr/statistiques/2015204" },
    ]}
    related={[
      { title: "Kit marketing 2026 pour experts-comptables", href: "/blog/guide-demarchage-client-expert-comptable" },
      { title: "5 leviers concrets pour provoquer la croissance d'un cabinet", href: "/blog/5-leviers-croissance-cabinet-expertise-comptable" },
    ]}
  >
    <h2>1. Le contexte : un cabinet en création qui doit sortir du silence</h2>
    <p>
      <strong>Empartners</strong> est un cabinet d'expertise comptable dirigé par <strong>Mickael Beddok</strong>, positionné sur l'accompagnement des dirigeants de SASU, SAS, EURL, SARL et SEL. Au démarrage, le cabinet avait besoin de trois choses simultanément : une <strong>image crédible</strong>, un <strong>site web qui convertit</strong>, et un <strong>flux de prospects régulier</strong>.
    </p>
    <p>
      La contrainte classique du cabinet en lancement : pas de portefeuille historique à déployer, pas de notoriété locale installée, et un marché où les créateurs d'entreprises choisissent leur expert-comptable dans les premières semaines. Attendre la recommandation n'était pas une option viable.
    </p>

    <h2>2. Le diagnostic : trois failles à corriger avant de prospecter</h2>
    <p>
      Avant toute campagne de démarchage, le diagnostic a révélé trois points de friction :
    </p>
    <ul>
      <li><strong>Image de marque absente ou amateur</strong> : pas de logo cohérent, pas de charte, pas de baseline métier. Un dirigeant qui cherche un expert-comptable juge la qualité perçue en quelques secondes.</li>
      <li><strong>Site web inexistant ou obsolète</strong> : pas de vitrine crédible, pas de pages dédiées aux formes juridiques ciblées, pas de parcours de conversion clair.</li>
      <li><strong>Pas de flux structuré</strong> : la prospection reposait sur des actions ponctuelles (réseau, forums, annuaires) sans système de renouvellement.</li>
    </ul>
    <p>
      Sans ces trois briques, démarcher revient à payer du temps commercial pour rattraper un déficit de confiance. Nous avons donc reconstruit le socle avant d'activer le moteur.
    </p>

    <h2>3. Ce qu'Eligibly a construit : du site au référencement local</h2>

    <h3>3.1. Identité visuelle et image de marque</h3>
    <p>
      Nous avons défini une identité visuelle propre au cabinet : logo, palette, typographie, baseline orientée créateurs d'entreprise, et supports de communication cohérents. L'objectif n'était pas de faire « beau », mais de faire crédible en moins de 3 secondes — le temps qu'un prospect met à décider s'il reste sur le site.
    </p>

    <h3>3.2. Site web structuré pour convertir</h3>
    <p>
      Le site <a href="https://empartners.fr" target="_blank" rel="noopener noreferrer">empartners.fr</a> a été pensé comme un outil commercial, pas comme une vitrine. Structure retenue :
    </p>
    <ul>
      <li><strong>Pages par forme juridique</strong> : SASU, SAS, EURL, SARL, SEL — chacune répondant aux questions réelles du créateur (coût, fiscalité, charges sociales, accompagnement).</li>
      <li><strong>Page d'accueil avec preuve sociale</strong> : chiffres clairs, services, appel à l'action direct.</li>
      <li><strong>Formulaires de contact courts</strong> : pas de friction inutile, pas de demande de documents avant le premier échange.</li>
      <li><strong>SEO on-page</strong> : balises title/description uniques, structure Hn cohérente, temps de chargement optimisé, images compressées.</li>
    </ul>

    <h3>3.3. Référencement local et Google Business Profile</h3>
    <p>
      Pour un cabinet d'expertise comptable, la recherche locale est critique. Nous avons structuré la fiche Google Business Profile, harmonisé les NAP (Nom, Adresse, Téléphone) sur les annuaires professionnels, et mis en place un socle de <strong>avis clients</strong> réels. Ce travail amont amplifie tout le reste : quand un prospect cherche « expert-comptable [ville] », la fiche apparaît, et le site capte le trafic qualifié.
    </p>

    <h2>4. Activation du moteur Eligibly : depuis février 2026</h2>
    <p>
      Dès que le socle digital était stable, nous avons branché le <strong>moteur de détection Eligibly</strong>. Paramétrage retenu pour Empartners :
    </p>
    <ul>
      <li><strong>Formes juridiques</strong> : SASU, SAS, EURL, SARL, SEL — pas de restriction arbitraire aux seules sociétés par actions.</li>
      <li><strong>Zone géographique</strong> : ciblée sur le périmètre d'intervention réel du cabinet.</li>
      <li><strong>Filtres amont</strong> : exclusion des CAC, holdings, procédures collectives et serial entrepreneurs pour ne garder que les créations actives et signables.</li>
      <li><strong>Canal de livraison</strong> : digest matinal directement exploitable par l'équipe.</li>
    </ul>
    <p>
      Chaque matin, Empartners reçoit les nouvelles immatriculations correspondant à son ICP, avec un score et une recommandation d'approche. Pas de fichier Excel inerte : une liste de décision commerciale.
    </p>

    <h2>5. Les résultats à 6 mois</h2>
    <p>
      Depuis le démarrage en <strong>février 2026</strong>, les indicateurs sont les suivants :
    </p>
    <ul>
      <li><strong>3 leads qualifiés par semaine</strong> en moyenne, soit environ 12 à 13 leads par mois.</li>
      <li><strong>Site web générant quelques centaines de visites par semaine</strong> après 3 mois de mise en ligne.</li>
      <li><strong>Pipeline prévisible</strong> : le cabinet sait chaque lundi combien de nouvelles sociétés il va contacter dans la semaine.</li>
      <li><strong>Posture commerciale maîtrisée</strong> : les contacts sont contextualisés, le timing est juste, la première phrase n'est plus improvisée.</li>
    </ul>
    <p>
      Ces chiffres ne sont pas une garantie reproductible à l'identique : ils dépendent de la zone, de l'ICP et du flux d'immatriculations. Mais ils montrent l'ordre de grandeur atteignable quand le socle digital et le moteur de leads fonctionnent ensemble.
    </p>

    <h2>6. Ce qui a fait la différence : trois leviers techniques</h2>
    <p>
      En analysant la performance du cabinet, trois leviers ressortent :
    </p>
    <ul>
      <li><strong>Le timing d'immatriculation</strong> : contacter une SASU dans les 7 à 30 jours après sa création multiplie les chances de signature, car le dirigeant n'est pas encore verrouillé par un concurrent.</li>
      <li><strong>La cohérence site + fiche Google + message</strong> : quand le prospect clique, il trouve immédiatement une réponse à sa recherche. Le taux de conversion du trafic en contact augmente mécaniquement.</li>
      <li><strong>L'outbound structuré</strong> : au lieu de prospecter au hasard, l'équipe travaille chaque jour sur une liste courte, scorée et contextualisée. L'effort commercial est concentré là où il a le plus d'impact.</li>
    </ul>

    <h2>7. Ce que ça change au quotidien</h2>
    <p>
      Avant, la prospection était une activité épisodique et épuisante. Aujourd'hui, c'est un <strong>processus répétable</strong> :
    </p>
    <ul>
      <li>Lundi matin : revue des leads de la semaine.</li>
      <li>Mardi à jeudi : contacts personnalisés (email, LinkedIn, appel selon le profil).</li>
      <li>Vendredi : suivi des rendez-vous et ajustement des filtres ICP si besoin.</li>
    </ul>
    <p>
      Le dirigeant conserve le contrôle du contact et de la relation. Eligibly fournit la matière première ; le cabinet garde la posture conseil.
    </p>

    <h2>8. Ce que ce cas client dit aux autres cabinets</h2>
    <p>
      Le cas Empartners illustre une chose simple : <strong>la prospection outbound fonctionne quand elle s'appuie sur un socle crédible</strong>. Un bon site et une fiche Google soignée ne suffisent pas à générer des leads seuls. Un moteur de détection seul ne suffit pas à convertir si le prospect, en cliquant, tombe sur une vitrine amateur.
    </p>
    <p>
      La combinaison des deux — <strong>présence digitale crédible + flux de leads frais et scorés</strong> — est ce qui crée un système d'acquisition prévisible. Pour un cabinet en développement, c'est un levier beaucoup plus rapide et maîtrisable que le recrutement d'un business developer ou l'achat d'un portefeuille.
    </p>

    <h2>9. Vous voulez le même socle pour votre cabinet ?</h2>
    <p>
      Si vous êtes en phase de lancement, de croissance ou de repositionnement, le schéma appliqué chez Empartners est reproductible : audit du socle digital, reconstruction de l'image de marque et du site, activation du moteur Eligibly sur votre zone et votre ICP.
    </p>
    <p>
      La première étape est un diagnostic de 30 minutes pour qualifier si votre profil, votre zone et votre cible permettent d'obtenir des résultats comparables — et si non, on vous le dit franchement.
    </p>
  </ArticleShell>
);

export default CasClientEmpartners;
