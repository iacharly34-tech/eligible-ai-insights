import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  CheckCircle,
  X,
  Zap,
  Crown,
  Building,
  ArrowRight,
  Shield,
  Clock,
  Users,
  Sparkles,
  Mail,
  Phone
} from "lucide-react";

const Tarifs = () => {
  const { t } = useLanguage();
  
  const plans = [
    {
      name: "Starter",
      price: "99",
      description: "Parfait pour débuter votre veille IA",
      popular: false,
      features: [
        { name: "100 sources surveillées", included: true },
        { name: "500 opportunités/mois", included: true },
        { name: "Alertes email", included: true },
        { name: "Scoring IA basique", included: true },
        { name: "Support email", included: true },
        { name: "Intégrations Slack/Teams", included: false },
        { name: "API & Webhooks", included: false },
        { name: "Support téléphonique", included: false },
        { name: "Formation personnalisée", included: false }
      ],
      cta: "Commencer l'essai",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "299",
      description: "Pour les équipes commerciales actives",
      popular: true,
      features: [
        { name: "600+ sources surveillées", included: true },
        { name: "Opportunités illimitées", included: true },
        { name: "Alertes multi-canaux", included: true },
        { name: "Scoring IA avancé", included: true },
        { name: "Support prioritaire", included: true },
        { name: "Intégrations Slack/Teams", included: true },
        { name: "API & Webhooks", included: true },
        { name: "Support téléphonique", included: false },
        { name: "Formation personnalisée", included: false }
      ],
      cta: "Essayer gratuitement",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "Sur mesure",
      description: "Solutions personnalisées pour grandes organisations",
      popular: false,
      features: [
        { name: "Sources personnalisées", included: true },
        { name: "Volume sur mesure", included: true },
        { name: "Multi-utilisateurs", included: true },
        { name: "IA personnalisée", included: true },
        { name: "Support dédié 24/7", included: true },
        { name: "Intégrations sur mesure", included: true },
        { name: "API complète", included: true },
        { name: "Support téléphonique", included: true },
        { name: "Formation personnalisée", included: true }
      ],
      cta: "Nous contacter",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const faq = [
    {
      question: "Quelles sources d'appels d'offres surveillez-vous ?",
      answer: "Nous surveillons toutes les plateformes officielles : BOAMP, profils d'acheteurs, PLACE, TED Europe, AWS DUME, plus de 600 sites régionaux. Notre IA analyse en temps réel tous les nouveaux AO publiés."
    },
    {
      question: "Comment Charly détermine-t-il la compatibilité d'un appel d'offres ?",
      answer: "Charly analyse votre profil d'entreprise (CA, secteur, références, certifications) et le compare aux critères de l'AO. Il évalue la faisabilité technique, la conformité réglementaire, et calcule vos chances de succès en fonction de vos forces."
    },
    {
      question: "L'outil fonctionne-t-il pour tous les secteurs de marchés publics ?",
      answer: "Oui ! Charly couvre tous les domaines : informatique, BTP, services, fournitures, santé, éducation, défense. L'IA s'adapte automatiquement aux spécificités de chaque secteur et type de marché."
    },
    {
      question: "Puis-je être alerté des AO en temps réel selon mes critères ?",
      answer: "Absolument ! Vous configurez vos critères (budget, secteur, zone géographique, mots-clés) et recevez des alertes instantanées par email, Slack ou Teams dès qu'un AO compatible est détecté."
    },
    {
      question: "Prévoyez-vous une aide à la rédaction des réponses aux appels d'offres ?",
      answer: "Excellente question ! Nous développons actuellement un nouvel agent IA spécialisé dans l'aide à la rédaction des mémoires d'AO. Cette fonctionnalité incluera : la construction automatique du mémoire technique, l'optimisation du paramétrage des prix selon les critères, et l'élaboration de stratégies environnementales personnalisées quand c'est un critère d'évaluation. Cette évolution sera disponible dès Q2 2026 pour tous nos abonnés Professional et Enterprise."
    },
    {
      question: "Comment garantissez-vous la fraîcheur des données d'appels d'offres ?",
      answer: "Notre système effectue une veille continue 24h/24. Les données sont mises à jour toutes les heures, et nos algorithmes détectent automatiquement les modifications d'AO (prolongations, annulations, avenants)."
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
              {t('pricing.badge')}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('pricing.hero.title')}{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
                {t('pricing.hero.title.highlight')}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('pricing.hero.subtitle')}
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>7 jours d'essai gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-500" />
                <span>Support inclus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden ${plan.popular ? 'scale-105 shadow-xl' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-medium">
                    <Sparkles className="w-4 h-4 inline mr-2" />
                    Plus populaire
                  </div>
                )}
                
                <CardContent className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      {index === 0 && <Zap className="w-8 h-8 text-white" />}
                      {index === 1 && <Crown className="w-8 h-8 text-white" />}
                      {index === 2 && <Building className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      {plan.price === "Sur mesure" ? (
                        <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
                      ) : (
                        <div>
                          <span className="text-4xl font-bold text-gray-900">{plan.price}€</span>
                          <span className="text-gray-600">/mois</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${plan.gradient} hover:shadow-lg text-white group ${plan.popular ? 'text-lg py-6' : ''}`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12 border border-green-200">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('pricing.guarantee.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              {t('pricing.guarantee.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Remboursement sans question</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Support premium inclus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Migration de données gratuite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('pricing.faq.title')}{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">{t('pricing.faq.title.highlight')}</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {faq.map((item, index) => (
              <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Une autre question ?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button variant="outline">
                <Mail className="w-5 h-5 mr-2" />
                contact@eligibly.ai
              </Button>
              <Button variant="outline">
                <Phone className="w-5 h-5 mr-2" />
                +33 1 23 45 67 89
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tarifs;