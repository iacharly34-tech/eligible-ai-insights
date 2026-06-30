import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { MobileCTABar } from "@/components/MobileCTABar";
import { ArrowRight, Rocket, Users, MapPin, TrendingUp, UserMinus, Briefcase } from "lucide-react";
import { useLang, localizedHref } from "@/hooks/useLang";
import { motion } from "framer-motion";
import { useState } from "react";

const copy = {
  fr: {
    eyebrow: "Cas d'usage",
    h1a: "Six situations où Eligibly ",
    h1em: "change la donne",
    h1b: ".",
    sub: "Plutôt que de lister des verticales, voici ce qui se passe concrètement dans un cabinet quand le moteur est branché.",
    cta: "Voir ce cas en démo",
    quote: "Le contexte",
    answer: "Ce qu'Eligibly fait",
    result: "Le résultat à 90 jours",
    finalH2a: "Votre situation n'est pas là ? ",
    finalH2em: "Décrivez-la nous",
    finalH2b: ".",
    finalSub: "30 minutes suffisent pour qualifier si le moteur peut couvrir votre cas — et si non, on vous le dit franchement.",
    finalCta: "Parler à l'équipe",
  },
  en: {
    eyebrow: "Use cases",
    h1a: "Six situations where Eligibly ",
    h1em: "moves the needle",
    h1b: ".",
    sub: "Instead of listing verticals, here's what actually happens inside a firm once the engine is plugged in.",
    cta: "See this case in a demo",
    quote: "The context",
    answer: "What Eligibly does",
    result: "Outcome at 90 days",
    finalH2a: "Your situation isn't here? ",
    finalH2em: "Tell us about it",
    finalH2b: ".",
    finalSub: "30 minutes is enough to know whether the engine can cover your case — and if not, we'll say so plainly.",
    finalCta: "Talk to the team",
  },
};

const casesFR = [
  {
    icon: Rocket,
    tag: "Lancement d'offre",
    title: "Vous structurez une offre « création d'entreprise » et il vous faut du flux dès le premier mois.",
    context: "Le cabinet a investi dans une landing, un parcours d'onboarding, peut-être un SDR. Il manque le carburant : un flux régulier de nouvelles immatriculations alignées sur l'offre.",
    answer: "Eligibly livre chaque matin les SASU & SAS qui matchent les critères de l'offre (capital, forme, profil dirigeant, zone). Le SDR ouvre son mail et a 15 à 40 dossiers prêts à traiter.",
    result: "Un pipeline de prospection actif dès la semaine 1, sans dépendre du bouche-à-oreille ou des leads payants.",
  },
  {
    icon: UserMinus,
    tag: "Départ d'associé",
    title: "Un associé part et emmène une partie du portefeuille. Il faut compenser sans attendre.",
    context: "Le départ est connu, les chiffres tombent dans 6 à 12 mois. Recruter prend du temps, racheter un portefeuille coûte cher. La prospection sortante structurée devient l'option la plus rapide.",
    answer: "Le moteur est calibré sur le profil-type des clients perdus (taille, secteur, zone) et alimente directement les associés restants en leads frais, qualifiés, scorés.",
    result: "Une trajectoire de remplacement chiffrée et pilotable, présentable en comité tous les mois.",
  },
  {
    icon: MapPin,
    tag: "Ouverture de bureau",
    title: "Vous ouvrez un bureau dans une nouvelle ville et il n'y a aucun ancrage local.",
    context: "Le bureau coûte avant de rapporter. Le réseau local se construit en 18 à 24 mois. Sans flux entrant, l'associé en charge s'épuise à faire du networking.",
    answer: "Filtres géographiques fins (EPCI, IRIS, code postal) sur les nouvelles immatriculations de la zone. L'associé reçoit chaque matin les sociétés qui viennent de se créer chez lui.",
    result: "Une raison concrète de décrocher son téléphone tous les jours, et une présence commerciale visible sur le territoire en quelques semaines.",
  },
  {
    icon: TrendingUp,
    tag: "Croissance par paliers",
    title: "Vous voulez passer de 80 à 150 clients sans tripler la masse salariale prospection.",
    context: "L'équipe en place gère déjà les missions. Le développement commercial repose sur 1 ou 2 personnes qui ne peuvent pas absorber plus de dossiers entrants désordonnés.",
    answer: "Volume calibré au plafond d'absorption de l'équipe. Le moteur ne sur-livre pas : il sélectionne le meilleur ratio fraîcheur × score × proximité chaque jour.",
    result: "Une croissance prévisible, pilotée par un volume entrant maîtrisé, sans embauche additionnelle dédiée à la prospection.",
  },
  {
    icon: Users,
    tag: "Réseau & multi-bureaux",
    title: "Vous pilotez un réseau et chaque bureau veut son propre flux, ses propres critères.",
    context: "Les bureaux n'ont ni les mêmes ICP, ni les mêmes zones, ni la même maturité commerciale. Un outil unique mal segmenté crée plus de friction que de valeur.",
    answer: "Une configuration par bureau ou par associé. Le digest matinal est unique par destinataire. Un reporting consolidé remonte au niveau groupe.",
    result: "Une politique commerciale lisible au niveau groupe, sans imposer un même playbook à tous les bureaux.",
  },
  {
    icon: Briefcase,
    tag: "Structuration commerciale",
    title: "Vous voulez professionnaliser la prospection sans recruter une équipe SDR.",
    context: "Le dirigeant sait que la croissance ne viendra plus que de la recommandation, mais ne veut pas monter une équipe sales interne. Il cherche un système, pas un outil de plus.",
    answer: "Eligibly fournit la matière première (leads frais, qualifiés, contextualisés). Vous gardez la main sur le contact, la posture et la relation — ce que vos clients viennent chercher.",
    result: "Un process de prospection répétable, documenté, transmissible — sans dépendre d'une seule personne dans le cabinet.",
  },
];

