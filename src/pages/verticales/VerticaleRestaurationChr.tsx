import { Helmet } from "react-helmet-async";
import { LandingCabinetLayout } from "@/pages/cabinet/LandingCabinetLayout";

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Verticale Restauration & CHR : détecter les nouveaux restaurants, bars, traiteurs",
  publisher: { "@type": "Organization", name: "Eligibly", url: "https://eligibly.ai" },
  mainEntityOfPage: "https://eligibly.ai/verticales/restauration-chr",
};

const Page = () => (
  <>
    <Helmet><script type="application/ld+json">{JSON.stringify(jsonLd)}</script></Helmet>
    <LandingCabinetLayout
      seoTitle="Verticale Restauration & CHR — Eligibly pour cabinets spécialisés paie multi-établissements"
      seoDescription="Détectez chaque nouvelle SAS/SARL restauration (NAF 56xx). Signaux licence III/IV, capital, multi-établissements. Besoins paie, TVA, juridique."
      canonicalPath="/verticales/restauration-chr"
      eyebrow="Verticale · Restauration & CHR"
      h1a="Cabinets spécialisés CHR :"
      h1b="chaque nouvelle ouverture"
      h1c="détectée sous 48 h."
      intro="Restaurants, bars, traiteurs, boulangeries, dark kitchens sélectionnées. Un marché fragmenté à fort turn-over (~15 000 immatriculations/an en France), avec des besoins spécifiques : paie multi-établissements, licence III/IV, redevances SACEM, taxes locales, gestion des pourboires."
      bullets={[
        "Cible : SAS · SARL — NAF 56.10A/B/C (restauration), 56.30Z (débits de boisson), 56.21Z (traiteur)",
        "Signaux : capital ≥ 5 k€, mention licence, ouverture multi-établissements, dirigeant CHR expérimenté",
        "ARPU attendu : 6 000 à 12 000 €/an (paie + juridique + tenue)",
      ]}
      ctaPrimary="Configurer la verticale CHR"
      sections={[
        { title: "Pourquoi cette verticale", body: <p>Le CHR est l'un des rares secteurs où un cabinet spécialisé peut afficher un ARPU supérieur à 8 000 €/an dès la première année. Complexité paie (extras, pourboires, coupures), obligations licence, taxes locales : le dirigeant fuit les cabinets généralistes dès qu'il détecte de la spécialisation.</p> },
        { title: "Configuration Eligibly", body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>NAF :</strong> 5610A (restauration traditionnelle), 5610B (rapide), 5610C (cafétérias), 5630Z (débits), 5621Z (traiteur événementiel).</li>
            <li><strong>Formes :</strong> SAS · SARL (exclure SASU/EURL → indicateur solo faible ARPU).</li>
            <li><strong>Capital :</strong> ≥ 5 000 €.</li>
            <li><strong>Bonus :</strong> multi-établissements dans les statuts, dirigeant issu d'un groupe CHR, franchise indépendante.</li>
            <li><strong>Exclusions :</strong> dark kitchens sans local physique, franchises grands groupes internalisées.</li>
          </ul>
        )},
        { title: "Plan d'action recommandé", body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Canal 1 (J+3) :</strong> courrier en-tête cabinet + carte visite (taux ouverture 90 %).</li>
            <li><strong>Canal 2 (J+14) :</strong> appel — script « paie extras & pourboires, TVA 10 vs 20 % ».</li>
            <li><strong>Canal 3 (J+30) :</strong> visite terrain si zone dense (Paris, Lyon, PACA).</li>
          </ul>
        )},
        { title: "Résultat attendu", body: <p>Sur 3 régions (IDF, PACA, AURA) : ~400 immat CHR/semaine, ~80 leads adressables après filtres, ~40 leads prioritaires livrés en digest bi-hebdo.</p> },
      ]}
      faq={[
        { q: "Les dark kitchens sont-elles incluses ?", a: "Non par défaut — elles ont un profil de risque très différent (durée de vie courte, marges tendues). Filtre réactivable dans votre config si vous êtes spécialisé sur ce segment." },
      ]}
      related={[
        { label: "Cas d'usage : cabinet spécialisé restauration", href: "/cabinet/cas-usage/cabinet-specialise-restauration" },
        { label: "Verticale BTP & artisans", href: "/verticales/btp-artisans" },
      ]}
    />
  </>
);

export default Page;