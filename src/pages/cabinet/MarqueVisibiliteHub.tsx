import { SafeLink } from "@/components/SafeLink";
import { LandingCabinetLayout } from "./LandingCabinetLayout";
import { CabinetVisibilityROI } from "@/components/cabinet/CabinetVisibilityROI";
import { CabinetBrandDashboards } from "@/components/cabinet/CabinetBrandDashboards";

const assets = [
  {
    title: "Fiche Google Business",
    detail:
      "Catégorie principale « Expert-comptable », zone d'intervention déclarée, verticales dans la description, photos réelles, flux d'avis régulier.",
  },
  {
    title: "Site indexable",
    detail:
      "8 à 12 pages : une par service, une par verticale traitée, une par ville d'intervention réelle. Contenu littéral, titres hiérarchisés, rendu sans JavaScript.",
  },
  {
    title: "Balisage structuré",
    detail:
      "Organization, LocalBusiness, FAQPage et Article. C'est ce qui permet aux moteurs et aux assistants IA de restituer vos informations sans les reformuler de travers.",
  },
  {
    title: "Page LinkedIn du cabinet",
    detail:
      "Signaux cohérents avec le site (dénomination, adresse, verticales) et publications à cadence tenable : une prise de position métier par mois vaut mieux que dix reposts.",
  },
  {
    title: "Annuaires métier & prescripteurs",
    detail:
      "Corroboration des mêmes informations sur des sources tierces. C'est le levier le plus sous-utilisé pour être cité par ChatGPT, Perplexity, Gemini et Claude.",
  },
  {
    title: "Mesure",
    detail:
      "Search Console, suivi des domaines référents, note et volume d'avis, et un test manuel trimestriel de citation IA sur cinq questions type.",
  },
];

const cases = [
  {
    label: "Cas client EM Partners — présence digitale construite de zéro",
    href: "/blog/cas-client-empartners",
    detail:
      "Site, fiche Google, image de marque, référencement et indexation par les assistants IA. 5,0 / 5 sur 95 avis Google. Client Eligibly depuis février 2026.",
  },
  {
    label: "Kit marketing 2026 pour experts-comptables",
    href: "/blog/guide-demarchage-client-expert-comptable",
    detail: "12 axes de différenciation, lead magnets, réseau de prescripteurs et checklist opérationnelle.",
  },
  {
    label: "Moderniser un cabinet : état des lieux 2026",
    href: "/blog/moderniser-cabinet-expertise-comptable-ia",
    detail: "Ce que l'IA change réellement dans l'organisation d'un cabinet, et ce qu'elle ne change pas.",
  },
  {
    label: "Coût d'acquisition d'un client en cabinet",
    href: "/blog/cout-acquisition-client-cabinet-comptable",
    detail: "Méthode de calcul, ordres de grandeur par canal, et arbitrage inbound / outbound.",
  },
];