const casesEN = [
  {
    icon: Rocket,
    tag: "New offering launch",
    title: "You're building a 'company formation' offering and need volume from month one.",
    context: "The firm has invested in a landing page, an onboarding flow, maybe an SDR. What's missing is fuel: a steady stream of newly registered companies that match the offering.",
    answer: "Eligibly delivers every morning the SASU & SAS companies matching the offering's criteria (capital, legal form, founder profile, area). The SDR opens their inbox to 15–40 ready-to-work accounts.",
    result: "An active prospecting pipeline from week 1, without depending on word-of-mouth or paid leads.",
  },
  {
    icon: UserMinus,
    tag: "Partner leaving",
    title: "A partner is leaving with part of the book. You need to compensate without waiting.",
    context: "The departure is known, the revenue gap will show in 6 to 12 months. Hiring takes time, buying a book is expensive. Structured outbound becomes the fastest option.",
    answer: "The engine is calibrated on the profile of lost clients (size, sector, area) and feeds the remaining partners with fresh, qualified, scored leads.",
    result: "A measurable replacement trajectory, reviewable in committee every month.",
  },
  {
    icon: MapPin,
    tag: "New office",
    title: "You're opening an office in a new city with zero local foothold.",
    context: "The office costs before it earns. Local network takes 18 to 24 months to build. Without inbound flow, the partner in charge burns out on networking events.",
    answer: "Fine-grained geographic filters (EPCI, IRIS, postcode) on new registrations. The partner gets every morning the companies that just formed in their area.",
    result: "A real reason to pick up the phone every day, and visible commercial presence on the territory within weeks.",
  },
  {
    icon: TrendingUp,
    tag: "Stepped growth",
    title: "You want to go from 80 to 150 clients without tripling your sales headcount.",
    context: "The team is already busy on engagements. Business development relies on 1 or 2 people who can't absorb a flood of unstructured inbound.",
    answer: "Volume calibrated to the team's absorption ceiling. The engine doesn't over-deliver: it picks the best freshness × score × proximity ratio each day.",
    result: "Predictable growth, steered by a controlled inbound volume, without dedicated sales hires.",
  },
  {
    icon: Users,
    tag: "Network & multi-office",
    title: "You run a network and every office wants its own flow, its own criteria.",
    context: "Offices don't share ICPs, zones or sales maturity. A single, poorly segmented tool creates more friction than value.",
    answer: "One configuration per office or per partner. The morning digest is unique per recipient. A consolidated report rolls up to group level.",
    result: "A readable group-level commercial policy without forcing the same playbook on every office.",
  },
  {
    icon: Briefcase,
    tag: "Sales structuring",
    title: "You want to professionalise prospecting without hiring an SDR team.",
    context: "The owner knows growth won't come from referrals alone anymore, but doesn't want to build an internal sales team. They're looking for a system, not yet another tool.",
    answer: "Eligibly provides the raw material (fresh, qualified, contextualised leads). You keep the contact, the posture and the relationship — what your clients come to you for.",
    result: "A repeatable, documented, transferable prospecting process — without depending on a single person inside the firm.",
  },
];

