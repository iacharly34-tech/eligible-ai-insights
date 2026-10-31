import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import { ArrowRight, BookOpen } from "lucide-react";
import { ROUTE_META } from "@/lib/route-meta";

// Topic clusters: every blog article belongs to one cluster, each cluster has a pillar page.
// Recommendations pull from the same cluster first, so search engines and AI crawlers
// see coherent topical depth instead of random links.
type Cluster = "prospection" | "visibilite" | "marche" | "cabinet";

const CLUSTERS: Record<Cluster, { label: string; pillar: { href: string; label: string } }> = {
  prospection: { label: "Prospection & acquisition", pillar: { href: "/leads-experts-comptables", label: "Génération de leads pour experts-comptables" } },
  visibilite: { label: "Marque & visibilité", pillar: { href: "/marque-et-visibilite-expert-comptable", label: "Marque & visibilité du cabinet" } },
  marche: { label: "Données de marché", pillar: { href: "/barometre-qualite-leads", label: "Baromètre qualité des leads" } },
  cabinet: { label: "Pilotage du cabinet", pillar: { href: "/produit", label: "Les offres Eligibly" } },
};

const clusterOf = (url: string): Cluster => {
  if (/demarchage|playbook|icp|fichier-siret|cout-acquisition|barometre-acquisition|lexique/.test(url)) return "prospection";
  if (/site-web|referencement|fiche-google|cas-client/.test(url)) return "visibilite";
  if (/immatriculations|observatoire|creations-entreprises|etat-lieux/.test(url)) return "marche";
  return "cabinet";
};

interface ArticleRecommendationsProps {
  currentArticleUrl: string;
  currentCategory?: string;
}

export const ArticleRecommendations = ({ currentArticleUrl }: ArticleRecommendationsProps) => {
  const articles = Object.entries(ROUTE_META)
    .filter(([path]) => path.startsWith("/blog/") && path !== currentArticleUrl)
    .map(([url, meta]) => ({ url, ...meta, cluster: clusterOf(url) }));

  const current = clusterOf(currentArticleUrl);
  const same = articles.filter((a) => a.cluster === current);
  const others = articles.filter((a) => a.cluster !== current);
  // Deterministic rotation so each article links to different neighbours (SSR-stable).
  const seed = [...currentArticleUrl].reduce((n, c) => n + c.charCodeAt(0), 0);
  const rotate = <T,>(list: T[]) => (list.length ? [...list.slice(seed % list.length), ...list.slice(0, seed % list.length)] : list);
  const picks = [...rotate(same).slice(0, 4), ...rotate(others)].slice(0, 6);

  if (picks.length === 0) return null;
  const pillar = CLUSTERS[current].pillar;

  return (
    <section className="py-12 bg-muted/40">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            {CLUSTERS[current].label}
          </Badge>
          <h2 className="text-2xl font-bold mb-3">Approfondir le sujet</h2>
          <p className="text-muted-foreground">
            Page de référence :{" "}
            <SafeLink to={pillar.href} className="text-primary underline underline-offset-4">
              {pillar.label}
            </SafeLink>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {picks.map((article) => (
            <Card key={article.url} className="group hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="text-xs text-muted-foreground mb-3">{CLUSTERS[article.cluster].label}</div>
                <h3 className="text-base font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                  {article.description}
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <SafeLink to={article.url}>
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </SafeLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
