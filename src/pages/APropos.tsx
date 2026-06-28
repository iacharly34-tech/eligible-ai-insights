import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Sparkles, Database, ShieldCheck, Building2, Users, Target } from "lucide-react";

const APropos = () => {
  const { language } = useLanguage();
  const en = language === "en";

  const principles = [
    {
      icon: Target,
      title: en ? "One vertical, one job" : "Une verticale, un job",
      desc: en
        ? "We only serve French accounting firms. No generic CRM, no horizontal SaaS. Every filter, every score, every integration is built around the cabinet workflow."
        : "On ne s'adresse qu'aux cabinets d'expertise comptable français. Aucun CRM générique, aucun SaaS horizontal. Chaque filtre, chaque score, chaque intégration est pensé pour le workflow cabinet.",
    },
    {
      icon: Database,
      title: en ? "Official sources only" : "Sources officielles uniquement",
      desc: en
        ? "INPI, Sirene, BODACC and contracted GDPR-compliant enrichment partners. No scraping, no shady third-party lists. The leads you receive belong to you — not to 4 competing firms."
        : "INPI, Sirene, BODACC et partenaires d'enrichissement contractuels conformes RGPD. Aucun scraping, aucune liste douteuse. Les leads que vous recevez vous appartiennent — pas à 4 cabinets concurrents.",
    },
    {
      icon: Sparkles,
      title: en ? "Explainable AI" : "IA explicable",
      desc: en
        ? "Every score comes with its reasons: sector, location, capital, founder profile. No black box. You decide whether to call or pass."
        : "Chaque score arrive avec ses raisons : secteur, zone, capital, profil du dirigeant. Aucune boîte noire. Vous décidez d'appeler ou de passer.",
    },
    {
      icon: ShieldCheck,
      title: en ? "Data hosted in France" : "Données hébergées en France",
      desc: en
        ? "GDPR-compliant, French hosting, zero data resale. Your ICP and feedback stay yours and train your own scoring model."
        : "RGPD, hébergement France, zéro revente de données. Votre ICP et vos retours restent à vous et entraînent votre propre modèle de scoring.",
    },
  ];

  return (
    <>
      <SEOHead />
      <StructuredData page="about" />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="pt-36 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <p className="text-[0.74rem] uppercase tracking-[0.16em] text-primary font-semibold mb-5">
              {en ? "About Eligibly" : "À propos d'Eligibly"}
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-foreground">
              {en ? (
                <>The lead engine accounting firms <em className="italic text-primary font-medium">actually own</em>.</>
              ) : (
                <>Le moteur de leads que les cabinets EC <em className="italic text-primary font-medium">possèdent vraiment</em>.</>
              )}
            </h1>
            <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {en
                ? "Eligibly was built with a handful of French accounting firms tired of buying the same mutualized leads from third-party vendors. We turn official immatriculation data into a daily flow of qualified prospects — yours, scored by AI, delivered into your preferred channel."
                : "Eligibly est né avec quelques cabinets d'expertise comptable français lassés d'acheter les mêmes leads mutualisés à des fournisseurs tiers. Nous transformons la donnée officielle d'immatriculation en un flux quotidien de prospects qualifiés — les vôtres, scorés par l'IA, livrés dans votre canal préféré."}
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-4 bg-muted/30 border-y border-border">
          <div className="container mx-auto max-w-5xl grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[0.74rem] uppercase tracking-[0.16em] text-primary font-semibold mb-4">
                {en ? "Our mission" : "Notre mission"}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-foreground">
                {en ? (
                  <>Stop buying leads. <em className="italic text-primary font-medium">Produce</em> them.</>
                ) : (
                  <>Arrêtez d'acheter des leads. <em className="italic text-primary font-medium">Produisez-les.</em></>
                )}
              </h2>
            </div>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                {en
                  ? "France has 3,000+ new SASU and SAS registered every week. Compta-Online, Companeo and the like resell the same lead to 3 to 5 firms — for 50 to 150 € a piece. Cabinets pay more and more for less and less attention."
                  : "La France enregistre plus de 3 000 SASU et SAS chaque semaine. Compta-Online, Companeo et consorts revendent le même lead à 3 à 5 cabinets — pour 50 à 150 € pièce. Les cabinets paient de plus en plus pour de moins en moins d'attention."}
              </p>
              <p>
                {en
                  ? "Eligibly turns the model upside down: one monthly subscription adapted to your firm (pricing on request), your ICP, your filters, your scoring model — leads no one else receives, refreshed every morning."
                  : "Eligibly retourne le modèle : un abonnement mensuel adapté à votre cabinet (tarif sur demande), votre ICP, vos filtres, votre modèle de scoring — des leads que personne d'autre ne reçoit, rafraîchis chaque matin."}
              </p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-2xl mb-14">
              <p className="text-[0.74rem] uppercase tracking-[0.16em] text-primary font-semibold mb-4">
                {en ? "Principles" : "Principes"}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-foreground">
                {en ? "Four non-negotiables." : "Quatre non-négociables."}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((p) => (
                <div key={p.title} className="rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 px-4 bg-muted/30 border-y border-border">
          <div className="container mx-auto max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-[0.74rem] uppercase tracking-[0.16em] text-primary font-semibold mb-4">
                  {en ? "Team" : "Équipe"}
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-foreground">
                  {en ? (
                    <>Built with cabinets, not for them.</>
                  ) : (
                    <>Conçu <em className="italic text-primary font-medium">avec</em> des cabinets, pas pour eux.</>
                  )}
                </h2>
              </div>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  {en
                    ? "Eligibly is built by a small team of product engineers and data specialists working hand-in-hand with 4 pilot accounting firms (5 to 30 collaborators) across Paris, Lyon and Bordeaux."
                    : "Eligibly est construit par une petite équipe d'ingénieurs produit et de spécialistes data en binôme avec 4 cabinets d'expertise comptable pilotes (5 à 30 collaborateurs) à Paris, Lyon et Bordeaux."}
                </p>
                <p>
                  {en
                    ? "Every feature is reviewed by an associé EC before shipping. No growth hacker copy, no fake testimonials, no inflated metrics."
                    : "Chaque fonctionnalité est validée par un associé EC avant d'être livrée. Pas de copy growth hacker, pas de faux témoignages, pas de chiffres gonflés."}
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground font-medium">
                    {en ? "4 pilot firms · Paris · Lyon · Bordeaux" : "4 cabinets pilotes · Paris · Lyon · Bordeaux"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground font-medium">
                    {en ? "Headquartered in Paris · 100% French team" : "Siège à Paris · équipe 100% française"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-foreground">
              {en ? (
                <>Talk to the team behind Eligibly.</>
              ) : (
                <>Échangez avec l'équipe derrière Eligibly.</>
              )}
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {en
                ? "30 minutes with a founder. No SDR, no script. We show the engine, you show your ICP, we tell you if there's a fit."
                : "30 minutes avec un fondateur. Aucun SDR, aucun script. On vous montre le moteur, vous nous montrez votre ICP, on vous dit s'il y a un fit."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <SafeLink to={en ? "/en/demo" : "/demo"}>
                <Button variant="tengo" className="h-12 px-6 text-sm font-semibold group">
                  {en ? "Book a demo" : "Réserver une démo"}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SafeLink>
              <a href="mailto:contact@eligibly.ai">
                <Button variant="outline" className="h-12 px-6 text-sm font-semibold">
                  contact@eligibly.ai
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default APropos;