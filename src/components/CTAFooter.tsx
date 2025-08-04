import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin, Target } from "lucide-react";

interface CTAFooterProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export const CTAFooter = ({ 
  title = "Prêt à transformer votre veille commerciale ?",
  subtitle = "Rejoignez les 500+ entreprises qui font confiance à notre IA pour identifier les meilleures opportunités de marchés publics.",
  primaryButtonText = "Démarrer l'essai gratuit",
  secondaryButtonText = "Parler à un expert"
}: CTAFooterProps) => {
  return (
    <>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title.includes('veille commerciale') ? (
              <>
                Prêt à transformer votre{" "}
                <span className="text-yellow-300">veille commerciale</span> ?
              </>
            ) : (
              title
            )}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-4 h-auto font-semibold"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              {primaryButtonText}
            </Button>
            <Button 
              size="lg" 
              className="text-lg px-10 py-4 h-auto bg-white text-purple-600 hover:bg-gray-100 border-2 border-white font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              {secondaryButtonText}
            </Button>
          </div>
          
          <p className="text-white/70 mt-6 text-sm">
            ✓ Sans engagement • ✓ Setup en 5 minutes • ✓ Support dédié
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Eligibly.ai</span>
              </div>
              <p className="text-gray-400 mb-6">
                L'intelligence artificielle au service de votre développement commercial.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Produit</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/produit" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="/tarifs" className="hover:text-white transition-colors">Tarifs</a></li>
                <li><a href="/demo" className="hover:text-white transition-colors">Démonstration</a></li>
                <li><a href="/solutions" className="hover:text-white transition-colors">Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/a-propos" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="/ressources" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/ressources" className="hover:text-white transition-colors">Ressources</a></li>
                <li><a href="/connexion" className="hover:text-white transition-colors">Connexion</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  contact@eligibly.ai
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +33 1 23 45 67 89
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Paris, France
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Eligibly.ai. Tous droits réservés.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/ressources#legal" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </a>
              <a href="/ressources#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Confidentialité
              </a>
              <a href="/ressources#terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                CGU
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};