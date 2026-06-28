import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SafeLink } from "@/components/SafeLink";
import { SEOHead } from "@/components/SEOHead";
import { MobileCTABar } from "@/components/MobileCTABar";
import {
  ArrowRight,
  CheckCircle,
  Download,
  BookOpen,
  TrendingUp,
  Users,
  FileText,
  Mic,
  Calculator,
  Mail,
  GraduationCap,
  Sparkles,
  BarChart3,
  Building2,
  Lightbulb,
} from "lucide-react";

const categories = [
  { id: "all", label: "Tout" },
  { id: "prospection", label: "Prospection cabinet" },
  { id: "marche", label: "Marché EC & tendances" },
  { id: "outils", label: "Outils & playbooks" },
  { id: "etudes", label: "Études & data" },
];

type Resource = {
  title: string;
  desc: string;
  type: "Guide" | "Playbook" | "Étude" | "Webinar" | "Modèle" | "Calculateur" | "Article";
  cat: string;
  duration: string;
  icon: any;
  cta: string;
  status?: "Nouveau" | "Essentiel" | "Bientôt";
};

const resources: Resource[] = [
  {
    title: "Le Playbook de la prospection cabinet EC en 2026",
    desc: "60 pages pour transformer les SASU & SAS fraîchement immatriculées en clients signés. Méthodologie, scripts d'appel, séquences email, KPIs.",
    type: "Playbook",
    cat: "prospection",
    duration: "60 pages · PDF",
    icon: BookOpen,
    cta: "Télécharger",
    status: "Essentiel",
  },
  {
    title: "Baromètre 2026 — Acquisition client en cabinet d'expertise comptable",
    desc: "Étude réalisée auprès de 184 cabinets français. Coût d'acquisition, sources, taux de conversion, panier moyen par verticale.",
    type: "Étude",
    cat: "etudes",
    duration: "32 pages · PDF",
    icon: BarChart3,
    cta: "Recevoir l'étude",
    status: "Nouveau",
  },
  {
    title: "Cartographie 2026 des nouvelles immatriculations en France",
    desc: "+312 000 SASU et SAS créées en 2025. Décryptage par région, verticale et profil de dirigeant. Où sont vos prochains clients ?",
    type: "Étude",
    cat: "marche",
    duration: "Dashboard interactif",
    icon: TrendingUp,
    cta: "Explorer la carte",
    status: "Nouveau",
  },
  {
    title: "Calculateur de ROI prospection cabinet",
    desc: "Combien vous coûte vraiment un nouveau client SASU ? Comparez vos canaux (apport, Google Ads, prospection sortante, Eligibly).",
    type: "Calculateur",
    cat: "outils",
    duration: "3 min",
    icon: Calculator,
    cta: "Calculer mon CAC",
  },
  {
    title: "10 séquences email pour relancer un primo-entrepreneur",
    desc: "Modèles testés sur 4 000+ envois. Objet, corps, relances, call-to-action. Copier-coller dans Lemlist, La Growth Machine ou HubSpot.",
    type: "Modèle",
    cat: "prospection",
    duration: "Templates · Notion",
    icon: Mail,
    cta: "Obtenir les modèles",
  },
  {
    title: "Le guide du dirigeant SASU pour choisir son expert-comptable",
    desc: "Le contenu que vos prospects lisent. Comprenez leurs critères de choix pour mieux pitcher votre cabinet.",
    type: "Guide",
    cat: "marche",
    duration: "12 min de lecture",
    icon: Users,
    cta: "Lire le guide",
  },
  {
    title: "Webinar — Comment Cabinet Dubois & Associés a signé 23 clients en 90 jours",
    desc: "Replay 45 min avec Sophie Dubois (associée). Verticale, ICP, scripts, organisation interne, outils, mesures.",
    type: "Webinar",
    cat: "prospection",
    duration: "Replay 45 min",
    icon: Mic,
    cta: "Voir le replay",
  },
  {
    title: "Modèle de plan de prospection cabinet 90 jours",
    desc: "Trame Notion clé en main : objectifs, ICP, segments, scripts, KPIs hebdo, revue mensuelle d'associé.",
    type: "Modèle",
    cat: "outils",
    duration: "Template · Notion",
    icon: FileText,
    cta: "Dupliquer le template",
  },
  {
    title: "Construire son ICP cabinet : la méthode en 5 étapes",
    desc: "Pour arrêter de prospecter tout le monde. Définir, qualifier et écrire un Ideal Customer Profile actionnable par toute votre équipe.",
    type: "Article",
    cat: "prospection",
    duration: "9 min de lecture",
    icon: Lightbulb,
    cta: "Lire l'article",
  },
  {
    title: "Verticalisation cabinet : 7 niches sous-exploitées en 2026",
    desc: "SELARL santé, freelances tech, micro vers SASU, holdings personnelles, SCI patrimoniales… les niches à fort panier moyen et faible concurrence.",
    type: "Article",
    cat: "marche",
    duration: "11 min de lecture",
    icon: Building2,
    cta: "Lire l'analyse",
  },
  {
    title: "Académie Eligibly — Formation gratuite à la prospection cabinet",
    desc: "8 modules vidéo + quizz. De la définition de l'ICP au closing du premier RDV. Certification incluse.",
    type: "Guide",
    cat: "outils",
    duration: "2h30 · 8 modules",
    icon: GraduationCap,
    cta: "Commencer la formation",
    status: "Bientôt",
  },
  {
    title: "Observatoire mensuel — Les SASU & SAS créées en France",
    desc: "Newsletter mensuelle. Volumes, verticales, capital moyen, régions chaudes. La donnée brute, sans bullshit, dans votre boîte mail.",
    type: "Étude",
    cat: "etudes",
    duration: "Mensuel",
    icon: BarChart3,
    cta: "S'abonner gratuitement",
  },
];

