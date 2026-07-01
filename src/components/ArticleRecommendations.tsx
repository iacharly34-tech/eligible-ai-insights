import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import { SocialShare } from "@/components/ui/social-share";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

interface ArticleRecommendation {
  title: string;
  description: string;
  url: string;
  date: string;
  readTime: string;
  category: string;
  icon: React.ComponentType<any>;
}

interface ArticleRecommendationsProps {
  currentArticleUrl: string;
  currentCategory?: string;
}

export const ArticleRecommendations = ({ currentArticleUrl, currentCategory }: ArticleRecommendationsProps) => {
  // Articles cabinet d'expertise comptable
  const allArticles: ArticleRecommendation[] = [
    {
      title: "Baromètre acquisition cabinet 2026",
      description: "Benchmark CAC, taux de conversion et durée du cycle de vente en cabinet d'expertise comptable.",
      url: "/blog/barometre-acquisition-cabinet",
      date: "15 janvier 2026",
      readTime: "10 min",
      category: "Acquisition",
      icon: () => <BookOpen className="w-4 h-4" />
    },
    {
      title: "Observatoire SASU & SAS 2026",
      description: "Volumes, géographie et secteurs des SASU/SAS fraîchement immatriculées en France.",
      url: "/blog/observatoire-sasu-sas",
      date: "10 janvier 2026",
      readTime: "9 min",
      category: "Marché",
      icon: () => <BookOpen className="w-4 h-4" />
    },
    {
      title: "Playbook prospection cabinet 2026",
      description: "Cadre opérationnel de prospection pour cabinets d'expertise comptable : ICP, séquences, mesure.",
      url: "/blog/playbook-prospection-cabinet",
      date: "5 janvier 2026",
      readTime: "12 min",
      category: "Prospection",
      icon: () => <BookOpen className="w-4 h-4" />
    },
    {
      title: "ICP cabinet d'expertise comptable",
      description: "Comment définir votre profil client idéal et exclure ce qui pollue votre pipeline.",
      url: "/blog/icp-cabinet-expertise-comptable",
      date: "18 décembre 2025",
      readTime: "8 min",
      category: "Acquisition",
      icon: () => <BookOpen className="w-4 h-4" />
    },
    {
      title: "Coût d'acquisition client en cabinet",
      description: "Décomposition du CAC en cabinet et leviers pour le diviser par deux.",
      url: "/blog/cout-acquisition-client-cabinet",
      date: "5 décembre 2025",
      readTime: "7 min",
      category: "Acquisition",
      icon: () => <BookOpen className="w-4 h-4" />
    },
    {
      title: "Créations d'entreprises 2025",
      description: "État des lieux INSEE : SASU, SAS et primo-entrepreneurs sur le marché français.",
      url: "/blog/creations-entreprises-2025",
      date: "20 novembre 2025",
      readTime: "6 min",
      category: "Marché",
      icon: () => <BookOpen className="w-4 h-4" />
    }
  ];

  // Filtrer les articles (exclure l'article actuel)
  const filteredArticles = allArticles.filter(article => article.url !== currentArticleUrl);
  
  // Prioriser les articles de la même catégorie
  const sameCategory = filteredArticles.filter(article => 
    currentCategory && article.category === currentCategory
  );
  
  const otherCategories = filteredArticles.filter(article => 
    !currentCategory || article.category !== currentCategory
  );
  
  // Sélectionner 3 articles : 2 de la même catégorie si possible, sinon les plus récents
  const recommendedArticles = [
    ...sameCategory.slice(0, 2),
    ...otherCategories.slice(0, 3 - sameCategory.slice(0, 2).length)
  ].slice(0, 3);

  if (recommendedArticles.length === 0) return null;

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-blue-100 text-primary border-primary/20">
            <BookOpen className="w-4 h-4 mr-2" />
            À lire ensuite
          </Badge>
          <h2 className="text-2xl font-bold mb-4">
            Articles recommandés pour vous
          </h2>
          <p className="text-muted-foreground">
            Poursuivez votre lecture sur la prospection en cabinet d'expertise comptable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {recommendedArticles.map((article, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                
                <h3 className="text-base font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {article.description}
                </p>
                
                <div className="space-y-3">
                  <div className="mb-3">
                    <SocialShare 
                      title={article.title}
                      url={article.url}
                      variant="minimal"
                      size="sm"
                    />
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all"
                    asChild
                  >
                    <SafeLink to={article.url}>
                      Lire l'article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </SafeLink>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};