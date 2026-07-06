import { Helmet } from "react-helmet-async";
import { LandingCabinetLayout } from "./LandingCabinetLayout";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cabinet spécialisé restauration : détecter les nouvelles SAS/SARL à fort potentiel paie + juridique",
  description: "Cas d'usage : configuration Eligibly pour un cabinet spécialisé restauration, ciblage NAF 56xx, plan d'action et résultat attendu.",
  publisher: { "@type": "Organization", name: "Eligibly", url: "https://eligibly.ai" },
  mainEntityOfPage: "https://eligibly.ai/cabinet/cas-usage/cabinet-specialise-restauration",
};

const Page = () => (
  <>
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
    </Helmet>
    <LandingCabinetLayout
      seoTitle="Cabinet EC spécialisé restauration : détecter les nouvelles SAS/SARL"
      seoDescription="Cas d'usage cabinet vertical restauration : filtres NAF 56xx, capital, licence III/IV, plan d'action paie + juridique. Prospection ciblée haut de gamme."
      canonicalPath="/cabinet/cas-usage/cabinet-specialise-restauration"
      eyebrow="Cas d'usage · Vertical restauration"
      h1a="Cabinet spécialisé restauration :"
      h1b="cibler les nouvelles SAS/SARL"
      h1c="à fort potentiel"
      intro="Cabinet vertical restauration (4 associés, 12 collabs, 180 clients CHR), positionné paie multi-établissements + juridique licence III/IV. Objectif : capter systématiquement les nouvelles ouvertures dans un rayon de 3 régions."
      bullets={[
        "Zone : 3 régions (Île-de-France, PACA, AURA)",
        "Cible : SAS · SARL — codes NAF 56xx (restauration & débits de boisson)",
        "ARPU cible : 6 000 à 12 000 €/an (paie + juridique + tenue)",
      ]}
      ctaPrimary="Configurer ce cas d'usage"
      sections={[
        {
          title: "Contexte du cabinet",
          body: <p>Cabinet spécialisé CHR (cafés-hôtels-restaurants) depuis 2011. Missions type : paie multi-établissements, gestion licence III/IV, montage juridique du groupe (holding + SAS d'exploitation), déclarations spécifiques (redevances SACEM, taxes locales). Marché fragmenté avec plusieurs milliers d'ouvertures/an sur les 3 régions cibles.</p>,
        },
        {
          title: "Configuration Eligibly",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Zones :</strong> IDF (75-95), PACA (13, 06, 83, 84), AURA (69, 38, 74, 73).</li>
              <li><strong>Codes NAF :</strong> 5610A (restauration traditionnelle), 5610B, 5610C, 5630Z (débits de boisson), 5621Z (traiteur).</li>
              <li><strong>Capital minimum :</strong> 5 000 € (indicateur de projet structuré).</li>
              <li><strong>Formes juridiques :</strong> SAS · SARL (exclure SASU/EURL — indicateur d'établissement solo à faible ARPU).</li>
              <li><strong>Signaux bonus :</strong> mention d'établissement multiple dans les statuts, dirigeant issu du secteur (mandat CHR antérieur).</li>
              <li><strong>Filtres d'exclusion :</strong> dark kitchens sans local, franchises grands groupes (déjà internalisées).</li>
            </ul>
          ),
        },
        {
          title: "Signaux détectés",
          body: <p>Environ 400 immatriculations CHR/semaine sur les 3 régions. Après filtres : ~80 leads adressables. Après scoring : ~40 leads prioritaires livrés en deux digests (lundi + jeudi).</p>,
        },
        {
          title: "Plan d'action semaine type",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Digest bi-hebdo</strong> transmis à un collab dédié acquisition (poste mi-temps).</li>
              <li><strong>Priorité 1</strong> : leads avec 2+ établissements ou capital ≥ 20 k€ → appel dans les 48 h.</li>
              <li><strong>Priorité 2</strong> : leads mono-établissement capital &lt; 20 k€ → séquence email (J+0 / J+7 / J+14) + LinkedIn.</li>
              <li><strong>Courrier physique</strong> à en-tête cabinet sur les leads score ≥ 85 (~5/semaine) — taux d'ouverture élevé dans le secteur CHR.</li>
            </ul>
          ),
        },
        {
          title: "Résultat observé (ordre de grandeur)",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li>RDV pris / semaine : 5 à 8.</li>
              <li>Lettres de mission / mois : 6 à 10, dont 3 à 4 multi-établissements.</li>
              <li>ARPU moyen nouveaux clients : 7 800 €/an.</li>
              <li>ROI vs recrutement d'un commercial dédié : 4 à 5×.</li>
            </ul>
          ),
        },
      ]}
      faq={[
        { q: "Ce ciblage marche-t-il pour d'autres verticales ?", a: "Oui — la logique s'applique à toute verticale identifiable par codes NAF + signaux capital/dirigeant : artisanat du bâtiment, e-commerce, professions de santé, immobilier, industrie. Les filtres changent, la méthode reste la même." },
      ]}
      related={[
        { label: "Cas d'usage : cabinet 8 collaborateurs", href: "/cabinet/cas-usage/cabinet-8-collaborateurs-departement" },
        { label: "Cas d'usage : cabinet full-remote startups/e-commerce", href: "/cabinet/cas-usage/cabinet-full-remote-startups-ecommerce" },
        { label: "Génération de leads pour experts-comptables", href: "/leads-experts-comptables" },
      ]}
    />
  </>
);

export default Page;