const TypeBadge = ({ type }: { type: Resource["type"] }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[0.7rem] font-semibold uppercase tracking-[0.1em] bg-primary/10 text-primary">
    {type}
  </span>
);

const StatusBadge = ({ status }: { status: Resource["status"] }) => {
  if (!status) return null;
  const styles =
    status === "Bientôt"
      ? "bg-muted text-muted-foreground"
      : status === "Nouveau"
      ? "bg-accent/15 text-accent"
      : "bg-secondary/15 text-secondary";
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[0.7rem] font-semibold uppercase tracking-[0.1em] ${styles}`}>
      {status}
    </span>
  );
};

const Ressources = () => {
  const [activeCat, setActiveCat] = useState("all");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = activeCat === "all" ? resources : resources.filter((r) => r.cat === activeCat);

  const liveArticles = [
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
                Le centre de ressources qui aide les <em className="italic text-primary font-medium">cabinets d'expertise comptable</em> à signer plus de clients.
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                Études, playbooks, modèles, webinars, calculateurs. Du contenu opérationnel, écrit avec des associés et des responsables développement de cabinet — pas par un service marketing.
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
                      S'abonner
                    </Button>
                  </form>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-success bg-success/10 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Merci ! Premier envoi mardi prochain.</span>
                  </div>
                )}
                <p className="text-xs text-muted-foreground mt-3">
                  L'Observatoire mensuel · Le baromètre · 1 ressource par mois · Aucun spam
                </p>
              </div>
            </div>
          </section>

          {/* Articles publiés (réels, sourcés) */}
          <section className="py-16 px-4 bg-card/30 border-y border-border">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-10">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3">Articles publiés</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                  Nos analyses, <em className="italic text-primary font-medium">sourcées et vérifiables</em>.
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl">
                  Articles écrits par notre équipe à partir de données publiques (INSEE, OEC, Observatoire de la profession comptable) et de retours terrain de cabinets pilotes. Chaque chiffre est sourcé en bas d'article.
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

          {/* Ressources phares (à venir) */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
                <div>
                  <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3">À ne pas manquer</p>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                    Les 3 ressources <em className="italic text-primary font-medium">les plus téléchargées</em> ce mois-ci.
                  </h2>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {resources.slice(0, 3).map((r) => (
                  <div key={r.title} className="rounded-2xl border border-border bg-background p-7 flex flex-col">
                    <div className="flex items-center gap-2 mb-5">
                      <TypeBadge type={r.type} />
                      <StatusBadge status={r.status} />
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                      <r.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3 leading-snug">{r.title}</h3>
                    <p className="text-[0.95rem] text-muted-foreground leading-relaxed mb-6 flex-1">{r.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{r.duration}</span>
                      <Button variant="ghost" size="sm" className="group text-primary">
                        {r.cta} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Filtres + grille */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
                <div>
                  <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3">La bibliothèque</p>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                    Toutes les ressources, <em className="italic text-primary font-medium">filtrées pour vous</em>.
                  </h2>
                </div>
              </div>

              {/* Filtres */}
              <div className="flex flex-wrap gap-2 mb-10">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveCat(c.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                      activeCat === c.id
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((r) => (
                  <article key={r.title} className="rounded-2xl border border-border bg-card p-6 flex flex-col hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2 mb-4">
                      <TypeBadge type={r.type} />
                      <StatusBadge status={r.status} />
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <r.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2 leading-snug">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{r.desc}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{r.duration}</span>
                      <Button variant="ghost" size="sm" className="group text-primary h-auto p-0">
                        {r.cta} <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Observatoire en chiffres */}
          <section className="py-20 px-4 bg-card/30">
            <div className="container mx-auto max-w-5xl">
              <div className="text-center mb-12">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">Observatoire Eligibly</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                  Les chiffres clés du marché cabinet EC <em className="italic text-primary font-medium">en temps réel</em>.
                </h2>
              </div>
              <div className="grid md:grid-cols-4 gap-5">
                {[
                  ["312 480", "SASU & SAS créées en 2025"],
                  ["+ 8,4 %", "vs 2024"],
                  ["1 786 €", "panier moyen annuel SASU"],
                  ["68 %", "des dirigeants n'ont pas d'EC à J+30"],
                ].map(([v, l]) => (
                  <div key={l} className="text-center rounded-2xl border border-border bg-background p-6">
                    <div className="font-display text-3xl font-semibold tracking-tight text-primary mb-2">{v}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{l}</div>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-muted-foreground mt-6">Sources : INPI, Sirene, BODACC, panel Eligibly 184 cabinets · MAJ mensuelle</p>
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
                Toutes ces ressources sont gratuites. La meilleure façon de les mettre en pratique : tester le moteur Eligibly sur 14 jours, sur votre vraie zone et votre vraie verticale.
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
