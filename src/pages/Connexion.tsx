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
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { SEOHead } from "@/components/SEOHead";

const Connexion = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setPwdMode, setSetPwdMode] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isInvite = /type=(invite|recovery)/.test(window.location.hash);
    if (isInvite) setSetPwdMode(true);
    supabase.auth.getSession().then(({ data }) => {
      if (data.session && !isInvite) navigate({ to: "/espace" });
    });
  }, [navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true); setMsg(null);
    if (setPwdMode) {
      const { error } = await supabase.auth.updateUser({ password });
      setBusy(false);
      if (error) return setMsg(error.message);
      return navigate({ to: "/espace" });
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) return setMsg("Identifiants incorrects.");
    navigate({ to: "/espace" });
  };

  const onForgot = async () => {
    if (!email) return setMsg("Saisissez votre email puis cliquez à nouveau.");
    await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/connexion` });
    setMsg("Si un compte existe, un lien de réinitialisation vient d'être envoyé.");
  };

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
      description: "Votre moteur Eligibly vous attend avec vos préférences sauvegardées"
    }
  ];

  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background">
        <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Login Form */}
            <div className="max-w-md mx-auto w-full">
              <Card className="border-0 bg-card backdrop-blur-xs shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-foreground mb-2">
                      Connexion à votre espace
                    </h1>
                    <p className="text-muted-foreground">
                      Accédez à votre dashboard Eligibly.ai
                    </p>
                  </div>

                  <form className="space-y-6" onSubmit={onSubmit}>
                    {setPwdMode && <p className="text-sm text-foreground">Définissez votre mot de passe pour activer votre accès.</p>}
                    {!setPwdMode && <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Adresse email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="votre.email@entreprise.com"
                          className="pl-10 h-12 bg-card border-border focus:border-primary"
                          required
                        />
                      </div>
                    </div>}

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-medium text-foreground">
                        Mot de passe
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="pl-10 pr-10 h-12 bg-card border-border focus:border-primary"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-muted-foreground"
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
                          className="text-sm text-muted-foreground cursor-pointer"
                        >
                          Se souvenir de moi
                        </Label>
                      </div>
                      <button
                        type="button"
                        onClick={onForgot}
                        className="text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        Mot de passe oublié ?
                      </button>
                    </div>

                    {msg && <p role="status" className="text-sm text-muted-foreground">{msg}</p>}
                    <Button 
                      type="submit" 
                      disabled={busy}
                      className="w-full h-12 bg-gradient-cta hover:shadow-glow text-white text-base group transition-all duration-300"
                    >
                      {setPwdMode ? "Activer mon accès" : "Se connecter"}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>

                  <div className="mt-8 pt-6 border-t border-border text-center">
                    <p className="text-muted-foreground text-sm">
                      Accès réservé aux cabinets clients.{" "}
                      <a href="/demo" className="text-primary hover:text-primary/80 font-medium transition-colors">
                        Demander un pilote
                      </a>
                    </p>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-xs text-muted-foreground">
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
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Accédez à votre tableau de bord personnalisé et découvrez 
                  les leads détectés par votre moteur Eligibly.
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-success/10 to-success/10 rounded-2xl p-6 border border-success/20">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-success" />
                  <h3 className="text-lg font-bold text-success">
                    Sécurité renforcée
                  </h3>
                </div>
                <p className="text-success text-sm">
                  Votre compte est protégé par un chiffrement AES-256 et une 
                  authentification multi-facteurs optionnelle pour une sécurité maximale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-20 px-4 bg-[hsl(var(--hero-dark))]">
        <div className="container mx-auto text-center">
          <div className="bg-primary/5 rounded-3xl p-12 border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Découvrez d'abord notre plateforme
            </h2>
            <p className="text-muted-foreground mb-8">
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