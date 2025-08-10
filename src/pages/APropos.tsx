import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAFooter } from "@/components/CTAFooter";
import { SafeLink } from "@/components/SafeLink";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";
import { CharlyOriginStory } from "@/components/CharlyOriginStory";
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
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation constante",
      description: "Nous développons des solutions IA de pointe pour simplifier l'accès aux marchés publics avec les dernières technologies."
    },
    {
      icon: Shield,
      title: "Transparence totale",
      description: "Nos algorithmes et processus sont clairs et explicables. Vous comprenez toujours comment Charly prend ses décisions."
    },
    {
      icon: Heart,
      title: "Partenariat authentique",
      description: "Charly devient votre binôme de confiance. Nous facilitons votre quotidien, vous vous concentrez sur votre expertise."
    },
    {
      icon: Target,
      title: "Résultats concrets",
      description: "Notre objectif : transformer les entreprises qualifiées en gagnants sur les marchés français, européens et internationaux."
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
    { number: "2025", label: "Année de création" },
    { number: "Bientôt", label: "Premiers clients" },
    { number: "En cours", label: "Évaluation des marchés" },
    { number: "Notre objectif", label: "Votre satisfaction" }
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
    <>
      <SEOHead />
      <StructuredData page="about" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
        <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
              {t('about.badge')}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('about.hero.why')}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('about.hero.desc')}
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

      {/* Charly Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Charly, l'assistant IA{" "}
                <span className="bg-gradient-highlight bg-clip-text text-transparent">d'Eligibly</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Chez Eligibly, nous avons créé Charly comme ce personnage d'une importance rare dans votre quotidien professionnel : 
                votre bras droit essentiel qui a toujours une réponse et facilite chaque étape.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                L'équipe Eligibly a voulu faire de Charly le partenaire rêvé des commerciaux et chasseurs d'opportunités, 
                celui qui transforme la complexité des marchés publics en simplicité grâce à notre expertise technologique.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-12 text-white text-center">
                <Users className="w-20 h-20 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">L'assistant IA né de l'expertise Eligibly</h3>
                <p className="text-blue-100 text-lg">
                  Créé par notre équipe d'experts, Charly allie l'intelligence artificielle d'Eligibly 
                  à une compréhension profonde des marchés publics pour anticiper vos besoins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire de Charly */}
      <CharlyOriginStory />

      {/* Problem & Solution Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('about.problem.title')}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-foreground">Les AO publics sont complexes : des dossiers longs à construire</span>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-foreground">Temps considérable pour chasser les opportunités</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-foreground">A priori sur "l'honnêteté des démarches d'AO" par les collectivités</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('about.vision.title')} 
                <span className="bg-gradient-highlight bg-clip-text text-transparent">{t('about.vision.title.highlight')}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Cela ne doit plus être un effort d'entrer sur les marchés français, européens et internationaux 
                quand des entreprises sont ultra qualifiées.
              </p>
              <p className="text-lg font-semibold text-primary mb-8">
                Vous bossez, nous on postule.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous utilisons nos qualités en engineering pour vulgariser ces sujets complexes, 
                en exploitant les dernières technologies pour faciliter l'entrée et les gains sur les marchés publics.
              </p>
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
              Conçue par des experts des marchés publics, data scientists et ingénieurs IA, l’intelligence de Charly maîtrise toute la chaîne des appels d’offres et démocratise un univers trop souvent réservé aux mêmes, pour ouvrir l’accès aux acteurs légitimes, accroître la compétitivité et soutenir la croissance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Expert Product Data Science</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Spécialiste des algorithmes et de l'analyse prédictive pour optimiser les réponses aux AO
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold group-hover:scale-110 transition-transform">
                  <FileCheck className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Expert Réponse AO</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Maître dans l'art de répondre aux appels d'offres avec des années d'expérience terrain
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Comité Collectivités</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Responsables d'AO côté collectivités qui nous aident à comprendre les attentes réelles
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">technologie</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des technologies de pointe au service de votre performance sur les marchés publics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">IA Générative</h3>
                <p className="text-foreground text-sm leading-relaxed">GPT-4 et modèles spécialisés pour générer des réponses optimales aux AO</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Machine Learning</h3>
                <p className="text-foreground text-sm leading-relaxed">Analyse prédictive pour identifier les opportunités les plus prometteuses</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Veille Automatisée</h3>
                <p className="text-foreground text-sm leading-relaxed">Surveillance 24/7 des plateformes d'AO françaises et européennes</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Sécurité Renforcée</h3>
                <p className="text-foreground text-sm leading-relaxed">Chiffrement end-to-end et conformité RGPD pour protéger vos données</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTAFooter 
        title="Discutons ensemble"
        subtitle="Une question ? Un projet ? Notre équipe est là pour vous accompagner."
        primaryButtonText="Contactez-nous"
      />
    </div>
  </>
  );
};

export default APropos;