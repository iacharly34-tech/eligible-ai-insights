import { useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={`py-20 px-4 ${variant === "featured" ? "bg-white" : "bg-gradient-to-br from-slate-50 to-gray-100"}`}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
              <div className="flex gap-2">
                {articles.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? "bg-blue-600 w-8" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
              <CarouselNext className="relative translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>
        
        {variant === "standard" && (
          <div className="text-center mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Les marchés publics évoluent vite. Les critères changent. La concurrence s'intensifie.<br/>
                <strong className="text-blue-600">Charly, votre agent intelligent</strong>, lit pour vous plus de 600 sources et partage ici les meilleures analyses, stratégies et tendances.
              </p>
              <p className="text-xl font-semibold text-gray-900">
                L'objectif : vous aider à consacrer moins de temps à chercher… et plus à gagner.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};