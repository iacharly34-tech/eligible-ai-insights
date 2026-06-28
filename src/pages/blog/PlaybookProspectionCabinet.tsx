import { ArticleShell } from "./ArticleShell";

const PlaybookProspectionCabinet = () => (
  <ArticleShell
    badge="Playbook — Édition 2026"
    title="Le Playbook 2026 de la prospection en cabinet d'expertise comptable"
    subtitle="Méthodologie opérationnelle pour transformer le flux d'immatriculations SASU & SAS en clients de conseil signés. Organisation interne, ICP, séquences de contact, posture conseil, gouvernance et indicateurs."
    date="2026-06-28"
    readTime="18 min de lecture"
    url="/blog/playbook-prospection-cabinet-ec-2026"
    description="Playbook complet pour structurer la prospection d'un cabinet d'expertise comptable en 2026 : ICP, organisation, séquences, posture conseil, IA, gouvernance."
    category="Playbook commercial"
    sources={[
      { label: "OEC — Référentiel normatif de la profession", url: "https://www.experts-comptables.fr/" },
      { label: "Atlas — Baromètre des métiers comptabilité 2024", url: "https://www.metierscomptabilite.fr/system/files/media/2024-06/barometre_2024-vague_1_rapport_complet.pdf" },
      { label: "Option Finance — Marché EC en mutation", url: "https://www.optionfinance.fr/entreprise-finance/experts-comptables-un-marche-en-mutation.html" },
      { label: "CNIL — Prospection B2B et intérêt légitime", url: "https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique" },
    ]}
    related={[
      { title: "Construire l'ICP d'un cabinet d'expertise comptable", href: "/blog/icp-cabinet-expertise-comptable" },
      { title: "Baromètre acquisition cabinet EC 2026", href: "/blog/barometre-acquisition-cabinet-ec-2026" },
    ]}
  >
    <h2>Avant-propos : la prospection n'est plus un sujet marketing, c'est un sujet d'associés</h2>
    <p>
      Pendant trente ans, un cabinet d'expertise comptable a vécu sur trois sources d'acquisition implicites : la prescription bancaire, le bouche-à-oreille local et la sédimentation des dossiers anciens. Ces trois sources se contractent simultanément. La prescription bancaire baisse avec la digitalisation des néo-banques, le bouche-à-oreille s'écrase contre Google et les comparateurs, et le portefeuille hérité s'érode mécaniquement avec les cessions, départs à la retraite et migrations vers les acteurs en ligne.
    </p>
    <p>
      Dans le même temps, <strong>plus de 312 000 sociétés commerciales</strong> sont immatriculées chaque année en France. Le marché n'a jamais été aussi liquide. La question n'est plus "où trouver des prospects ?" mais "comment industrialiser une <strong>posture de conseil</strong> capable de capter, qualifier et convertir le bon flux ?". Ce playbook est conçu pour des associés et responsables développement qui veulent passer d'une prospection artisanale à un système.
    </p>

    <h2>Partie 1 — Stratégie : choisir son terrain</h2>

    <h3>1.1 Définir l'ICP avant tout le reste</h3>
    <p>
      L'ICP (Ideal Customer Profile) est le préalable à toute action. Sans ICP écrit et partagé entre associés, chaque action de prospection devient une opinion personnelle. Un ICP utile combine :
    </p>
    <ul>
      <li><strong>Critères durs</strong> : forme juridique, code NAF, capital, géographie, âge de la société.</li>
      <li><strong>Signaux qualitatifs</strong> : trajectoire du dirigeant, présence web, levée de fonds, croissance d'effectif.</li>
      <li><strong>Exclusions explicites</strong> : verticales que le cabinet refuse, zones non-couvertes, concurrents existants.</li>
    </ul>
    <p>
      La méthodologie détaillée est disponible dans notre article dédié : <a href="/blog/icp-cabinet-expertise-comptable">Construire l'ICP d'un cabinet d'expertise comptable</a>.
    </p>

    <h3>1.2 Choisir une à trois verticales</h3>
    <p>
      La verticalisation est devenue le principal différenciant. Un cabinet "généraliste TPE" parle à tout le monde et donc à personne. Un cabinet "spécialiste freelances tech en Île-de-France" ou "expert SELARL santé en Occitanie" est instantanément identifiable, peut produire un contenu et des outils dédiés, et facturer mieux. Choisir une verticale, ce n'est pas refuser les autres clients — c'est concentrer l'effort de marque et d'acquisition.
    </p>

    <h3>1.3 Fixer un CAC cible par verticale</h3>
    <p>
      Pour chaque verticale, posez : LTV estimée × marge brute × taux de churn → CAC maximum acceptable. Sans ce calcul, vous ne saurez jamais si un canal "marche". Avec ce calcul, chaque euro investi devient pilotable.
    </p>

    <h2>Partie 2 — Organisation : qui fait quoi, dans quel temps</h2>

    <h3>2.1 Le trio gagnant : Associé · Chargé de développement · Moteur IA</h3>
    <p>
      Aucun associé n'a 4 heures par jour pour prospecter. Aucun cabinet de moins de 50 collaborateurs ne peut s'offrir une équipe commerciale dédiée. La solution médiane qui fonctionne :
    </p>
    <ul>
      <li><strong>Le moteur IA</strong> (Eligibly ou équivalent) gère la détection, la qualification et la priorisation. 0 minute/jour pour le cabinet.</li>
      <li><strong>Le chargé de développement</strong> (souvent un collaborateur senior ou un alternant business school dédié) traite les 10-30 leads quotidiens : enrichissement, premier contact, prise de RDV. ~2 h/jour.</li>
      <li><strong>L'associé</strong> n'intervient qu'au RDV de cadrage et à la signature. ~3 RDV/semaine.</li>
    </ul>
    <p>
      Ce trio transforme la prospection en un flux maîtrisé, sans charge supplémentaire pour les associés, et sans recruter une force de vente coûteuse.
    </p>

    <h3>2.2 Rituels hebdomadaires</h3>
    <ul>
      <li><strong>Lundi 9 h — Revue pipeline (30 min)</strong> : leads de la semaine, RDV planifiés, propositions à envoyer.</li>
      <li><strong>Vendredi 16 h — Rétro (20 min)</strong> : signaux faibles, leads perdus, ajustement de l'ICP.</li>
      <li><strong>Premier lundi du mois — Comité acquisition (60 min)</strong> : KPIs, arbitrages canaux, contenu à produire.</li>
    </ul>

    <h2>Partie 3 — Le moteur de détection</h2>

    <h3>3.1 Pourquoi vous ne pouvez pas le faire à la main</h3>
    <p>
      25 000 immatriculations par mois. Même en filtrant à 1 %, cela laisse 250 dossiers/mois à examiner. Multiplié par les sources (BODACC, INPI, INSEE, LinkedIn, sites web), la charge cognitive devient prohibitive. La seule voie réaliste est l'automatisation de la collecte et de la qualification en amont.
    </p>

    <h3>3.2 Ce que doit faire un moteur sérieux</h3>
    <ul>
      <li><strong>Ingérer</strong> les sources publiques officielles en continu (INPI, BODACC, INSEE).</li>
      <li><strong>Dédoublonner</strong> les entrées multiples (une même création remontée plusieurs fois).</li>
      <li><strong>Enrichir</strong> avec dirigeant, site web, profils publics, signaux d'activité.</li>
      <li><strong>Appliquer les exclusions</strong> (clients du cabinet, partenaires, zones non-couvertes) <em>avant</em> le scoring.</li>
      <li><strong>Scorer</strong> chaque lead selon l'ICP, avec un score <strong>explicable</strong> (pourquoi ce lead a 87/100).</li>
      <li><strong>Livrer</strong> sur le canal de l'équipe (mail, messagerie, CRM) à heure fixe.</li>
    </ul>
    <p>
      C'est exactement le périmètre d'Eligibly. La différence avec un achat de leads "marketplace" : vous ne recevez pas des leads vendus à 3 cabinets concurrents, vous recevez <strong>vos prospects natifs</strong>, qualifiés selon votre ICP, et exclusifs à votre cabinet.
    </p>

    <h2>Partie 4 — Le premier contact : ouvrir une conversation de conseil</h2>

    <h3>4.1 Le principe directeur : ne jamais vendre un forfait dans le premier mail</h3>
    <p>
      Un primo-entrepreneur reçoit en moyenne 4 à 7 sollicitations de cabinets dans les 30 jours suivant son immatriculation. La majorité disent la même chose : "Bienvenue, voici notre offre TPE à 89 €/mois". Le différenciant n'est pas le prix. C'est <strong>la posture</strong> : reconnaître que le dirigeant fait face à 15 décisions structurantes dans les premières semaines (statut TVA, rémunération président, choix IS/IR, mutuelle, prévoyance, pacte d'associés…), et lui proposer une <strong>conversation de conseil</strong>, pas une grille tarifaire.
    </p>

    <h3>4.2 Structure du premier mail</h3>
    <ul>
      <li><strong>Objet</strong> : personnalisé verticale + signal (ex. "Création de [Société] : 3 points à arbitrer dans les 30 jours").</li>
      <li><strong>Accroche</strong> : reconnaissance d'un signal précis (verticale, capital, parcours du dirigeant).</li>
      <li><strong>Valeur</strong> : 2 ou 3 points concrets et utiles, indépendamment de toute mission.</li>
      <li><strong>CTA</strong> : 20 minutes de conversation, pas une démo, pas un devis.</li>
      <li><strong>Signature</strong> : un associé, pas une adresse générique.</li>
    </ul>

    <h3>4.3 Séquence à 4 touches sur 21 jours</h3>
    <ul>
      <li><strong>J+0</strong> : mail personnalisé associé.</li>
      <li><strong>J+4</strong> : message LinkedIn court, en valeur ajoutée (lien vers article du cabinet sur la verticale).</li>
      <li><strong>J+10</strong> : appel téléphonique, posture conseil (jamais "j'appelais pour savoir si vous aviez reçu mon mail").</li>
      <li><strong>J+21</strong> : mail de clôture, ouverture sur un rendez-vous "même dans 6 mois".</li>
    </ul>

    <h2>Partie 5 — Du RDV à la signature</h2>

    <h3>5.1 Le RDV de cadrage (45 min, pas plus)</h3>
    <p>
      Le RDV de cadrage n'est pas une présentation du cabinet. C'est un <strong>diagnostic</strong> : où en est le dirigeant, quelles sont ses 3 prochaines décisions structurantes, quels sont ses risques court terme. À la fin du RDV, le dirigeant doit avoir gagné quelque chose même s'il ne signe pas. C'est le standard du conseil.
    </p>

    <h3>5.2 La proposition : moins de pages, plus de décisions</h3>
    <p>
      Une proposition gagnante en 2026 tient en 2 à 4 pages. Elle articule trois éléments :
    </p>
    <ul>
      <li><strong>Le périmètre</strong> : tenue, social, fiscal, conseil. Ce que le cabinet fait <em>et ne fait pas</em>.</li>
      <li><strong>Le pricing</strong> : forfaitisé, sans surprise, avec une option conseil clairement valorisée.</li>
      <li><strong>La gouvernance</strong> : qui est l'interlocuteur, rythme des points, livrables annuels.</li>
    </ul>

    <h3>5.3 Pricing : sortir du coût-horaire</h3>
    <p>
      Tant qu'un cabinet vend du temps, il subit l'automatisation. Tant qu'il vend des <strong>décisions évitées et des décisions gagnées</strong>, il commande la valeur. Construisez vos forfaits autour de jalons (clôture, paie, conseil mensuel, comité fiscal annuel) plutôt qu'autour d'heures.
    </p>

    <h2>Partie 6 — La posture conseil, raison d'être du cabinet</h2>
    <p>
      Tout ce playbook converge vers une thèse : <strong>le rôle de l'expert-comptable en 2026 est d'accompagner ses clients</strong>, pas de produire leur comptabilité. La production est automatisée par les logiciels de tenue, l'OCR, la facturation électronique et désormais les LLM. Ce qui reste irremplaçable est la <strong>relation</strong> : comprendre un dirigeant, anticiper ses arbitrages, structurer son patrimoine, défendre ses choix devant l'administration, l'aider à grandir.
    </p>
    <p>
      Cette posture a une conséquence directe sur la prospection : on ne prospecte plus pour "remplir des dossiers", on prospecte pour <strong>choisir avec qui on veut bâtir une relation pluri-annuelle</strong>. C'est plus exigeant. C'est aussi infiniment plus rentable.
    </p>

    <h2>Partie 7 — Conformité &amp; RGPD</h2>
    <ul>
      <li>Prospection B2B fondée sur l'<strong>intérêt légitime</strong> (article 6.1.f RGPD), avec mention d'opposition explicite dans chaque envoi.</li>
      <li>Sources publiques uniquement (INPI, BODACC, INSEE, RNE).</li>
      <li>Pas de récupération de données personnelles sensibles, pas de scraping de plateformes en violation de leurs CGU.</li>
      <li>Registre des traitements à jour, DPO ou référent désigné.</li>
    </ul>
    <p>
      Eligibly opère exclusivement sur ces sources, héberge ses données en Union européenne, et fournit le registre de conformité prêt à intégrer au registre du cabinet.
    </p>

    <h2>Partie 8 — Les KPIs qui comptent vraiment</h2>
    <ul>
      <li><strong>Volume de leads scorés / semaine</strong> (santé du moteur).</li>
      <li><strong>Taux de réponse au premier mail</strong> (qualité de personnalisation, cible &gt; 25 %).</li>
      <li><strong>Taux de prise de RDV sur leads contactés</strong> (cible 10-15 %).</li>
      <li><strong>Taux de signature sur RDV</strong> (cible 35-50 %).</li>
      <li><strong>CAC réel par verticale</strong> (calculé tous les trimestres).</li>
      <li><strong>Part du conseil dans le CA new business</strong> (cible &gt; 30 %).</li>
    </ul>

    <h2>Conclusion — Le cabinet de 2030 se construit en 2026</h2>
    <p>
      Les cabinets qui domineront en 2030 ne sont pas ceux qui auront le meilleur logiciel de tenue. Ce sont ceux qui auront, dès 2026, structuré une <strong>chaîne intégrée détection → conseil → fidélisation</strong>, appuyée sur l'IA pour la partie industrielle, et concentrée sur l'humain pour la partie qui crée vraiment de la valeur. Ce playbook en donne la trame. À chaque cabinet d'en faire sa version.
    </p>
  </ArticleShell>
);

export default PlaybookProspectionCabinet;