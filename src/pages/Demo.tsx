import { Header } from "@/components/Header";
import { SafeLink } from "@/components/SafeLink";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
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
  Shield
} from "lucide-react";
import { useState } from "react";

const Demo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    sector: "",
    teamSize: "",
    challenges: "",
    newsletter: false
  });

  const testimonials = [
    {
      name: "Marie Dubois",
      company: "TechCorp Solutions",
      role: "Directrice Commerciale",
      comment: "Eligibly.ai a révolutionné notre approche des marchés publics. +300% d'opportunités qualifiées en 3 mois.",
      rating: 5,
      avatar: "MD"
    },
    {
      name: "Thomas Martin",
      company: "InnovBuild",
      role: "CEO",
      comment: "L'IA détecte exactement les marchés qui nous correspondent. Un gain de temps incroyable !",
      rating: 5,
      avatar: "TM"
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: "IA personnalisée",
      description: "Configuration sur mesure selon vos secteurs et critères"
    },
    {
      icon: Zap,
      title: "Démonstration live",
      description: "Voir Charly en action sur de vraies opportunités"
    },
    {
      icon: Target,
      title: "Cas d'usage concrets",
      description: "Exemples adaptés à votre secteur d'activité"
    },
    {
      icon: Award,
      title: "ROI prouvé",
      description: "Analyse du potentiel pour votre entreprise"
    }
  ];

  const demoFeatures = [
    "Configuration de votre profil IA en direct",
    "Démonstration du scoring intelligent",
    "Présentation des alertes temps réel",
    "Tour complet de la plateforme",
    "Analyse personnalisée de votre secteur",
    "Questions/réponses avec nos experts"
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Play className="w-4 h-4" />
              Démonstration personnalisée
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Découvrez votre{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
                potentiel IA
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Réservez votre démonstration personnalisée de 30 minutes et découvrez 
              comment notre IA peut transformer votre approche des marchés publics.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span>30 minutes chrono</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-500" />
                <span>Créneaux disponibles aujourd'hui</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-500" />
                <span>Sans engagement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Form */}
          <div>
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Réservez votre démonstration
                  </h2>
                  <p className="text-gray-600">
                    Complétez ce formulaire et nos experts vous contacteront sous 2h
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        Prénom *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="Votre prénom"
                        className="h-12 bg-white border-gray-200 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        Nom *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Votre nom"
                        className="h-12 bg-white border-gray-200 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email professionnel *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="votre.email@entreprise.com"
                      className="h-12 bg-white border-gray-200 focus:border-primary"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                        Entreprise *
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Nom de votre entreprise"
                        className="h-12 bg-white border-gray-200 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-sm font-medium text-gray-700">
                        Fonction *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('role', value)}>
                        <SelectTrigger className="h-12 bg-white border-gray-200">
                          <SelectValue placeholder="Sélectionnez votre fonction" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="commercial">Commercial / Business Developer</SelectItem>
                          <SelectItem value="direction">Direction / CEO</SelectItem>
                          <SelectItem value="marketing">Marketing / Communication</SelectItem>
                          <SelectItem value="consultant">Consultant / AMO</SelectItem>
                          <SelectItem value="acheteur">Acheteur public</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sector" className="text-sm font-medium text-gray-700">
                        Secteur d'activité
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('sector', value)}>
                        <SelectTrigger className="h-12 bg-white border-gray-200">
                          <SelectValue placeholder="Choisissez votre secteur" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tech">Technologies / Digital</SelectItem>
                          <SelectItem value="btp">BTP / Construction</SelectItem>
                          <SelectItem value="services">Services aux entreprises</SelectItem>
                          <SelectItem value="sante">Santé / Médical</SelectItem>
                          <SelectItem value="energie">Énergie / Environnement</SelectItem>
                          <SelectItem value="transport">Transport / Logistique</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teamSize" className="text-sm font-medium text-gray-700">
                        Taille d'équipe
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('teamSize', value)}>
                        <SelectTrigger className="h-12 bg-white border-gray-200">
                          <SelectValue placeholder="Taille de votre équipe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 personnes</SelectItem>
                          <SelectItem value="11-50">11-50 personnes</SelectItem>
                          <SelectItem value="51-200">51-200 personnes</SelectItem>
                          <SelectItem value="200+">200+ personnes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="challenges" className="text-sm font-medium text-gray-700">
                      Vos défis actuels (optionnel)
                    </Label>
                    <Textarea
                      id="challenges"
                      value={formData.challenges}
                      onChange={(e) => handleInputChange('challenges', e.target.value)}
                      placeholder="Décrivez vos principaux défis en veille commerciale..."
                      className="bg-white border-gray-200 focus:border-primary resize-none"
                      rows={3}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                    />
                    <Label htmlFor="newsletter" className="text-sm text-gray-600 cursor-pointer">
                      Recevoir nos conseils d'experts par email (optionnel)
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-cta hover:shadow-glow text-white text-base group transition-all duration-300"
                  >
                    Réserver ma démonstration
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500">
                    En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe. 
                    Vos données sont protégées selon notre{" "}
                    <SafeLink to="/confidentialite" className="text-primary hover:underline">
                      politique de confidentialité
                    </SafeLink>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Benefits & Social Proof */}
          <div className="space-y-8">
            {/* What you'll discover */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Ce que vous découvrirez
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo features */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Au programme de votre démo
                </h3>
                <div className="space-y-3">
                  {demoFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;