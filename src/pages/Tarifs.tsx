import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { MobileCTABar } from "@/components/MobileCTABar";
import { useState } from "react";
import { CheckCircle, ArrowRight, Shield, ChevronDown } from "lucide-react";

const features = [
  "Toutes les SASU & SAS fraîchement immatriculées (INPI, Sirene, BODACC, Pappers)",
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

const faqItems = [
  { q: "Comment ça se compare à Pappers ou Societe.com ?", a: "Pappers vous donne accès à la base. Nous, on filtre, on score et on pousse uniquement les leads pertinents pour votre cabinet, directement dans votre canal de travail. C'est un moteur d'alertes, pas un annuaire." },
  { q: "Pourquoi un tarif unique à 290 € HT / mois ?", a: "Parce que le besoin est le même pour tous les cabinets : un flux quotidien de nouveaux dirigeants qualifiés. Pas de palier surprise, pas de surcoût par lead — vous payez l'accès au moteur, pas la quantité." },
  { q: "Comment fonctionne le pilote 14 jours ?", a: "On paramètre votre verticale et votre zone, on active le flux pendant 14 jours, sans carte bancaire. Vous gardez tous les leads reçus pendant le pilote, que vous souscriviez ou non." },
  { q: "Vous garantissez un nombre de rendez-vous ?", a: "Non. C'est un engagement de moyens, pas de résultat. Décrocher des RDV reste votre métier — nous, on garantit la qualité et la fraîcheur des leads livrés." },
  { q: "Combien de leads je reçois par semaine ?", a: "Selon votre zone et votre verticale, entre 20 et 200 leads scorés par semaine. Sur Paris IDF + verticale tech, comptez ~80/semaine. Sur une ville moyenne + artisans, ~25/semaine." },
  { q: "Vous traitez aussi les SCI, SELARL, micro vers société ?", a: "Le périmètre standard couvre SASU, SAS, SARL, EURL. SCI, SCP, SELARL, SEL, micro vers société sont en option sans surcoût, sur demande à l'onboarding." },
  { q: "Quel niveau d'engagement ?", a: "Mensuel. Vous résiliez quand vous voulez, sans pénalité, sans préavis long. On préfère vous garder par la qualité du flux, pas par contrat." },
  { q: "Mes données et celles de mes clients restent-elles confidentielles ?", a: "Oui. Nous n'ingérons que des données publiques (INPI, BODACC, Sirene). Vos retours d'équipe servent uniquement à affiner votre modèle, pas un modèle mutualisé. Hébergement UE, RGPD." },
  { q: "Vous proposez du multi-bureaux ou du multi-associés ?", a: "Oui. Jusqu'à 5 utilisateurs inclus. Au-delà, ou pour un routing par bureau / associé / pôle métier, on bascule sur un plan Réseau, sur devis." },
];

const Tarifs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const demoHref = "/demo";

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
              <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-6">Tarifs</p>
              <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-8">
                Un tarif, <em className="italic text-primary font-medium">tout inclus</em>. Pas de surprise.
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Construit avec et pour les cabinets d'expertise comptable français. Engagement mensuel, résiliable, pilote 14 jours sans carte bancaire.
              </p>
            </div>
          </section>

          {/* Plan unique */}
          <section className="pb-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="rounded-3xl border-2 border-primary bg-card p-10 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.14em] px-4 py-1.5 rounded-bl-2xl">
                  Plan Cabinet Pro
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3">Le moteur complet</p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-display text-6xl font-semibold tracking-tight">290 €</span>
                      <span className="text-muted-foreground">HT / mois</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-8">Soit ~10 € / jour ouvré. Un seul client signé rembourse l'année.</p>
                    <SafeLink to={demoHref}>
                      <Button variant="tengo" className="w-full h-12 group">
                        Démarrer le pilote 14 jours
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </SafeLink>
                    <p className="text-xs text-muted-foreground mt-3 text-center">Sans carte bancaire · Vous gardez les leads du pilote</p>
                  </div>
                  <ul className="space-y-3">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[0.95rem]">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Plan Réseau */}
              <div className="mt-6 rounded-2xl border border-border bg-card/50 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-1">Plan Réseau — multi-bureaux</h3>
                  <p className="text-sm text-muted-foreground">+ de 5 utilisateurs, routing par bureau / associé / pôle métier, SSO, account manager dédié.</p>
                </div>
                <SafeLink to={demoHref}>
                  <Button variant="outline" className="h-11 whitespace-nowrap">Demander un devis</Button>
                </SafeLink>
              </div>
            </div>
          </section>

          {/* ROI */}
          <section className="py-20 px-4 bg-card/30">
            <div className="container mx-auto max-w-5xl">
              <div className="text-center mb-10">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">Le calcul est vite fait</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                  290 € / mois vs <em className="italic text-primary font-medium">un seul client signé</em>.
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  ["3 480 €", "coût annuel Eligibly"],
                  ["~1 800 €", "panier moyen annuel d'un client SASU"],
                  ["+8 à +20", "nouveaux clients signés / an constatés en pilote"],
                ].map(([v, l]) => (
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
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Pilote 14 jours, zéro friction</h2>
              <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Pas de carte bancaire pour démarrer. Vous gardez tous les leads reçus pendant le pilote. Si à J+14 le flux ne vous convient pas, on arrête, sans question.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-success" />Sans carte bancaire</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-success" />Onboarding 30 min inclus</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-success" />Résiliation à tout moment</span>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 px-4 bg-card/30" id="faq">
            <div className="container mx-auto max-w-3xl">
              <div className="text-center mb-16">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">FAQ</p>
                <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                  Les vraies questions <em className="italic text-primary font-medium">des cabinets</em>.
                </h2>
              </div>

              <div className="divide-y divide-border/50">
                {faqItems.map((item, i) => (
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
                Prêt à tester sur <em className="italic text-primary font-medium">vos vrais leads</em> ?
              </h2>
              <SafeLink to={demoHref}>
                <Button size="lg" variant="tengo" className="h-12 px-8 group">
                  Démarrer le pilote 14 jours
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SafeLink>
              <p className="mt-6 text-xs text-muted-foreground">✓ Sans CB · ✓ Onboarding 30 min · ✓ Résiliation libre</p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Tarifs;
