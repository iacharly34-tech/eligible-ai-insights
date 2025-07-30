import { Button } from "@/components/ui/button";
import { Brain, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Produit", href: "#product" },
    { name: "Solutions", href: "#solutions" },
    { name: "Tarifs", href: "#pricing" },
    { name: "Ressources", href: "#resources" },
    { name: "À propos", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-foreground">
              eligible.ai
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 px-3 py-2">
              Se connecter
            </button>
            <Button 
              size="sm" 
              className="bg-gradient-cta hover:shadow-glow text-white text-sm font-medium px-6 py-2 h-9 transition-all duration-300 hover:scale-105"
            >
              Démo gratuite
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border/50",
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}>
          <nav className="py-6 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-gray-50 transition-colors duration-200 px-4 py-3 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 px-4 space-y-3 border-t border-border/30 mt-4">
              <button className="w-full text-left text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 px-3 py-2">
                Se connecter
              </button>
              <Button 
                className="w-full bg-gradient-cta hover:shadow-glow text-white text-sm font-medium h-10 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Démo gratuite
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};