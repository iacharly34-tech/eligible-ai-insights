import { Helmet } from "react-helmet-async";
import { LandingCabinetLayout } from "./LandingCabinetLayout";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cabinet généraliste de 8 collaborateurs : 30 prospects qualifiés par semaine dans son département",
  description: "Cas d'usage détaillé : configuration Eligibly, filtres ICP, signaux détectés, plan d'action semaine type et résultat observé pour un cabinet de 8 collaborateurs.",
  author: { "@type": "Organization", name: "Eligibly" },
  publisher: { "@type": "Organization", name: "Eligibly", url: "https://eligibly.ai" },
  mainEntityOfPage: "https://eligibly.ai/cabinet/cas-usage/cabinet-8-collaborateurs-departement",
  about: { "@type": "Thing", name: "Génération de leads pour cabinets d'expertise comptable" },
};

const Page = () => (
  <>
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
    </Helmet>
    <LandingCabinetLayout
      seoTitle="Cabinet 8 collaborateurs : 30 leads/semaine dans son département"
      seoDescription="Cas d'usage cabinet EC généraliste de 8 collaborateurs : configuration ICP, filtres INPI/BODACC, plan d'action semaine type. 30 prospects qualifiés / semaine sur un département."
      canonicalPath="/cabinet/cas-usage/cabinet-8-collaborateurs-departement"
      eyebrow="Cas d'usage · Cabinet généraliste"
      h1a="8 collaborateurs, 1 département,"
      h1b="30 prospects qualifiés / semaine"
      intro="Cabinet généraliste de 8 collaborateurs (2 associés + 6 collabs), implanté dans une préfecture de région, clientèle mixte TPE / professions libérales. Objectif : structurer un flux régulier de nouveaux dossiers créateurs sans embaucher de commercial."
      bullets={[
        "Zone : 1 département (préfecture + 2 sous-préfectures)",
        "Cible : SASU, SAS, EURL — capital ≥ 1 000 € — hors CAC",
        "Objectif : 30 leads scorés / semaine, 3 RDV / semaine",
      ]}
      ctaPrimary="Configurer ce cas d'usage"
      sections={[
        {
          title: "Contexte du cabinet",
          body: <p>Cabinet familial de 40 ans, 8 collaborateurs, 320 clients en portefeuille, ARPU moyen 3 400 €/an. Historiquement prospection via bouche-à-oreille et partenariats notaires/banques. En 2024, le flux entrant s'est essoufflé : ~4 nouveaux dossiers/mois. Objectif fixé pour 2026 : doubler à 8 nouveaux dossiers/mois sans recruter.</p>,
        },
        {
          title: "Configuration Eligibly",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Zone :</strong> 1 département (INSEE 33 — Gironde).</li>
              <li><strong>Formes juridiques :</strong> SASU · SAS · EURL · SARL.</li>
              <li><strong>Capital minimum :</strong> 1 000 €.</li>
              <li><strong>Codes NAF ciblés :</strong> tous sauf 6920Z (experts-comptables) et 64xxZ (holdings pures).</li>
              <li><strong>Filtres d'exclusion :</strong> CAC mandaté, procédures collectives, serial entrepreneur (&gt; 3 créations en 24 mois).</li>
              <li><strong>Fenêtre :</strong> immatriculations 0–60 jours.</li>
            </ul>
          ),
        },
        {
          title: "Signaux détectés",
          body: <p>Environ 120 immatriculations brutes/semaine dans le département. Après filtres amont : ~35 leads adressables. Après scoring et exclusion des scores &lt; 55 : <strong>30 leads prioritaires</strong> livrés chaque lundi matin dans le canal Slack du cabinet.</p>,
        },
        {
          title: "Plan d'action semaine type",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Lundi matin</strong> : réception du digest de 30 leads. Le manager valide la liste en 20 min et attribue chaque lead à un collab.</li>
              <li><strong>Lundi-mardi</strong> : envoi de l'accroche pré-rédigée par email (perso par collab) — 30 emails en 1 h.</li>
              <li><strong>Mercredi</strong> : relance LinkedIn + demande de connexion sur les 30 leads.</li>
              <li><strong>Jeudi</strong> : appels sortants sur les leads score ≥ 75 (env. 8 à 10 par semaine).</li>
              <li><strong>Vendredi</strong> : bilan hebdo, mise à jour CRM, prépa semaine suivante.</li>
            </ul>
          ),
        },
        {
          title: "Résultat observé (ordre de grandeur)",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li>Taux de réponse email : 12 à 18 %.</li>
              <li>Taux d'acceptation LinkedIn : 45 à 60 %.</li>
              <li>RDV pris / semaine : 3 à 5.</li>
              <li>Lettres de mission signées / mois : 4 à 7.</li>
              <li>Temps de qualification économisé : ~6 h/semaine sur l'équipe.</li>
            </ul>
          ),
        },
      ]}
      faq={[
        { q: "Combien de leads pour un département moyen ?", a: "Entre 20 et 40 leads scorés / semaine selon la densité économique du département et vos critères ICP. Île-de-France, Rhône, Nord et Bouches-du-Rhône sont significativement au-dessus." },
        { q: "Faut-il une équipe commerciale ?", a: "Non. L'accroche pré-rédigée et le scoring rendent le suivi accessible aux collaborateurs comptables (20 min/j). Un business developer n'est utile qu'au-delà de 50 leads/semaine." },
      ]}
      related={[
        { label: "Cas d'usage : cabinet spécialisé restauration", href: "/cabinet/cas-usage/cabinet-specialise-restauration" },
        { label: "Cas d'usage : cabinet full-remote startups/e-commerce", href: "/cabinet/cas-usage/cabinet-full-remote-startups-ecommerce" },
        { label: "Génération de leads pour experts-comptables", href: "/leads-experts-comptables" },
      ]}
    />
  </>
);

export default Page;