import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { CTAFooter } from "@/components/CTAFooter";
import { DemoPersonas } from "@/components/DemoPersonas";
import { ProductHero } from "@/components/product/ProductHero";

import { ProductFeatures } from "@/components/product/ProductFeatures";

import { ProductBenefits } from "@/components/product/ProductBenefits";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { MobileCTABar } from "@/components/MobileCTABar";

const Produit = () => {
  const { t } = useLanguage();
  

  return (
    <>
      <SEOHead />
      <StructuredData page="product" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
        <Header />
        <MobileCTABar />
      {/* Hero Section */}
      <ProductHero />

      {/* Demo Personas Section */}
      <DemoPersonas />
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
  </>
  );
};

export default Produit;