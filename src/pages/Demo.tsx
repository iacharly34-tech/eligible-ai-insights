import { Header } from "@/components/Header";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { SafeLink } from "@/components/SafeLink";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Brain,
  Zap,
  Target,
  Award,
  Play,
  Shield,
  TrendingUp,
  Rocket,
  MessageSquare,
  Check
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SecureFormWrapper } from "@/components/SecureFormWrapper";
import { useToast } from "@/hooks/use-toast";

const Demo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation d'envoi
    setIsSubmitted(true);
    toast({
      title: "✅ Demande envoyée !",
      description: "Notre équipe revient vers vous sous 24h avec votre démo personnalisée.",
      duration: 5000,
    });
  };

  // Témoignages clients
  const testimonials = [
    {
      quote: "Grâce à Charly, nous avons réduit de 70% le temps de veille sur les AO.",
      author: "Responsable achats PME IT",
      company: "TechStart Solutions"
    }
  ];

  // Logos partenaires (simulation)
  const partnerLogos = [
    { name: "HubSpot", src: "/assets/hubspot-logo-official.png" },
    { name: "Salesforce", src: "/assets/salesforce-logo-official.png" },
    { name: "Teams", src: "/assets/teams-logo-official.png" }
  ];

  // Bénéfices produits
  const productBenefits = [
    {
      icon: Clock,
      title: "Gagnez du temps",
      description: "Ne perdez plus des heures à trier les AO.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Augmentez vos chances",
      description: "Charly filtre les faux espoirs et repère les vraies opportunités.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: TrendingUp,
      title: "Anticipez",
      description: "Accédez aux signaux faibles avant vos concurrents.",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <>
      <SEOHead />
      <StructuredData page="demo" />
      <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-primary/5">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            {/* Badge */}
            <Badge variant="outline" className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border-primary/20 text-primary">
              <Rocket className="w-4 h-4" />
              Démo personnalisée gratuite
            </Badge>
            
            {/* Titre Hero */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Découvrez votre{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                potentiel IA
              </span>
              {" "}avec Charly
            </h1>
            
            {/* Sous-titre */}
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Réservez une démonstration personnalisée de 30 minutes et voyez comment Charly peut transformer votre approche des marchés publics.
            </p>
            
            {/* CTA immédiat */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button 
                variant="default"
                size="lg"
                className="min-w-[280px] h-12"
                style={{ backgroundColor: '#5B36F5' }}
                onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🚀 Réserver ma démo personnalisée
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="min-w-[250px] h-12 border-2"
                style={{ borderColor: '#5B36F5', color: '#5B36F5' }}
                onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                En savoir plus sur la démo
              </Button>
            </div>
            
            {/* Détails rapides - juste sous les CTA */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-lg">⏱️</span>
                <span>30 minutes personnalisées</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📅</span>
                <span>Créneaux disponibles</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🔒</span>
                <span>Sans engagement</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section principale - espacement réduit */}
        <div className="container mx-auto max-w-7xl px-4 pb-20 pt-8">
          <div className="grid lg:grid-cols-2 gap-8">{/* espace entre Hero et contenu réduit */}
            
            {/* Colonne gauche - Formulaire */}
            <div>
              <Card 
                id="demo-form" 
                className="border-0 bg-white shadow-2xl"
              >
                <CardContent className="p-8">
                  {!isSubmitted ? (
                    <>
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">
                          Réservez votre démonstration
                        </h2>
                        <p className="text-muted-foreground">
                          Découvrez comment Charly peut transformer votre prospection commerciale.
                        </p>
                      </div>

                      <SecureFormWrapper onSubmit={handleSubmit} className="space-y-6">
                        {/* Nom complet */}
                        <div className="space-y-2">
                          <Label htmlFor="fullName" className="text-sm font-medium">
                            Nom complet *
                          </Label>
                          <Input
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            placeholder="Jean Dupont"
                            className="h-12"
                            required
                          />
                        </div>

                        {/* Email professionnel */}
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium">
                            Email professionnel *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="julie@startup.com"
                            className="h-12"
                            required
                          />
                          <p className="text-xs text-muted-foreground">
                            ex : julie@startup.com
                          </p>
                        </div>

                        {/* Entreprise */}
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-sm font-medium">
                            Entreprise *
                          </Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            placeholder="Ma Société SARL"
                            className="h-12"
                            required
                          />
                        </div>

                        {/* Message / besoin */}
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-sm font-medium">
                            Message / besoin spécifique
                          </Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            placeholder="Décrivez brièvement vos besoins ou défis actuels..."
                            className="resize-none"
                            rows={3}
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full h-12"
                          style={{ backgroundColor: '#5B36F5' }}
                        >
                          🚀 Réserver ma démo personnalisée
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>

                        {/* Réassurance sous le formulaire */}
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">
                            ✅ Démo gratuite, sans engagement. Réponse sous 24h.
                          </p>
                        </div>
                      </SecureFormWrapper>
                    </>
                  ) : (
                    /* Message post-envoi */
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">✅ Merci !</h3>
                      <p className="text-muted-foreground">
                        Notre équipe revient vers vous sous 24h avec votre démo personnalisée.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Colonne droite - Réassurance & Bénéfices */}
            <div className="space-y-8">
              
              {/* Bloc de réassurance */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/10">
                <CardContent className="p-0">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    Ils nous font confiance
                  </h3>
                  
                  {/* Logos partenaires */}
                  <div className="flex flex-wrap justify-center gap-6 mb-6 opacity-60">
                    {partnerLogos.map((logo) => (
                      <img 
                        key={logo.name}
                        src={logo.src} 
                        alt={logo.name}
                        className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    ))}
                  </div>
                  
                  {/* Témoignage */}
                  <div className="bg-white/50 p-4 rounded-lg border border-primary/10">
                    <MessageSquare className="w-5 h-5 text-primary mb-2" />
                    <blockquote className="text-sm italic mb-2">
                      "{testimonials[0].quote}"
                    </blockquote>
                    <cite className="text-xs text-muted-foreground">
                      — {testimonials[0].author}, {testimonials[0].company}
                    </cite>
                  </div>
                </CardContent>
              </Card>

              {/* Bénéfices produits */}
              <div>
                <h3 className="text-xl font-bold mb-6">
                  Pourquoi choisir Charly ?
                </h3>
                <div className="space-y-4">
                  {productBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center flex-shrink-0`}>
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA répété */}
              <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-0 text-center">
                  <h4 className="font-bold mb-2">Prêt à découvrir Charly ?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Rejoignez les entreprises qui optimisent leur prospection avec l'IA.
                  </p>
                  <Button 
                    variant="default"
                    onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full"
                    style={{ backgroundColor: '#5B36F5' }}
                  >
                    🚀 Réserver ma démo personnalisée
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
          <div className="container mx-auto max-w-4xl text-center px-4">
            <h2 className="text-3xl font-bold mb-4">
              Transformez votre prospection dès aujourd'hui
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Découvrez comment Charly peut vous faire gagner du temps et augmenter vos chances de succès.
            </p>
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🚀 Réserver ma démo personnalisée
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Demo;