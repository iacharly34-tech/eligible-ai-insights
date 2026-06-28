import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { MobileCTABar } from "@/components/MobileCTABar";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { ArrowRight, Database, Filter, Sparkles, Bell, RefreshCw, CheckCircle2, Slack, Mail, Shield, Lock, FileText, Server } from "lucide-react";
import { useLang, localizedHref } from "@/hooks/useLang";

const copy = {
  fr: {
    eyebrow: "Fonctionnalités",
    h1a: "Un moteur de détection qui livre ",
    h1em: "les bons leads",
    h1b: ", là où votre cabinet travaille.",
    sub: "Eligibly consolide les sources officielles, filtre selon votre ICP, score chaque société fraîchement immatriculée, et pousse les meilleures alertes dans votre canal de prédilection.",
    bookDemo: "Réserver une démo",
    howEyebrow: "Comment ça marche",
    howH2a: "Quatre briques pour transformer les immatriculations en ",
    howH2em: "rendez-vous qualifiés",
    howH2b: ".",
    pillars: [
      { t: "Consolidation des sources", d: "INPI, Sirene, BODACC, RNCS, RNE. Toutes les SASU et SAS françaises fraîchement immatriculées, rafraîchies chaque nuit." },
      { t: "Filtres IA amont", d: "Verticale, capital, forme juridique, zone, dirigeant primo-entrepreneur, présence d'un CAC. Vous décrivez votre cabinet idéal, l'IA fait le reste." },
      { t: "Scoring expliqué", d: "Chaque société reçoit un score 0-100 avec les 3 raisons clés. Pas de boîte noire — votre équipe sait pourquoi un lead est prioritaire." },
      { t: "Alertes là où vous travaillez", d: "Vos canaux et outils de prédilection. Vous décidez du canal et du rythme. Pas un dashboard de plus." },
    ],
    anatEyebrow: "Anatomie d'une alerte",
    anatH2a: "Tout ce qu'il faut pour décrocher le téléphone, ",
    anatH2em: "rien de plus",
    anatH2b: ".",
    anatRows: [
      ["Identité société", "Dénomination · SIREN · forme · capital · adresse · code NAF · date Kbis."],
      ["Dirigeant", "Nom · email pro vérifié · LinkedIn · téléphone si disponible · primo-entrepreneur ou récidiviste."],
      ["Signal cabinet", "Pas de CAC mandaté · pas d'expert-comptable déclaré · verticale tech/conseil/santé · score 0-100."],
    ],
    delivEyebrow: "Livraison",
    delivH2a: "Digest matinal email — ",
    delivH2em: "chaque matin à 7 h",
    delivH2b: ".",
    delivSub: "Vos leads PREMIUM du jour, avec score expliqué et plan d'action, directement dans votre boîte. Un clic ouvre la fiche dans Eligibly pour qualifier et démarrer la prospection.",
    delivMeta: "Email · rafraîchissement quotidien · pas de double saisie",
    delivExtra: "Intégrations Slack et Microsoft Teams disponibles sur demande pour les cabinets qui souhaitent recevoir le digest dans leur canal d'équipe.",
    learnEyebrow: "Apprentissage continu",
    learnH2a: "Le moteur s'affine ",
    learnH2em: "à chaque action",
    learnH2b: " de vos collaborateurs.",
    learnSub: "À chaque alerte qualifiée ou écartée par votre équipe, l'IA ajuste ses filtres et son scoring sur votre profil de cabinet. Au bout de 4 semaines, 80 % des alertes correspondent réellement à votre ICP.",
    learnBullets: ["Feedback en un clic dans vos canaux", "Modèle propre à votre cabinet, pas mutualisé", "Vos données restent vos données (RGPD, hébergement UE)"],
    weeks: [["Semaine 1", "62 % d'alertes pertinentes"], ["Semaine 2", "71 %"], ["Semaine 4", "80 %"], ["Semaine 8", "87 %"]],
    secEyebrow: "Sécurité & Conformité",
    secH2a: "Une infrastructure pensée pour la ",
    secH2em: "confidentialité",
    secH2b: " et l'auditabilité.",
    secCards: [
      { t: "RGPD natif", d: "Base légale 6.1.f (intérêt légitime B2B). Droit d'opposition opérationnel sous 48 h. Données de contacts professionnels uniquement — jamais de données personnelles sensibles. Politique de confidentialité externe validée par nos conseillers juridiques." },
      { t: "Hébergement 100 % Union européenne", d: "Toutes les données de prospection et les modèles IA sont hébergés sur des serveurs situés en France et en Europe. Aucun transfert de données en dehors de l'UE. Chiffrement au repos (AES-256) et en transit (TLS 1.3)." },
      { t: "Isolation et traçabilité", d: "Chaque cabinet dispose d'un workspace logiquement isolé. Vos critères ICP, vos feedbacks et votre historique de scoring ne sont jamais partagés avec d'autres clients. Traçabilité complète : chaque alerte est datée, sourcée et auditable." },
      { t: "Process documenté et contrôlé", d: "Procédure d'ingestion qualifiée (sources officielles uniquement : INPI, INSEE, BODACC). Vérification automatique de la fraîcheur des immatriculations (≤ 90 jours). Pas de scraping sauvage : uniquement des données publiées légalement et des partenaires d'enrichissement contractuels conformes RGPD." },
    ],
    finalH2: "Pas convaincu ? Testez un lead.",
    finalSub: "30 minutes. On paramètre votre zone et votre verticale, et on regarde ensemble les SASU & SAS du matin.",
    finalCta: "Réserver ma démo",
  },
  en: {
    eyebrow: "Features",
    h1a: "A lead-detection engine that delivers ",
    h1em: "the right leads",
    h1b: " — wherever your firm already works.",
    sub: "Eligibly consolidates official sources, filters them against your ICP, scores every newly registered company, and pushes the best alerts to the channel you actually use.",
    bookDemo: "Book a demo",
    howEyebrow: "How it works",
    howH2a: "Four building blocks to turn registrations into ",
    howH2em: "qualified meetings",
    howH2b: ".",
    pillars: [
      { t: "Source consolidation", d: "INPI, Sirene, BODACC, RNCS, RNE. Every freshly registered French SASU and SAS, refreshed every night." },
      { t: "Upstream AI filters", d: "Vertical, capital, legal form, area, first-time founder, presence of an auditor. You describe your ideal firm, the AI handles the rest." },
      { t: "Explainable scoring", d: "Every company gets a 0-100 score with the 3 key reasons. No black box — your team knows why a lead is a priority." },
      { t: "Alerts where you work", d: "Your preferred channels and tools. You choose the channel and the cadence. Not yet another dashboard." },
    ],
    anatEyebrow: "Anatomy of an alert",
    anatH2a: "Everything you need to pick up the phone, ",
    anatH2em: "nothing more",
    anatH2b: ".",
    anatRows: [
      ["Company identity", "Legal name · SIREN · legal form · capital · address · NAF code · Kbis date."],
      ["Founder", "Name · verified work email · LinkedIn · phone when available · first-time founder or repeat entrepreneur."],
      ["Firm signal", "No auditor appointed · no accountant declared · vertical tech/advisory/health · 0-100 score."],
    ],
    delivEyebrow: "Delivery",
    delivH2a: "Morning email digest — ",
    delivH2em: "every morning at 7 AM",
    delivH2b: ".",
    delivSub: "Today's PREMIUM leads, with explained score and action plan, straight to your inbox. One click opens the file inside Eligibly to qualify and start outreach.",
    delivMeta: "Email · daily refresh · no double data entry",
    delivExtra: "Slack and Microsoft Teams integrations available on request for firms that want the digest in their team channel.",
    learnEyebrow: "Continuous learning",
    learnH2a: "The engine sharpens ",
    learnH2em: "with every action",
    learnH2b: " your team takes.",
    learnSub: "Every alert qualified or dismissed by your team tunes the AI's filters and scoring to your firm profile. After 4 weeks, 80% of alerts really match your ICP.",
    learnBullets: ["One-click feedback in your channels", "A model specific to your firm — never pooled", "Your data stays yours (GDPR, EU-hosted)"],
    weeks: [["Week 1", "62% relevant alerts"], ["Week 2", "71%"], ["Week 4", "80%"], ["Week 8", "87%"]],
    secEyebrow: "Security & Compliance",
    secH2a: "Infrastructure built for ",
    secH2em: "confidentiality",
    secH2b: " and auditability.",
    secCards: [
      { t: "Native GDPR", d: "Legal basis 6.1.f (B2B legitimate interest). Operational right to object within 48h. Business contact data only — never sensitive personal data. External privacy policy reviewed by our legal counsel." },
      { t: "100% EU hosting", d: "All prospecting data and AI models are hosted on servers located in France and the EU. No data transfers outside the EU. Encryption at rest (AES-256) and in transit (TLS 1.3)." },
      { t: "Isolation & traceability", d: "Each firm gets a logically isolated workspace. Your ICP criteria, feedback and scoring history are never shared with other clients. Full traceability: every alert is timestamped, sourced and auditable." },
      { t: "Documented & controlled process", d: "Qualified ingestion procedure (official sources only: INPI, INSEE, BODACC). Automatic registration-freshness check (≤ 90 days). No rogue scraping: only legally published data and contractual, GDPR-compliant enrichment partners." },
    ],
    finalH2: "Not convinced? Test a lead.",
    finalSub: "30 minutes. We set up your area and your vertical, and we review the morning's SASU & SAS together.",
    finalCta: "Book my demo",
  },
};

