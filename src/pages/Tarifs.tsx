import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { MobileCTABar } from "@/components/MobileCTABar";
import { useState } from "react";
import { CheckCircle, ArrowRight, Shield, ChevronDown } from "lucide-react";
import { useLang, localizedHref } from "@/hooks/useLang";

const copy = {
  fr: {
    eyebrow: "Tarifs",
    h1a: "À partir de ",
    h1em: "10 € le lead qualifié",
    h1b: ". Devis adapté à votre cabinet.",
    sub: "Construit avec et pour les cabinets d'expertise comptable français. Tarif final calibré sur votre volume mensuel et la taille de votre cabinet. Engagement mensuel, résiliable, démarrage sans CB.",
    planBadge: "Plan Cabinet Pro",
    planEyebrow: "Le moteur complet",
    planPrice: "À partir de 10 €",
    planPriceUnit: "/ lead qualifié",
    planDetail1: <>Tarif <strong>final sur devis</strong>, ajusté à votre volume cible et à la taille de votre cabinet — finalisé après un échange de cadrage de 20 minutes. Un seul client signé rembourse l'année.</>,
    planDetail2: "Plus votre volume mensuel est élevé, plus le coût unitaire baisse.",
    planCta: "Recevoir notre proposition",
    planCtaNote: "Réponse sous 24 h ouvrées · sans carte bancaire",
    features: [
      "Toutes les SASU & SAS fraîchement immatriculées (INPI, Sirene, BODACC)",
      "Filtres IA amont selon votre ICP (verticale, capital, zone, dirigeant, CAC)",
      "Scoring 0-100 expliqué (3 raisons par lead)",
      "Alertes livrées dans vos outils et canaux",
      "Jusqu'à 5 utilisateurs cabinet inclus",
      "Apprentissage continu sur les retours de votre équipe",
      "Onboarding 30 min + paramétrage ICP par notre équipe",
      "Support prioritaire par un humain (Paris, < 2h ouvrées)",
      "Données hébergées en UE, conformité RGPD",
      "Engagement mensuel — résiliable à tout moment",
    ],
    roiEyebrow: "Le calcul est vite fait",
    roiH2a: "Notre tarif ",
    roiH2em: "vs un seul client signé",
    roiH2b: ".",
    roiCards: [
      ["1 client", "rembourse largement l'année"],
      ["~1 800 €", "panier moyen annuel d'un client SASU"],
      ["+8 à +20", "nouveaux clients signés / an constatés en pilote"],
    ],
    guarH2: "Démarrage sans friction",
    guarSub: "Pas de carte bancaire pour démarrer. Premier lead premium livré sous 48 h pour valider la qualité avant signature. Engagement mensuel, résiliable avec préavis 30 jours.",
    guarChips: ["Sans carte bancaire", "Onboarding 30 min inclus", "Résiliation à tout moment"],
    faqEyebrow: "FAQ",
    faqH2a: "Les vraies questions ",
    faqH2em: "des cabinets",
    faqH2b: ".",
    finalH2: "Pas convaincu ? Recevez un lead.",
    finalCta: "Recevoir mon premier lead gratuit",
    finalChips: "✓ Sans CB · ✓ Onboarding 30 min · ✓ Résiliation libre",
    faqItems: [
      { q: "En quoi Eligibly diffère d'un annuaire d'entreprises ?", a: "Un annuaire vous donne accès à la base. Nous, on filtre, on score et on pousse uniquement les leads pertinents pour votre cabinet, directement dans votre canal de travail. C'est un moteur d'alertes, pas un annuaire." },
      { q: "Combien coûte un lead Eligibly ?", a: "À partir de 10 € par lead qualifié. Le tarif final dépend de votre volume mensuel cible et de la taille de votre cabinet : plus le volume est élevé, plus le coût unitaire baisse. Vous recevez le devis personnalisé sous 24 h ouvrées après un échange de cadrage de 20 minutes." },
      { q: "Pourquoi un devis et pas une grille publique ?", a: "Pour deux raisons. D'abord parce que le coût marginal d'un lead dépend de votre verticale et de la rareté du signal dans votre zone — un cabinet conseil sur Paris et un cabinet artisan en région n'ont pas la même équation. Ensuite parce que nous voulons valider, en 20 minutes, que le volume cible est réaliste pour vous. Ancrage public : 10 € le lead pour démarrer." },
      { q: "Comment démarre-t-on ?", a: "Échange de cadrage 20 min, paramétrage ICP, et premier lead livré sous 48 h sans carte bancaire. Vous validez la qualité avant de signer. Engagement mensuel, résiliable avec préavis 30 jours." },
      { q: "Vous garantissez un nombre de rendez-vous ?", a: "Non. C'est un engagement de moyens, pas de résultat. Décrocher des RDV reste votre métier — nous, on garantit la qualité et la fraîcheur des leads livrés." },
      { q: "Combien de leads je reçois par jour ?", a: "Le volume dépend de votre ICP (secteurs ciblés, zone géographique, forme juridique cible) et du flux d'immatriculations réel. À titre indicatif, les cabinets partenaires reçoivent entre quelques leads et une quinzaine par jour selon leur paramétrage. Engagement de moyens par filtres amont — pas de garantie chiffrée sur le volume." },
      { q: "Vous traitez aussi les SCI, SELARL, micro vers société ?", a: "Le périmètre standard couvre SASU, SAS, SARL, EURL. SCI, SCP, SELARL, SEL, micro vers société sont en option sans surcoût, sur demande à l'onboarding." },
      { q: "Quel niveau d'engagement ?", a: "Mensuel. Vous résiliez quand vous voulez, sans pénalité, sans préavis long. On préfère vous garder par la qualité du flux, pas par contrat." },
      { q: "Mes données et celles de mes clients restent-elles confidentielles ?", a: "Oui. Nous n'ingérons que des données publiques (INPI, BODACC, Sirene). Vos retours d'équipe servent uniquement à affiner votre modèle, pas un modèle mutualisé. Hébergement UE, RGPD." },
      { q: "Comment je reçois mes leads ?", a: "Chaque matin (jours ouvrés), un digest avec les leads PREMIUM du jour, score expliqué, plan d'action et recommandation d'accroche prête à envoyer (email + LinkedIn). Livraison email par défaut, Slack/Teams/WhatsApp sur demande. Chaque lead inclut plusieurs touchpoints : email pro vérifié, téléphone si disponible, LinkedIn dirigeant, adresse postale du siège." },
      { q: "Sur quels modèles d'IA s'appuie Eligibly ?", a: "Stack documentée et auditable : modèles open-weights (Mistral, Llama, Qwen) hébergés en UE pour le scoring et la génération d'accroches, modèles propriétaires pour le matching ICP. Aucun appel vers une API hors UE pour vos données. Chaque décision de scoring est explicable : 3 raisons positives, 1-2 points à vérifier, et la pondération est visible dans la fiche." },
    ],
  },
  en: {
    eyebrow: "Pricing",
    h1a: "From ",
    h1em: "€10 per qualified lead",
    h1b: ". Quote tailored to your firm.",
    sub: "Built with and for French accounting firms. Final price calibrated to your monthly volume and firm size. Monthly commitment, cancellable, no credit card to start.",
    planBadge: "Cabinet Pro Plan",
    planEyebrow: "The full engine",
    planPrice: "From €10",
    planPriceUnit: "/ qualified lead",
    planDetail1: <>Final price <strong>on quote</strong>, tuned to your target volume and firm size — finalised after a 20-minute scoping call. One signed client pays for the year.</>,
    planDetail2: "The higher your monthly volume, the lower the per-lead cost.",
    planCta: "Get our proposal",
    planCtaNote: "Reply within 1 business day · no credit card",
    features: [
      "All freshly registered SASU & SAS companies (INPI, Sirene, BODACC)",
      "Upstream AI filters on your ICP (vertical, capital, area, founder, auditor)",
      "Explained 0-100 scoring (3 reasons per lead)",
      "Alerts delivered in your tools and channels",
      "Up to 5 firm users included",
      "Continuous learning on your team's feedback",
      "30-min onboarding + ICP setup by our team",
      "Human priority support (Paris, < 2 business hours)",
      "EU-hosted data, GDPR compliant",
      "Monthly commitment — cancellable any time",
    ],
    roiEyebrow: "The math is quick",
    roiH2a: "Our price ",
    roiH2em: "vs one signed client",
    roiH2b: ".",
    roiCards: [
      ["1 client", "more than pays for the year"],
      ["~€1,800", "average annual revenue per SASU client"],
      ["+8 to +20", "new clients signed / year seen in pilot"],
    ],
    guarH2: "Frictionless start",
    guarSub: "No credit card to start. First premium lead delivered within 48h so you can validate quality before signing. Monthly commitment, cancellable with 30-day notice.",
    guarChips: ["No credit card", "30-min onboarding included", "Cancel any time"],
    faqEyebrow: "FAQ",
    faqH2a: "The real questions ",
    faqH2em: "from firms",
    faqH2b: ".",
    finalH2: "Not convinced? Get a lead.",
    finalCta: "Get my first lead — free",
    finalChips: "✓ No credit card · ✓ 30-min onboarding · ✓ Free to cancel",
    faqItems: [
      { q: "How is Eligibly different from a business directory?", a: "A directory gives you access to a database. We filter, score and push only the leads that matter to your firm, straight to your working channel. It's an alert engine, not a directory." },
      { q: "How much does an Eligibly lead cost?", a: "From €10 per qualified lead. The final price depends on your target monthly volume and your firm size: the higher the volume, the lower the unit cost. You receive a tailored quote within 1 business day after a 20-minute scoping call." },
      { q: "Why a quote rather than a public price grid?", a: "Two reasons. First, marginal cost per lead depends on your vertical and on signal scarcity in your area — a Paris advisory firm and a regional trades-focused firm don't have the same equation. Second, we want to validate, in 20 minutes, that the target volume is realistic for you. Public anchor: €10 per lead to start." },
      { q: "How do we get started?", a: "20-minute scoping call, ICP setup, and first lead delivered within 48h with no credit card. You validate quality before signing. Monthly commitment, cancellable with 30-day notice." },
      { q: "Do you guarantee a number of meetings?", a: "No. It's a best-efforts engagement, not a results guarantee. Booking meetings is your job — we guarantee lead quality and freshness." },
      { q: "How many leads do I get per day?", a: "Volume depends on your ICP (target sectors, geographic area, legal form) and on the real flow of registrations. As a reference, partner firms receive between a handful and around fifteen leads per day depending on settings. Best-efforts via upstream filters — no numerical volume guarantee." },
      { q: "Do you also cover SCI, SELARL, micro-to-company?", a: "Standard scope covers SASU, SAS, SARL, EURL. SCI, SCP, SELARL, SEL and micro-to-company are available as options at no extra cost, on request at onboarding." },
      { q: "What's the commitment level?", a: "Monthly. Cancel whenever you want, no penalty, no long notice. We'd rather keep you with feed quality than with a contract." },
      { q: "Do my data and my clients' data stay confidential?", a: "Yes. We only ingest public data (INPI, BODACC, Sirene). Your team feedback only refines your model — never a pooled model. EU-hosted, GDPR." },
      { q: "How do I receive my leads?", a: "Every morning (business days), a digest with the day's PREMIUM leads, explained score, action plan and a ready-to-send outreach recommendation (email + LinkedIn). Email delivery by default, Slack/Teams/WhatsApp on request. Every lead includes several touchpoints: verified work email, phone when available, founder LinkedIn, registered address." },
      { q: "What AI models does Eligibly rely on?", a: "Documented and auditable stack: open-weights models (Mistral, Llama, Qwen) hosted in the EU for scoring and outreach generation, proprietary models for ICP matching. No calls to a non-EU API with your data. Every scoring decision is explainable: 3 positive reasons, 1-2 points to check, and the weighting is visible on the lead file." },
    ],
  },
};

