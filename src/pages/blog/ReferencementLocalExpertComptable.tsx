import { ArticleShell } from "./ArticleShell";

const ReferencementLocalExpertComptable = () => (
  <ArticleShell
    badge="Guide référencement local"
    title="Référencement local d'un expert-comptable : la méthode complète 2026"
    subtitle="Fiche Google Business Profile, avis, cohérence NAP, pages locales, netlinking de proximité et visibilité dans les assistants IA : les six leviers du pack local, avec un plan d'action à 90 jours et les indicateurs à suivre."
    date="2026-09-03"
    readTime="14 min de lecture"
    url="/blog/referencement-local-expert-comptable"
    description="Méthode de référencement local pour cabinet d'expertise comptable : optimisation de la fiche Google Business Profile, collecte d'avis, cohérence NAP, pages locales et verticales, netlinking de proximité, visibilité dans ChatGPT et Perplexity. Plan d'action 90 jours et KPIs."
    category="Guide référencement local"
    sources={[
      { label: "Google Business Profile — Aide officielle", url: "https://support.google.com/business" },
      { label: "Google Business Profile — Règles de représentation d'une entreprise", url: "https://support.google.com/business/answer/3038177" },
      { label: "Google Search Central — Améliorer le classement local", url: "https://developers.google.com/search/docs/appearance/local-search-results" },
      { label: "Schema.org — AccountingService", url: "https://schema.org/AccountingService" },
      { label: "OEC — Code de déontologie des professionnels de l'expertise comptable", url: "https://www.experts-comptables.fr/code-de-deontologie" },
      { label: "CNIL — Prospection commerciale et données personnelles", url: "https://www.cnil.fr/fr/la-prospection-commerciale" },
      { label: "Cas client Eligibly — Empartners", url: "https://empartners.fr" },
    ]}
    related={[
      { title: "Créer le site web d'un cabinet d'expertise comptable", href: "/blog/creer-site-web-expert-comptable-guide" },
      { title: "Visibilité de l'expert-comptable : search et assistants IA", href: "/visibilite-expert-comptable" },
      { title: "Kit marketing 2026 pour experts-comptables", href: "/blog/guide-demarchage-client-expert-comptable" },
    ]}
  >
    <p>
      Sur la requête « expert-comptable » suivie d'un nom de ville, l'essentiel des contacts se joue dans les trois premiers résultats cartographiques — le <strong>pack local</strong>. La plupart des cabinets n'y figurent pas, non par manque de compétence, mais parce qu'ils n'envoient aucun signal exploitable à Google : fiche incomplète, avis rares, coordonnées incohérentes d'un annuaire à l'autre, aucune page géolocalisée sur le site.
    </p>
    <p>
      Le référencement local est le levier le moins coûteux et le plus rapide pour un cabinet, parce que la concurrence y est faible et le périmètre restreint. Voici la méthode, levier par levier.
    </p>

    <h2>Comment Google classe les résultats locaux</h2>
    <p>
      Google documente trois critères de classement local : la <strong>pertinence</strong> (la fiche et le site correspondent-ils à la requête), la <strong>distance</strong> (proximité entre le point de recherche et l'établissement) et la <strong>notoriété</strong> (avis, mentions, presse, cohérence des informations en ligne). Vous ne pouvez pas agir sur la distance ; vous pouvez agir intégralement sur la pertinence et la notoriété. C'est là que se situe tout le travail utile.
    </p>

    <h2>Levier 1 — La fiche Google Business Profile</h2>
    <p>
      C'est le signal le plus direct et il est gratuit. Une fiche correctement tenue suffit souvent à entrer dans le pack local d'une ville moyenne.
    </p>
    <ul>
      <li><strong>Revendiquer et faire vérifier</strong> l'établissement, avec l'adresse réelle du cabinet (une adresse de domiciliation sans présence physique est contraire aux règles de Google).</li>
      <li><strong>Catégorie principale</strong> : « Comptable » ou « Cabinet d'expertise comptable ». Catégories secondaires : conseil fiscal, commissaire aux comptes, conseil en gestion — uniquement si vous exercez réellement ces missions.</li>
      <li><strong>Champs complets</strong> : téléphone local, horaires réels (y compris périodes fiscales), lien vers le site, zone desservie, attributs (accessibilité, rendez-vous en ligne).</li>
      <li><strong>Description</strong> : 750 caractères décrivant vos missions, vos verticales et votre zone, sans bourrage de mots-clés.</li>
      <li><strong>Photos authentiques</strong> : façade, accueil, équipe, salle de réunion. À renouveler périodiquement.</li>
      <li><strong>Services et prestations</strong> renseignés un par un (création d'entreprise, tenue, paie, fiscalité, accompagnement dirigeant).</li>
      <li><strong>Posts Google réguliers</strong> : échéances fiscales, changements réglementaires, facturation électronique. Une fiche active est mieux classée qu'une fiche figée.</li>
      <li><strong>Messagerie et questions/réponses</strong> : alimentez vous-même les questions fréquentes plutôt que de laisser un tiers répondre.</li>
    </ul>

    <h2>Levier 2 — Les avis Google</h2>
    <p>
      Les avis pèsent sur le classement et, surtout, sur la décision. Ils constituent la preuve sociale la plus consultée avant un premier appel.
    </p>
    <ul>
      <li><strong>Le bon moment</strong> : après une clôture bien passée, une mission de création d'entreprise finalisée, un contrôle réussi. Jamais un envoi de masse à toute la base.</li>
      <li><strong>La méthode</strong> : lien direct de dépôt d'avis, message court et nominatif, envoyé par la personne qui a suivi le dossier.</li>
      <li><strong>La régularité</strong> : deux avis récents par mois valent mieux que quinze avis suivis d'un an de silence. Google valorise la fraîcheur du flux.</li>
      <li><strong>La réponse systématique</strong>, y compris aux avis négatifs, sans jamais révéler d'élément couvert par le secret professionnel.</li>
      <li><strong>Les interdits</strong> : avis achetés, avis d'anciens salariés, contrepartie en échange d'un avis. C'est sanctionnable par Google et contraire au <a href="https://www.experts-comptables.fr/code-de-deontologie" target="_blank" rel="noopener noreferrer">Code de déontologie</a> sur la sincérité de l'information.</li>
    </ul>

    <h2>Levier 3 — La cohérence NAP et les annuaires</h2>
    <p>
      NAP = <em>Name, Address, Phone</em>. Google recoupe vos coordonnées sur l'ensemble du web ; toute divergence dégrade la confiance accordée à la fiche.
    </p>
    <ul>
      <li>Une <strong>graphie unique</strong> du nom du cabinet (avec ou sans « SARL », avec ou sans prénom de l'associé) utilisée partout ;</li>
      <li>Adresse écrite à l'identique (abréviations, code postal, complément d'adresse) ;</li>
      <li>Un seul numéro de téléphone public ;</li>
      <li><strong>Sources à aligner</strong> : annuaire de l'Ordre des experts-comptables, Pages Jaunes, Bing Places, Apple Business Connect, annuaires locaux (CCI, mairie, clubs d'entreprises), profils LinkedIn du cabinet et des associés, signatures d'email ;</li>
      <li>Supprimer ou fusionner les <strong>fiches en doublon</strong> (ancienne adresse, ancien nom, fiche créée automatiquement).</li>
    </ul>

    <h2>Levier 4 — Les pages locales et verticales du site</h2>
    <p>
      La fiche seule plafonne vite. Pour tenir une position, le site doit confirmer le signal géographique et thématique.
    </p>
    <ul>
      <li><strong>Une page par implantation réelle</strong>, avec contenu propre : équipe locale, missions dominantes, plan intégré, coordonnées, avis locaux. Pas de duplication avec substitution du nom de ville — c'est le principal motif d'inefficacité constaté.</li>
      <li><strong>Des pages « mission + ville »</strong> uniquement quand vous avez de quoi écrire une page utile : « expert-comptable création d'entreprise à Nantes », « comptable restaurant Bordeaux ».</li>
      <li><strong>Des pages verticales</strong> qui captent l'intention métier avant la géographie : e-commerce, CHR, BTP, professions libérales et santé, holdings, SASU tech.</li>
      <li><strong>Balisage structuré</strong> : <code>AccountingService</code> + <code>LocalBusiness</code> avec <code>address</code>, <code>geo</code>, <code>openingHoursSpecification</code>, <code>areaServed</code> et <code>aggregateRating</code> si vous affichez des avis réels.</li>
      <li><strong>Contenu de proximité</strong> sur le blog : échéances locales, dispositifs d'aide régionaux, écosystème de création d'entreprise de votre bassin.</li>
    </ul>

    <h2>Levier 5 — Le netlinking de proximité</h2>
    <p>
      Quelques liens locaux crédibles valent mieux que cent liens génériques.
    </p>
    <ul>
      <li>CCI, CMA, réseaux d'entrepreneurs (BNI, Réseau Entreprendre), incubateurs et pépinières ;</li>
      <li>Clubs sportifs, associations et événements sponsorisés — avec une page partenaire réellement liée ;</li>
      <li>Presse économique locale : tribune sur la facturation électronique, décryptage d'une réforme fiscale ;</li>
      <li>Partenaires prescripteurs (avocats, notaires, banquiers, agences web) via des pages partenaires réciproques ;</li>
      <li>Interventions en école de commerce ou en formation, avec citation du cabinet et lien.</li>
    </ul>

    <h2>Levier 6 — La visibilité dans les assistants IA</h2>
    <p>
      Une part croissante des recherches « trouver un expert-comptable à X » passe désormais par ChatGPT, Perplexity, Gemini ou Claude. Ces systèmes s'appuient sur des pages explicites, structurées et citables.
    </p>
    <ul>
      <li>Formuler des <strong>titres et réponses directes</strong> (une question en H2, la réponse en deux phrases dessous) ;</li>
      <li>Publier des pages <strong>factuelles et datées</strong>, avec des sources vérifiables ;</li>
      <li>Maintenir des <strong>données structurées</strong> à jour et un fichier <code>llms.txt</code> décrivant vos pages clés ;</li>
      <li>Être <strong>cité ailleurs</strong> : annuaires professionnels, presse locale, interviews. Un assistant recommande ce qui est corroboré par plusieurs sources.</li>
    </ul>
    <p>
      Nous détaillons cette couche dans notre page <a href="/visibilite-expert-comptable">visibilité de l'expert-comptable dans le search et les assistants IA</a>.
    </p>

    <h2>Plan d'action 90 jours</h2>
    <h3>Jours 1 à 30 — Assainir</h3>
    <ul>
      <li>Revendiquer et compléter la fiche Google à 100 % ; supprimer les doublons ;</li>
      <li>Aligner le NAP sur les dix sources principales ;</li>
      <li>Mettre en place le processus de demande d'avis (script + lien + responsable) ;</li>
      <li>Vérifier l'indexation du site dans Search Console et corriger les erreurs de couverture.</li>
    </ul>
    <h3>Jours 31 à 60 — Construire</h3>
    <ul>
      <li>Rédiger la page implantation principale et deux pages verticales prioritaires ;</li>
      <li>Ajouter le balisage <code>AccountingService</code> / <code>LocalBusiness</code> ;</li>
      <li>Publier deux posts Google par mois et deux articles de blog utiles ;</li>
      <li>Obtenir trois liens locaux (CCI, réseau, presse ou partenaire).</li>
    </ul>
    <h3>Jours 61 à 90 — Amplifier</h3>
    <ul>
      <li>Atteindre un rythme stable de deux avis récents par mois ;</li>
      <li>Ajouter deux pages « mission + ville » à valeur réelle ;</li>
      <li>Mesurer les positions dans le pack local et ajuster les catégories et services de la fiche ;</li>
      <li>Brancher la demande entrante sur une démarche sortante ciblée sur les sociétés nouvellement immatriculées de votre zone.</li>
    </ul>

    <h2>Les indicateurs à suivre</h2>
    <ul>
      <li><strong>Appels, itinéraires et clics site</strong> issus de la fiche Google (statistiques natives) ;</li>
      <li><strong>Position moyenne dans le pack local</strong> sur vos 10 requêtes cibles ;</li>
      <li><strong>Nombre et fraîcheur des avis</strong>, note moyenne, taux de réponse ;</li>
      <li><strong>Impressions et clics</strong> sur les requêtes non-marque dans Search Console ;</li>
      <li><strong>Demandes de rendez-vous qualifiées / mois</strong> et taux de signature ;</li>
      <li><strong>Citations dans les assistants IA</strong> sur vos requêtes métier et géographiques.</li>
    </ul>

    <h2>La limite du référencement local — et ce qui le complète</h2>
    <p>
      Le référencement local capte la demande exprimée : les dirigeants qui cherchent un expert-comptable aujourd'hui. C'est un socle rentable, mais il ne couvre qu'une fraction du marché. Les sociétés qui viennent d'être immatriculées ne tapent pas toutes une requête : beaucoup signent avec le premier cabinet qui les contacte au bon moment.
    </p>
    <p>
      La combinaison qui fonctionne : la <a href="/marque-et-visibilite-expert-comptable">couche marque et visibilité</a> pour être crédible et trouvable, puis la <a href="/produit">détection quotidienne des nouvelles sociétés</a> correspondant à votre ICP pour aller chercher les dossiers que le référencement ne vous apportera jamais. Le <a href="/blog/cas-client-empartners">cas Empartners</a> — fiche Google 5,0/5 sur 95 avis et leads entrants quotidiens — montre les deux couches en fonctionnement.
    </p>
    <p>
      Rappel de conformité : toute démarche sortante doit respecter les <a href="https://www.cnil.fr/fr/la-prospection-commerciale" target="_blank" rel="noopener noreferrer">règles CNIL de prospection B2B</a> (intérêt légitime, lien de désinscription, information des personnes) et le cadre déontologique de la profession.
    </p>
  </ArticleShell>
);

export default ReferencementLocalExpertComptable;
