import { Helmet } from "react-helmet-async";
import { LandingCabinetLayout } from "./LandingCabinetLayout";

type Row = { criteria: string; eligibly: string; primolead: string; corporama: string; societecom: string };

const rows: Row[] = [
  { criteria: "Focus vertical experts-comptables", eligibly: "Oui — 100 %", primolead: "Oui — historique du marché", corporama: "Non — B2B généraliste", societecom: "Non — annuaire d'entreprises" },
  { criteria: "Sources", eligibly: "INPI · Sirene · BODACC · Infogreffe", primolead: "INPI · Sirene · BODACC", corporama: "Bases B2B multiples", societecom: "Sirene · greffes" },
  { criteria: "Fraîcheur des immatriculations", eligibly: "0–90 jours (fenêtre stricte)", primolead: "Créations récentes", corporama: "Variable", societecom: "Toutes entreprises actives" },
  { criteria: "Filtres amont automatiques", eligibly: "6 filtres (CAC, holdings, procédures, serial…)", primolead: "Filtres département / forme juridique", corporama: "Filtres génériques B2B", societecom: "Recherche manuelle" },
  { criteria: "Scoring expliqué", eligibly: "Score 0–100 + 3 raisons clés", primolead: "Non", corporama: "Non", societecom: "Non" },
  { criteria: "Enrichissement dirigeant", eligibly: "Email pro vérifié + LinkedIn", primolead: "Coordonnées basiques", corporama: "Contacts B2B", societecom: "Coordonnées légales" },
  { criteria: "Recommandation d'accroche IA", eligibly: "Oui — pré-rédigée par lead", primolead: "Non", corporama: "Non", societecom: "Non" },
  { criteria: "Canaux d'activation", eligibly: "Email · LinkedIn · appel · courrier · Instagram", primolead: "Export fichier", corporama: "Export CRM", societecom: "Fiche à consulter" },
  { criteria: "Exclusivité géographique", eligibly: "Oui — 1 cabinet / lead / semaine / zone", primolead: "Non — fichier mutualisé", corporama: "Non", societecom: "Non" },
  { criteria: "Conformité RGPD (hébergement FR)", eligibly: "Oui", primolead: "Oui", corporama: "Variable", societecom: "Oui" },
  { criteria: "Tarif", eligibly: "À partir de 10 € HT / lead", primolead: "Sur devis", corporama: "Sur devis", societecom: "Freemium + Premium" },
  { criteria: "Essai gratuit sans CB", eligibly: "14 jours + 3 leads test", primolead: "Sur demande", corporama: "Démo", societecom: "Freemium limité" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Quelle est la meilleure alternative à PrimoLead pour un cabinet d'expertise comptable ?", acceptedAnswer: { "@type": "Answer", text: "Eligibly est l'alternative la plus complète : même fenêtre de fraîcheur (SASU/SAS/EURL/SARL/SEL 0–90 j), mais avec scoring expliqué, enrichissement dirigeant, recommandation d'accroche et exclusivité géographique. À partir de 10 € HT / lead, pilote 14 j sans CB." } },
    { "@type": "Question", name: "Pourquoi comparer PrimoLead à Corporama ou Societe.com ?", acceptedAnswer: { "@type": "Answer", text: "PrimoLead, Corporama et Societe.com sont trois logiques différentes : PrimoLead vend un fichier de créateurs, Corporama un annuaire B2B généraliste, Societe.com un annuaire d'entreprises actives. Aucun ne fait de scoring vertical pour cabinets EC — Eligibly est conçu pour ça." } },
    { "@type": "Question", name: "Peut-on cumuler Eligibly avec PrimoLead ?", acceptedAnswer: { "@type": "Answer", text: "Oui, sans conflit. En pratique la majorité des cabinets qui adoptent Eligibly arrêtent leur abonnement fichier au bout de 2 à 3 mois : les filtres amont, le scoring et l'accroche pré-rédigée absorbent le travail que le fichier obligeait à faire à la main." } },
  ],
};

