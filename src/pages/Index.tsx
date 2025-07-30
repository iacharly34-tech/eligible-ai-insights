import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { ProcessAnimation } from "@/components/ProcessAnimation";
import { ProductSection } from "@/components/ProductSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { Features } from "@/components/Features";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { Integrations } from "@/components/Integrations";
import { CTASection } from "@/components/CTASection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustSection />
      <ProcessAnimation />
      <ProductSection />
      <SolutionsSection />
      <Features />
      <TestimonialsSection />
      <PricingSection />
      <Integrations />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
