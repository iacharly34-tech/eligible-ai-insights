import { Helmet } from "react-helmet-async";
import { LandingCabinetLayout } from "@/pages/cabinet/LandingCabinetLayout";

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Verticale Professions libérales & Santé", publisher: { "@type": "Organization", name: "Eligibly" }, mainEntityOfPage: "https://eligibly.ai/verticales/professions-liberales-sante" };

const Page = () => (
  <>
    <Helmet><script type="application/ld+json">{JSON.stringify(jsonLd)}</script></Helmet>
    <LandingCabinetLayout
      seoTitle="Verticale Professions libérales & Santé — Eligibly pour cabinets EC BNC/SEL"
      seoDescription="Ciblez les nouvelles SELAS, SELARL, SASU BNC (médecins, kinés, avocats, architectes). Besoins arbitrage BNC vs SEL, CARPIMKO, retraite libérale."
      canonicalPath="/verticales/professions-liberales-sante"
      eyebrow="Verticale · Professions libérales & Santé"
      h1a="Cabinets spécialisés BNC/SEL :"
      h1b="chaque nouvelle installation"
      h1c="libérale, dès l'immat."
      intro="Médecins, kinés, sages-femmes, orthophonistes, avocats, architectes, consultants réglementés. Une population à forte fidélité cabinet (10+ ans en moyenne) mais où la première décision se joue dans les 30 jours suivant l'immat."
      bullets={[
        "Cible : SELAS · SELARL · SASU · EI — NAF 86.xx (santé), 69.10Z (avocats), 71.11Z (architectes)",
        "Signaux : diplôme réglementé, mention Ordre professionnel, capital modeste (1–8 k€)",
        "ARPU attendu : 2 400 à 5 400 €/an — forte récurrence, faible churn",
      ]}
      ctaPrimary="Configurer la verticale Libérales"
      sections={[
        { title: "Pourquoi cette verticale", body: <p>ARPU moyen, mais LTV exceptionnelle (10–15 ans). Décision d'acheter comptable prise dans les 30 j suivant l'installation. 78 % des libéraux choisissent sur recommandation ou premier contact spontané — d'où l'intérêt d'être présent le premier.</p> },
        { title: "Configuration Eligibly", body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>NAF santé :</strong> 86.21Z, 86.22A/B/C (médecins), 86.90A à 86.90F (kinés, infirmiers, orthophonistes).</li>
            <li><strong>NAF juridique/technique :</strong> 69.10Z (avocats, notaires), 71.11Z (architectes), 74.90B (consultants réglementés).</li>
            <li><strong>Formes :</strong> SELAS, SELARL, SASU (option BNC), EI au réel.</li>
            <li><strong>Enrichissement :</strong> Ordre d'appartenance, diplôme, ancienneté salariat/collab.</li>
          </ul>
        )},
        { title: "Plan d'action recommandé", body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Canal 1 (J+3) :</strong> courrier personnalisé — canal privilégié sur cette cible (formalisme apprécié).</li>
            <li><strong>Canal 2 (J+14) :</strong> appel — script « arbitrage BNC vs SEL, retraite libérale ».</li>
            <li><strong>Canal 3 (J+30) :</strong> LinkedIn si profil actif.</li>
          </ul>
        )},
        { title: "Résultat attendu", body: <p>Sur une région type (AURA, PACA) : ~150 immat libérales/mois, ~50 leads livrés. RDV : 25–35 % (taux le plus élevé des 6 verticales grâce à la personnalisation courrier).</p> },
      ]}
      faq={[
        { q: "Respectez-vous le code de déontologie médicale (démarchage) ?", a: "Oui — vous êtes le prestataire qui contacte, pas le professionnel de santé. Le démarchage vise le libéral en tant que dirigeant d'entreprise, pas le médecin en tant que soignant. Nous fournissons un guide de ton adapté." },
      ]}
      related={[
        { label: "Verticale Holdings & Groupes", href: "/verticales/holdings-groupes" },
        { label: "Sales Assistant", href: "/sales-assistant" },
      ]}
    />
  </>
);

export default Page;