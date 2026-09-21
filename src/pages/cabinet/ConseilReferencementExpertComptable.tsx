import { LandingCabinetLayout } from "@/pages/cabinet/LandingCabinetLayout";

const ConseilReferencementExpertComptable = () => (
  <LandingCabinetLayout
    seoTitle="Conseil en référencement pour expert-comptable — méthode 2026"
    seoDescription="Conseil en référencement pour cabinet d'expertise comptable : fiche Google Business, pages locales et verticales, socle technique, netlinking de proximité, citations dans ChatGPT et Perplexity. Arbitrages budget et KPIs."
    canonicalPath="/conseil-referencement-expert-comptable"
    eyebrow="Conseil en référencement"
    h1a="Conseil en référencement pour"
    h1b="expert-comptable"
    intro="Le référencement d'un cabinet n'est pas un sujet de mots-clés isolés : c'est une question de couverture (requêtes locales, missions, verticales), de preuves vérifiables (avis, cas clients) et de socle technique. Voici la méthode que nous appliquons, avec les arbitrages de budget."
    bullets={[
      "Audit en 3 volets : technique (indexation, Core Web Vitals), sémantique (missions × zones × verticales), autorité (avis, citations, liens)",
      "Priorisation par effort/impact : la fiche Google Business et les avis avant le blog",
      "Visibilité LLM incluse : être cité par ChatGPT, Perplexity, Gemini quand un créateur demande un expert-comptable",
      "KPIs suivis : impressions locales, appels depuis la fiche, formulaires, leads attribués",
    ]}
    ctaPrimary="Demander un audit de visibilité"
    ctaNote="Diagnostic sous 48 h — sans engagement."
    sections={[
      {
        title: "1. Ce qui fait réellement bouger les positions d'un cabinet",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>La fiche Google Business Profile</strong> : catégorie principale « Expert-comptable », zone d'intervention, horaires, photos, questions/réponses, publications mensuelles.</li>
            <li><strong>Le volume et la fraîcheur des avis</strong> : c'est le premier différenciateur local, à collecte process&nbsp;: demande systématique en fin de mission.</li>
            <li><strong>La cohérence NAP</strong> (nom, adresse, téléphone) sur le site, la fiche et les annuaires métier.</li>
            <li><strong>Des pages dédiées par mission et par ville</strong>, avec un contenu réellement différent — pas un gabarit dupliqué.</li>
            <li><strong>Un socle technique propre</strong> : rendu serveur, balises par page, maillage interne, temps de chargement.</li>
          </ul>
        ),
      },
      {
        title: "2. L'architecture sémantique d'un cabinet",
        body: (
          <>
            <p>Trois familles de requêtes, trois types de pages :</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Intention locale</strong> — « expert-comptable [ville] » : page cabinet + fiche Google + avis.</li>
              <li><strong>Intention mission</strong> — « création SASU », « TVA e-commerce », « paie restauration » : une page par mission, avec le détail des livrables et le tarif indicatif.</li>
              <li><strong>Intention verticale</strong> — « comptable restaurateur », « comptable freelance IT » : c'est là que la concurrence est la plus faible et la conversion la plus forte.</li>
            </ol>
          </>
        ),
      },
      {
        title: "3. Visibilité dans les moteurs de réponse (ChatGPT, Perplexity, Gemini)",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li>Les LLM citent ce qu'ils peuvent lire sans JavaScript : le contenu doit être dans le HTML servi.</li>
            <li>Des pages factuelles, datées et sourcées sont reprises bien plus souvent que des pages promotionnelles.</li>
            <li>Un fichier <code>llms.txt</code> et des données structurées (Organization, FAQPage, Article) facilitent l'attribution.</li>
            <li>Les citations dans la presse professionnelle et les annuaires métier alimentent les réponses génératives.</li>
          </ul>
        ),
      },
      {
        title: "4. Arbitrages de budget",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Budget serré</strong> : fiche Google + collecte d'avis + 5 pages missions. C'est 80 % du résultat local.</li>
            <li><strong>Budget intermédiaire</strong> : ajout des pages verticales et d'un rythme de publication mensuel.</li>
            <li><strong>Budget confortable</strong> : refonte technique, netlinking de proximité, contenu de données (baromètres).</li>
            <li><strong>À éviter</strong> : un blog générique sans page de conversion, et l'achat de liens hors thématique.</li>
          </ul>
        ),
      },
      {
        title: "5. Et après le référencement : la génération de leads",
        body: (
          <p>
            Le référencement capte une demande existante — les créateurs qui cherchent déjà un cabinet. Il ne couvre pas ceux qui viennent
            d'immatriculer et n'ont pas encore cherché. C'est le rôle de la détection&nbsp;: identifier chaque nouvelle SASU/SAS/EURL/SARL/SEL de
            votre zone dans la fenêtre de 90 jours où le choix du cabinet se fait. Les deux briques se renforcent&nbsp;: à volume de leads égal,
            un cabinet que le créateur peut vérifier en ligne signe nettement plus.
          </p>
        ),
      },
    ]}
    faq={[
      { q: "Combien de temps avant des résultats en référencement local ?", a: "La fiche Google Business et les avis produisent des effets en 4 à 8 semaines. Les pages missions et verticales montent généralement entre 3 et 6 mois selon la concurrence locale." },
      { q: "Faut-il un blog pour un cabinet d'expertise comptable ?", a: "Pas en priorité. Un blog n'a d'intérêt qu'après les pages missions, les pages verticales, la fiche Google et la collecte d'avis. Sinon il consomme du temps sans convertir." },
      { q: "Le référencement suffit-il à remplir un portefeuille ?", a: "Rarement seul. Il capte une demande existante et limitée en volume local. La détection des nouvelles immatriculations couvre la demande qui ne vous cherche pas encore." },
      { q: "Le démarchage est-il compatible avec la déontologie ?", a: "Oui depuis la réforme de 2014, sous conditions : pas de sollicitation déloyale, information loyale, respect du secret professionnel et du RGPD." },
    ]}
    related={[
      { label: "Visibilité expert-comptable : être trouvé, choisi et cité", href: "/visibilite-expert-comptable" },
      { label: "Référencement local : la méthode complète 2026", href: "/blog/referencement-local-expert-comptable" },
      { label: "Marketing cabinet comptable : le plan en 12 axes", href: "/marketing-cabinet-comptable" },
      { label: "Génération de leads pour experts-comptables", href: "/leads-experts-comptables" },
    ]}
  />
);

export default ConseilReferencementExpertComptable;
