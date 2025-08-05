import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { CTAFooter } from "@/components/CTAFooter";
import { ProcessDemo } from "@/components/ProcessDemo";
import { MacBookSimulation } from "@/components/MacBookSimulation";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductFeatures } from "@/components/product/ProductFeatures";
import { ProductSolutions } from "@/components/product/ProductSolutions";
import { ProductBenefits } from "@/components/product/ProductBenefits";
import { useLanguage } from "@/contexts/LanguageContext";
import { updateMetaDescription, updatePageTitle, updateCanonicalUrl, SEO_CONTENT } from "@/utils/seo";

const Produit = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    updatePageTitle(SEO_CONTENT.produit.title);
    updateMetaDescription(SEO_CONTENT.produit.description);
    updateCanonicalUrl(SEO_CONTENT.produit.url);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
      <Header />
      
      {/* Hero Section */}
      <ProductHero />

      {/* Interactive Demo Section */}
      <ProcessDemo />

      {/* MacBook Demo Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-100 to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Démonstration</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Processus automatisé{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
                en action
              </span>
            </h2>
          </div>
          
          <MacBookSimulation />
        </div>
      </section>

      {/* Features Section */}
      <ProductFeatures />

      {/* Solutions Section */}
      <ProductSolutions />

      {/* Benefits Section */}
      <ProductBenefits />

      <CTAFooter 
        title={t('cta.title')}
        subtitle={t('cta.subtitle')}
        primaryButtonText={t('cta.primary')}
        secondaryButtonText={t('cta.secondary')}
      />
    </div>
  );
};

export default Produit;