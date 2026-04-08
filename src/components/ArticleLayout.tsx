import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { ArrowRight } from "lucide-react";
import { ArticleRecommendations } from "@/components/ArticleRecommendations";
import { ReactNode } from "react";

interface ArticleLayoutProps {
  badge: string;
  badgeIcon: ReactNode;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  children: ReactNode;
  url: string;
}

export const ArticleLayout = ({ badge, badgeIcon, title, subtitle, date, readTime, children, url }: ArticleLayoutProps) => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <article className="container mx-auto max-w-4xl px-4">
            <header className="mb-12">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                {badgeIcon}
                <span className="ml-2">{badge}</span>
              </Badge>
              <h1 className="text-3xl md:text-5xl font-extrabold font-display mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {subtitle}
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>{date}</span>
                <span>•</span>
                <span>{readTime}</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none mb-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:font-display [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:font-display [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-foreground/80 [&_p]:leading-relaxed [&_ul]:space-y-2 [&_li]:text-foreground/80 [&_strong]:text-foreground">
              {children}
            </div>

            <section className="bg-gradient-to-br from-primary via-accent to-primary rounded-2xl p-8 text-center text-white mb-12">
              <h2 className="text-2xl font-bold font-display mb-4">Passez à l'action avec Eligibly</h2>
              <p className="text-white/80 mb-6">Découvrez votre score de compatibilité sur les marchés qui vous correspondent.</p>
              <SafeLink to="/demo">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
                  Essai gratuit 14 jours <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </SafeLink>
            </section>

            <ArticleRecommendations currentArticleUrl={url} />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};
