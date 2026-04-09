import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import { Check, X, Minus, ArrowRight, BarChart3 } from "lucide-react";
import { ArticleRecommendations } from "@/components/ArticleRecommendations";

const Icon = ({ v }: { v: "y" | "n" | "p" }) => {
  if (v === "y") return <Check className="w-5 h-5 text-success" />;
  if (v === "n") return <X className="w-5 h-5 text-red-400" />;
  return <Minus className="w-5 h-5 text-amber-400" />;
};

const rows: { feature: string; dt: "y"|"n"|"p"; el: "y"|"n"|"p" }[] = [
  { feature: "Nombre de sources surveillées", dt: "y", el: "y" },
  { feature: "Scoring prédictif Go/No-Go", dt: "n", el: "y" },
  { feature: "Analyse IA du DCE", dt: "p", el: "y" },
  { feature: "Données d'attribution historiques", dt: "y", el: "y" },
  { feature: "Aide à la rédaction du mémoire technique", dt: "n", el: "p" },
  { feature: "Collaboration d'équipe", dt: "p", el: "y" },
  { feature: "Transparence tarifaire", dt: "n", el: "y" },
  { feature: "Facilité de prise en main", dt: "p", el: "y" },
  { feature: "Support client réactif", dt: "p", el: "y" },
];

const EligiblyVsDoubletrade = () => {
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
                Eligibly vs Doubletrade : quelle solution pour vos appels d'offres ?
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Doubletrade est un acteur historique de la veille des marchés publics depuis 1998. Eligibly est une nouvelle plateforme qui mise sur le scoring prédictif IA. Comparaison factuelle.
              </p>
            </header>

            <section className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold font-display">Deux approches différentes</h2>
              <p><strong>Doubletrade</strong> est une référence depuis plus de 25 ans dans la veille des marchés publics. La plateforme agrège plus de 10 000 sources et propose des données d'attribution détaillées. Elle cible principalement les grands comptes et les équipes structurées avec des besoins de veille avancés.</p>
              <p><strong>Eligibly</strong> se positionne différemment avec le <strong>scoring prédictif</strong> : au lieu de simplement lister les appels d'offres, la plateforme analyse chaque marché par rapport à votre profil entreprise et prédit vos chances de succès. L'objectif est de vous faire gagner du temps sur la qualification Go/No-Go.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold font-display mb-6">Tableau comparatif</h2>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="py-4 px-4 text-left font-semibold">Critère</th>
                      <th className="py-4 px-4 text-left font-semibold">Doubletrade</th>
                      <th className="py-4 px-4 text-left font-semibold bg-primary/5 text-primary">Eligibly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr key={i} className="border-t border-border">
                        <td className="py-3 px-4 font-medium">{r.feature}</td>
                        <td className="py-3 px-4"><Icon v={r.dt} /></td>
                        <td className="py-3 px-4 bg-primary/5"><Icon v={r.el} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold font-display">Dans quels cas choisir Doubletrade ?</h2>
              <ul>
                <li>Vous êtes un grand compte avec une équipe marchés publics structurée</li>
                <li>Vous avez besoin d'une couverture massive (+10 000 sources)</li>
                <li>Vous cherchez des données d'attribution très détaillées sur des historiques longs</li>
                <li>Votre budget veille est confortable et vous préférez un acteur établi</li>
              </ul>

              <h2 className="text-2xl font-bold font-display">Dans quels cas choisir Eligibly ?</h2>
              <ul>
                <li>Vous êtes une PME/ETI qui veut qualifier rapidement les AO avant d'investir du temps</li>
                <li>Vous cherchez un <strong>scoring prédictif</strong> pour votre décision Go/No-Go</li>
                <li>Vous voulez un outil simple à prendre en main en moins de 5 minutes</li>
                <li>La transparence tarifaire est importante pour vous</li>
                <li>Vous préférez l'IA qui qualifie plutôt qu'un simple agrégateur qui liste</li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-primary via-accent to-primary rounded-2xl p-8 text-center text-white mb-12">
              <h2 className="text-2xl font-bold font-display mb-4">Testez le scoring prédictif d'Eligibly</h2>
              <p className="text-white/80 mb-6">Obtenez votre premier score de compatibilité en moins de 5 minutes.</p>
              <SafeLink to="/demo">
                <Button size="lg" className="bg-card text-primary hover:bg-card font-bold">
                  Essai gratuit 14 jours <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </SafeLink>
            </section>

            <ArticleRecommendations currentArticleUrl="/eligibly-vs-doubletrade" />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default EligiblyVsDoubletrade;
