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
  // Articles disponibles (même liste que dans Ressources.tsx)
  const allArticles: ArticleRecommendation[] = [
    {
      title: "Le futur de la réponse aux AO : IA, automatisation et stratégie humaine",
      description: "Vision prospective de l'évolution des marchés publics à l'ère de l'intelligence artificielle",
      url: "/futur-ia",
      date: "12 septembre 2025",
      readTime: "8 min",
      category: "IA & automatisation",
      icon: () => <BookOpen className="w-4 h-4" />
    },
    {
      title: "Critères environnementaux et sociaux : comment les intégrer",
      description: "Guide complet pour réussir sur les marchés publics durables en 2025",
      url: "/criteres-rse",
      date: "28 août 2025",
      readTime: "8 min",
      category: "Critères RSE & innovation",
      icon: () => <BookOpen className="w-4 h-4" />
    },
    {
      title: "PME, comment rivaliser avec les grands groupes sur les AO",
      description: "Stratégies concrètes : groupements, niches, différenciation pour inverser le rapport de force",
      url: "/pme-vs-grands-groupes",
      date: "19 août 2025",
      readTime: "7 min",
      category: "Répondre efficacement aux AO",
      icon: () => <BookOpen className="w-4 h-4" />
    },
    {
      title: "Marchés publics et innovation : où se cachent les vraies opportunités",
      description: "Guide 2025 pour identifier et conquérir les marchés d'avenir dans la tech publique",
      url: "/marches-innovation",
      date: "5 août 2025",
      readTime: "8 min",
      category: "Tendances & data clés",
      icon: () => <BookOpen className="w-4 h-4" />
    },
    {
      title: "Pourquoi 3 appels d'offres sur 5 sont perdus d'avance",
      description: "Décryptage des mécanismes cachés qui rendent 60% des AO impossibles à gagner",
      url: "/ao-perdus-avance",
      date: "22 juillet 2025",
      readTime: "6 min",
      category: "Tendances & data clés",
      icon: () => <BookOpen className="w-4 h-4" />
    },
    {
      title: "Anticiper les appels d'offres : le vrai avantage compétitif",
      description: "Pourquoi les entreprises gagnantes ne réagissent plus aux publications d'AO mais les anticipent",
      url: "/anticipation-ao",
      date: "18 juillet 2025",
      readTime: "7 min",
      category: "Répondre efficacement aux AO",
      icon: () => <BookOpen className="w-4 h-4" />
    },
    {
      title: "Les signaux faibles qui trahissent un marché public verrouillé",
      description: "Comment détecter les appels d'offres truqués et éviter les procédures biaisées",
      url: "/signaux-faibles",
      date: "8 juillet 2025",
      readTime: "8 min",
      category: "Répondre efficacement aux AO",
      icon: () => <BookOpen className="w-4 h-4" />
    },
    {
      title: "Comment bâtir une vraie stratégie AO basée sur les données",
      description: "De l'intuition à la science : transformer votre approche des marchés publics avec la data",
      url: "/strategie-donnees",
      date: "2 juillet 2025",
      readTime: "7 min",
      category: "Tendances & data clés",
      icon: () => <BookOpen className="w-4 h-4" />
    },
    {
      title: "Les 7 plus grosses erreurs des PME sur les marchés publics",
      description: "Guide pratique pour éviter les pièges administratifs qui éliminent 60% des candidatures",
      url: "/erreurs-ao",
      date: "25 juin 2025",
      readTime: "6 min",
      category: "Répondre efficacement aux AO",
      icon: () => <BookOpen className="w-4 h-4" />
    },
    {
      title: "Comment détecter les bons appels d'offres sans perdre des heures",
      description: "Méthodes et outils IA pour identifier efficacement les AO pertinents et optimiser votre veille",
      url: "/detection-appels-offres",
      date: "15 juin 2025",
      readTime: "7 min",
      category: "IA & automatisation",
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
            Continuez votre exploration des marchés publics avec ces contenus complémentaires
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
                
                <h3 className="text-base font-bold mb-3 leading-tight group-hover:text-blue-600 transition-colors">
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