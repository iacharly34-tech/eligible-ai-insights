import { Helmet } from "react-helmet-async";
import { LandingCabinetLayout } from "@/pages/cabinet/LandingCabinetLayout";

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Eligibly",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Lead generation software for accounting firms",
  operatingSystem: "Web",
  description:
    "Vertical lead-generation software for accounting firms: daily detection of newly-registered French Ltd equivalents (SASU/SAS/EURL/SARL/SEL), ICP filtering, explained scoring and multichannel activation.",
  url: "https://eligibly.ai/en/accountant-lead-generation",
  inLanguage: "en-GB",
  offers: { "@type": "Offer", price: "10", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
  provider: { "@type": "Organization", name: "Eligibly", url: "https://eligibly.ai" },
  audience: { "@type": "BusinessAudience", audienceType: "Accounting firms (3 to 80 staff)" },
};

const AccountantLeadGeneration = () => (
  <>
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(softwareJsonLd)}</script>
    </Helmet>
    <LandingCabinetLayout
      seoTitle="Lead generation for accounting firms — Eligibly"
      seoDescription="Vertical lead-generation software for accounting firms. Detect newly-registered French Ltd equivalents, explained scoring, activation channels. Sources INPI · Sirene · BODACC. 14-day pilot, no card."
      canonicalPath="/en/accountant-lead-generation"
      eyebrow="Lead generation for accounting firms"
      h1a="Lead generation for"
      h1b="accounting firms"
      intro="Eligibly is a vertical B2B lead-generation platform for accounting firms. Every week it delivers 100–300 newly-registered companies in your area, filtered on your ICP, scored and ready to be contacted."
      bullets={[
        "Official sources INPI · Sirene · BODACC — French hosting, GDPR-compliant",
        "Upstream filters: mandated auditors, insolvency, pure holdings, serial founders excluded",
        "Explained score (3 key reasons) and recommended channel for every lead",
        "Email + Slack + Teams delivery, CSV / CRM export, daily digest",
      ]}
      ctaPrimary="Request 3 test leads"
      ctaNote="Delivered within 48h — no commitment, no card."
      sections={[
        {
          title: "What accounting firms struggle with in 2026",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Word of mouth plateaus.</strong> Quality files, but unpredictable — impossible to plan a growth budget on.</li>
              <li><strong>Generic company files are saturated.</strong> The same founders get contacted by 10 firms the same week.</li>
              <li><strong>Mutualised directories</strong> (leads resold to multiple firms) kill closing rates and hurt the brand.</li>
              <li><strong>Hiring a business developer</strong> costs €55–75k/year loaded, with 6–9 months of ramp.</li>
              <li><strong>Founders sign fast.</strong> A newly-registered company picks its accountant in 30–60 days.</li>
            </ul>
          ),
        },
        {
          title: "Signals Eligibly detects",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Recent registrations</strong> (SAS, SASU, SARL, EURL) — 0 to 90-day window.</li>
              <li><strong>Director changes and appointments</strong> (BODACC A).</li>
              <li><strong>Capital increases, HQ transfers, transformations</strong>.</li>
              <li><strong>Strike-offs, dissolutions, insolvency</strong> — used as exclusion filters, never as targets.</li>
              <li><strong>Activity signals</strong>: active website, business bank account, first hire.</li>
            </ul>
          ),
        },
        {
          title: "How scoring works",
          body: (
            <>
              <p>Each lead receives a score from 0 to 100 combining three signal families:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li><strong>ICP fit</strong> — share capital, industry code, legal form, area, founder profile.</li>
                <li><strong>Intent signals</strong> — registration age, web presence, recent hire, no mandated auditor, no parent holding.</li>
                <li><strong>Exclusion filters</strong> — insolvency, serial founders, director-is-accountant, pure holdings, duplicates.</li>
              </ol>
              <p>Every score comes with its <strong>3 key reasons</strong>. No black box.</p>
            </>
          ),
        },
        {
          title: "GDPR and professional ethics",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li>All data comes from <strong>public French registers</strong> or legitimate enrichment (legal basis: legitimate interest — Art. 6.1.f GDPR).</li>
              <li><strong>French hosting</strong>. No transfer outside the EU.</li>
              <li><strong>Right to object</strong> handled within 48 hours.</li>
              <li>Compatible with the <strong>French Chartered Accountants' code of ethics</strong>.</li>
            </ul>
          ),
        },
      ]}
      faq={[
        { q: "Is Eligibly a lead-generation software for accounting firms?", a: "Yes. Eligibly is a vertical B2B lead-generation and scoring platform built specifically for French accounting firms." },
        { q: "Is it an alternative to PrimoLead?", a: "Yes. PrimoLead is a founders file filtered by area and legal form. Eligibly goes further: upstream filters, explained scoring, director enrichment and channel recommendation." },
        { q: "Where does the data come from?", a: "Official French registers: INPI, Sirene (INSEE), BODACC. Director enrichment via GDPR-compliant partners, no transfer outside the EU." },
        { q: "Do you guarantee meetings?", a: "No. We guarantee data quality (free replacement of non-conforming leads). Conversion depends on your sales execution." },
        { q: "Are leads exclusive to my firm?", a: "Yes. A lead delivered to your firm won't be delivered to another firm in your area the same week." },
        { q: "How much does it cost?", a: "From €10 per qualified lead, adjusted to volume and firm size. 14-day pilot, no credit card. Cancel monthly." },
      ]}
      related={[
        { label: "PrimoLead alternative for accounting firms", href: "/en/primolead-alternative" },
        { label: "Use cases (index)", href: "/en/use-cases" },
        { label: "Glossary", href: "/en/glossary" },
      ]}
    />
  </>
);

export default AccountantLeadGeneration;