const featuresDeprecated = [
  "Toutes les SASU & SAS fraîchement immatriculées (INPI, Sirene, BODACC)",
  "Filtres IA amont selon votre ICP (verticale, capital, zone, dirigeant, CAC)",
  "Scoring 0-100 expliqué (3 raisons par lead)",
  "Alertes livrées dans vos outils et canaux",
  "Jusqu'à 5 utilisateurs cabinet inclus",
  "Apprentissage continu sur les retours de votre équipe",
  "Onboarding 30 min + paramétrage ICP par notre équipe",
  "Support prioritaire par un humain (Paris, < 2h ouvrées)",
  "Données hébergées en UE, conformité RGPD",
  "Engagement mensuel — résiliable à tout moment",
];

const faqItemsDeprecated = [
  { q: "En quoi Eligibly diffère d'un annuaire d'entreprises ?", a: "Un annuaire vous donne accès à la base. Nous, on filtre, on score et on pousse uniquement les leads pertinents pour votre cabinet, directement dans votre canal de travail. C'est un moteur d'alertes, pas un annuaire." },
  { q: "Combien coûte un lead Eligibly ?", a: "À partir de 10 € par lead qualifié. Le tarif final dépend de votre volume mensuel cible et de la taille de votre cabinet : plus le volume est élevé, plus le coût unitaire baisse. Vous recevez le devis personnalisé sous 24 h ouvrées après un échange de cadrage de 20 minutes." },
  { q: "Pourquoi un devis et pas une grille publique ?", a: "Pour deux raisons. D'abord parce que le coût marginal d'un lead dépend de votre verticale et de la rareté du signal dans votre zone — un cabinet conseil sur Paris et un cabinet artisan en région n'ont pas la même équation. Ensuite parce que nous voulons valider, en 20 minutes, que le volume cible est réaliste pour vous. Ancrage public : 10 € le lead pour démarrer." },
  { q: "Comment démarre-t-on ?", a: "Échange de cadrage 20 min, paramétrage ICP, et premier lead livré sous 48 h sans carte bancaire. Vous validez la qualité avant de signer. Engagement mensuel, résiliable avec préavis 30 jours." },
  { q: "Vous garantissez un nombre de rendez-vous ?", a: "Non. C'est un engagement de moyens, pas de résultat. Décrocher des RDV reste votre métier — nous, on garantit la qualité et la fraîcheur des leads livrés." },
  { q: "Combien de leads je reçois par jour ?", a: "Le volume dépend de votre ICP (secteurs ciblés, zone géographique, forme juridique cible) et du flux d'immatriculations réel. À titre indicatif, les cabinets partenaires reçoivent entre quelques leads et une quinzaine par jour selon leur paramétrage. Engagement de moyens par filtres amont — pas de garantie chiffrée sur le volume." },
  { q: "Vous traitez aussi les SCI, SELARL, micro vers société ?", a: "Le périmètre standard couvre SASU, SAS, SARL, EURL. SCI, SCP, SELARL, SEL, micro vers société sont en option sans surcoût, sur demande à l'onboarding." },
  { q: "Quel niveau d'engagement ?", a: "Mensuel. Vous résiliez quand vous voulez, sans pénalité, sans préavis long. On préfère vous garder par la qualité du flux, pas par contrat." },
  { q: "Mes données et celles de mes clients restent-elles confidentielles ?", a: "Oui. Nous n'ingérons que des données publiques (INPI, BODACC, Sirene). Vos retours d'équipe servent uniquement à affiner votre modèle, pas un modèle mutualisé. Hébergement UE, RGPD." },
  { q: "Comment je reçois mes leads ?", a: "Chaque matin (jours ouvrés), un digest avec les leads PREMIUM du jour, score expliqué, plan d'action et recommandation d'accroche prête à envoyer (email + LinkedIn). Livraison email par défaut, Slack/Teams/WhatsApp sur demande. Chaque lead inclut plusieurs touchpoints : email pro vérifié, téléphone si disponible, LinkedIn dirigeant, adresse postale du siège." },
  { q: "Sur quels modèles d'IA s'appuie Eligibly ?", a: "Stack documentée et auditable : modèles open-weights (Mistral, Llama, Qwen) hébergés en UE pour le scoring et la génération d'accroches, modèles propriétaires pour le matching ICP. Aucun appel vers une API hors UE pour vos données. Chaque décision de scoring est explicable : 3 raisons positives, 1-2 points à vérifier, et la pondération est visible dans la fiche." },
];

