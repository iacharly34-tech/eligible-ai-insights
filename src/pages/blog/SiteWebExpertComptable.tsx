import { ArticleShell } from "./ArticleShell";

const SiteWebExpertComptable = () => (
  <ArticleShell
    badge="Guide site web cabinet"
    title="Créer le site web d'un cabinet d'expertise comptable : guide de conception 2026"
    subtitle="Positionnement, arborescence, pages obligatoires, tunnel de contact, socle technique, conformité déontologique, budget et délais réels : la méthode complète pour construire un site qui produit des rendez-vous au lieu d'être une plaquette en ligne."
    date="2026-09-03"
    readTime="15 min de lecture"
    url="/blog/creer-site-web-expert-comptable-guide"
    description="Guide de conception d'un site web pour cabinet d'expertise comptable : positionnement et ICP, arborescence type (accueil, pages missions, verticales, équipe, contact, blog), tunnel de conversion, socle technique et Core Web Vitals, conformité déontologique et RGPD, budget et délais réalistes, indicateurs à suivre."
    category="Guide site web cabinet"
    sources={[
      { label: "OEC — Code de déontologie des professionnels de l'expertise comptable", url: "https://www.experts-comptables.fr/code-de-deontologie" },
      { label: "Décret n° 2014-912 du 18 août 2014 — Légifrance", url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000029388477/" },
      { label: "Google Search Central — Documentation SEO et données structurées", url: "https://developers.google.com/search/docs" },
      { label: "web.dev — Core Web Vitals (LCP, INP, CLS)", url: "https://web.dev/articles/vitals" },
      { label: "CNIL — Cookies et traceurs : ce que dit la loi", url: "https://www.cnil.fr/fr/cookies-et-autres-traceurs" },
      { label: "INSEE — Créations d'entreprises (données trimestrielles)", url: "https://www.insee.fr/fr/statistiques/2015204" },
      { label: "Cas client Eligibly — Empartners", url: "https://empartners.fr" },
    ]}
    related={[
      { title: "Référencement local d'un expert-comptable : la méthode complète", href: "/blog/referencement-local-expert-comptable" },
      { title: "Kit marketing 2026 pour experts-comptables", href: "/blog/guide-demarchage-client-expert-comptable" },
      { title: "Cas client Empartners : présence digitale complète", href: "/blog/cas-client-empartners" },
    ]}
  >
    <p>
      Un site de cabinet d'expertise comptable n'a qu'une fonction économique : transformer une recherche en <strong>demande de rendez-vous qualifiée</strong>. Tout le reste — la charte, les visuels, la page « nos valeurs » — est secondaire. Or la majorité des sites de cabinets sont encore des plaquettes : une page d'accueil générique, une liste de missions indifférenciée, un formulaire enterré en bas de page, aucun contenu géolocalisé.
    </p>
    <p>
      Ce guide décrit la conception d'un site orienté acquisition : ce qu'il faut décider avant d'écrire une ligne, l'arborescence à construire, le tunnel de contact, le socle technique, les obligations légales et déontologiques, puis le budget et les délais réalistes.
    </p>

    <h2>1. Décider avant de concevoir : positionnement et ICP</h2>
    <p>
      Un site généraliste (« comptabilité, fiscalité, social, juridique ») ne se positionne sur rien et ne convertit personne. La première décision n'est pas graphique, elle est commerciale : <strong>quels profils de clients voulez-vous signer</strong> dans les 12 mois ?
    </p>
    <ul>
      <li><strong>Formes juridiques cibles</strong> : SASU et SAS de création récente, EURL/SARL familiales, SEL de professions de santé, holdings patrimoniales.</li>
      <li><strong>Verticales</strong> : tech et SaaS, e-commerce, CHR/restauration, BTP et artisans, professions libérales et santé.</li>
      <li><strong>Zone</strong> : ville et couronne, département, ou full remote assumé.</li>
      <li><strong>Ticket cible</strong> : un cabinet qui vise 250 € HT/mois de honoraires récurrents n'écrit pas les mêmes pages qu'un cabinet qui vise 1 500 €.</li>
    </ul>
    <p>
      Cette décision détermine directement l'arborescence : chaque verticale prioritaire mérite sa page, chaque page cible une intention de recherche précise. Pour formaliser cette étape, voir notre guide <a href="/blog/icp-cabinet-expertise-comptable">définir l'ICP d'un cabinet d'expertise comptable</a>.
    </p>

    <h2>2. L'arborescence type d'un site de cabinet</h2>
    <p>
      Une structure qui fonctionne tient en cinq niveaux, sans profondeur inutile. Chaque URL doit répondre à une question que se pose un prospect.
    </p>
    <h3>Les pages structurantes</h3>
    <ul>
      <li><strong>Accueil</strong> : qui vous accompagnez, sur quelles missions, dans quelle zone, et comment vous joindre. Trois informations visibles sans défilement.</li>
      <li><strong>Une page par mission</strong> : création d'entreprise, tenue et révision, paie et social, fiscalité, accompagnement à la levée ou à la cession. Une page = une intention.</li>
      <li><strong>Une page par verticale</strong> : « expert-comptable e-commerce », « comptable restaurant », « expert-comptable profession libérale ». Ce sont ces pages qui captent les requêtes à forte intention.</li>
      <li><strong>Une page par implantation</strong> si vous avez plusieurs bureaux : contenu réellement distinct (équipe locale, missions locales, plan), jamais un dupliqué avec le nom de la ville remplacé.</li>
      <li><strong>Équipe</strong> : noms, diplômes, numéro d'inscription à l'Ordre, photos réelles. C'est un facteur de confiance mesurable sur une profession réglementée.</li>
      <li><strong>Tarifs ou logique tarifaire</strong> : même sans grille publique, expliquez la méthode de construction du devis. L'opacité totale fait fuir les créateurs d'entreprise.</li>
      <li><strong>Contact</strong> : formulaire court, téléphone cliquable, prise de rendez-vous en ligne, adresse et horaires.</li>
      <li><strong>Blog / ressources</strong> : réponses concrètes aux questions de vos prospects (choix du statut, seuils de TVA, charges déductibles, échéances).</li>
      <li><strong>Mentions légales, politique de confidentialité, gestion des cookies</strong> : obligatoires.</li>
    </ul>
    <h3>Règle de maillage</h3>
    <p>
      Chaque page mission renvoie vers les verticales concernées, chaque verticale renvoie vers la page contact et vers deux articles de blog. Un article ne doit jamais être un cul-de-sac : il pointe systématiquement vers la page mission correspondante.
    </p>

    <h2>3. Le tunnel de conversion : ce qui fait la différence</h2>
    <p>
      Un site de cabinet perd la majorité de ses contacts sur trois points précis.
    </p>
    <ul>
      <li><strong>Le formulaire trop long</strong>. Cinq champs maximum : nom, email, téléphone, forme juridique / activité, message libre. Chaque champ supplémentaire coûte des soumissions.</li>
      <li><strong>L'absence de prise de rendez-vous directe</strong>. Un créateur d'entreprise compare trois cabinets le même soir. Celui qui propose un créneau immédiat gagne l'appel. Un lien de réservation (agenda partagé) vaut mieux qu'un « nous vous répondrons dans les meilleurs délais ».</li>
      <li><strong>Le délai de réponse</strong>. Sur ce marché, la réactivité est le premier argument commercial. Un accusé de réception automatique puis un rappel sous deux heures ouvrées changent le taux de signature.</li>
    </ul>
    <p>
      Ajoutez un <strong>contenu d'appel</strong> (lead magnet) réellement utile : checklist des obligations de la première année d'une SASU, calendrier fiscal annuel, simulateur de charges. C'est ce qui permet de capter un contact qui n'est pas encore prêt à signer.
    </p>

    <h2>4. Le socle technique : sobre, rapide, indexable</h2>
    <p>
      Un cabinet n'a besoin ni d'animations lourdes ni de carrousel plein écran. Il a besoin d'un site rapide, lisible sur mobile et correctement compris par Google et par les assistants IA.
    </p>
    <ul>
      <li><strong>Performance</strong> : viser les seuils Core Web Vitals (LCP &lt; 2,5 s, INP &lt; 200 ms, CLS &lt; 0,1). Images en WebP, polices limitées à deux familles, pas de script tiers superflu.</li>
      <li><strong>Mobile d'abord</strong> : l'essentiel des recherches « expert-comptable + ville » se font sur smartphone. Bouton d'appel accessible en permanence.</li>
      <li><strong>Balisage</strong> : une seule balise H1 par page, titres &lt; 60 caractères avec le mot-clé métier et la ville, meta description &lt; 160 caractères, URL explicites en français.</li>
      <li><strong>Données structurées</strong> : <code>AccountingService</code> ou <code>ProfessionalService</code> pour le cabinet, <code>LocalBusiness</code> avec adresse et horaires, <code>FAQPage</code> sur les pages missions, <code>Article</code> sur le blog. C'est ce balisage qui alimente aussi bien les résultats enrichis de Google que les réponses de ChatGPT ou Perplexity.</li>
      <li><strong>Accessibilité</strong> : contrastes conformes, textes alternatifs, navigation clavier. C'est aussi un signal de qualité.</li>
      <li><strong>Sitemap XML et robots.txt</strong> propres, soumis dans Google Search Console dès la mise en ligne.</li>
    </ul>

    <h2>5. Conformité : déontologie de la profession et RGPD</h2>
    <p>
      Depuis le <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000029388477/" target="_blank" rel="noopener noreferrer">décret du 18 août 2014</a>, la communication et le démarchage sont autorisés pour les experts-comptables. Le <a href="https://www.experts-comptables.fr/code-de-deontologie" target="_blank" rel="noopener noreferrer">Code de déontologie</a> encadre le contenu, pas le canal :
    </p>
    <ul>
      <li>Pas de dénigrement des confrères, pas de comparaison commerciale déloyale ;</li>
      <li>Des informations sincères, vérifiables et compatibles avec le devoir de conseil ;</li>
      <li>Aucun témoignage inventé, aucune performance chiffrée non démontrable ;</li>
      <li>Mention de la qualité d'expert-comptable inscrit à l'Ordre et respect du secret professionnel.</li>
    </ul>
    <p>
      Côté données : bandeau de consentement conforme aux <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" target="_blank" rel="noopener noreferrer">règles CNIL</a> (mesure d'audience exemptée si correctement configurée), base légale documentée pour les formulaires, durée de conservation définie, sous-traitants hébergés dans l'UE de préférence.
    </p>

    <h2>6. Budget et délais réalistes</h2>
    <p>
      Les ordres de grandeur observés sur des projets de cabinets français, hors cas particuliers :
    </p>
    <ul>
      <li><strong>Site vitrine structuré (6 à 10 pages), sans SEO local approfondi</strong> : 2 000 à 5 000 € — 4 à 6 semaines.</li>
      <li><strong>Site orienté acquisition (missions + verticales + blog + balisage + Search Console)</strong> : 5 000 à 12 000 € — 6 à 10 semaines.</li>
      <li><strong>Site multi-bureaux avec pages locales et production éditoriale continue</strong> : 12 000 € et plus, avec un budget de contenu récurrent.</li>
      <li><strong>Récurrent à prévoir</strong> : hébergement et maintenance, production de contenus, animation de la fiche Google, suivi analytics.</li>
    </ul>
    <p>
      Le poste le plus souvent sous-évalué n'est pas le développement mais la <strong>rédaction</strong>. Un cabinet qui délègue ses textes à un prestataire non spécialisé obtient des pages interchangeables, donc invisibles.
    </p>

    <h2>7. Ce qu'il faut mesurer après la mise en ligne</h2>
    <ul>
      <li><strong>Demandes de contact qualifiées / mois</strong> (et non visites totales) ;</li>
      <li><strong>Taux de conversion</strong> visite → formulaire ou rendez-vous, page par page ;</li>
      <li><strong>Impressions et clics par requête</strong> dans Search Console, en distinguant les requêtes de marque des requêtes métier ;</li>
      <li><strong>Positions sur les requêtes « métier + ville »</strong> et présence dans le pack local ;</li>
      <li><strong>Coût d'acquisition</strong> par dossier signé, comparé aux autres canaux (voir <a href="/blog/cout-acquisition-client-cabinet-comptable">le coût d'acquisition client en cabinet</a>).</li>
    </ul>

    <h2>8. Le site est un socle, pas un canal complet</h2>
    <p>
      Un site bien conçu capte la demande <strong>déjà exprimée</strong> : ceux qui cherchent un expert-comptable maintenant. C'est indispensable, mais insuffisant. Chaque mois, l'<a href="https://www.insee.fr/fr/statistiques/2015204" target="_blank" rel="noopener noreferrer">INSEE</a> enregistre des dizaines de milliers de créations de sociétés : ces dirigeants choisissent leur cabinet dans les premières semaines, souvent sans jamais taper votre nom.
    </p>
    <p>
      D'où la séquence que nous appliquons chez Eligibly : d'abord la <a href="/marque-et-visibilite-expert-comptable">couche marque et visibilité</a> (site, fiche Google, référencement local et visibilité dans les assistants IA), qui rend crédible tout ce qui suit ; ensuite la <a href="/produit">détection et la prospection</a> des sociétés fraîchement immatriculées correspondant à votre ICP. Le site transforme la démarche sortante en conversation crédible : un dirigeant contacté vérifie systématiquement le cabinet avant de répondre.
    </p>
    <p>
      Le <a href="/blog/cas-client-empartners">cas Empartners</a> illustre cette séquence : site, fiche Google notée 5,0/5 sur 95 avis, indexation dans les assistants IA, puis digest quotidien de leads qualifiés.
    </p>

    <h2>Checklist de conception</h2>
    <ul>
      <li>ICP écrit (formes juridiques, verticales, zone, ticket cible) ;</li>
      <li>Arborescence : accueil + missions + verticales + équipe + tarifs + contact + blog + pages légales ;</li>
      <li>Un H1 unique, un title et une meta description par page ;</li>
      <li>Formulaire ≤ 5 champs + prise de rendez-vous en ligne + téléphone cliquable ;</li>
      <li>Lead magnet utile et téléchargeable ;</li>
      <li>Core Web Vitals au vert sur mobile ;</li>
      <li>Données structurées <code>AccountingService</code>, <code>LocalBusiness</code>, <code>FAQPage</code>, <code>Article</code> ;</li>
      <li>Fiche Google Business Profile revendiquée et cohérente avec le site ;</li>
      <li>Mentions légales, politique de confidentialité, consentement cookies ;</li>
      <li>Sitemap soumis à Search Console + suivi mensuel des demandes qualifiées.</li>
    </ul>
  </ArticleShell>
);

export default SiteWebExpertComptable;
