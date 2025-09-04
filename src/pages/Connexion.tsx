import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Brain,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { SEOHead } from "@/components/SEOHead";

const Connexion = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const benefits = [
    {
      icon: CheckCircle,
      title: "Accès immédiat à votre dashboard",
      description: "Retrouvez vos alertes et opportunités en temps réel"
    },
    {
      icon: Shield,
      title: "Connexion sécurisée",
      description: "Vos données sont protégées par un chiffrement de niveau bancaire"
    },
    {
      icon: Brain,
      title: "IA personnalisée",
      description: "Votre assistant Charly vous attend avec vos préférences sauvegardées"
    }
  ];

  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
        <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Login Form */}
            <div className="max-w-md mx-auto w-full">
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                      Connexion à votre espace
                    </h1>
                    <p className="text-gray-600">
                      Accédez à votre dashboard Eligibly.ai
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Adresse email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="votre.email@entreprise.com"
                          className="pl-10 h-12 bg-white border-gray-200 focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Mot de passe
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="pl-10 pr-10 h-12 bg-white border-gray-200 focus:border-primary"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <Label 
                          htmlFor="remember" 
                          className="text-sm text-gray-600 cursor-pointer"
                        >
                          Se souvenir de moi
                        </Label>
                      </div>
                      <button
                        type="button"
                        className="text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        Mot de passe oublié ?
                      </button>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-gradient-cta hover:shadow-glow text-white text-base group transition-all duration-300"
                    >
                      Se connecter
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>

                  <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                    <p className="text-gray-600 text-sm">
                      Pas encore de compte ?{" "}
                      <button className="text-primary hover:text-primary/80 font-medium transition-colors">
                        Créer un compte
                      </button>
                    </p>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-xs text-gray-500">
                      En vous connectant, vous acceptez nos{" "}
                      <button className="text-primary hover:underline">
                        conditions d'utilisation
                      </button>{" "}
                      et notre{" "}
                      <button className="text-primary hover:underline">
                        politique de confidentialité
                      </button>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Bienvenue dans votre{" "}
                  <span className="bg-gradient-highlight bg-clip-text text-transparent">
                    espace IA
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Accédez à votre tableau de bord personnalisé et découvrez 
                  les opportunités détectées par votre assistant Charly.
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-green-800">
                    Sécurité renforcée
                  </h3>
                </div>
                <p className="text-green-700 text-sm">
                  Votre compte est protégé par un chiffrement AES-256 et une 
                  authentification multi-facteurs optionnelle pour une sécurité maximale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Découvrez d'abord notre plateforme
            </h2>
            <p className="text-gray-600 mb-8">
              Testez toutes les fonctionnalités pendant 7 jours, sans engagement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 h-auto"
              >
                Voir la démonstration
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-cta hover:shadow-glow text-white px-8 py-4 h-auto group"
              >
                Essai 7 jours
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
  );
};

export default Connexion;