const Tarifs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const lang = useLang();
  const t = copy[lang];
  const demoHref = localizedHref("/demo", lang);

  return (
    <>
      <SEOHead />
      <StructuredData page="pricing" />
      <div className="min-h-screen bg-background">
        <Header />
        <MobileCTABar />

        <main>
          {/* Hero */}
          <section className="pt-32 pb-16 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-6">{t.eyebrow}</p>
              <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-8">
                {t.h1a}<em className="italic text-primary font-medium">{t.h1em}</em>{t.h1b}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t.sub}
              </p>
            </div>
          </section>

          {/* Plan unique */}
          <section className="pb-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="rounded-3xl border-2 border-primary bg-card p-10 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.14em] px-4 py-1.5 rounded-bl-2xl">
                  {t.planBadge}
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3">{t.planEyebrow}</p>
                    <div className="mb-2">
                      <span className="font-display text-4xl md:text-5xl font-semibold tracking-tight italic">{t.planPrice}</span>
                      <span className="ml-2 text-lg text-muted-foreground">{t.planPriceUnit}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{t.planDetail1}</p>
                    <p className="text-xs text-muted-foreground mb-8">{t.planDetail2}</p>
                    <SafeLink to={demoHref}>
                      <Button variant="tengo" className="w-full h-12 group">
                        {t.planCta}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </SafeLink>
                    <p className="text-xs text-muted-foreground mt-3 text-center">{t.planCtaNote}</p>
                  </div>
                  <ul className="space-y-3">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[0.95rem]">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* ROI */}
          <section className="py-20 px-4 bg-card/30">
            <div className="container mx-auto max-w-5xl">
              <div className="text-center mb-10">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">{t.roiEyebrow}</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                  {t.roiH2a}<em className="italic text-primary font-medium">{t.roiH2em}</em>{t.roiH2b}
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {t.roiCards.map(([v, l]) => (
                  <div key={l} className="rounded-2xl border border-border bg-background p-7 text-center">
                    <div className="font-display text-4xl font-semibold tracking-tight text-primary mb-2">{v}</div>
                    <div className="text-sm text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Guarantee */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-3xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-success/10 border border-success/20 flex items-center justify-center mx-auto mb-8">
                <Shield className="w-7 h-7 text-success" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">{t.guarH2}</h2>
              <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
                {t.guarSub}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
                {t.guarChips.map((c) => (
                  <span key={c} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-success" />{c}</span>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 px-4 bg-card/30" id="faq">
            <div className="container mx-auto max-w-3xl">
              <div className="text-center mb-16">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">{t.faqEyebrow}</p>
                <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                  {t.faqH2a}<em className="italic text-primary font-medium">{t.faqH2em}</em>{t.faqH2b}
                </h2>
              </div>

              <div className="divide-y divide-border/50">
                {t.faqItems.map((item, i) => (
                  <div key={i}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between py-6 text-left hover:text-primary transition-colors group"
                      aria-expanded={openFaq === i}
                    >
                      <span className="font-semibold text-base pr-8 group-hover:text-primary transition-colors">{item.q}</span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-96 pb-6" : "max-h-0"}`}>
                      <p className="text-[0.95rem] text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-24 px-4">
            <div className="container mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
                {t.finalH2}
              </h2>
              <SafeLink to={demoHref}>
                <Button size="lg" variant="tengo" className="h-12 px-8 group">
                  {t.finalCta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SafeLink>
              <p className="mt-6 text-xs text-muted-foreground">{t.finalChips}</p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Tarifs;
