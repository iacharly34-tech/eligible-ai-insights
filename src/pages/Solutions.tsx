import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { MobileCTABar } from "@/components/MobileCTABar";
import { ArrowRight, CheckCircle, Building2, Stethoscope, Cpu, Hammer, Scale, Sparkles } from "lucide-react";

const Solutions = () => {
  const demoHref = "/demo";

  const verticales = [
    { icon: Cpu, title: "Cabinets spécialisés Tech & SaaS", subtitle: "Startups, éditeurs, freelances tech", description: "Captez les SASU créées par des CTO, freelances dev et fondateurs SaaS dès l'immatriculation — avant qu'un cabinet généraliste ne les contacte.", benefits: ["Filtre code NAF tech (62.01Z, 62.02A, etc.)", "Détection primo-entrepreneur ex-salarié tech", "Signaux levée de fonds amorçage", "Alerte si capital social > 5 k€"] },
    { icon: Scale, title: "Cabinets conseil & professions libérales", subtitle: "Avocats, consultants, coachs", description: "Adressez les nouvelles structures de consulting et professions libérales qui cherchent un cabinet rompu à la BNC, BIC et l'IS.", benefits: ["Filtre par profession réglementée", "SAS de consulting > 10 k€ capital", "Détection holding personnelle", "Zone géographique fine (IRIS / EPCI)"] },
    { icon: Stethoscope, title: "Cabinets verticale santé & libérales médicales", subtitle: "Médecins, kinés, infirmiers, vétos", description: "Ciblez les nouvelles installations en libéral et les SEL/SPFPL au moment où elles cherchent un cabinet qui maîtrise leur convention.", benefits: ["Filtres SEL, SELARL, SELAS, SPFPL", "Conventions ordinales", "Zonage ARS", "Détection cession-installation"] },
    { icon: Hammer, title: "Cabinets artisans, BTP & commerce", subtitle: "TPE locales, micro-entrepreneurs en croissance", description: "Récupérez chaque semaine les nouveaux artisans et commerçants de votre zone qui basculent en société et ont besoin d'un EC de proximité.", benefits: ["Filtre micro vers société", "Zone < 30 km", "Activités CMA / CCI", "Détection franchise / réseau"] },
    { icon: Building2, title: "Cabinets multi-bureaux & réseaux", subtitle: "Cabinets > 30 collaborateurs, réseaux", description: "Distribuez automatiquement les leads par bureau, associé ou pôle métier. Pilotez la performance de prospection à l'échelle du groupe.", benefits: ["Routing par bureau / associé", "Tableaux de bord consolidés", "SSO entreprise", "Account manager dédié"] },
    { icon: Sparkles, title: "Cabinets en structuration commerciale", subtitle: "Responsable développement, associé en charge", description: "Outillez votre démarche de prospection sortante avec un flux structuré, scoré et historisé — sans recruter une équipe SDR.", benefits: ["Flux quotidien clé en main", "Reporting hebdo prêt à présenter", "Onboarding en 30 min", "Engagement mensuel sans abonnement long"] },
  ];

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
              <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-6">Solutions</p>
              <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-8">
                Une solution par <em className="italic text-primary font-medium">type de cabinet</em>, pas un outil générique.
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Eligibly se paramètre selon votre verticale, votre zone et votre taille de cabinet. Vous recevez uniquement les nouvelles SASU & SAS qui correspondent réellement à votre ICP.
              </p>
            </div>
          </section>

          {/* Verticales */}
          <section className="pb-24 px-4" aria-label="Verticales">
            <div className="container mx-auto max-w-5xl space-y-8">
              {verticales.map((solution, index) => (
                <div key={index} className="group p-8 sm:p-10 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-500">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-semibold tracking-tight mb-1">{solution.title}</h3>
                      <p className="text-xs text-primary uppercase tracking-[0.14em] font-semibold mb-4">{solution.subtitle}</p>
                      <p className="text-[0.95rem] text-muted-foreground leading-relaxed mb-6">{solution.description}</p>
                      <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {solution.benefits.map((b, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                      <SafeLink to={demoHref}>
                        <Button variant="tengo" className="group/btn h-11">
                          Voir une démo sur ma verticale
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </SafeLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 md:py-28 px-4 bg-card/30">
            <div className="container mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
                Votre verticale n'est pas listée ? <em className="italic text-primary font-medium">Parlons-en</em>.
              </h2>
              <p className="text-muted-foreground mb-10">Si votre cabinet a un ICP très spécifique (SCI, SCP, holding, transmission, expat…), on regarde ensemble si le moteur peut le couvrir.</p>
              <SafeLink to="/demo">
                <Button size="lg" variant="tengo" className="group h-12 px-8">
                  Réserver 30 min
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
