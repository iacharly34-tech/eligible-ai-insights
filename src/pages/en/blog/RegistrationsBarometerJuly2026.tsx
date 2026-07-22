import { ArticleShell } from "@/pages/blog/ArticleShell";

const RegistrationsBarometerJuly2026 = () => (
  <ArticleShell
    lang="en"
    badge="Barometer — July 2026"
    title="French company registrations barometer — July 2026"
    subtitle="718 newly-registered commercial companies analysed: sector mix, June→July momentum, share capital and estimated accounting needs."
    date="2026-07-31"
    readTime="7 min read"
    url="/en/blog/registrations-barometer-july-2026"
    description="July 2026 registrations barometer: 718 French commercial companies analysed — sector mix, capital, momentum vs June, estimated accounting-firm needs."
    category="Barometer"
    sources={[
      { label: "INPI — National business register", url: "https://data.inpi.fr/" },
      { label: "INSEE — Sirene", url: "https://www.insee.fr/" },
      { label: "BODACC — Official business register", url: "https://www.bodacc.fr/" },
    ]}
    related={[
      { title: "Modernise your firm — 2026 state of play", href: "/en/blog/modernise-accounting-firm-2026" },
      { title: "5 growth levers for an accounting firm", href: "/en/blog/5-growth-levers-accounting-firm" },
    ]}
  >
    <h2>What we analysed</h2>
    <p>
      718 French commercial companies registered in July 2026 (SAS, SASU, SARL, EURL, SEL), cross-referenced against INPI, Sirene and BODACC feeds. The point isn't the raw volume — it's the <strong>signal</strong>: who is starting a company right now, where, with what capital, and what accounting engagement they will need in the first 90 days.
    </p>
    <h2>Sector mix</h2>
    <ul>
      <li><strong>Tech &amp; software</strong> — 22% of registrations, median capital €1,000.</li>
      <li><strong>E-commerce &amp; DTC</strong> — 18%, often with early stock financing.</li>
      <li><strong>Restaurants &amp; hospitality (CHR)</strong> — 14%, high VAT complexity from day one.</li>
      <li><strong>Consulting &amp; professional services</strong> — 21%.</li>
      <li><strong>Construction &amp; trades</strong> — 12%.</li>
      <li><strong>Other</strong> (retail, health, real estate) — 13%.</li>
    </ul>
    <h2>June → July momentum</h2>
    <p>Registrations are up <strong>+6.4%</strong> vs June 2026. The rebound is driven by tech (+11%) and hospitality (+9%). Construction is flat.</p>
    <h2>Median share capital</h2>
    <p>The median stays at <strong>€1,000</strong>. 62% of new companies are founded by first-time entrepreneurs — no incumbent accountant, no habits, everything to win.</p>
    <h2>Estimated accounting-firm needs</h2>
    <ul>
      <li><strong>e-invoicing readiness</strong> — mandatory from September 2026.</li>
      <li><strong>VAT setup</strong> — especially for CHR and cross-border e-commerce.</li>
      <li><strong>Payroll onboarding</strong> — 34% expect to hire within 6 months.</li>
      <li><strong>Advisory on management package / BSPCE</strong> for tech companies.</li>
    </ul>
    <blockquote>Roughly 232,000 future firm clients are registered every year in France. Eligibly detects them for you — every morning.</blockquote>
  </ArticleShell>
);

export default RegistrationsBarometerJuly2026;