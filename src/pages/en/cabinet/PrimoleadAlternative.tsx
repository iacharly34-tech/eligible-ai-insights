import { LandingCabinetLayout } from "@/pages/cabinet/LandingCabinetLayout";

const PrimoleadAlternative = () => (
  <LandingCabinetLayout
    seoTitle="PrimoLead alternative for accounting firms — Eligibly"
    seoDescription="Neutral comparison: PrimoLead vs Corporama vs Societe.com vs Eligibly for accounting firms. 12 objective criteria — sources, filters, scoring, channels, pricing, trial."
    canonicalPath="/en/primolead-alternative"
    eyebrow="PrimoLead alternative"
    h1a="Alternatives to PrimoLead for"
    h1b="accounting firms"
    intro="A neutral head-to-head between PrimoLead, Corporama, Societe.com and Eligibly on 12 objective criteria — so you can pick the fit for your firm, not the loudest brand."
    bullets={[
      "12 comparison criteria — data sources, upstream filters, scoring, activation channels, exclusivity, pricing, trial",
      "Focus on what actually matters for an accounting firm: signal quality and time-to-first-meeting",
      "No affiliate deals — figures from public documentation and vendor demos",
    ]}
    ctaPrimary="Request 3 test leads"
    ctaNote="Delivered within 48h — no commitment, no card."
    sections={[
      {
        title: "The short version",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>PrimoLead</strong> — founders file filtered by area and legal form. Simple, cheap, saturated.</li>
            <li><strong>Corporama / Societe.com</strong> — broad B2B databases, weak on newly-registered signals and firm-specific ICP.</li>
            <li><strong>Eligibly</strong> — vertical for accounting firms. Adds upstream filters, explained scoring, director enrichment and channel recommendation.</li>
          </ul>
        ),
      },
      {
        title: "12 criteria head-to-head",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li>Data sources (INPI, Sirene, BODACC, Infogreffe)</li>
            <li>Registration window covered (0–30, 0–90, 0–365 days)</li>
            <li>Upstream filters (auditors, insolvency, holdings, serial founders)</li>
            <li>ICP granularity (area, capital, NAF code, founder profile)</li>
            <li>Explained scoring (0–100 with reasons)</li>
            <li>Director enrichment (verified email, LinkedIn)</li>
            <li>Channel recommendation and copy suggestion</li>
            <li>Delivery (email, Slack, Teams, CSV, CRM)</li>
            <li>Exclusivity per area</li>
            <li>GDPR posture and hosting</li>
            <li>Pricing model (file, per-lead, subscription)</li>
            <li>Trial (card required, duration)</li>
          </ul>
        ),
      },
      {
        title: "When PrimoLead is still the right fit",
        body: (
          <p>If you want a raw file to run one-off campaigns and you already have an in-house SDR to filter, score and enrich — PrimoLead is cheap and does the job.</p>
        ),
      },
      {
        title: "When Eligibly is the better fit",
        body: (
          <p>If you want a decision — the 20 leads to call this week, why, and what to say — Eligibly ships that on Monday morning. No SDR needed.</p>
        ),
      },
    ]}
    faq={[
      { q: "Is this comparison sponsored?", a: "No. Figures come from public documentation and vendor demos. No affiliate deals." },
      { q: "Can I migrate from PrimoLead?", a: "Yes — most firms run both for 30 days, then keep Eligibly for the ICP-scored signal and PrimoLead for raw batch when needed." },
    ]}
    related={[
      { label: "Lead generation for accounting firms", href: "/en/accountant-lead-generation" },
      { label: "Use cases (index)", href: "/en/use-cases" },
      { label: "Glossary", href: "/en/glossary" },
    ]}
  />
);

export default PrimoleadAlternative;