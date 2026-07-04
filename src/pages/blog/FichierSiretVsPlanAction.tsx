import { ArticleShell } from "./ArticleShell";

const FichierSiretVsPlanAction = () => (
  <ArticleShell
    badge="Analyse — 2026"
    title="Fichier de SIRET vs plan d'action : ce qui change vraiment pour un cabinet EC"
    subtitle="Les fichiers d'immatriculations vendus au SIRET (PrimoLead, Nouvelles Entreprises, Kompass) sont utiles mais insuffisants. Voici pourquoi la couche d'action fait toute la différence pour un cabinet d'expertise comptable."
    date="2026-07-04"
    readTime="9 min de lecture"
    url="/blog/fichier-siret-vs-plan-action-comptable"
    description="Comparatif approfondi entre les fichiers de SIRET pour cabinets d'expertise comptable et une plateforme qui livre scoring, canal recommandé et accroche prête à envoyer."
    category="Prospection cabinet"
    sources={[
      { label: "INPI — Registre national des entreprises", url: "https://data.inpi.fr/" },
      { label: "BODACC — Bulletin officiel des annonces civiles et commerciales", url: "https://www.bodacc.fr/" },
      { label: "CNIL — Prospection B2B et intérêt légitime", url: "https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique" },
    ]}
    related={[
      { title: "Playbook prospection cabinet EC 2026", href: "/blog/playbook-prospection-cabinet-ec-2026" },
      { title: "Leads experts-comptables — la page produit", href: "/leads-experts-comptables" },
    ]}
  >
    <h2>Le marché des fichiers d'immatriculation en France</h2>
    <p>
      Depuis dix ans, une poignée d'acteurs commercialisent aux cabinets d'expertise comptable des fichiers hebdomadaires de sociétés fraîchement immatriculées : <strong>PrimoLead</strong>, <strong>Nouvelles Entreprises</strong>, Kompass Créations, C-Radar. Le principe est simple : chaque semaine, un CSV filtré par département, forme juridique et code NAF est livré dans la boîte mail d'un associé, prêt à être importé dans le CRM.
    </p>
    <p>
      Ces fichiers ont une vraie utilité : ils démocratisent l'accès à la donnée publique française (INPI, Sirene, BODACC), remplacent une veille manuelle épuisante et coûtent typiquement 100 à 400 € HT par mois. Mais leur limite structurelle est visible : <strong>ils livrent de la donnée, pas de l'action</strong>.
    </p>

    <h2>Ce qu'un fichier de SIRET livre — et ne livre pas</h2>
    <p>Un fichier PrimoLead ou équivalent contient typiquement :</p>
    <ul>
      <li>Dénomination sociale, SIREN, forme juridique</li>
      <li>Adresse du siège, code postal, département</li>
      <li>Code NAF, capital social, date d'immatriculation</li>
      <li>Nom du dirigeant (sans coordonnées)</li>
    </ul>
    <p>Ce que ces fichiers ne livrent pas :</p>
    <ul>
      <li><strong>La contactabilité</strong> — pas d'email vérifié, pas de LinkedIn, pas de téléphone.</li>
      <li><strong>La priorisation</strong> — un cabinet reçoit 200 à 800 lignes par semaine, à trier manuellement.</li>
      <li><strong>La conformité amont</strong> — les holdings pures, les sociétés avec CAC obligatoire, les serial créateurs remontent dans le fichier au même titre que les vraies cibles.</li>
      <li><strong>Le contexte du dirigeant</strong> — expérience passée, mandats en cours, présence en ligne.</li>
      <li><strong>L'angle d'approche</strong> — chaque associé improvise son message.</li>
    </ul>

    <h2>Le coût caché du fichier : le temps de qualification</h2>
    <p>
      Un cabinet moyen consacre 3 à 5 heures par semaine et par collaborateur commercial à transformer un fichier de 200 lignes en une short-list actionable : dédoublonnage, recherche du dirigeant sur LinkedIn, vérification de l'adresse, exclusion des holdings, priorisation grossière. À 60 € HT / heure chargée, c'est <strong>720 à 1 200 € HT par mois</strong> — trois à dix fois le prix du fichier lui-même.
    </p>
    <p>
      Le vrai coût d'un fichier de SIRET n'est donc pas son prix d'abonnement, c'est le temps humain qu'il consomme avant d'atterrir dans une séquence de prospection.
    </p>

    <h2>La couche « plan d'action » : ce qui change</h2>
    <p>
      Une plateforme comme Eligibly part de la même donnée publique (INPI, Sirene, BODACC), mais y ajoute quatre couches :
    </p>
    <ol>
      <li><strong>Filtres amont automatisés</strong> — CAC mandaté, procédures collectives, holdings pures (10+ sociétés), serial entrepreneurs (5+ sociétés), ancienneté &gt; 90 jours sont exclus par défaut.</li>
      <li><strong>Enrichissement dirigeant</strong> — email professionnel vérifié, profil LinkedIn, historique de mandats, taille passée gérée.</li>
      <li><strong>Scoring explicable</strong> — score 0–100 calculé sur les critères ICP du cabinet, avec les 3 raisons clés affichées.</li>
      <li><strong>Recommandation d'approche</strong> — canal (LinkedIn / email / appel / Instagram / courrier) et accroche pré-rédigée personnalisable.</li>
    </ol>

    <h2>Quand un fichier de SIRET reste la bonne réponse</h2>
    <p>
      Il y a des cas où un fichier suffit largement : cabinet solo qui accepte 5 nouveaux clients par an, département faiblement dense (moins de 30 immatriculations hebdomadaires sur l'ICP), équipe interne déjà rodée à la qualification manuelle. Dans ces contextes, dépenser plus n'a pas de sens.
    </p>
    <p>
      À l'inverse, dès qu'un cabinet vise une croissance à deux chiffres, opère sur une zone dense (Paris, Lyon, Marseille, Bordeaux, Toulouse, Nantes, Lille, Rennes), ou verticalise sur une cible spécifique, la charge de qualification devient un plafond de verre. C'est là que la couche d'action fait la différence.
    </p>

    <h2>Comment choisir ?</h2>
    <p>
      Deux questions à se poser avant de trancher :
    </p>
    <ul>
      <li><strong>Combien d'heures/semaine mes équipes passent-elles à qualifier ?</strong> Multipliez par leur taux horaire chargé. Comparez au delta d'abonnement.</li>
      <li><strong>Quel est mon taux de transformation actuel du fichier → RDV ?</strong> S'il est &lt; 3 %, le problème n'est ni le volume ni le prix — c'est la qualité de tri et l'angle d'approche.</li>
    </ul>
    <p>
      Un fichier de SIRET reste une commodité utile. Un plan d'action est une couche de productivité. Les deux ne se substituent pas ; le second en amplifie le premier.
    </p>
  </ArticleShell>
);

export default FichierSiretVsPlanAction;