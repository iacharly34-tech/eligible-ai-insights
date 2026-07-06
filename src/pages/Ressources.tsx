import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SafeLink } from "@/components/SafeLink";
import { SEOHead } from "@/components/SEOHead";
import { MobileCTABar } from "@/components/MobileCTABar";
import { ArrowRight, CheckCircle, Sparkles, Clock, Star, Calculator } from "lucide-react";
import { useLang, localizedHref } from "@/hooks/useLang";

const copy = {
  fr: {
    eyebrow: "Ressources cabinet EC",
    h1a: "Les analyses qui aident les ",
    h1em: "cabinets d'expertise comptable",
    h1b: " à mieux prospecter.",
    sub: "Articles sourcés, écrits par notre équipe à partir de données publiques (INSEE, OEC) et de retours terrain de cabinets pilotes. D'autres ressources arrivent — abonnez-vous pour ne rien manquer.",
    placeholder: "prenom@cabinet.fr",
    subscribe: "Être prévenu",
    thanks: "Merci ! Vous serez prévenu(e) dès la prochaine parution.",
    newsletterNote: "Une notification dès qu'une nouvelle analyse est publiée. Aucun spam.",
    liveEyebrow: "Articles en ligne",
    liveH2a: "Nos analyses, ",
    liveH2em: "sourcées et vérifiables",
    liveH2b: ".",
    liveSub: "Articles écrits par notre équipe à partir de données publiques (INSEE, OEC) et de retours terrain. Chaque chiffre est sourcé en bas d'article.",
    onlineBadge: "En ligne",
    read: "Lire",
    roadmapEyebrow: "Feuille de route éditoriale",
    roadmapH2a: "Ce sur quoi ",
    roadmapH2em: "nous travaillons",
    roadmapH2b: ".",
    roadmapSub: "Nous ne publions que ce que nous avons réellement écrit et sourcé. Voici les prochains contenus en préparation — vous serez notifié à leur sortie via le formulaire ci-dessus.",
    upcomingBadge: "En préparation",
    finalH2a: "Et si vous passiez ",
    finalH2em: "de la lecture à l'action",
    finalH2b: " ?",
    finalSub: "Le meilleur moyen de mettre nos analyses en pratique : recevez un échantillon de 3 leads qualifiés sur votre vraie zone et votre vraie verticale.",
    finalCta: "Demander un échantillon de 3 leads",
    finalChips: "✓ Sans CB · ✓ Livré sous 48 h · ✓ Sur votre zone et votre ICP",
    upcoming: [
      { title: "Baromètre — Édition T4 2026", desc: "Prochaine vague terrain avec une cohorte élargie de cabinets pilotes." },
      { title: "Observatoire — Édition juillet 2026", desc: "Nouvelle édition mensuelle avec focus verticale tech & e-commerce." },
      { title: "Guide du dirigeant SASU", desc: "Le contenu que vos prospects lisent. Comprendre leurs critères de choix." },
    ],
    liveArticles: [
      { href: "/blog/moderniser-cabinet-expertise-comptable-ia", title: "Moderniser un cabinet EC à l'ère de l'IA — Les 6 axes clés 2026", desc: "Production, conseil, relation client, RH, gouvernance, développement commercial : le tour d'horizon opérationnel de la transformation IA d'un cabinet EC — et l'axe le plus sous-estimé, la visibilité.", meta: "16 min · Dossier · sources OEC, Cegid, CREOP, Shine" },
      { href: "/blog/lexique-marketing-expert-comptable", title: "Lexique marketing pour experts-comptables — 30 mots à connaître", desc: "ICP, scoring, pipeline, touchpoints, CAC, MQL, séquence outbound… Le glossaire du marketing B2B traduit pour le quotidien d'un cabinet d'expertise comptable.", meta: "8 min · Lexique · pour associés et collaborateurs" },
      { href: "/blog/barometre-acquisition-cabinet-ec-2026", title: "Baromètre 2026 — Acquisition client en cabinet d'expertise comptable", desc: "Synthèse de l'état du marché : CAC par canal, cycle de vente, mix gagnant, conversion. Lecture stratégique pour passer du producteur au conseiller.", meta: "14 min · Étude · sources INSEE, OEC, Atlas" },
      { href: "/blog/observatoire-sasu-sas-juin-2026", title: "Observatoire des SASU & SAS créées en France — Juin 2026", desc: "25 000 immatriculations / mois : volumes, verticales, capital moyen, géographie, profils. Comment lire ces données pour orienter la prospection.", meta: "11 min · Données · sources INSEE, INPI, BODACC" },
      { href: "/blog/playbook-prospection-cabinet-ec-2026", title: "Playbook 2026 — La prospection en cabinet d'expertise comptable", desc: "Méthodologie opérationnelle complète : ICP, organisation, séquences, posture conseil, IA, gouvernance, KPIs. De la détection à la signature.", meta: "18 min · Playbook · sources OEC, Atlas, CNIL" },
      { href: "/blog/creations-entreprises-france-2025", title: "Créations d'entreprises en France : 2025, l'année record", desc: "Décryptage des données INSEE sur les nouvelles immatriculations 2024-2025 et lecture pour les cabinets EC.", meta: "7 min · Marché EC · sources INSEE" },
      { href: "/blog/cout-acquisition-client-cabinet-comptable", title: "Combien coûte un nouveau client en cabinet EC ? Benchmark 2026", desc: "Ordres de grandeur du CPL, CPRdv et CAC en cabinet d'expertise comptable, et leviers pour les faire baisser.", meta: "9 min · Acquisition · sources Booster Digital, Oltega, 425PPM, Lead-Gene" },
      { href: "/blog/icp-cabinet-expertise-comptable", title: "Construire l'ICP d'un cabinet d'expertise comptable : la méthode en 5 étapes", desc: "De l'audit du portefeuille existant à la conversion en filtres opérationnels, la méthode appliquée par nos cabinets pilotes.", meta: "8 min · Méthodologie · sources OEC, Atlas, Option Finance" },
    ],
  },
  en: {
    eyebrow: "Accounting firm resources",
    h1a: "The analyses that help ",
    h1em: "accounting firms",
    h1b: " prospect better.",
    sub: "Sourced articles, written by our team from public data (INSEE, OEC) and field feedback from partner firms. More resources are coming — subscribe to stay updated.",
    placeholder: "first.name@firm.com",
    subscribe: "Notify me",
    thanks: "Thanks! You'll be notified at the next release.",
    newsletterNote: "One notification whenever a new analysis is published. No spam.",
    liveEyebrow: "Live articles",
    liveH2a: "Our analyses, ",
    liveH2em: "sourced and verifiable",
    liveH2b: ".",
    liveSub: "Articles written by our team from public data (INSEE, OEC) and field feedback. Every figure is sourced at the bottom of the article.",
    onlineBadge: "Live",
    read: "Read",
    roadmapEyebrow: "Editorial roadmap",
    roadmapH2a: "What we're ",
    roadmapH2em: "working on",
    roadmapH2b: ".",
    roadmapSub: "We only publish what we've actually written and sourced. Here are the next pieces in preparation — you'll be notified when they go live via the form above.",
    upcomingBadge: "In preparation",
    finalH2a: "Ready to move from ",
    finalH2em: "reading to action",
    finalH2b: "?",
    finalSub: "The best way to put our analyses into practice: get a sample of 3 qualified leads on your real area and your real vertical.",
    finalCta: "Request a 3-lead sample",
    finalChips: "Delivered within 48h · On your area and ICP · No commitment",
    upcoming: [
      { title: "Barometer — Q4 2026 edition", desc: "Next field wave with a broader cohort of partner firms." },
      { title: "Observatory — July 2026 edition", desc: "New monthly edition focused on the tech & e-commerce verticals." },
      { title: "SASU founder guide", desc: "The content your prospects read. Understand their decision criteria." },
    ],
    liveArticles: [
      { href: "/blog/moderniser-cabinet-expertise-comptable-ia", title: "Modernising an accounting firm in the AI era — 6 key axes for 2026", desc: "Production, advisory, client relations, HR, governance, growth: the operational tour of an accounting firm's AI transformation — and the most underrated axis, visibility.", meta: "16 min · Dossier · sources OEC, Cegid, CREOP, Shine" },
      { href: "/blog/lexique-marketing-expert-comptable", title: "Marketing glossary for accountants — 30 words to know", desc: "ICP, scoring, pipeline, touchpoints, CAC, MQL, outbound sequence… The B2B marketing glossary translated for the daily life of an accounting firm.", meta: "8 min · Glossary · for partners and staff" },
      { href: "/blog/barometre-acquisition-cabinet-ec-2026", title: "2026 Barometer — Client acquisition for accounting firms", desc: "State of the market: CAC by channel, sales cycle, winning mix, conversion. Strategic reading to move from producer to advisor.", meta: "14 min · Study · sources INSEE, OEC, Atlas" },
      { href: "/blog/observatoire-sasu-sas-juin-2026", title: "SASU & SAS observatory in France — June 2026", desc: "25,000 registrations / month: volumes, verticals, average capital, geography, profiles. How to read this data to steer prospecting.", meta: "11 min · Data · sources INSEE, INPI, BODACC" },
      { href: "/blog/playbook-prospection-cabinet-ec-2026", title: "2026 Playbook — Prospecting for accounting firms", desc: "Full operational methodology: ICP, organisation, sequences, advisory posture, AI, governance, KPIs. From detection to signature.", meta: "18 min · Playbook · sources OEC, Atlas, CNIL" },
      { href: "/blog/creations-entreprises-france-2025", title: "Company creations in France: 2025, the record year", desc: "Decoding INSEE data on new registrations 2024-2025 and reading it for accounting firms.", meta: "7 min · Market · sources INSEE" },
      { href: "/blog/cout-acquisition-client-cabinet-comptable", title: "How much does a new client cost an accounting firm? 2026 benchmark", desc: "Orders of magnitude for CPL, CPRdv and CAC at accounting firms, and levers to bring them down.", meta: "9 min · Acquisition · sources Booster Digital, Oltega, 425PPM, Lead-Gene" },
      { href: "/blog/icp-cabinet-expertise-comptable", title: "Building the ICP of an accounting firm: the 5-step method", desc: "From auditing the existing client base to converting into operational filters — the method applied by our partner firms.", meta: "8 min · Methodology · sources OEC, Atlas, Option Finance" },
    ],
  },
};

