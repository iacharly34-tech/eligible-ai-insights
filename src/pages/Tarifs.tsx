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

const faqItems = [
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
                À partir de <em className="italic text-primary font-medium">10 € le lead qualifié</em>. Devis adapté à votre cabinet.
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Construit avec et pour les cabinets d'expertise comptable français. Tarif final calibré sur votre volume mensuel et la taille de votre cabinet. Engagement mensuel, résiliable, démarrage sans CB.
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
                    <div className="mb-2">
                      <span className="font-display text-4xl md:text-5xl font-semibold tracking-tight italic">À partir de 10 €</span>
                      <span className="ml-2 text-lg text-muted-foreground">/ lead qualifié</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Tarif <strong>final sur devis</strong>, ajusté à votre volume cible et à la taille de votre cabinet — finalisé après un échange de cadrage de 20 minutes. Un seul client signé rembourse l'année.</p>
                    <p className="text-xs text-muted-foreground mb-8">Plus votre volume mensuel est élevé, plus le coût unitaire baisse.</p>
                    <SafeLink to={demoHref}>
                      <Button variant="tengo" className="w-full h-12 group">
                        Recevoir notre proposition
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </SafeLink>
                    <p className="text-xs text-muted-foreground mt-3 text-center">Réponse sous 24 h ouvrées · sans carte bancaire</p>
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

            </div>
          </section>

          {/* ROI */}
          <section className="py-20 px-4 bg-card/30">
            <div className="container mx-auto max-w-5xl">
              <div className="text-center mb-10">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">Le calcul est vite fait</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                  Notre tarif <em className="italic text-primary font-medium">vs un seul client signé</em>.
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  ["1 client", "rembourse largement l'année"],
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
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Démarrage sans friction</h2>
              <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Pas de carte bancaire pour démarrer. Premier lead premium livré sous 48 h pour valider la qualité avant signature. Engagement mensuel, résiliable avec préavis 30 jours.
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
                Prêt à tester sur <em className="italic text-primary font-medium">vos leads premium</em> ?
              </h2>
              <SafeLink to={demoHref}>
                <Button size="lg" variant="tengo" className="h-12 px-8 group">
                  Recevoir mon premier lead gratuit
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
