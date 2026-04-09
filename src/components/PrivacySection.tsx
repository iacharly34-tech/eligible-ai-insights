import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Database, UserCheck, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SafeLink } from "@/components/SafeLink";
export const PrivacySection = () => {
  const { t } = useLanguage();
  
  const privacyFeatures = [
    {
      icon: Shield,
      title: "Données sécurisées",
      description: "Chiffrement de bout en bout et hébergement en France",
      badge: "RGPD"
    },
    {
      icon: Eye,
      title: "Transparence totale",
      description: "Vous savez exactement quelles données sont utilisées",
      badge: "Clair"
    },
    {
      icon: Lock,
      title: "Jamais revendues",
      description: "Vos données restent confidentielles, aucune revente à des tiers",
      badge: "Garanti"
    },
    {
      icon: Database,
      title: "Usage ciblé",
      description: "Utilisées uniquement pour améliorer la pertinence des opportunités",
      badge: "Précis"
    },
    {
      icon: UserCheck,
      title: "Contrôle utilisateur",
      description: "Modifiez ou supprimez vos données à tout moment",
      badge: "Autonomie"
    },
    {
      icon: FileText,
      title: "Conformité RGPD",
      description: "Respect strict de la réglementation européenne",
      badge: "Certifié"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 space-y-4">
          <Badge variant="outline" className="text-primary border-primary">
            Confidentialité & RGPD
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Vos données en{" "}
            <span className="text-primary">sécurité</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Nous accordons la plus haute importance à la protection de vos données personnelles. 
            Découvrez notre engagement pour votre confidentialité et notre conformité RGPD.
          </p>
        </div>

        {/* Main Privacy Statement */}
        <div className="bg-gradient-subtle rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Shield className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">Notre engagement RGPD</h3>
            <div className="text-sm sm:text-base text-muted-foreground space-y-3 text-left max-w-2xl mx-auto">
              <p>
                <strong>Vos données sont :</strong>
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Sécurisées</strong> : Chiffrement AES-256 et hébergement en France dans des datacenters certifiés ISO 27001</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Non revendues</strong> : Aucune commercialisation à des tiers, vos informations restent confidentielles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Utilisées uniquement</strong> pour améliorer la pertinence des opportunités qui vous sont proposées</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Sous votre contrôle</strong> : Accès, modification et suppression de vos données à tout moment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Privacy Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {privacyFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 border bg-card"
            >
              <CardHeader className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legal Links */}
        <div className="text-center space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold">Documents légaux</h3>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center text-sm">
            <SafeLink 
              to="/confidentialite" 
              className="text-primary hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary/80"
            >
              Politique de confidentialité
            </SafeLink>
            <SafeLink 
              to="/cgu" 
              className="text-primary hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary/80"
            >
              Conditions générales d'utilisation
            </SafeLink>
            <SafeLink 
              to="/mentions-legales" 
              className="text-primary hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary/80"
            >
              Mentions légales
            </SafeLink>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
            Pour toute question relative à vos données personnelles, contactez notre DPO à{" "}
            <a href="mailto:dpo@eligibly.ai" className="text-primary hover:underline">
              dpo@eligibly.ai
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};