const Solutions = () => {
  const lang = useLang();
  const t = copy[lang];
  const demoHref = localizedHref("/demo", lang);
  const cases = lang === "en" ? casesEN : casesFR;
  const [active, setActive] = useState(0);
  const activeCase = cases[active];

  return (
    <>
      <SEOHead />
      <StructuredData page="solutions" />
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
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t.sub}
              </p>
            </div>
          </section>

          {/* Cases */}
          {/* Cases — interactive tab explorer */}
          <section className="pb-24 px-4" aria-label="Cas d'usage">
            <div className="container mx-auto max-w-6xl">
              <div className="grid lg:grid-cols-[280px,1fr] gap-8 lg:gap-12">
                {/* Left rail: sticky list */}
                <aside className="lg:sticky lg:top-28 lg:self-start">
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground font-semibold mb-4 hidden lg:block">
                    {lang === "en" ? "Explore" : "Explorer"}
                  </p>
                  <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 pb-2 lg:pb-0">
                    {cases.map((c, i) => {
                      const isActive = active === i;
                      return (
                        <button
                          key={i}
                          onClick={() => setActive(i)}
                          className={`group relative shrink-0 lg:w-full text-left rounded-xl border transition-all duration-300 px-4 py-3 flex items-center gap-3 ${
                            isActive
                              ? "bg-card border-primary/50 shadow-sm"
                              : "bg-transparent border-border hover:border-primary/30 hover:bg-card/50"
                          }`}
                        >
                          <span className={`font-display text-lg font-semibold tabular-nums transition-colors ${isActive ? "text-primary" : "text-muted-foreground/60"}`}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className={`text-sm font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                            {c.tag}
                          </span>
                          {isActive && (
                            <motion.span
                              layoutId="case-indicator"
                              className="hidden lg:block absolute right-3 w-1.5 h-1.5 rounded-full bg-primary"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </aside>

                {/* Right: active case panel */}
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-3xl border border-border bg-card overflow-hidden"
                >
                  {/* Header band */}
                  <div className="relative px-8 sm:px-10 pt-8 pb-6 border-b border-border bg-gradient-to-br from-primary/[0.04] via-transparent to-transparent">
                    <div className="flex items-start justify-between gap-6 mb-5">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-5xl font-semibold text-primary/30 leading-none tabular-nums">
                          {String(active + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-primary font-semibold">
                            {activeCase.tag}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {lang === "en" ? `${active + 1} of ${cases.length}` : `${active + 1} sur ${cases.length}`}
                          </p>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <activeCase.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl lg:text-[1.85rem] font-semibold tracking-tight leading-[1.2] max-w-2xl">
                      {activeCase.title}
                    </h2>
                  </div>

                  {/* Triptyque */}
                  <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                    {[
                      { label: t.quote, body: activeCase.context, accent: "bg-muted-foreground/40", num: "1" },
                      { label: t.answer, body: activeCase.answer, accent: "bg-primary", num: "2" },
                      { label: t.result, body: activeCase.result, accent: "bg-[hsl(var(--secondary))]", num: "3" },
                    ].map((b, i) => (
                      <motion.div
                        key={b.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                        className="p-7 sm:p-8"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`w-1.5 h-1.5 rounded-full ${b.accent}`} />
                          <p className="text-[0.7rem] uppercase tracking-[0.14em] font-semibold text-muted-foreground">
                            {`${b.num}. ${b.label}`}
                          </p>
                        </div>
                        <p className="text-sm leading-relaxed text-foreground/85">{b.body}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <div className="px-8 sm:px-10 py-6 border-t border-border bg-muted/20 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                    <p className="text-sm text-muted-foreground">
                      {lang === "en"
                        ? "Want to see this case on real data from your area?"
                        : "Vous voulez voir ce cas sur de vraies données de votre zone ?"}
                    </p>
                    <SafeLink to={demoHref}>
                      <Button variant="tengo" className="group/btn h-11">
                        {t.cta}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </SafeLink>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 md:py-28 px-4 bg-card/30">
            <div className="container mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
                {t.finalH2a}<em className="italic text-primary font-medium">{t.finalH2em}</em>{t.finalH2b}
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

export default Solutions;