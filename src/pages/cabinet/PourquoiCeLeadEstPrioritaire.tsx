import { LeadFicheDemo } from "@/components/cabinet/LeadFicheDemo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";
import { CTAFooter } from "@/components/CTAFooter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import { ArrowRight, CheckCircle2, Clock3, FileText, Target } from "lucide-react";

const PourquoiCeLeadEstPrioritaire = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <MobileCTABar />
    <main id="main-content" tabIndex={-1} className="focus:outline-hidden" role="main">
      <section className="relative overflow-hidden border-b border-border bg-gradient-hero pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.035]" aria-hidden="true" />
        <div className="container relative mx-auto px-4">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(280px,0.42fr)_minmax(0,1fr)] xl:gap-10">
            <aside className="space-y-5 lg:sticky lg:top-24">
              <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary">
                <FileText className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                Fiche lead — exemple fictif
              </Badge>
              <div className="space-y-4">
                <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl xl:text-5xl">
                  Analyse d’un lead prioritaire
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Une fiche de décision pour savoir vite si une société mérite une action commerciale : récence, score, dirigeant, contact, angle d’approche et qualité mesurée.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  { icon: Target, label: "Score expliqué", text: "Les raisons positives et les points à vérifier sont visibles." },
                  { icon: Clock3, label: "Fenêtre de contact", text: "La récence et le premier bilan cadrent le bon moment d’approche." },
                  { icon: CheckCircle2, label: "Action prête", text: "Canal recommandé, courrier et statut de suivi au même endroit." },
                ].map((item) => (
                  <div key={item.label} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 rounded-lg border border-border bg-card/80 p-4 shadow-xs backdrop-blur-sm">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-foreground">{item.label}</div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <SafeLink to="/demo">
                  <Button variant="tengo" className="h-12 w-full px-5 font-semibold sm:w-auto lg:w-full xl:w-auto">
                    Recevoir une fiche réelle
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </SafeLink>
                <p className="text-xs leading-relaxed text-muted-foreground sm:max-w-56 lg:max-w-none">
                  3 fiches leads livrées sous 48 h pour votre zone.
                </p>
              </div>
            </aside>

            <div className="min-w-0">
              <LeadFicheDemo />
            </div>
          </div>
        </div>
      </section>

      <CTAFooter
        title="Prêt à recevoir vos premiers leads ?"
        subtitle="3 leads test livrés sous 48 h, sans engagement ni carte bancaire."
        primaryButtonText="Demander mes 3 leads"
        secondaryButtonText="Voir la démo produit"
      />
    </main>
    <Footer />
  </div>
);

export default PourquoiCeLeadEstPrioritaire;