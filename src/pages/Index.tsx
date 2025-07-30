import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { Features } from "@/components/Features";
import { Integrations } from "@/components/Integrations";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustSection />
      <Features />
      <Integrations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
