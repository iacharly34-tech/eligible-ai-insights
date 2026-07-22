import { LandingCabinetLayout } from "@/pages/cabinet/LandingCabinetLayout";

const UseCasesIndex = () => (
  <LandingCabinetLayout
    seoTitle="Use cases — accounting firms using Eligibly"
    seoDescription="Three concrete use cases: 8-person regional firm, hospitality specialist, remote-first firm serving startups and e-commerce."
    canonicalPath="/en/use-cases"
    eyebrow="Use cases"
    h1a="Use cases —"
    h1b="accounting firms"
    intro="Three concrete configurations we see week after week. Each maps a firm profile to an ICP, a signal, an activation channel and a rhythm."
    bullets={[
      "8-person regional firm — 30 leads/week across the county",
      "Hospitality specialist — brand-new SAS/SARL in the CHR sector",
      "Full-remote firm — national coverage on startups and e-commerce",
    ]}
    ctaPrimary="Request 3 test leads"
    ctaNote="Delivered within 48h — no commitment, no card."
    sections={[
      {
        title: "01 · 8-person regional firm — 30 leads/week",
        body: (
          <p>A generalist firm serving one French department. ICP: SAS/SASU/SARL registered in the last 30 days, capital ≥ €1,000, excluding pure holdings. Delivery: Monday-morning email + Slack digest, 30 leads scored 60+.</p>
        ),
      },
      {
        title: "02 · Hospitality specialist",
        body: (
          <p>A firm known for restaurants and hospitality (CHR). ICP: brand-new SAS/SARL in NAF codes 56.xx, three specific French regions, VAT-registered from day one. Delivery: daily email with 5–10 leads, each with a channel recommendation.</p>
        ),
      },
      {
        title: "03 · Full-remote firm — startups & e-commerce",
        body: (
          <p>National coverage, everything on Slack. ICP: SAS/SASU registered in the last 60 days, tech and e-commerce NAF codes, founders with prior startup experience. Delivery: real-time Slack alerts on premium leads.</p>
        ),
      },
    ]}
    faq={[
      { q: "Can I combine several ICPs?", a: "Yes — most firms run 2 to 4 ICPs in parallel (e.g. generalist + one specialty)." },
      { q: "Can I change ICP mid-month?", a: "Yes, anytime. Changes are live within 24h." },
    ]}
    related={[
      { label: "Lead generation for accounting firms", href: "/en/accountant-lead-generation" },
      { label: "PrimoLead alternative", href: "/en/primolead-alternative" },
      { label: "Glossary", href: "/en/glossary" },
    ]}
  />
);

export default UseCasesIndex;