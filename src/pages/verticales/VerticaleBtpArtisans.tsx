import { Helmet } from "react-helmet-async";
import { LandingCabinetLayout } from "@/pages/cabinet/LandingCabinetLayout";

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Verticale BTP & Artisans", publisher: { "@type": "Organization", name: "Eligibly" }, mainEntityOfPage: "https://eligibly.ai/verticales/btp-artisans" };

const Page = () => (
  <>
    <Helmet><script type="application/ld+json">{JSON.stringify(jsonLd)}</script></Helmet>
    <LandingCabinetLayout
      seoTitle="Verticale BTP & Artisans — Eligibly pour cabinets EC du bâtiment"
      seoDescription="Détectez chaque nouvelle SASU/SAS/EURL/SARL/SEL BTP (NAF 41-43). Signaux : capital, qualification RGE, sous-traitance. Besoins autoliquidation TVA, garantie décennale, paie."
      canonicalPath="/verticales/btp-artisans"
      eyebrow="Verticale · BTP & Artisans"
      h1a="Cabinets spécialisés bâtiment :"
      h1b="chaque nouvelle SARL"
      h1c="du bassin, chaque matin."
      intro="Plombiers, électriciens, maçons, entreprises générales du bâtiment, second œuvre. Un marché à volumes très élevés (~4 000 créations/mois BTP), à besoins comptables spécifiques : autoliquidation TVA, garantie décennale, sous-traitance déclarée, gestion des chantiers."
      bullets={[
        "Cible : SASU · SARL · EURL — NAF section F (41-43)",
        "Signaux : capital 5–20 k€, qualification RGE, référence auto-liquidation dans statuts",
        "ARPU attendu : 2 400 à 4 800 €/an (compta + paie ouvriers + juridique)",
      ]}
      ctaPrimary="Configurer la verticale BTP"
      sections={[
        { title: "Pourquoi cette verticale", body: <p>Le BTP concentre 12 % des créations d'entreprises françaises. Cycle d'acquisition court : 60 % des créateurs choisissent un cabinet dans les 45 jours suivant l'immat. Fenêtre de contact ultra-critique.</p> },
        { title: "Configuration Eligibly", body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>NAF :</strong> 41.20A/B (construction bâtiments), 43.21A à 43.99Z (travaux spécialisés).</li>
            <li><strong>Formes :</strong> SASU (35 %), SARL (48 %), EURL (17 %). SASU souvent = solo, SARL = premier employé attendu &lt; 6 mois.</li>
            <li><strong>Signaux forts :</strong> capital ≥ 5 k€, mention RGE ou Qualibat, sous-traitance BtoB.</li>
            <li><strong>Exclusions :</strong> auto-entrepreneurs (hors périmètre), promoteurs immobiliers (autre verticale).</li>
          </ul>
        )},
        { title: "Plan d'action recommandé", body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Canal 1 (J+3) :</strong> courrier + carte visite (canal roi sur cette verticale).</li>
            <li><strong>Canal 2 (J+10) :</strong> appel — angle « auto-liquidation TVA & paie ouvriers ».</li>
            <li><strong>Canal 3 (J+21) :</strong> email court avec devis type.</li>
          </ul>
        )},
        { title: "Résultat attendu", body: <p>Sur un département dense (75, 69, 13) : ~200 immat BTP/mois, ~60 leads qualifiés livrés. RDV : 20–28 %. Meilleur ratio conversion des 6 verticales grâce au canal courrier.</p> },
      ]}
      faq={[
        { q: "Filtrez-vous les créateurs qui basculent depuis micro-entreprise ?", a: "Oui — c'est un signal fort (activité déjà rodée, ARPU stable). Un badge « ex-micro » apparaît dans le lead." },
      ]}
      related={[
        { label: "Verticale Restauration & CHR", href: "/verticales/restauration-chr" },
        { label: "Sales Assistant : le copilote IA", href: "/sales-assistant" },
      ]}
    />
  </>
);

export default Page;