import { Helmet } from "react-helmet-async";
import { LandingCabinetLayout } from "@/pages/cabinet/LandingCabinetLayout";

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Verticale Holdings & Groupes", publisher: { "@type": "Organization", name: "Eligibly" }, mainEntityOfPage: "https://eligibly.ai/verticales/holdings-groupes" };

const Page = () => (
  <>
    <Helmet><script type="application/ld+json">{JSON.stringify(jsonLd)}</script></Helmet>
    <LandingCabinetLayout
      seoTitle="Verticale Holdings & Groupes — Eligibly pour cabinets EC haut de gamme"
      seoDescription="Ciblez les nouvelles holdings, SPFPL, sociétés civiles patrimoniales. Signaux : capital élevé, multi-associés, montage LBO. ARPU 8-25 k€/an."
      canonicalPath="/verticales/holdings-groupes"
      eyebrow="Verticale · Holdings & Groupes"
      h1a="Cabinets haut de gamme :"
      h1b="chaque nouvelle holding"
      h1c="détectée à J+1."
      intro="Holdings d'entreprise, SPFPL, sociétés civiles patrimoniales, structures LBO. Une population à faible volume mais à ARPU exceptionnel (8 000 à 25 000 €/an), avec des besoins pointus : intégration fiscale, pacte d'associés, régime mère-fille, management package."
      bullets={[
        "Cible : SAS · SC · SCI · SPFPL — capital ≥ 50 k€ ou multi-associés",
        "Signaux : mention holding dans objet, dirigeant multi-mandats, apport en nature",
        "ARPU attendu : 8 000 à 25 000 €/an — cible haut de gamme, LTV très longue",
      ]}
      ctaPrimary="Configurer la verticale Holdings"
      sections={[
        { title: "Pourquoi cette verticale", body: <p>Faible volume (~250 holdings pertinentes/mois France entière) mais chaque signature vaut 5 à 10 clients « standards ». Cible naturelle des cabinets structurés (10+ collabs, présence associé senior). Le choix du cabinet se joue sur la spécialisation affichée et la rapidité de réponse initiale.</p> },
        { title: "Configuration Eligibly", body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Signaux inclusion :</strong> capital ≥ 50 k€, objet social mentionnant holding / participations, apports en nature détectés au BODACC.</li>
            <li><strong>Structures :</strong> SAS (holding op.), SC/SCI (patrimoniale), SPFPL (holdings de libéraux).</li>
            <li><strong>Enrichissement :</strong> Pappers + Kaspr — mandats antérieurs du dirigeant, structures liées existantes.</li>
            <li><strong>Exclusions :</strong> holdings « boîtes aux lettres » &lt; 5 k€, structures avec CAC déjà nommé.</li>
          </ul>
        )},
        { title: "Plan d'action recommandé", body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Canal 1 (J+1) :</strong> LinkedIn direct associé senior — angle spécialisation.</li>
            <li><strong>Canal 2 (J+5) :</strong> email personnalisé — cas client comparable anonymisé.</li>
            <li><strong>Canal 3 (J+14) :</strong> appel — script « intégration fiscale & pacte associés ».</li>
          </ul>
        )},
        { title: "Résultat attendu", body: <p>~15 à 25 leads holdings qualifiés/mois France entière. RDV : 30–40 %. 1 à 2 signatures/mois = payback abonnement en 1 signature (ARPU minimum 8 k€/an vs 3 480 € abonnement Eligibly annuel).</p> },
      ]}
      faq={[
        { q: "Distinguez-vous holdings actives et holdings dormantes ?", a: "Oui — un scoring dédié tient compte de l'objet social, du capital initial, des apports au BODACC et de la présence d'associés opérationnels." },
      ]}
      related={[
        { label: "Verticale Professions libérales", href: "/verticales/professions-liberales-sante" },
        { label: "Sales Assistant", href: "/sales-assistant" },
      ]}
    />
  </>
);

export default Page;