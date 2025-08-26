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
        <section className="relative pt-20 pb-8 lg:pt-32 lg:pb-12 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            {/* Badge */}
            <Badge variant="outline" className="inline-flex items-center gap-2 mb-4 lg:mb-6 px-3 py-2 bg-primary/10 border-primary/20 text-primary text-xs sm:text-sm">
              <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
              Démonstration personnalisée
            </Badge>
            
            {/* Titre Hero */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight px-2">
              Découvrez votre{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                potentiel IA
              </span>
              {" "}avec Charly
            </h1>
            
            {/* Sous-titre */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Réservez une démonstration personnalisée de 30 minutes et voyez comment Charly peut transformer votre approche des marchés publics.
            </p>
            
            {/* CTA immédiat */}
            <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-4 lg:mb-6 px-4">
              <Button 
                variant="default"
                size="lg"
                className="w-full sm:w-auto sm:min-w-[280px] h-12 text-sm sm:text-base"
                style={{ backgroundColor: '#5B36F5' }}
                onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🚀 Réserver ma démonstration
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="w-full sm:w-auto sm:min-w-[250px] h-12 border-2 text-sm sm:text-base"
                style={{ borderColor: '#5B36F5', color: '#5B36F5' }}
                onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Découvrir Charly IA
              </Button>
            </div>
            
            {/* Détails rapides - juste sous les CTA */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground px-4">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg">⏱️</span>
                <span>30 minutes personnalisées</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg">📅</span>
                <span>Créneaux disponibles</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg">🔒</span>
                <span>Sans engagement</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section principale - espacement réduit */}
        <div className="container mx-auto max-w-7xl px-4 pb-16 lg:pb-20 pt-4 lg:pt-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">{/* espace entre Hero et contenu réduit */}
            
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
                          🚀 Réserver ma démonstration
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>

                        {/* Réassurance sous le formulaire */}
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">
                            ✅ Démonstration personnalisée, sans engagement. Réponse sous 24h.
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
                      <h3 className="text-xl font-bold mb-2">✅ C'est noté !</h3>
                      <p className="text-muted-foreground">
                        Notre équipe revient vers vous sous 24h pour organiser votre démonstration personnalisée.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Colonne droite - Réassurance & Bénéfices */}
            <div className="space-y-6 lg:space-y-8 mt-8 lg:mt-0">
              
              {/* Témoignage client */}
              <Card className="p-4 lg:p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/10">
                <CardContent className="p-0">
                  <div className="bg-white/50 p-3 lg:p-4 rounded-lg border border-primary/10">
                    <MessageSquare className="w-4 h-4 lg:w-5 lg:h-5 text-primary mb-2" />
                    <blockquote className="text-xs lg:text-sm italic mb-2">
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
                <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">
                  Pourquoi choisir Charly ?
                </h3>
                <div className="space-y-3 lg:space-y-4">
                  {productBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 lg:gap-4">
                      <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center flex-shrink-0`}>
                        <benefit.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-sm lg:text-base">{benefit.title}</h4>
                        <p className="text-xs lg:text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA répété */}
              <Card className="p-4 lg:p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-0 text-center">
                  <h4 className="font-bold mb-2 text-sm lg:text-base">Prêt à découvrir Charly ?</h4>
                  <p className="text-xs lg:text-sm text-muted-foreground mb-3 lg:mb-4">
                    Rejoignez les entreprises qui optimisent leur prospection avec l'IA.
                  </p>
                  <Button 
                    variant="default"
                    onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full text-sm lg:text-base"
                    style={{ backgroundColor: '#5B36F5' }}
                  >
                    🚀 Réserver ma démonstration
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <section className="bg-gradient-to-r from-primary to-accent text-white py-12 lg:py-16">
          <div className="container mx-auto max-w-4xl text-center px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 lg:mb-4">
              Transformez votre prospection dès aujourd'hui
            </h2>
            <p className="text-lg sm:text-xl opacity-90 mb-6 lg:mb-8 px-4">
              Découvrez comment Charly peut vous faire gagner du temps et augmenter vos chances de succès.
            </p>
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto text-sm sm:text-base"
            >
              🚀 Réserver ma démonstration
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Demo;