import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTAFooter } from "@/components/CTAFooter";
import { DemoPersonas } from "@/components/DemoPersonas";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductFeatures } from "@/components/product/ProductFeatures";
import { ProductBenefits } from "@/components/product/ProductBenefits";
import { ProductModules } from "@/components/product/ProductModules";
import { ProductResponseSection } from "@/components/product/ProductResponseSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { ContextualLinks } from "@/components/ContextualLinks";
import { MobileCTABar } from "@/components/MobileCTABar";

const Produit = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead />
      <StructuredData page="product" />
      <div className="min-h-screen bg-background">
        <Header />
        <MobileCTABar />

        <main>
          <ProductHero />
          <DemoPersonas />
          <ProductModules />
          <ProductFeatures />
          <ProductResponseSection />
          <ProductBenefits />

          <div className="container mx-auto px-4 py-16">
            <ContextualLinks currentPage="/produit" context="product" />
          </div>

          <CTAFooter
            title={t('cta.title')}
            subtitle={t('cta.subtitle')}
            primaryButtonText={t('cta.primary')}
            secondaryButtonText={t('cta.secondary')}
          />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Produit;
