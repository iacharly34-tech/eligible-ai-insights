import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SkipNavigation } from "@/components/SkipNavigation";
import { WCAGAccessibilityComponent } from "@/components/WCAGAccessibilityComponent";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Produit from "./pages/Produit";
import Solutions from "./pages/Solutions";
import Tarifs from "./pages/Tarifs";
import Ressources from "./pages/Ressources";
import APropos from "./pages/APropos";
import Connexion from "./pages/Connexion";
import Demo from "./pages/Demo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <WCAGAccessibilityComponent />
        <SkipNavigation />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/produit" element={<Produit />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/ressources" element={<Ressources />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/inscription" element={<Demo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