const MarqueVisibiliteHub = () => (
  <LandingCabinetLayout
    seoTitle="Marque et visibilité expert-comptable : le hub complet (2026)"
    seoDescription="Hub de construction de marque pour cabinet d'expertise comptable : actifs digitaux, cas clients documentés, calculateur d'impact visibilité et tableaux de bord de maturité."
    canonicalPath="/marque-et-visibilite-expert-comptable"
    eyebrow="Hub marque & visibilité"
    h1a="Marque et visibilité"
    h1b="du cabinet"
    h1c=" : les actifs, les preuves, les indicateurs."
    intro="Un créateur d'entreprise arbitre son cabinet en trois à dix jours, à partir de ce qu'il trouve : une fiche Google, des avis, un site, une réponse d'assistant IA. Cette page rassemble les six actifs qui composent une marque de cabinet crédible, les cas clients que nous pouvons documenter, un calculateur d'impact et les trois tableaux de bord que nous utilisons en revue mensuelle."
    bullets={[
      "Six actifs digitaux, avec le niveau d'exigence attendu sur chacun",
      "Cas clients réels : EM Partners, 5,0 / 5 sur 95 avis Google",
      "Calculateur d'impact : ce que vaut une place dans le pack local",
      "Tableaux de bord visibilité search, santé des backlinks et preuve sociale",
    ]}
    ctaPrimary="Voir la démo produit"
    ctaNote="20 minutes, sans engagement ni carte bancaire."
    sections={[
      {
        title: "Marque, visibilité, présence digitale : trois choses distinctes",
        body: (
          <p>
            Les trois termes sont utilisés indifféremment, à tort. La <strong>marque</strong> est une position :
            à qui vous vous adressez, sur quelles verticales, avec quel niveau de service et quelle grille
            d'honoraires. La <strong>visibilité</strong> est une exposition : le nombre de fois où cette position
            est vue au moment d'une décision. La <strong>présence digitale</strong> est un inventaire d'actifs :
            fiche Google, site, balisage, LinkedIn, annuaires, mesure. Dans cet ordre — une visibilité forte sur
            une position floue produit du trafic non qualifié, et des actifs bien tenus sans position claire
            produisent un cabinet interchangeable. Chacune de ces trois briques a sa page dédiée, listée en bas
            de cette page.
          </p>
        ),
      },
      {
        title: "Les six actifs d'une marque de cabinet",
        body: (
          <div className="grid sm:grid-cols-2 gap-4 not-prose">
            {assets.map((a, i) => (
              <div key={a.title} className="rounded-xl border border-border bg-card p-5">
                <div className="text-[0.68rem] uppercase tracking-[0.14em] text-primary font-semibold mb-2">
                  Actif {i + 1}
                </div>
                <div className="font-semibold text-foreground">{a.title}</div>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{a.detail}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: "Preuves et cas documentés",
        body: (
          <div className="space-y-3 not-prose">
            <p className="text-foreground/85 leading-relaxed">
              Nous ne publions que ce que nous pouvons montrer. Voici les travaux et analyses sur lesquels
              s'appuie la méthode décrite ci-dessus.
            </p>
            {cases.map((c) => (
              <SafeLink
                key={c.href}
                to={c.href}
                className="block rounded-xl border border-border bg-card p-4 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <span className="text-sm font-medium text-foreground">{c.label} →</span>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
              </SafeLink>
            ))}
          </div>
        ),
      },
      {
        title: "Ce que la marque ne remplace pas",
        body: (
          <p>
            Une marque forte réduit le coût d'acquisition des contacts entrants et raccourcit le cycle de
            décision. Elle ne vous dit pas quelle société vient d'être immatriculée dans votre zone, ni si elle
            correspond à votre ICP, ni combien de jours il reste avant qu'elle choisisse un cabinet. La fenêtre
            de décision se situe dans les 90 jours suivant l'immatriculation. C'est la partie que couvre Eligibly :
            détection quotidienne des immatriculations (SASU, SAS, EURL, SARL, SEL), scoring sur votre ICP,
            coordonnées vérifiées et canal d'activation recommandé — WhatsApp Business, LinkedIn, email ou appel.
          </p>
        ),
      },
    ]}
    faq={[
      {
        q: "Par quel actif commencer si le cabinet n'a rien ?",
        a: "La fiche Google Business, puis le flux d'avis. C'est le seul actif qui produit des appels entrants en trois à six semaines. Le site et le balisage viennent ensuite, sur un horizon de quatre à huit mois.",
      },
      {
        q: "Combien de temps par mois faut-il y consacrer ?",
        a: "Deux heures pour la fiche et les avis, plus une page ou un article. En dessous, la visibilité stagne. Au-dessus, le temps mobilisé n'est plus proportionnel au gain, sauf si le cabinet vise une verticale nationale.",
      },
      {
        q: "Comment savoir si les assistants IA citent le cabinet ?",
        a: "Test manuel trimestriel : posez cinq questions type (« quel comptable pour une SASU à [ville] », « expert-comptable spécialisé restauration [ville] ») à ChatGPT, Perplexity, Gemini et Claude, et notez si le cabinet apparaît. C'est l'indicateur le plus fiable disponible aujourd'hui, en l'absence de reporting officiel des éditeurs.",
      },
      {
        q: "Les chiffres des tableaux de bord sont-ils des résultats garantis ?",
        a: "Non. Sauf mention explicite de source, ce sont des données d'illustration représentatives d'un cabinet de 5 à 20 collaborateurs après douze mois de travail structuré. Les seules valeurs réelles affichées sont celles de la fiche Google d'EM Partners : 5,0 / 5 sur 95 avis.",
      },
      {
        q: "La déontologie limite-t-elle la communication d'un cabinet ?",
        a: "La communication est autorisée dès lors qu'elle reste loyale, non comparative de manière dénigrante et sans démarchage abusif. Publier des contenus techniques, documenter des cas avec l'accord du client et solliciter des avis authentiques entrent dans ce cadre.",
      },
    ]}
    related={[
      { label: "Visibilité expert-comptable", href: "/visibilite-expert-comptable" },
      { label: "Image de marque du cabinet", href: "/image-de-marque-expert-comptable" },
      { label: "Présence digitale du cabinet", href: "/presence-digitale-cabinet-comptable" },
      { label: "Leads experts-comptables", href: "/leads-experts-comptables" },
      { label: "Cas client EM Partners", href: "/blog/cas-client-empartners" },
      { label: "Canaux d'activation", href: "/canaux-activation" },
    ]}
  >
    <CabinetVisibilityROI />
    <CabinetBrandDashboards />
  </LandingCabinetLayout>
);

export default MarqueVisibiliteHub;
