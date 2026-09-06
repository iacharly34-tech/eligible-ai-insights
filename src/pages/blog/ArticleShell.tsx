import { Children, cloneElement, isValidElement, ReactElement, ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { ArrowRight, ArrowLeft, BookOpen, Clock3, FileText, Quote, Sparkles } from "lucide-react";
import { ArticleRecommendations } from "@/components/ArticleRecommendations";
import { ContextualLinks } from "@/components/ContextualLinks";

interface Source {
  label: string;
  url: string;
}

interface ArticleShellProps {
  badge: string;
  title: string;
  subtitle: string;
  date: string;
  dateModified?: string;
  readTime: string;
  author?: string;
  url: string;
  description: string;
  category: string;
  sources: Source[];
  children: ReactNode;
  related?: { title: string; href: string }[];
  lang?: "fr" | "en";
}

export const ArticleShell = ({
  badge,
  title,
  subtitle,
  date,
  dateModified,
  readTime,
  author,
  url,
  description,
  category,
  sources,
  children,
  related = [],
  lang = "fr",
}: ArticleShellProps) => {
  const isEn = lang === "en";
  const resolvedAuthor = author ?? (isEn ? "Eligibly team" : "Équipe Eligibly");
  const backLabel = isEn ? "Back to resources" : "Retour aux ressources";
  const backHref = isEn ? "/en/resources" : "/ressources";
  const sourcesLabel = isEn ? "Sources & references" : "Sources & références";
  const ctaTitle = isEn ? "From reading to action." : "Passez de la lecture à l'action.";
  const ctaBody = isEn
    ? "Every morning, receive the newly-registered UK Ltd companies matching your ICP — filtered, scored, with a ready-to-send opener. From £10 per qualified lead, no card required."
    : "Recevez chaque matin les SASU & SAS fraîchement immatriculées correspondant à votre ICP, filtrées, scorées et avec une recommandation d'accroche prête à envoyer. À partir de 10 € le lead qualifié, sans CB.";
  const ctaButton = isEn ? "Get my first free lead" : "Recevoir mon premier lead gratuit";
  const ctaHref = isEn ? "/en/demo" : "/demo";
  const relatedLabel = isEn ? "Read next" : "À lire ensuite";
  const readLabel = isEn ? "Read" : "Lire";
  const homeCrumb = isEn ? "Home" : "Accueil";
  const resourcesCrumb = isEn ? "Resources" : "Ressources";
  const slugifyHeading = (value: string) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  const contentNodes = Children.toArray(children);
  const sections = contentNodes.flatMap((node, index) => {
    if (!isValidElement(node) || node.type !== "h2") return [];
    const heading = node as ReactElement<{ id?: string; children?: ReactNode }>;
    const label = typeof heading.props.children === "string" ? heading.props.children : "";
    if (!label) return [];
    return [{ id: heading.props.id ?? `${slugifyHeading(label)}-${index}`, label }];
  });
  let sectionIndex = 0;
  const structuredChildren = contentNodes.map((node) => {
    if (!isValidElement(node) || node.type !== "h2") return node;
    const heading = node as ReactElement<{ id?: string; children?: ReactNode }>;
    const section = sections[sectionIndex];
    sectionIndex += 1;
    return cloneElement(heading, { id: heading.props.id ?? section?.id });
  });
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: dateModified ?? date,
    author: {
      "@type": "Person",
      name: resolvedAuthor,
      url: "https://www.linkedin.com/company/eligibly",
      worksFor: { "@type": "Organization", name: "Eligibly", url: "https://eligibly.ai" },
    },
    inLanguage: isEn ? "en-GB" : "fr-FR",
    image: ["https://eligibly.ai/og-image.jpg"],
    publisher: {
      "@type": "Organization",
      name: "Eligibly",
      logo: { "@type": "ImageObject", url: "https://eligibly.ai/assets/eligibly-logo-main.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://eligibly.ai${url}` },

    articleSection: category,
    citation: sources.map((s) => ({ "@type": "CreativeWork", name: s.label, url: s.url })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeCrumb, item: `https://eligibly.ai${isEn ? "/en" : "/"}` },
      { "@type": "ListItem", position: 2, name: resourcesCrumb, item: `https://eligibly.ai${isEn ? "/en/resources" : "/ressources"}` },
      { "@type": "ListItem", position: 3, name: title, item: `https://eligibly.ai${url}` },
    ],
  };

  return (
    <>
      {/* Title / description / canonical / OG / Twitter are rendered server-side in __root.tsx */}
      <Helmet>
        <meta property="article:published_time" content={date} />
        <meta property="article:modified_time" content={dateModified ?? date} />
        <meta property="article:section" content={category} />
        <meta property="article:author" content={resolvedAuthor} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <div className="min-h-screen bg-background">
      <Header />
      <MobileCTABar />
      <main className="pt-28 md:pt-32 pb-20 bg-editorial-paper">
        <article className="container mx-auto px-4">
          <SafeLink to={backHref} className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="w-4 h-4 mr-1.5" /> {backLabel}
          </SafeLink>

            <header className="relative mb-10 md:mb-14 border-b border-editorial-ink/15 pb-8 md:pb-10">
              <div className="absolute right-0 top-0 hidden lg:flex h-28 w-28 flex-col items-center justify-center border border-editorial-mustard bg-editorial-mustard/10 text-editorial-ink" aria-hidden="true">
                <FileText className="h-6 w-6 mb-2 text-editorial-terracotta" />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em]">Analyse</span>
                <span className="text-xs">Eligibly</span>
              </div>
              <div className="inline-flex items-center gap-2 border border-editorial-terracotta px-3 py-1 text-editorial-terracotta text-[0.7rem] font-semibold uppercase tracking-[0.12em] mb-6">
                <BookOpen className="w-3.5 h-3.5" /> {badge}
              </div>
              <h1 className="font-display max-w-[24ch] text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] mb-6 text-editorial-ink">
                {title}
              </h1>
              <p className="max-w-[78ch] text-lg md:text-xl text-editorial-ink/75 leading-relaxed mb-7">{subtitle}</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-editorial-ink/65 border-t border-editorial-ink/15 pt-4">
                <span className="font-semibold uppercase tracking-[0.08em]">{resolvedAuthor}</span>
                <span className="hidden sm:inline h-1 w-1 rounded-full bg-editorial-mustard" aria-hidden="true" />
                <time dateTime={date}>{new Date(date).toLocaleDateString(isEn ? "en-GB" : "fr-FR", { day: "numeric", month: "long", year: "numeric" })}</time>
                <span className="hidden sm:inline h-1 w-1 rounded-full bg-editorial-mustard" aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{readTime}</span>
              </div>
            </header>

            <div className="grid gap-10 lg:grid-cols-[minmax(12rem,0.28fr)_minmax(0,1fr)] xl:grid-cols-[minmax(14rem,0.3fr)_minmax(0,1fr)] lg:gap-14 xl:gap-20 mb-14">
              {sections.length > 0 && (
                <aside className="lg:order-first">
                  <nav aria-label={isEn ? "Article contents" : "Sommaire de l'article"} className="border-y border-editorial-ink/15 py-5 lg:sticky lg:top-28">
                    <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-editorial-terracotta">
                      {isEn ? "In this analysis" : "Dans cette analyse"}
                    </p>
                    <ol className="space-y-3">
                      {sections.map((section, index) => (
                        <li key={section.id} className="grid grid-cols-[1.6rem_1fr] gap-2 text-sm leading-snug">
                          <span className="font-display font-semibold text-editorial-mustard">{String(index + 1).padStart(2, "0")}</span>
                          <a href={`#${section.id}`} className="text-editorial-ink/70 transition-colors hover:text-editorial-terracotta">
                            {section.label.replace(/^\d+[.)]?\s*/, "")}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </aside>
              )}

              <div className="article-editorial prose prose-lg max-w-none min-w-0
                [&>p]:max-w-[78ch] [&>ul]:max-w-[78ch] [&>ol]:max-w-[78ch] [&>h2]:max-w-[78ch] [&>h3]:max-w-[78ch] [&>blockquote]:max-w-[78ch]
                [&_h2]:scroll-mt-28 [&_h2]:font-display [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:mt-16 [&_h2]:mb-5 [&_h2]:border-t [&_h2]:border-editorial-ink/15 [&_h2]:pt-8 [&_h2]:text-editorial-ink
                [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-9 [&_h3]:mb-3 [&_h3]:text-editorial-ink
                [&_p]:text-editorial-ink/85 [&_p]:leading-[1.75] [&_p]:my-5
                [&_ul]:my-7 [&_ul]:space-y-0 [&_ol]:my-7 [&_ol]:space-y-0
                [&_li]:relative [&_li]:border-b [&_li]:border-editorial-ink/10 [&_li]:py-3 [&_li]:pl-7 [&_li]:text-editorial-ink/85
                [&_li::marker]:font-semibold [&_li::marker]:text-editorial-terracotta
                [&_strong]:text-editorial-ink [&_strong]:font-semibold
                [&_a]:text-editorial-terracotta [&_a]:underline [&_a]:decoration-editorial-terracotta/35 [&_a]:underline-offset-4 hover:[&_a]:decoration-editorial-terracotta
                [&_blockquote]:relative [&_blockquote]:border-l-4 [&_blockquote]:border-editorial-terracotta [&_blockquote]:bg-editorial-mustard/10 [&_blockquote]:pl-7 [&_blockquote]:pr-6 [&_blockquote]:py-7 [&_blockquote]:font-display [&_blockquote]:text-xl md:[&_blockquote]:text-2xl [&_blockquote]:not-italic [&_blockquote]:text-editorial-ink [&_blockquote]:my-10">
                {structuredChildren}
              </div>
            </div>

            {sources.length > 0 && (
              <section className="border-l-4 border-editorial-mustard bg-editorial-mustard/10 p-6 md:p-8 mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Quote className="h-5 w-5 text-editorial-terracotta" />
                  <h2 className="font-display text-lg font-semibold text-editorial-ink">{sourcesLabel}</h2>
                </div>
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
                {ctaTitle}
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                {ctaBody}
              </p>
              <SafeLink to={ctaHref}>
                <Button variant="tengo" size="lg" className="h-12 px-7 group">
                  {ctaButton}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SafeLink>
              <p className="mt-6 text-sm text-muted-foreground">
                Voir en détail{" "}
                <SafeLink to="/produit" className="text-primary underline underline-offset-4">
                  comment fonctionne le moteur de détection de leads pour cabinets d'expertise comptable
                </SafeLink>{" "}
                ou{" "}
                <SafeLink to="/demo" className="text-primary underline underline-offset-4">
                  réserver une démo de 20 minutes avec 10 leads scorés sur votre zone
                </SafeLink>
                .
              </p>
            </section>


            {related.length > 0 && (
              <section>
                <h2 className="font-display text-xl font-semibold mb-4">{relatedLabel}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {related.map((r) => (
                    <SafeLink key={r.href} to={r.href} className="block rounded-xl border border-border p-5 hover:border-primary/40 transition-colors">
                      <div className="font-display text-base font-semibold leading-snug">{r.title}</div>
                      <div className="text-xs text-primary mt-2 inline-flex items-center">{readLabel} <ArrowRight className="w-3 h-3 ml-1" /></div>
                    </SafeLink>
                  ))}
                </div>
              </section>
            )}

            {/* Contextual product links — internal mesh */}
            <ContextualLinks currentPage={url} context="article" />
          </article>

          {/* Broader related articles widget — prominent internal mesh */}
          <ArticleRecommendations currentArticleUrl={url} currentCategory={category} />
        </main>
        <Footer />
      </div>
    </>
  );
};