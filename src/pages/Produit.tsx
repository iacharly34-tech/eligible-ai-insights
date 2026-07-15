import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { MobileCTABar } from "@/components/MobileCTABar";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { ArrowRight, Database, Filter, Sparkles, Bell, RefreshCw, CheckCircle2, Slack, Mail, Shield, Lock, FileText, Server } from "lucide-react";
import { useLang, localizedHref } from "@/hooks/useLang";
import { motion } from "framer-motion";
import { useState } from "react";

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
      { t: "Consolidation des sources", d: "INPI, Sirene, BODACC, RNCS, RNE. Toutes les SASU, SAS, EURL, SARL et SEL françaises fraîchement immatriculées, rafraîchies chaque nuit.", bullets: ["INPI · Sirene · BODACC · RNE", "Rafraîchissement quotidien à minuit", "Dédoublonnage SIREN automatique"] },
      { t: "Filtres IA amont", d: "Verticale, capital, forme juridique, zone, dirigeant primo-entrepreneur, présence d'un CAC. Vous décrivez votre cabinet idéal, l'IA fait le reste.", bullets: ["+30 critères paramétrables", "Géo fine : EPCI, IRIS, code postal", "Exclusions sectorielles natives"] },
      { t: "Scoring expliqué", d: "Chaque société reçoit un score 0-100 avec les 3 raisons clés. Pas de boîte noire — votre équipe sait pourquoi un lead est prioritaire.", bullets: ["Score 0-100 par lead", "3 raisons clés affichées", "Modèle propre à votre cabinet"] },
      { t: "Alertes là où vous travaillez", d: "Vos canaux et outils de prédilection. Vous décidez du canal et du rythme. Pas un dashboard de plus.", bullets: ["Email, Slack, Teams, WhatsApp", "Cadence quotidienne ou hebdo", "Webhook vers vos outils internes"] },
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
    finalH2: "Jugez sur pièces : recevez 3 leads qualifiés.",
    finalSub: "30 minutes pour cadrer votre ICP. Sous 48 h, nous livrons un échantillon de trois sociétés fraîchement immatriculées, qualifiées sur vos critères.",
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
      { t: "Source consolidation", d: "INPI, Sirene, BODACC, RNCS, RNE. Every freshly registered French SASU and SAS, refreshed every night.", bullets: ["INPI · Sirene · BODACC · RNE", "Daily refresh at midnight", "Automatic SIREN deduplication"] },
      { t: "Upstream AI filters", d: "Vertical, capital, legal form, area, first-time founder, presence of an auditor. You describe your ideal firm, the AI handles the rest.", bullets: ["30+ configurable criteria", "Fine geo: EPCI, IRIS, postcode", "Native sector exclusions"] },
      { t: "Explainable scoring", d: "Every company gets a 0-100 score with the 3 key reasons. No black box — your team knows why a lead is a priority.", bullets: ["0-100 score per lead", "Top 3 reasons shown", "Model specific to your firm"] },
      { t: "Alerts where you work", d: "Your preferred channels and tools. You choose the channel and the cadence. Not yet another dashboard.", bullets: ["Email, Slack, Teams, WhatsApp", "Daily or weekly cadence", "Webhook to your internal tools"] },
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
  const [activePillar, setActivePillar] = useState(0);
  const ActivePillarIcon = pillarIcons[activePillar];
  const activePillarData = t.pillars[activePillar];
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

          {/* 4 piliers — interactive explorer */}
          <section className="py-20 md:py-28 px-4 bg-card/30">
            <div className="container mx-auto max-w-6xl">
              <div className="max-w-2xl mb-14">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">{t.howEyebrow}</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                  {t.howH2a}<em className="italic text-primary font-medium">{t.howH2em}</em>{t.howH2b}
                </h2>
              </div>

              <div className="grid lg:grid-cols-[280px,1fr] gap-8 lg:gap-12">
                {/* Rail */}
                <aside className="lg:sticky lg:top-28 lg:self-start">
                  <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 pb-2 lg:pb-0">
                    {t.pillars.map((p, i) => {
                      const Icon = pillarIcons[i];
                      const isActive = activePillar === i;
                      return (
                        <button
                          key={p.t}
                          onClick={() => setActivePillar(i)}
                          className={`group relative shrink-0 lg:w-full text-left rounded-xl border transition-all duration-300 px-4 py-3 flex items-center gap-3 ${
                            isActive
                              ? "bg-background border-primary/50 shadow-sm"
                              : "bg-transparent border-border hover:border-primary/30 hover:bg-background/50"
                          }`}
                        >
                          <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isActive ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                            <Icon className="w-4 h-4" />
                          </span>
                          <span className={`text-sm font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                            {p.t}
                          </span>
                          {isActive && (
                            <motion.span
                              layoutId="pillar-indicator"
                              className="hidden lg:block absolute right-3 w-1.5 h-1.5 rounded-full bg-primary"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </aside>

                {/* Active pillar panel */}
                <motion.div
                  key={activePillar}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-3xl border border-border bg-background overflow-hidden"
                >
                  <div className="relative px-8 sm:px-10 pt-8 pb-6 border-b border-border bg-gradient-to-br from-primary/[0.04] via-transparent to-transparent">
                    <div className="flex items-start justify-between gap-6 mb-5">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-5xl font-semibold text-primary/30 leading-none tabular-nums">
                          {String(activePillar + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-primary font-semibold">
                          {lang === "en" ? `Pillar ${activePillar + 1} of ${t.pillars.length}` : `Brique ${activePillar + 1} sur ${t.pillars.length}`}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <ActivePillarIcon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight leading-[1.2] mb-3">
                      {activePillarData.t}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                      {activePillarData.d}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
                    {activePillarData.bullets.map((b, i) => (
                      <motion.div
                        key={b}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                        className="p-6"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span className="text-[0.7rem] uppercase tracking-[0.14em] font-semibold text-muted-foreground">
                            {`0${i + 1}`}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-foreground/85">{b}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
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
                {t.anatRows.map(([title, desc], i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-card p-7 hover:bg-card/80 transition-colors"
                  >
                    <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-[0.95rem] text-muted-foreground leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Livraison */}
          <section className="py-20 md:py-28 px-4 bg-card/30">
            <motion.div
              className="container mx-auto max-w-3xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
              }}
            >
              {[
                <p key="eb" className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">{t.delivEyebrow}</p>,
                <h2 key="h2" className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
                  {t.delivH2a}<em className="italic text-primary font-medium">{t.delivH2em}</em>{t.delivH2b}
                </h2>,
                <p key="sub" className="text-muted-foreground leading-relaxed mb-8">{t.delivSub}</p>,
                <div key="meta" className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
                  <Mail className="w-5 h-5 text-primary" />
                  <RefreshCw className="w-5 h-5 text-primary" />
                  <span>{t.delivMeta}</span>
                </div>,
                <p key="extra" className="text-sm text-muted-foreground">
                  <Slack className="inline-block w-4 h-4 text-primary mr-1 align-text-bottom" />
                  {t.delivExtra}
                </p>,
              ].map((child) => (
                <motion.div
                  key={(child as any).key}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  {child}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Apprentissage */}
          <section className="py-20 md:py-28 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">{t.learnEyebrow}</p>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
                    {t.learnH2a}<em className="italic text-primary font-medium">{t.learnH2em}</em>{t.learnH2b}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t.learnSub}
                  </p>
                  <ul className="space-y-3">
                    {t.learnBullets.map((b, i) => (
                      <motion.li
                        key={b}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                        className="flex items-start gap-3 text-[0.95rem]"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-border bg-card p-8"
                >
                  <div className="space-y-4 text-sm">
                    {t.weeks.map(([w, v], i) => {
                      const pct = v.match(/\d+/)?.[0] ?? "0";
                      return (
                        <motion.div
                          key={w}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-10%" }}
                          transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                        >
                          <div className="flex justify-between mb-1.5"><span className="text-muted-foreground">{w}</span><span className="font-semibold">{v}</span></div>
                          <div className="h-2 rounded-full bg-muted overflow-hidden">
                            <motion.div
                              className="h-full bg-primary"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${pct}%` }}
                              viewport={{ once: true, margin: "-10%" }}
                              transition={{ duration: 0.9, delay: 0.35 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Sécurité & Conformité — bento */}
          <section className="py-20 md:py-28 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="max-w-2xl mb-14">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">{t.secEyebrow}</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                  {t.secH2a}<em className="italic text-primary font-medium">{t.secH2em}</em>{t.secH2b}
                </h2>
              </div>
              <div className="grid md:grid-cols-6 gap-5">
                {t.secCards.map((p, i) => {
                  const Icon = secIcons[i];
                  // Bento layout: 0=wide, 1=narrow, 2=narrow, 3=wide
                  const span = i === 0 || i === 3 ? "md:col-span-4" : "md:col-span-2";
                  return (
                    <motion.div
                      key={p.t}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className={`group relative rounded-2xl border border-border bg-background p-7 overflow-hidden hover:border-primary/30 transition-colors ${span}`}
                    >
                      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary/[0.04] group-hover:bg-primary/[0.07] transition-colors pointer-events-none" />
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground font-semibold">
                            {`0${i + 1}`}
                          </span>
                        </div>
                        <h3 className="font-display text-xl font-semibold text-foreground mb-2">{p.t}</h3>
                        <p className="text-muted-foreground leading-relaxed">{p.d}</p>
                      </div>
                    </motion.div>
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
