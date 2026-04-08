import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import { Check, X, Minus, ArrowRight, BarChart3 } from "lucide-react";
import { ArticleRecommendations } from "@/components/ArticleRecommendations";

const Icon = ({ v }: { v: "y" | "n" | "p" }) => {
  if (v === "y") return <Check className="w-5 h-5 text-green-500" />;
  if (v === "n") return <X className="w-5 h-5 text-red-400" />;
  return <Minus className="w-5 h-5 text-amber-400" />;
};

const rows: { feature: string; tg: "y"|"n"|"p"; el: "y"|"n"|"p" }[] = [
  { feature: "Nombre de sources surveillées", tg: "y", el: "y" },
  { feature: "Scoring prédictif Go/No-Go", tg: "n", el: "y" },
  { feature: "Analyse IA du DCE", tg: "y", el: "y" },
  { feature: "Données d'attribution historiques", tg: "p", el: "y" },
  { feature: "Aide à la rédaction du mémoire technique", tg: "y", el: "p" },
  { feature: "Collaboration d'équipe", tg: "y", el: "y" },
  { feature: "Capitalisation des réponses passées", tg: "y", el: "p" },
  { feature: "Transparence tarifaire", tg: "n", el: "y" },
  { feature: "Facilité de prise en main", tg: "y", el: "y" },
  { feature: "Support client réactif", tg: "y", el: "y" },
];

const EligiblyVsTengo = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <article className="container mx-auto max-w-4xl px-4">
            <header className="mb-12">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                <BarChart3 className="w-4 h-4 mr-2" />
                Comparaison
              </Badge>
              <h1 className="text-3xl md:text-5xl font-extrabold font-display mb-6 leading-tight">
                Eligibly vs Tengo : deux approches IA des marchés publics
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Tengo et Eligibly sont deux startups IA qui repensent les appels d'offres publics. Leurs approches sont complémentaires mais différentes. Comparaison honnête.
              </p>
            </header>

            <section className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold font-display">Deux visions de l'IA pour les AO</h2>
              <p><strong>Tengo</strong> est une startup française qui mise sur l'analyse complète du cycle de l'appel d'offres : détection, analyse du DCE, collaboration d'équipe et capitalisation des réponses passées. La plateforme est particulièrement forte sur l'aide à la rédaction des mémoires techniques.</p>
              <p><strong>Eligibly</strong> se concentre sur un angle différent : le <strong>scoring prédictif</strong>. Plutôt que de vous aider à répondre à tous les AO, Eligibly vous dit d'abord <em>lesquels méritent votre investissement</em> en prédisant vos chances de succès. C'est la qualification avant l'action.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold font-display mb-6">Tableau comparatif</h2>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="py-4 px-4 text-left font-semibold">Critère</th>
                      <th className="py-4 px-4 text-left font-semibold">Tengo</th>
                      <th className="py-4 px-4 text-left font-semibold bg-primary/5 text-primary">Eligibly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr key={i} className="border-t border-border">
                        <td className="py-3 px-4 font-medium">{r.feature}</td>
                        <td className="py-3 px-4"><Icon v={r.tg} /></td>
                        <td className="py-3 px-4 bg-primary/5"><Icon v={r.el} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold font-display">Dans quels cas choisir Tengo ?</h2>
              <ul>
                <li>Vous avez besoin d'aide à la <strong>rédaction des mémoires techniques</strong></li>
                <li>Vous travaillez en équipe et cherchez un outil collaboratif complet</li>
                <li>La capitalisation des réponses passées est essentielle pour vous</li>
                <li>Vous cherchez un outil qui couvre l'intégralité du cycle de réponse</li>
              </ul>

              <h2 className="text-2xl font-bold font-display">Dans quels cas choisir Eligibly ?</h2>
              <ul>
                <li>Votre problème n°1 est de <strong>qualifier rapidement</strong> les AO avant de mobiliser vos équipes</li>
                <li>Vous voulez un score de compatibilité objectif pour chaque marché</li>
                <li>Vous perdez du temps et de l'argent sur des réponses à des AO que vous n'avez aucune chance de remporter</li>
                <li>La transparence tarifaire compte pour vous</li>
                <li>Vous cherchez un outil simple qui donne des résultats en 5 minutes</li>
              </ul>

              <h2 className="text-2xl font-bold font-display">Peuvent-ils être complémentaires ?</h2>
              <p>Oui. Eligibly et Tengo ne sont pas nécessairement en concurrence frontale. Eligibly qualifie en amont (Go/No-Go), Tengo aide à produire la réponse. Certaines équipes pourraient utiliser les deux : Eligibly pour décider <em>quoi</em> répondre, et Tengo pour <em>comment</em> répondre.</p>
            </section>

            <section className="bg-gradient-to-br from-primary via-accent to-primary rounded-2xl p-8 text-center text-white mb-12">
              <h2 className="text-2xl font-bold font-display mb-4">Testez le scoring prédictif d'Eligibly</h2>
              <p className="text-white/80 mb-6">Obtenez votre premier score de compatibilité en moins de 5 minutes.</p>
              <SafeLink to="/demo">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
                  Essai gratuit 14 jours <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </SafeLink>
            </section>

            <ArticleRecommendations currentArticleUrl="/eligibly-vs-tengo" />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default EligiblyVsTengo;
