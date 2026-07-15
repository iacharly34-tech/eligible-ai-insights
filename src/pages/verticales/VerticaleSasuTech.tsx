import { Helmet } from "react-helmet-async";
import { LandingCabinetLayout } from "@/pages/cabinet/LandingCabinetLayout";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Verticale SASU Tech & Conseil IT : détecter les freelances et micro-ESN à fort ARPU",
  description: "Configuration Eligibly pour cabinets spécialisés SASU tech : filtres NAF 62/63, capital, dirigeant issu du numérique, plan d'action LinkedIn + email.",
  publisher: { "@type": "Organization", name: "Eligibly", url: "https://eligibly.ai" },
  mainEntityOfPage: "https://eligibly.ai/verticales/sasu-tech",
};

const Page = () => (
  <>
    <Helmet><script type="application/ld+json">{JSON.stringify(jsonLd)}</script></Helmet>
    <LandingCabinetLayout
      seoTitle="Verticale SASU Tech & Conseil IT — Eligibly pour cabinets EC"
      seoDescription="Configuration Eligibly pour cibler les nouvelles SASU tech, freelances IT et micro-ESN. Filtres NAF 62/63, capital, dirigeant ex-ESN. Digest matinal + plan d'action LinkedIn/email."
      canonicalPath="/verticales/sasu-tech"
      eyebrow="Verticale · SASU Tech & Conseil IT"
      h1a="Cabinets spécialisés tech :"
      h1b="captez chaque nouvelle SASU IT"
      h1c="de votre bassin."
      intro="Freelances IT, consultants data, micro-ESN, éditeurs SaaS naissants. Une population à forte densité d'immatriculations, ARPU 1 800–3 600 €/an, canal d'entrée idéal : LinkedIn + email. Eligibly filtre le bruit et livre chaque matin les créations les plus qualifiées."
      bullets={[
        "Cible : SASU · SAS — codes NAF 62.01Z, 62.02A, 62.03Z, 63.11Z, 74.90B",
        "Signaux forts : dirigeant issu d'une ESN, capital 1–10 k€, activité conseil / dev / data",
        "ARPU attendu : 1 800 à 3 600 €/an (compta + juridique + rémunération dirigeant)",
      ]}
      ctaPrimary="Configurer la verticale Tech"
      sections={[
        { title: "Pourquoi cette verticale", body: <p>~2 100 SASU tech immatriculées par mois en France (source INPI, Q2 2026). 62 % des dirigeants sont issus d'une ESN ou d'une DSI. Fenêtre optimale d'accroche : J+3 à J+21 après immatriculation — au-delà, 40 % ont déjà choisi un cabinet ou un logiciel de compta en ligne.</p> },
        { title: "Configuration Eligibly", body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Codes NAF :</strong> 62.01Z (dev sur mesure), 62.02A (conseil SI), 62.03Z (infogérance), 63.11Z (data / hosting), 74.90B (autres activités spécialisées).</li>
            <li><strong>Formes juridiques :</strong> SASU (85 % du gisement) + SAS multi-associés &lt; 3 personnes.</li>
            <li><strong>Capital :</strong> 1 000–10 000 € (au-delà, souvent déjà accompagné).</li>
            <li><strong>Enrichissement dirigeant :</strong> Pappers + Kaspr — historique LinkedIn, ancien employeur, ancienneté dans le numérique.</li>
            <li><strong>Exclusions :</strong> holdings, sociétés avec CAC, dirigeants déjà multi-mandats (serial entrepreneurs).</li>
          </ul>
        )},
        { title: "Plan d'action recommandé", body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Canal 1 (J+3) :</strong> invitation LinkedIn + note personnalisée sur l'ex-ESN d'origine.</li>
            <li><strong>Canal 2 (J+7) :</strong> email 3 touches — angle « arbitrage rémunération dirigeant vs dividendes ».</li>
            <li><strong>Canal 3 (J+14) :</strong> appel court — script « TVA franchise en base vs bascule ».</li>
          </ul>
        )},
        { title: "Résultat attendu", body: <p>Sur un bassin régional type (Île-de-France + AURA), ~180 SASU tech qualifiées/mois. Après scoring ICP cabinet : ~40 leads livrés. Taux de RDV observé sur les cabinets pilotes : 12–18 % → 5 à 7 nouveaux clients/mois si un collab dédie 1 h/jour à l'acquisition.</p> },
      ]}
      faq={[
        { q: "Distinguez-vous les vraies SASU tech des sociétés-écran ?", a: "Oui — croisement NAF + intitulé + activité déclarée + profil LinkedIn du dirigeant. Les sociétés patrimoniales ou holdings personnelles sont exclues automatiquement." },
        { q: "Combien de leads par mois puis-je espérer sur ma région ?", a: "Entre 20 et 80 leads qualifiés selon la région. IDF ≈ 80, AURA ≈ 45, PACA ≈ 35, Nouvelle-Aquitaine ≈ 30. Volumes indicatifs, basés sur les données INPI Q2 2026." },
      ]}
      related={[
        { label: "Verticale e-commerce", href: "/verticales/e-commerce" },
        { label: "Sales Assistant : le copilote IA", href: "/sales-assistant" },
      ]}
    />
  </>
);

export default Page;