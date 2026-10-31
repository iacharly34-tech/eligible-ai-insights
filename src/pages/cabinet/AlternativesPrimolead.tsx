import { LandingCabinetLayout } from "./LandingCabinetLayout";

type Row = { criteria: string; eligibly: string; primolead: string; corporama: string; societecom: string };

const rows: Row[] = [
  { criteria: "Focus vertical experts-comptables", eligibly: "Oui — 100 %", primolead: "À confirmer auprès de l’éditeur", corporama: "À confirmer auprès de l’éditeur", societecom: "À confirmer auprès de l’éditeur" },
  { criteria: "Sources", eligibly: "INPI/RNE · INSEE Sirene · BODACC", primolead: "À confirmer auprès de l’éditeur", corporama: "À confirmer auprès de l’éditeur", societecom: "À confirmer auprès de l’éditeur" },
  { criteria: "Fraîcheur des immatriculations", eligibly: "0–90 jours (fenêtre stricte)", primolead: "À confirmer auprès de l’éditeur", corporama: "À confirmer auprès de l’éditeur", societecom: "À confirmer auprès de l’éditeur" },
  { criteria: "Filtres amont automatiques", eligibly: "6 filtres (CAC, holdings, procédures, serial…)", primolead: "À confirmer auprès de l’éditeur", corporama: "À confirmer auprès de l’éditeur", societecom: "À confirmer auprès de l’éditeur" },
  { criteria: "Scoring expliqué", eligibly: "Score 0–100 + 3 raisons clés", primolead: "À confirmer auprès de l’éditeur", corporama: "À confirmer auprès de l’éditeur", societecom: "À confirmer auprès de l’éditeur" },
  { criteria: "Enrichissement dirigeant", eligibly: "Coordonnées selon disponibilité ; qualité indiquée", primolead: "À confirmer auprès de l’éditeur", corporama: "À confirmer auprès de l’éditeur", societecom: "À confirmer auprès de l’éditeur" },
  { criteria: "Recommandation d'accroche IA", eligibly: "Oui — pré-rédigée par lead", primolead: "À confirmer auprès de l’éditeur", corporama: "À confirmer auprès de l’éditeur", societecom: "À confirmer auprès de l’éditeur" },
  { criteria: "Canaux d'activation", eligibly: "WhatsApp · Email · LinkedIn · appel · courrier · Instagram", primolead: "À confirmer auprès de l’éditeur", corporama: "À confirmer auprès de l’éditeur", societecom: "À confirmer auprès de l’éditeur" },
  { criteria: "Exclusivité géographique", eligibly: "Lead attribué à un cabinet, sans mutualisation", primolead: "À confirmer auprès de l’éditeur", corporama: "À confirmer auprès de l’éditeur", societecom: "À confirmer auprès de l’éditeur" },
  { criteria: "Conformité RGPD (hébergement FR)", eligibly: "Oui", primolead: "À confirmer auprès de l’éditeur", corporama: "À confirmer auprès de l’éditeur", societecom: "À confirmer auprès de l’éditeur" },
  { criteria: "Tarif", eligibly: "À partir de 10 € HT / lead", primolead: "À confirmer auprès de l’éditeur", corporama: "À confirmer auprès de l’éditeur", societecom: "À confirmer auprès de l’éditeur" },
  { criteria: "Essai gratuit sans CB", eligibly: "14 jours + 3 leads test", primolead: "À confirmer auprès de l’éditeur", corporama: "À confirmer auprès de l’éditeur", societecom: "À confirmer auprès de l’éditeur" },
];

const AlternativesPrimolead = () => (
  <>
    <LandingCabinetLayout
      seoTitle="Alternatives à PrimoLead pour cabinets d'expertise comptable"
      seoDescription="Comparatif neutre : PrimoLead, Corporama, Societe.com, Eligibly. Sources, filtres, scoring, canaux d'activation, prix, essai. Choisir le bon outil de génération de leads pour son cabinet EC."
      canonicalPath="/alternatives-primolead-experts-comptables"
      eyebrow="Comparatif — Alternatives PrimoLead"
      h1a="Alternatives à PrimoLead pour"
      h1b="cabinets d'expertise comptable"
      intro="Comparatif publié par Eligibly, éditeur de l’une des solutions. Comparaison des principaux outils de génération de leads utilisés par les cabinets d'expertise comptable français : PrimoLead, Corporama, Societe.com et Eligibly. Sources officielles, filtres, scoring, canaux d'activation, prix et essai."
      bullets={[
        "12 critères à vérifier avant de choisir un fournisseur",
        "Sources de données, fraîcheur, filtres amont, scoring",
        "Canaux d'activation, exclusivité, conformité RGPD",
        "Tarifs et modalités d'essai",
      ]}
      ctaPrimary="Essayer Eligibly — 14 jours gratuits"
      ctaNote="Pilote sans engagement ni carte bancaire."
      sections={[
        { title: "Quelle alternative à PrimoLead pour la prospection comptable ?", body: <p>Eligibly propose une détection et une qualification orientées cabinet : société, récence, score motivé, qualité des coordonnées, canal et proposition d’approche. Pour arbitrer, testez le même périmètre géographique et sectoriel, comparez la part de dossiers réellement exploitables et additionnez le prix des données au temps de tri. Ni une ligne de fichier ni un score ne garantissent une lettre de mission.</p> },
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
              <p className="text-xs text-muted-foreground mt-3">Révision éditoriale : 31 octobre 2026. Les fonctionnalités concurrentes non vérifiées sont indiquées « à confirmer » : cela ne signifie pas qu’elles sont absentes. Demandez une démonstration, les conditions contractuelles et un devis daté à chaque éditeur. Corrections : contact@eligibly.ai.</p>
            </div>
          ),
        },
        {
          title: "Quand choisir PrimoLead",
          body: (
            <p>PrimoLead peut être étudié si son périmètre de données et ses modalités de livraison répondent à votre besoin. Vérifiez lors d’une démonstration la fraîcheur, les filtres, les coordonnées, le travail de qualification restant et les droits de réutilisation : ces points ne sont pas attestés ici.</p>
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
        { q: "Quelle est la meilleure alternative à PrimoLead pour un cabinet d'expertise comptable ?", a: "Eligibly est une alternative à étudier pour un cabinet qui recherche une détection des créations, un score expliqué et une proposition de canal et d’accroche. À partir de 10 € HT par lead, pilote de 14 jours sans carte bancaire. Comparez les données réellement fournies et le coût de qualification ; aucune solution n’est universellement la meilleure." },
        { q: "Pourquoi comparer PrimoLead à Corporama ou Societe.com ?", a: "Pour comparer des besoins de veille de créations, de recherche d’entreprises et de qualification commerciale. Les fonctionnalités, sources et modalités actuelles de chaque concurrent doivent être confirmées auprès de l’éditeur." },
        { q: "Peut-on cumuler Eligibly avec PrimoLead ?", a: "Oui, sous réserve des licences et règles d’utilisation. Dédupliquez par SIREN et mesurez le gain de chaque outil ; nous ne disposons pas d’une mesure attestée de migration depuis PrimoLead." },
        { q: "Existe-t-il d'autres alternatives ?", a: "Vous pouvez également étudier les données publiques Sirene/RNE et les fournisseurs de données B2B. Vérifiez leur couverture, leur licence, leurs fonctions et le temps nécessaire à la qualification." },
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