const Produit = () => {
  const lang = useLang();
  const t = copy[lang];
  const demoHref = localizedHref("/demo", lang);
  const pillarIcons = [Database, Filter, Sparkles, Bell];
  const secIcons = [Shield, Server, Lock, FileText];
  return (
    <>
      <SEOHead />
      <StructuredData page="product" />
      <div className="min-h-screen bg-background">
        <Header />
        <MobileCTABar />

        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-6">{t.eyebrow}</p>
              <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-8">
                {t.h1a}<em className="italic text-primary font-medium">{t.h1em}</em>{t.h1b}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
              {t.sub}
              </p>
              <SafeLink to={demoHref}>
                <Button size="lg" variant="tengo" className="group h-12 px-8">
                  {t.bookDemo}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SafeLink>
            </div>
          </section>

          {/* 4 piliers */}
          <section className="py-20 md:py-28 px-4 bg-card/30">
            <div className="container mx-auto max-w-6xl">
              <div className="max-w-2xl mb-14">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">{t.howEyebrow}</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                  {t.howH2a}<em className="italic text-primary font-medium">{t.howH2em}</em>{t.howH2b}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {t.pillars.map((p, i) => {
                  const Icon = pillarIcons[i];
                  return (
                    <div key={p.t} className="rounded-2xl border border-border bg-background p-7">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">{p.t}</h3>
                      <p className="text-muted-foreground leading-relaxed">{p.d}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Anatomie alerte */}
          <section className="py-20 md:py-28 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="max-w-2xl mb-12">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">{t.anatEyebrow}</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                  {t.anatH2a}<em className="italic text-primary font-medium">{t.anatH2em}</em>{t.anatH2b}
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
                {t.anatRows.map(([title, desc]) => (
                  <div key={title} className="bg-card p-7">
                    <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-[0.95rem] text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Livraison */}
          <section className="py-20 md:py-28 px-4 bg-card/30">
            <div className="container mx-auto max-w-3xl text-center">
              <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">{t.delivEyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
                {t.delivH2a}<em className="italic text-primary font-medium">{t.delivH2em}</em>{t.delivH2b}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t.delivSub}
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
                <Mail className="w-5 h-5 text-primary" />
                <RefreshCw className="w-5 h-5 text-primary" />
                <span>{t.delivMeta}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                <Slack className="inline-block w-4 h-4 text-primary mr-1 align-text-bottom" />
                {t.delivExtra}
              </p>
            </div>
          </section>

          {/* Apprentissage */}
          <section className="py-20 md:py-28 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">{t.learnEyebrow}</p>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
                    {t.learnH2a}<em className="italic text-primary font-medium">{t.learnH2em}</em>{t.learnH2b}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t.learnSub}
                  </p>
                  <ul className="space-y-3">
                    {t.learnBullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[0.95rem]">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <div className="space-y-4 text-sm">
                    {t.weeks.map(([w, v]) => (
                      <div key={w}>
                        <div className="flex justify-between mb-1.5"><span className="text-muted-foreground">{w}</span><span className="font-semibold">{v}</span></div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden"><div className="h-full bg-primary" style={{ width: v.match(/\d+/)?.[0] + "%" }} /></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sécurité & Conformité */}
          <section className="py-20 md:py-28 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="max-w-2xl mb-14">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">{t.secEyebrow}</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                  {t.secH2a}<em className="italic text-primary font-medium">{t.secH2em}</em>{t.secH2b}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {t.secCards.map((p, i) => {
                  const Icon = secIcons[i];
                  return (
                    <div key={p.t} className="rounded-2xl border border-border bg-background p-7">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">{p.t}</h3>
                      <p className="text-muted-foreground leading-relaxed">{p.d}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 md:py-28 px-4 bg-card/30">
            <div className="container mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
                {t.finalH2}
              </h2>
              <p className="text-muted-foreground mb-10">{t.finalSub}</p>
              <SafeLink to={demoHref}>
                <Button size="lg" variant="tengo" className="group h-12 px-8">
                  {t.finalCta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SafeLink>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Produit;
