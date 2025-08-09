import { Button } from "@/components/ui/button";
import { SafeLink } from "./SafeLink";
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
  primaryButtonText = "Essai 7 jours",
  secondaryButtonText = "Démonstration personnalisée"
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
            <SafeLink to="/demo">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-4 h-auto font-semibold"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                {primaryButtonText}
              </Button>
            </SafeLink>
            {secondaryButtonText && (
              <SafeLink to="/connexion">
                <button 
                  className="flex items-center justify-center gap-2 rounded-xl text-lg font-semibold px-10 py-4"
                  style={{ 
                    backgroundColor: '#ffffff',
                    color: '#8b5cf6',
                    border: '2px solid #ffffff',
                    opacity: '1'
                  }}
                >
                  <Phone className="w-5 h-5" style={{ color: '#8b5cf6' }} />
                  <span style={{ color: '#8b5cf6' }}>{secondaryButtonText}</span>
                </button>
              </SafeLink>
            )}
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
                <li><SafeLink to="/produit" className="hover:text-white transition-colors">Fonctionnalités</SafeLink></li>
                <li><SafeLink to="/tarifs" className="hover:text-white transition-colors">Tarifs</SafeLink></li>
                <li><SafeLink to="/demo" className="hover:text-white transition-colors">Démonstration</SafeLink></li>
                <li><SafeLink to="/solutions" className="hover:text-white transition-colors">Solutions</SafeLink></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-gray-400">
                <li><SafeLink to="/a-propos" className="hover:text-white transition-colors">À propos</SafeLink></li>
                <li><SafeLink to="/ressources" className="hover:text-white transition-colors">Blog</SafeLink></li>
                <li><SafeLink to="/ressources" className="hover:text-white transition-colors">Ressources</SafeLink></li>
                <li><SafeLink to="/connexion" className="hover:text-white transition-colors">Connexion</SafeLink></li>
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
              © 2025 Eligibly.ai. Tous droits réservés.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <SafeLink to="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </SafeLink>
              <SafeLink to="/confidentialite" className="text-gray-400 hover:text-white text-sm transition-colors">
                Confidentialité
              </SafeLink>
              <SafeLink to="/cgu" className="text-gray-400 hover:text-white text-sm transition-colors">
                CGU
              </SafeLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};