const Ressources = () => {
  const lang = useLang();
  const t = copy[lang];
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const liveArticles = t.liveArticles;
  const upcoming = t.upcoming;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      <SEOHead />
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
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                {t.sub}
              </p>

              {/* Newsletter */}
              <div className="max-w-md mx-auto">
                {!subscribed ? (
                  <form onSubmit={handleSubscribe} className="flex gap-3">
                    <Input
                      type="email"
                      placeholder={t.placeholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-12"
                      required
                    />
                    <Button type="submit" variant="tengo" className="h-12 px-6">
                      {t.subscribe}
                    </Button>
                  </form>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-success bg-success/10 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">{t.thanks}</span>
                  </div>
                )}
                <p className="text-xs text-muted-foreground mt-3">
                  {t.newsletterNote}
                </p>
              </div>
            </div>
          </section>

          {/* Articles publiés (réels, sourcés) */}
          <section className="py-16 px-4 bg-card/30 border-y border-border">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-10">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3">{t.liveEyebrow}</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                  {t.liveH2a}<em className="italic text-primary font-medium">{t.liveH2em}</em>{t.liveH2b}
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl">
                  {t.liveSub}
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {liveArticles.map((a) => (
                  <SafeLink key={a.href} to={a.href} className="group block rounded-2xl border border-border bg-background p-7 hover:border-primary/40 transition-colors">
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[0.65rem] uppercase tracking-[0.12em] bg-success/10 text-success font-semibold mb-5">
                      <CheckCircle className="w-3 h-3" /> {t.onlineBadge}
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-3 leading-snug group-hover:text-primary transition-colors">{a.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{a.desc}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{a.meta}</span>
                      <span className="text-primary font-semibold inline-flex items-center">{t.read} <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" /></span>
                    </div>
                  </SafeLink>
                ))}
              </div>
            </div>
          </section>

          {/* Bientôt — feuille de route éditoriale, honnête */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-10">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3">{t.roadmapEyebrow}</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                  {t.roadmapH2a}<em className="italic text-primary font-medium">{t.roadmapH2em}</em>{t.roadmapH2b}
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl">
                  {t.roadmapSub}
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {upcoming.map((u) => (
                  <div key={u.title} className="rounded-2xl border border-dashed border-border bg-card/50 p-7">
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[0.65rem] uppercase tracking-[0.12em] bg-muted text-muted-foreground font-semibold mb-5">
                      <Clock className="w-3 h-3" /> {t.upcomingBadge}
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2 leading-snug">{u.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA final */}
          <section className="py-24 px-4">
            <div className="container mx-auto max-w-3xl text-center">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
                {t.finalH2a}<em className="italic text-primary font-medium">{t.finalH2em}</em>{t.finalH2b}
              </h2>
              <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
                {t.finalSub}
              </p>
              <SafeLink to={localizedHref("/demo", lang)}>
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

export default Ressources;
