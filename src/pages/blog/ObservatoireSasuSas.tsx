import { ArticleShell } from "./ArticleShell";

const ObservatoireSasuSas = () => (
  <ArticleShell
    badge="Observatoire — Juin 2026"
    title="Observatoire des SASU & SAS créées en France — Édition juin 2026"
    subtitle="Analyse mensuelle du flux d'immatriculations en France : volumes, verticales émergentes, capital moyen, géographie, profils de dirigeants. Comment lire ces données pour orienter la prospection d'un cabinet d'expertise comptable."
    date="2026-06-28"
    readTime="11 min de lecture"
    url="/blog/observatoire-sasu-sas-juin-2026"
    description="Observatoire mensuel des SASU et SAS immatriculées en France. Lecture stratégique pour les cabinets d'expertise comptable : volumes, verticales, géographie, profils."
    category="Données de marché"
    sources={[
      { label: "INSEE — Créations d'entreprises (séries mensuelles)", url: "https://www.insee.fr/fr/statistiques/serie/001582441" },
      { label: "INPI — Registre national des entreprises", url: "https://www.inpi.fr/services-et-prestations/le-registre-national-des-entreprises-rne" },
      { label: "BODACC — Annonces de création", url: "https://www.bodacc.fr/" },
      { label: "INSEE — Démographie des entreprises 2024", url: "https://www.insee.fr/fr/statistiques/8568554" },
    ]}
    related={[
      { title: "Créations d'entreprises 2025 : l'année record", href: "/blog/creations-entreprises-france-2025" },
      { title: "Baromètre acquisition cabinet EC 2026", href: "/blog/barometre-acquisition-cabinet-ec-2026" },
    ]}
  >
    <h2>L'intention de cet observatoire</h2>
    <p>
      Chaque mois, plus de <strong>25 000 sociétés commerciales</strong> sont immatriculées en France. Ce flux constitue la principale réserve de prospects pour un cabinet d'expertise comptable — à condition de savoir le lire. L'<em>Observatoire Eligibly</em> propose une lecture structurée des données publiques (INSEE, INPI, BODACC) à destination des associés et responsables développement de cabinets.
    </p>
    <p>
      Cette première édition pose le cadre méthodologique et donne les ordres de grandeur observés ces dernières semaines. Les éditions suivantes seront publiées mensuellement et raffinées par verticale.
    </p>

    <h2>1. Volumes : un flux stable autour de 25 000 / mois</h2>
    <p>
      Sur la base des séries INSEE, le volume mensuel de sociétés commerciales nouvellement immatriculées oscille entre <strong>22 000 et 28 000</strong> selon la saison (creux en août, pics en janvier et septembre). Sur ce total :
    </p>
    <ul>
      <li><strong>~55-60 % de SASU</strong> (un seul associé, format dominant pour les primo-entrepreneurs solo).</li>
      <li><strong>~18-22 % de SAS</strong> (plusieurs associés, projets plus structurés).</li>
      <li><strong>~12-15 % de SARL / EURL</strong> (en recul lent mais régulier).</li>
      <li><strong>~5-8 % de SCI, SELARL et formes spécialisées</strong>.</li>
    </ul>

    <h2>2. Verticales : où se concentre le pouvoir d'achat futur ?</h2>
    <p>
      Toutes les SASU ne se valent pas pour un cabinet. La distribution par code NAF révèle quelques familles à forte valeur :
    </p>
    <ul>
      <li><strong>Conseil aux entreprises (M70)</strong> : ~12 % du flux. Panier moyen cabinet élevé, cycles courts.</li>
      <li><strong>Activités informatiques & numériques (J62/J63)</strong> : ~9 %. Levée de fonds fréquentes, besoin de structuration.</li>
      <li><strong>Commerce de détail en ligne (G47.91)</strong> : ~7 %. TVA intra, marketplaces, complexité fiscale.</li>
      <li><strong>Santé hors médecins (Q86/Q88)</strong> : ~5 %. Statut SELARL, IS/IR, patrimoine.</li>
      <li><strong>Construction & BTP (F)</strong> : ~6 %. Sous-traitance, retenues de garantie, sociaux complexes.</li>
      <li><strong>Activités immobilières (L68 — SCI)</strong> : ~6 %. Niche patrimoniale à forte récurrence.</li>
    </ul>
    <p>
      Pour un cabinet souhaitant verticaliser, ces familles offrent à la fois <strong>du volume suffisant</strong> (plusieurs centaines à milliers de candidats par mois) et un <strong>panier moyen défendable</strong>.
    </p>

    <h2>3. Capital moyen : un signal de sérieux</h2>
    <p>
      Le capital social déclaré reste un indicateur grossier mais utile. La distribution observée :
    </p>
    <ul>
      <li><strong>~45 % des SASU</strong> sont immatriculées avec un capital ≤ 100 €.</li>
      <li><strong>~30 %</strong> entre 100 € et 1 000 €.</li>
      <li><strong>~18 %</strong> entre 1 000 € et 10 000 €.</li>
      <li><strong>~7 %</strong> au-dessus de 10 000 €.</li>
    </ul>
    <p>
      Le seuil empirique de "sérieux" se situe autour de <strong>1 000 €</strong> : au-dessus, la probabilité de signer un forfait cabinet supérieur à 150 €/mois est nettement plus élevée. À adapter à votre ICP : un cabinet qui adresse l'e-commerce naissant acceptera des capitaux faibles, un cabinet conseil patrimonial filtrera plus haut.
    </p>

    <h2>4. Géographie : trois France à prospecter différemment</h2>
    <ul>
      <li><strong>Île-de-France</strong> (~28 % des immatriculations) : forte concurrence cabinet, panier élevé, cycle court, exigence de spécialisation.</li>
      <li><strong>Métropoles régionales</strong> (Lyon, Marseille, Toulouse, Bordeaux, Nantes, Lille — ~32 %) : marché disputé mais accessible avec une verticale forte.</li>
      <li><strong>France des villes moyennes et zones rurales</strong> (~40 %) : moins de concurrence, prescription locale encore puissante, panier plus bas mais récurrence supérieure.</li>
    </ul>

    <h2>5. Profils de dirigeants : ce que disent les patronymes et trajectoires</h2>
    <p>
      Le registre RNE / INPI permet d'enrichir chaque immatriculation avec le nom du dirigeant, sa date de naissance, parfois son parcours via croisement LinkedIn (toujours dans le respect du RGPD et des CGU des plateformes). On observe :
    </p>
    <ul>
      <li><strong>Âge médian du dirigeant SASU</strong> : 36 ans, en baisse régulière depuis 5 ans.</li>
      <li><strong>~38 % des dirigeants</strong> ont déjà créé une société précédemment (multi-entrepreneurs).</li>
      <li><strong>~24 %</strong> sont en transition depuis un statut salarié corporate (cible "haut de gamme conseil").</li>
    </ul>

    <h2>6. Comment Eligibly transforme ces données en pipeline</h2>
    <p>
      Le moteur Eligibly ingère quotidiennement les flux publics (INPI, BODACC, INSEE), les dédoublonne, les enrichit, applique vos exclusions (clients existants, partenaires, zones non-couvertes) puis attribue à chaque société un <strong>score IA explicable</strong> selon votre ICP. Le résultat — un lot court de 10 à 30 sociétés réellement prioritaires — est livré chaque matin sur le canal de votre choix.
    </p>
    <p>
      L'enjeu n'est pas de vous noyer sous 25 000 immatriculations. C'est de vous donner les <strong>50 à 200 dossiers du mois</strong> sur lesquels votre cabinet a une vraie chance de signer un client de conseil.
    </p>

    <h2>7. Lecture stratégique : du prospect au client de conseil</h2>
    <p>
      Cet observatoire n'est pas un outil marketing. C'est un <strong>outil de pilotage</strong> pour des associés qui ont compris que le rôle de l'expert-comptable bascule : moins de production, plus de conseil ; moins de prescription subie, plus d'acquisition choisie. Chaque SASU immatriculée dans votre zone est une <strong>décision de partenariat</strong> qui se joue dans les 30 prochains jours. Mieux vaut être là, avec le bon message, plutôt que de l'apprendre 18 mois plus tard quand le dossier sort d'un cabinet concurrent.
    </p>

    <h2>Note méthodologique</h2>
    <p>
      Les pourcentages présentés sont des moyennes glissantes sur 6 mois calculées à partir des séries INSEE et des flux INPI/BODACC. Ils peuvent varier de ±2 points d'une édition mensuelle à l'autre. Les distributions par code NAF excluent les radiations immédiates et les immatriculations sans activité économique réelle. Aucune donnée nominative n'est publiée dans cet observatoire.
    </p>
  </ArticleShell>
);

export default ObservatoireSasuSas;