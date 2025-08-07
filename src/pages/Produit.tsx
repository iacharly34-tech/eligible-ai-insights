import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { CTAFooter } from "@/components/CTAFooter";
import { DemoPersonas } from "@/components/DemoPersonas";
import { ProductHero } from "@/components/product/ProductHero";
import { ProcessDemo } from "@/components/ProcessDemo";
import { ProductFeatures } from "@/components/product/ProductFeatures";

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

      {/* Demo Personas Section */}
      <DemoPersonas />

      {/* Full Process Demo Section */}
      <section id="process-demo">
        <ProcessDemo />
      </section>

      {/* Features Section */}
      <ProductFeatures />


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