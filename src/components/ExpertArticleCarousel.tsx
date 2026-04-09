import { ArticleCard } from "@/components/ArticleCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Article {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  author?: string;
  url: string;
  icon?: any;
}

interface ExpertArticleCarouselProps {
  articles: Article[];
  title: string;
  subtitle: string;
  variant?: "featured" | "standard";
}

export const ExpertArticleCarousel = ({ 
  articles, 
  title, 
  subtitle,
  variant = "standard" 
}: ExpertArticleCarouselProps) => {

  return (
    <section className={`py-20 px-4 ${variant === "featured" ? "bg-card" : "bg-[hsl(var(--hero-dark))]"}`}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
        
        {/* Desktop: Grid Layout */}
        <div className="hidden lg:block">
          <div className={`grid gap-8 ${variant === "featured" ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3"}`}>
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                {...article}
                variant={variant}
              />
            ))}
          </div>
        </div>
        
        {/* Mobile & Tablet: Carousel */}
        <div className="lg:hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {articles.map((article, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                  <ArticleCard
                    {...article}
                    variant={variant}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center items-center gap-4 mt-8">
              <CarouselPrevious className="relative translate-y-0 left-0" />
              <CarouselNext className="relative translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>
        
        {variant === "standard" && (
          <div className="text-center mt-12">
            <div className="bg-card backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border">
              <p className="text-foreground mb-6 text-lg leading-relaxed">
                Les marchés publics évoluent vite. Les critères changent. La concurrence s'intensifie.<br/>
                <strong className="text-primary">Charly IA, votre agent intelligent</strong>, lit pour vous plus de 600 sources et partage ici les meilleures analyses, stratégies et tendances.
              </p>
              <p className="text-xl font-semibold text-foreground">
                L'objectif : vous aider à consacrer moins de temps à chercher… et plus à gagner.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};