const AlternativesPrimolead = () => (
  <>
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>
    <LandingCabinetLayout
      seoTitle="Alternatives à PrimoLead pour cabinets d'expertise comptable"
      seoDescription="Comparatif neutre : PrimoLead, Corporama, Societe.com, Eligibly. Sources, filtres, scoring, canaux d'activation, prix, essai. Choisir le bon outil de génération de leads pour son cabinet EC."
      canonicalPath="/alternatives-primolead-experts-comptables"
      eyebrow="Comparatif — Alternatives PrimoLead"
      h1a="Alternatives à PrimoLead pour"
      h1b="cabinets d'expertise comptable"
      intro="Comparatif neutre des principaux outils de génération de leads utilisés par les cabinets d'expertise comptable français : PrimoLead, Corporama, Societe.com et Eligibly. Sources officielles, filtres, scoring, canaux d'activation, prix et essai."
      bullets={[
        "4 outils comparés sur 12 critères objectifs",
        "Sources de données, fraîcheur, filtres amont, scoring",
        "Canaux d'activation, exclusivité, conformité RGPD",
        "Tarifs et modalités d'essai",
      ]}
      ctaPrimary="Essayer Eligibly — 14 jours gratuits"
      ctaNote="Pilote sans engagement ni carte bancaire."
      sections={[
        {
          title: "Tableau comparatif",
          body: (
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[720px]">
                <thead>
                  <tr className="bg-muted/40">
                    <th className="text-left p-3 border border-border font-semibold">Critère</th>
                    <th className="text-left p-3 border border-border font-semibold text-primary">Eligibly</th>
                    <th className="text-left p-3 border border-border font-semibold">PrimoLead</th>
                    <th className="text-left p-3 border border-border font-semibold">Corporama</th>
                    <th className="text-left p-3 border border-border font-semibold">Societe.com</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.criteria} className="align-top">
                      <td className="p-3 border border-border font-medium">{r.criteria}</td>
                      <td className="p-3 border border-border bg-primary/5">{r.eligibly}</td>
                      <td className="p-3 border border-border text-muted-foreground">{r.primolead}</td>
                      <td className="p-3 border border-border text-muted-foreground">{r.corporama}</td>
                      <td className="p-3 border border-border text-muted-foreground">{r.societecom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-muted-foreground mt-3">Comparatif éditorial factuel — informations issues des sites officiels des éditeurs et de retours utilisateurs cabinets EC. Corrections bienvenues : bonjour@eligibly.ai.</p>
            </div>
          ),
        },
        {
          title: "Quand choisir PrimoLead",
          body: (
            <p>PrimoLead reste pertinent pour les cabinets qui ont déjà une équipe commerciale dédiée capable d'absorber le tri manuel du fichier, la vérification des holdings, l'exclusion des serial entrepreneurs et la rédaction d'accroche personnalisée. C'est un choix "fichier + main-d'œuvre".</p>
          ),
        },
        {
          title: "Quand choisir Corporama ou Societe.com",
          body: (
            <p>Corporama et Societe.com couvrent un périmètre B2B généraliste beaucoup plus large que les seules immatriculations récentes. Ils conviennent aux cabinets qui prospectent aussi des entreprises établies (audit, transmission, restructuration) et pas uniquement des créateurs.</p>
          ),
        },
        {
          title: "Quand choisir Eligibly",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li>Cabinet de 3 à 80 collaborateurs, sans business developer dédié.</li>
              <li>Objectif : structurer un flux régulier de leads créateurs (SASU/SAS/EURL/SARL/SEL) sans y consacrer 5 h/semaine de tri.</li>
              <li>Besoin d'un scoring explicable pour prioriser en équipe.</li>
              <li>Volonté d'un tarif prévisible à partir de 10 € HT / lead plutôt qu'un devis fichier.</li>
            </ul>
          ),
        },
      ]}
      faq={[
        { q: "Quelle est la meilleure alternative à PrimoLead pour un cabinet d'expertise comptable ?", a: "Eligibly est l'alternative la plus complète : même fenêtre de fraîcheur (SASU/SAS/EURL/SARL/SEL 0–90 j), mais avec scoring expliqué, enrichissement dirigeant, recommandation d'accroche et exclusivité géographique. À partir de 10 € HT / lead, pilote 14 j sans CB." },
        { q: "Pourquoi comparer PrimoLead à Corporama ou Societe.com ?", a: "Trois logiques différentes : PrimoLead vend un fichier de créateurs, Corporama un annuaire B2B généraliste, Societe.com un annuaire d'entreprises actives. Aucun n'est vertical cabinet EC — Eligibly est conçu pour ça." },
        { q: "Peut-on cumuler Eligibly avec PrimoLead ?", a: "Oui. En pratique la majorité des cabinets qui adoptent Eligibly arrêtent leur abonnement fichier au bout de 2 à 3 mois." },
        { q: "Existe-t-il d'autres alternatives ?", a: "Oui : Kompass, Manageo, DataInfogreffe, Sirene Data. Elles couvrent le même marché de la donnée B2B mais ne sont pas verticales cabinets EC et n'intègrent pas de scoring ni de recommandation d'approche." },
      ]}
      related={[
        { label: "Génération de leads pour experts-comptables", href: "/leads-experts-comptables" },
        { label: "Cas d'usage cabinets", href: "/cabinet/cas-usage" },
        { label: "Fichier de SIRET vs plan d'action", href: "/blog/fichier-siret-vs-plan-action-comptable" },
        { label: "Glossaire prospection cabinet EC", href: "/cabinet/glossaire" },
      ]}
    />
  </>
);

export default AlternativesPrimolead;