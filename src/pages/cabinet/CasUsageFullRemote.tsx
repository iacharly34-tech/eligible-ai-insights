import { Helmet } from "react-helmet-async";
import { LandingCabinetLayout } from "./LandingCabinetLayout";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cabinet full-remote : cibler les startups et e-commerçants à fort besoin d'accompagnement",
  description: "Cas d'usage cabinet 100 % remote : ciblage national SASU tech + e-commerce, approche LinkedIn + email, plan d'action et résultat observé.",
  publisher: { "@type": "Organization", name: "Eligibly", url: "https://eligibly.ai" },
  mainEntityOfPage: "https://eligibly.ai/cabinet/cas-usage/cabinet-full-remote-startups-ecommerce",
};

const Page = () => (
  <>
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
    </Helmet>
    <LandingCabinetLayout
      seoTitle="Cabinet full-remote : cibler startups & e-commerçants — cas d'usage"
      seoDescription="Cabinet 100 % remote : ciblage national SASU tech + e-commerce, canal LinkedIn + email prioritaire, plan d'action semaine type."
      canonicalPath="/cabinet/cas-usage/cabinet-full-remote-startups-ecommerce"
      eyebrow="Cas d'usage · Cabinet 100 % remote"
      h1a="Cabinet full-remote :"
      h1b="startups & e-commerçants"
      intro="Cabinet 100 % remote (3 associés + 5 collabs distribués France entière), clientèle 100 % SASU / SAS tech, freelances premium et e-commerçants. Objectif : prospecter à l'échelle nationale sans dépendance géographique, avec approche 100 % digitale."
      bullets={[
        "Zone : France entière — pas de dépendance département",
        "Cible : SASU · SAS — codes NAF tech / e-commerce / marketing",
        "Canal prioritaire : LinkedIn + email (pas d'appel à froid, pas de courrier)",
      ]}
      ctaPrimary="Configurer ce cas d'usage"
      sections={[
        {
          title: "Contexte du cabinet",
          body: <p>Cabinet créé en 2020, 100 % en ligne, positionné "cabinet des freelances tech et e-commerçants". Onboarding 100 % digital, tarification forfaitaire par pack. 240 clients actifs, croissance ciblée +15 %/an.</p>,
        },
        {
          title: "Configuration Eligibly",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Zone :</strong> France entière (pas de filtre département).</li>
              <li><strong>Formes juridiques :</strong> SASU · SAS.</li>
              <li><strong>Codes NAF prioritaires :</strong> 6201Z (programmation informatique), 6202A (conseil informatique), 7022Z (conseil affaires), 7311Z (agences pub), 4791A/B (VPC), 4778C (autre commerce détail spé).</li>
              <li><strong>Signaux dirigeant :</strong> LinkedIn actif, âge estimé 25–45 ans, profil digital/tech.</li>
              <li><strong>Filtres d'exclusion :</strong> holdings pures, dirigeant &gt; 55 ans (mauvais fit onboarding digital), pas de LinkedIn.</li>
            </ul>
          ),
        },
        {
          title: "Signaux détectés",
          body: <p>Environ 1 200 immatriculations SASU tech + e-commerce/semaine à l'échelle nationale. Après filtres et scoring : ~80 à 120 leads prioritaires livrés en digest quotidien (lun–ven), 15–25 par jour.</p>,
        },
        {
          title: "Plan d'action semaine type",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Séquence 100 % digitale</strong> orchestrée dans Lemlist/HeyReach : J+0 demande LinkedIn, J+2 email accroche, J+5 InMail, J+9 relance email.</li>
              <li><strong>Landing page dédiée</strong> par persona (SaaS founder / e-commerçant Shopify / consultant indépendant) — signaux d'Eligibly permettent de router chaque lead vers la bonne LP.</li>
              <li><strong>Take-rate optimisé</strong> : offre 1er mois offert + onboarding vidéo 15 min plutôt qu'un RDV physique.</li>
            </ul>
          ),
        },
        {
          title: "Résultat observé (ordre de grandeur)",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li>Taux d'acceptation LinkedIn : 55 à 70 % (dirigeants tech très connectés).</li>
              <li>Taux de conversion demande démo → lettre de mission : 22 à 30 %.</li>
              <li>Lettres de mission / mois : 12 à 20.</li>
              <li>CAC observé : 180 à 240 € par nouveau client.</li>
            </ul>
          ),
        },
      ]}
      faq={[
        { q: "Peut-on cibler uniquement les e-commerçants Shopify ?", a: "Pas via un signal officiel — le CMS n'est pas déclaré à l'INPI. En revanche, le croisement code NAF 4791A/B + signal de site web actif + mentions dans les statuts permet un ciblage e-commerce très précis, à défaut d'être stack-spécifique." },
      ]}
      related={[
        { label: "Cas d'usage : cabinet 8 collaborateurs", href: "/cabinet/cas-usage/cabinet-8-collaborateurs-departement" },
        { label: "Cas d'usage : cabinet spécialisé restauration", href: "/cabinet/cas-usage/cabinet-specialise-restauration" },
        { label: "Canaux d'activation : LinkedIn, email, appel, courrier", href: "/canaux-activation" },
      ]}
    />
  </>
);

export default Page;