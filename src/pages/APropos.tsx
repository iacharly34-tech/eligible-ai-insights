import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAFooter } from "@/components/CTAFooter";
import { 
  Heart,
  Shield,
  Award,
  Users,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle,
  Target,
  Lightbulb,
  Globe,
  Lock,
  FileCheck,
  Clock
} from "lucide-react";

const APropos = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous repoussons constamment les limites de l'IA pour offrir les solutions les plus avancées du marché."
    },
    {
      icon: Shield,
      title: "Transparence",
      description: "Nos algorithmes et processus sont transparents. Vous comprenez toujours pourquoi notre IA prend ses décisions."
    },
    {
      icon: Heart,
      title: "Excellence client",
      description: "Votre succès est notre priorité. Nous nous engageons à vous accompagner à chaque étape de votre croissance."
    },
    {
      icon: Globe,
      title: "Impact positif",
      description: "Nous croyons que l'IA peut rendre les marchés publics plus efficaces et accessibles pour tous."
    }
  ];

  const team = [
    {
      name: "Marie Dubois",
      role: "CEO & Co-fondatrice",
      description: "15 ans d'expérience dans les marchés publics et l'IA. Ex-directrice commerciale chez TechCorp.",
      avatar: "MD"
    },
    {
      name: "Thomas Martin",
      role: "CTO & Co-fondateur", 
      description: "Expert en machine learning et data science. Ancien lead engineer chez Google AI.",
      avatar: "TM"
    },
    {
      name: "Sarah Chen",
      role: "Head of Product",
      description: "Spécialiste UX/UI avec 10 ans d'expérience dans la conception de produits SaaS B2B.",
      avatar: "SC"
    },
    {
      name: "Paul Rodriguez",
      role: "Head of Sales",
      description: "Expert en développement commercial dans le secteur public. 12 ans chez Oracle.",
      avatar: "PR"
    }
  ];

  const stats = [
    { number: "2020", label: "Année de création" },
    { number: "2000+", label: "Clients satisfaits" },
    { number: "15M€", label: "Marchés remportés grâce à notre IA" },
    { number: "98%", label: "Taux de satisfaction client" }
  ];

  const certifications = [
    {
      icon: Shield,
      title: "RGPD Conforme",
      description: "Respect strict de la réglementation européenne sur la protection des données"
    },
    {
      icon: Lock,
      title: "ISO 27001",
      description: "Certification sécurité informatique pour la protection de vos données"
    },
    {
      icon: FileCheck,
      title: "Hébergement France",
      description: "Données stockées exclusivement en France, chez des hébergeurs certifiés"
    },
    {
      icon: Award,
      title: "SOC 2 Type II",
      description: "Audit indépendant de nos contrôles de sécurité et disponibilité"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
              À propos d'Eligibly.ai
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Notre mission :{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
                démocratiser l'IA
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Nous développons les outils d'intelligence artificielle les plus avancés 
              pour révolutionner la façon dont les entreprises appréhendent les marchés publics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Notre{" "}
                <span className="bg-gradient-highlight bg-clip-text text-transparent">vision</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Chez Eligibly.ai, nous croyons que l'intelligence artificielle peut transformer 
                radicalement la façon dont les entreprises découvrent et remportent des marchés publics.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Notre objectif est de rendre cette technologie accessible à toutes les entreprises, 
                des startups aux grands groupes, pour créer un écosystème plus équitable et efficient.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">Simplifier l'accès aux marchés publics</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">Optimiser les chances de succès</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">Créer de la valeur pour tous les acteurs</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-12 text-white text-center">
                <Target className="w-20 h-20 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Notre impact</h3>
                <p className="text-blue-100 text-lg">
                  Plus de 15 millions d'euros de marchés remportés grâce à notre IA, 
                  par des entreprises de toutes tailles à travers la France.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">valeurs</span>
            </h2>
             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Les principes qui guident chacune de nos décisions et innovations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">équipe</span>
            </h2>
             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des experts passionnés par l'IA et les marchés publics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold group-hover:scale-110 transition-transform">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sécurité et{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">conformité</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vos données sont notre priorité absolue. Nous respectons les plus hauts standards de sécurité.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{cert.title}</h3>
                  <p className="text-foreground text-sm leading-relaxed">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTAFooter 
        title="Rencontrons-nous"
        subtitle="Une question ? Un projet ? Notre équipe est là pour vous accompagner."
        primaryButtonText="Planifier un rendez-vous"
        secondaryButtonText="Nous contacter"
      />
    </div>
  );
};

export default APropos;