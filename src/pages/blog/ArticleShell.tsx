import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { MobileCTABar } from "@/components/MobileCTABar";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { ArrowRight, ArrowLeft, BookOpen, Sparkles } from "lucide-react";

interface Source {
  label: string;
  url: string;
}

interface ArticleShellProps {
  badge: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  author?: string;
  url: string;
  description: string;
  category: string;
  sources: Source[];
  children: ReactNode;
  related?: { title: string; href: string }[];
}

export const ArticleShell = ({
  badge,
  title,
  subtitle,
  date,
  readTime,
  author = "Équipe Eligibly",
  url,
  description,
  category,
  sources,
  children,
  related = [],
}: ArticleShellProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: { "@type": "Organization", name: "Eligibly" },
    publisher: {
      "@type": "Organization",
      name: "Eligibly",
      logo: { "@type": "ImageObject", url: "https://eligibly.ai/og-image.svg" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://eligibly.ai${url}` },
    articleSection: category,
    citation: sources.map((s) => ({ "@type": "CreativeWork", name: s.label, url: s.url })),
  };

  return (
    <>
      <SEOHead />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <Header />
        <MobileCTABar />
        <main className="pt-32 pb-20">
          <article className="container mx-auto max-w-3xl px-4">
            <SafeLink to="/ressources" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
              <ArrowLeft className="w-4 h-4 mr-1.5" /> Retour aux ressources
            </SafeLink>

            <header className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-[0.7rem] font-semibold uppercase tracking-[0.12em] mb-6">
                <BookOpen className="w-3.5 h-3.5" /> {badge}
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{subtitle}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground border-t border-border pt-4">
                <span>{author}</span>
                <span>·</span>
                <span>{new Date(date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                <span>·</span>
                <span>{readTime}</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none mb-12
              [&_h2]:font-display [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4
              [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3
              [&_p]:text-foreground/85 [&_p]:leading-relaxed [&_p]:my-4
              [&_ul]:space-y-2 [&_ul]:my-4 [&_li]:text-foreground/85
              [&_strong]:text-foreground [&_strong]:font-semibold
              [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary/80
              [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-5 [&_blockquote]:py-1 [&_blockquote]:italic [&_blockquote]:text-foreground/90 [&_blockquote]:my-6">
              {children}
            </div>

            {sources.length > 0 && (
              <section className="rounded-2xl border border-border bg-card/40 p-6 mb-12">
                <h2 className="font-display text-lg font-semibold mb-3">Sources &amp; références</h2>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
                  {sources.map((s, i) => (
                    <li key={i}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            <section className="rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-primary/20 p-8 md:p-10 text-center mb-12">
              <Sparkles className="w-7 h-7 text-primary mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                Passez de la lecture à <em className="italic text-primary">l'action</em>.
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                Recevez chaque matin les SASU &amp; SAS fraîchement immatriculées correspondant à votre ICP, filtrées et scorées. Pilote 14 jours, sans CB.
              </p>
              <SafeLink to="/demo">
                <Button variant="tengo" size="lg" className="h-12 px-7 group">
                  Démarrer le pilote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SafeLink>
            </section>

            {related.length > 0 && (
              <section>
                <h2 className="font-display text-xl font-semibold mb-4">À lire ensuite</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {related.map((r) => (
                    <SafeLink key={r.href} to={r.href} className="block rounded-xl border border-border p-5 hover:border-primary/40 transition-colors">
                      <div className="font-display text-base font-semibold leading-snug">{r.title}</div>
                      <div className="text-xs text-primary mt-2 inline-flex items-center">Lire <ArrowRight className="w-3 h-3 ml-1" /></div>
                    </SafeLink>
                  ))}
                </div>
              </section>
            )}
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};