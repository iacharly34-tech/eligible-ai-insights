import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SafeLink } from "@/components/SafeLink";
import { SEOHead } from "@/components/SEOHead";
import { MobileCTABar } from "@/components/MobileCTABar";
import { ArrowRight, CheckCircle, Sparkles, Clock } from "lucide-react";

const Ressources = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const liveArticles = [
    {
      href: "/blog/barometre-acquisition-cabinet-ec-2026",
      title: "Baromètre 2026 — Acquisition client en cabinet d'expertise comptable",
      desc: "Synthèse de l'état du marché : CAC par canal, cycle de vente, mix gagnant, conversion. Lecture stratégique pour passer du producteur au conseiller.",
      meta: "14 min · Étude · sources INSEE, OEC, Atlas",
    },
    {
      href: "/blog/observatoire-sasu-sas-juin-2026",
      title: "Observatoire des SASU & SAS créées en France — Juin 2026",
      desc: "25 000 immatriculations / mois : volumes, verticales, capital moyen, géographie, profils. Comment lire ces données pour orienter la prospection.",
      meta: "11 min · Données · sources INSEE, INPI, BODACC",
    },
    {
      href: "/blog/playbook-prospection-cabinet-ec-2026",
      title: "Playbook 2026 — La prospection en cabinet d'expertise comptable",
      desc: "Méthodologie opérationnelle complète : ICP, organisation, séquences, posture conseil, IA, gouvernance, KPIs. De la détection à la signature.",
      meta: "18 min · Playbook · sources OEC, Atlas, CNIL",
    },
    {
      href: "/blog/creations-entreprises-france-2025",
      title: "Créations d'entreprises en France : 2025, l'année record",
      desc: "Décryptage des données INSEE sur les nouvelles immatriculations 2024-2025 et lecture pour les cabinets EC.",
      meta: "7 min · Marché EC · sources INSEE",
    },
    {
      href: "/blog/cout-acquisition-client-cabinet-comptable",
      title: "Combien coûte un nouveau client en cabinet EC ? Benchmark 2026",
      desc: "Ordres de grandeur du CPL, CPRdv et CAC en cabinet d'expertise comptable, et leviers pour les faire baisser.",
      meta: "9 min · Acquisition · sources Booster Digital, Oltega, 425PPM, Lead-Gene",
    },
    {
      href: "/blog/icp-cabinet-expertise-comptable",
      title: "Construire l'ICP d'un cabinet d'expertise comptable : la méthode en 5 étapes",
      desc: "De l'audit du portefeuille existant à la conversion en filtres opérationnels, la méthode appliquée par nos cabinets pilotes.",
      meta: "8 min · Méthodologie · sources OEC, Atlas, Option Finance",
    },
  ];

  const upcoming = [
    { title: "Baromètre — Édition T4 2026", desc: "Prochaine vague terrain avec une cohorte élargie de cabinets pilotes." },
    { title: "Observatoire — Édition juillet 2026", desc: "Nouvelle édition mensuelle avec focus verticale tech & e-commerce." },
    { title: "Guide du dirigeant SASU", desc: "Le contenu que vos prospects lisent. Comprendre leurs critères de choix." },
  ];

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
              <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-6">Ressources cabinet EC</p>
              <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-8">
                Les analyses qui aident les <em className="italic text-primary font-medium">cabinets d'expertise comptable</em> à mieux prospecter.
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                Articles sourcés, écrits par notre équipe à partir de données publiques (INSEE, OEC) et de retours terrain de cabinets pilotes. D'autres ressources arrivent — abonnez-vous pour ne rien manquer.
              </p>

              {/* Newsletter */}
              <div className="max-w-md mx-auto">
                {!subscribed ? (
                  <form onSubmit={handleSubscribe} className="flex gap-3">
                    <Input
                      type="email"
                      placeholder="prenom@cabinet.fr"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-12"
                      required
                    />
                    <Button type="submit" variant="tengo" className="h-12 px-6">
                      Être prévenu
                    </Button>
                  </form>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-success bg-success/10 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Merci ! Vous serez prévenu(e) dès la prochaine parution.</span>
                  </div>
                )}
                <p className="text-xs text-muted-foreground mt-3">
                  Une notification dès qu'une nouvelle analyse est publiée. Aucun spam.
                </p>
              </div>
            </div>
          </section>

          {/* Articles publiés (réels, sourcés) */}
          <section className="py-16 px-4 bg-card/30 border-y border-border">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-10">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3">Articles en ligne</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                  Nos analyses, <em className="italic text-primary font-medium">sourcées et vérifiables</em>.
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl">
                  Articles écrits par notre équipe à partir de données publiques (INSEE, OEC) et de retours terrain. Chaque chiffre est sourcé en bas d'article.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {liveArticles.map((a) => (
                  <SafeLink key={a.href} to={a.href} className="group block rounded-2xl border border-border bg-background p-7 hover:border-primary/40 transition-colors">
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[0.65rem] uppercase tracking-[0.12em] bg-success/10 text-success font-semibold mb-5">
                      <CheckCircle className="w-3 h-3" /> En ligne
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-3 leading-snug group-hover:text-primary transition-colors">{a.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{a.desc}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{a.meta}</span>
                      <span className="text-primary font-semibold inline-flex items-center">Lire <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" /></span>
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
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3">Feuille de route éditoriale</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                  Ce sur quoi <em className="italic text-primary font-medium">nous travaillons</em>.
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl">
                  Nous ne publions que ce que nous avons réellement écrit et sourcé. Voici les prochains contenus en préparation — vous serez notifié à leur sortie via le formulaire ci-dessus.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {upcoming.map((u) => (
                  <div key={u.title} className="rounded-2xl border border-dashed border-border bg-card/50 p-7">
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[0.65rem] uppercase tracking-[0.12em] bg-muted text-muted-foreground font-semibold mb-5">
                      <Clock className="w-3 h-3" /> En préparation
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
                Et si vous passiez <em className="italic text-primary font-medium">de la lecture à l'action</em> ?
              </h2>
              <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
                Le meilleur moyen de mettre nos analyses en pratique : tester le moteur Eligibly sur 14 jours, sur votre vraie zone et votre vraie verticale.
              </p>
              <SafeLink to="/demo">
                <Button size="lg" variant="tengo" className="h-12 px-8 group">
                  Démarrer le pilote gratuit
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SafeLink>
              <p className="mt-6 text-xs text-muted-foreground">✓ Sans CB · ✓ Onboarding 30 min · ✓ Vous gardez les leads du pilote</p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Ressources;
