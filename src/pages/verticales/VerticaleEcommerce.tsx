import { Helmet } from "react-helmet-async";
import { LandingCabinetLayout } from "@/pages/cabinet/LandingCabinetLayout";

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Verticale E-commerce : détecter les nouvelles boutiques Shopify / WooCommerce",
  publisher: { "@type": "Organization", name: "Eligibly", url: "https://eligibly.ai" },
  mainEntityOfPage: "https://eligibly.ai/verticales/e-commerce",
};

const Page = () => (
  <>
    <Helmet><script type="application/ld+json">{JSON.stringify(jsonLd)}</script></Helmet>
    <LandingCabinetLayout
      seoTitle="Verticale E-commerce — Eligibly pour cabinets EC spécialisés DNVB & marketplaces"
      seoDescription="Ciblez les nouvelles SASU/SAS e-commerce (NAF 47.91B, 47.19B). Signaux : Shopify, WooCommerce, dropshipping. Besoins TVA UE, OSS/IOSS, marketplaces."
      canonicalPath="/verticales/e-commerce"
      eyebrow="Verticale · E-commerce & DNVB"
      h1a="Cabinets spécialisés e-commerce :"
      h1b="chaque nouvelle boutique en ligne"
      h1c="dans votre digest."
      intro="DNVB, marketplaces Amazon/Etsy, drop, formation en ligne. Une population qui explose depuis 2024 avec des besoins comptables très spécifiques : TVA intra-UE, OSS/IOSS, retenues marketplaces, tenue de caisse digitale. Eligibly détecte les créations et priorise celles à fort volume prévisible."
      bullets={[
        "Cible : SASU · SAS · EURL — NAF 47.91B (VAD), 47.19B, 47.11F, 47.71Z",
        "Signaux : e-shop déclaré, référence Shopify/Woo dans l'objet social, dropshipping",
        "ARPU attendu : 2 400 à 6 000 €/an (compta + TVA UE + conseil marketplaces)",
      ]}
      ctaPrimary="Configurer la verticale E-commerce"
      sections={[
        { title: "Pourquoi cette verticale", body: <p>~1 400 nouvelles sociétés e-commerce immatriculées par mois. 58 % opèrent sur Shopify, 22 % WooCommerce, 20 % marketplaces exclusives. Point de bascule critique : le seuil OSS 10 000 € de ventes intra-UE, généralement franchi au bout de 4–8 mois pour les DNVB actives.</p> },
        { title: "Configuration Eligibly", body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Codes NAF :</strong> 47.91B (VAD), 47.19B (autres commerces spécialisés), 47.11F, 47.71Z (habillement), 47.65Z (jeux, jouets).</li>
            <li><strong>Signaux bonus :</strong> mention Shopify / Woo / Amazon / Etsy dans l'objet social ; capital ≥ 3 k€ ; dirigeant ex-e-commerce.</li>
            <li><strong>Enrichissement :</strong> détection du domaine e-shop, marketplaces actives, présence Instagram/TikTok.</li>
            <li><strong>Exclusions :</strong> franchises grands groupes, revendeurs mono-marque intégrés.</li>
          </ul>
        )},
        { title: "Plan d'action recommandé", body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Canal 1 (J+7) :</strong> email — angle « TVA OSS/IOSS et bascule 10 k€ intra-UE ».</li>
            <li><strong>Canal 2 (J+21) :</strong> LinkedIn — étude de cas cabinet sur une DNVB comparable.</li>
            <li><strong>Canal 3 (J+45) :</strong> appel — script « Amazon FBA vs vente directe : traitement comptable ».</li>
          </ul>
        )},
        { title: "Résultat attendu", body: <p>Sur un bassin national (verticale spécialisée sans contrainte géo), ~90 leads qualifiés/mois. RDV : 15–22 %. Cycle de signature 30–60 j (les fondateurs comparent 2–3 cabinets).</p> },
      ]}
      faq={[
        { q: "Le e-commerce est très concurrentiel : Eligibly détecte-t-il l'exclusivité ?", a: "Oui — chaque lead livré est exclusif à votre cabinet dans son bassin. Un lead ne peut pas être revendu à un cabinet concurrent." },
      ]}
      related={[
        { label: "Verticale SASU Tech", href: "/verticales/sasu-tech" },
        { label: "Verticale Restauration & CHR", href: "/verticales/restauration-chr" },
      ]}
    />
  </>
);

export default Page;