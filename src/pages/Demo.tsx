import { Header } from "@/components/Header";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
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
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Brain,
      title: t('demo.benefits.title'),
      items: [
        { title: t('features.multisource.title'), description: t('features.multisource.desc') },
      ]
    }
  ];

  const demoFeatures = [
    t('demo.program.title'),
    'Scoring IA en temps réel',
    'Alertes intelligentes',
    'Tour complet de la plateforme',
    'Analyse personnalisée de votre secteur',
    'Questions/réponses avec nos experts'
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      <SEOHead />
      <StructuredData page="demo" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
        <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Play className="w-4 h-4" />
              {t('demo.badge')}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('demo.hero.title')}{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
                {t('demo.hero.title.highlight')}
              </span>
            </h1>
            
            <p className="text-base sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('demo.hero.subtitle')}
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span>{t('demo.hero.detail.duration')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-500" />
                <span>{t('demo.hero.detail.slots')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-500" />
                <span>{t('demo.hero.detail.nocommit')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 pb-28 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Form */}
          <div>
            <Card id="demo-form" className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('demo.form.title')}
                  </h2>
                  <p className="text-gray-600">
                    {t('demo.form.subtitle')}
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        {t('demo.form.firstName')}
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder={t('demo.form.firstName')}
                        className="h-12 bg-white border-gray-200 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        {t('demo.form.lastName')}
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder={t('demo.form.lastName')}
                        className="h-12 bg-white border-gray-200 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      {t('demo.form.email')}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="name@company.com"
                      className="h-12 bg-white border-gray-200 focus:border-primary"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                        {t('demo.form.company')}
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder={t('demo.form.company')}
                        className="h-12 bg-white border-gray-200 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-sm font-medium text-gray-700">
                        {t('demo.form.role')}
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('role', value)}>
                        <SelectTrigger className="h-12 bg-white border-gray-200">
                          <SelectValue placeholder={t('demo.form.role.placeholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="commercial">{t('demo.form.role.commercial')}</SelectItem>
                          <SelectItem value="direction">{t('demo.form.role.direction')}</SelectItem>
                          <SelectItem value="marketing">{t('demo.form.role.marketing')}</SelectItem>
                          <SelectItem value="consultant">{t('demo.form.role.consultant')}</SelectItem>
                          <SelectItem value="acheteur">{t('demo.form.role.buyer')}</SelectItem>
                          <SelectItem value="autre">{t('demo.form.role.other')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sector" className="text-sm font-medium text-gray-700">
                        {t('demo.form.sector')}
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('sector', value)}>
                        <SelectTrigger className="h-12 bg-white border-gray-200">
                          <SelectValue placeholder={t('demo.form.sector.placeholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tech">{t('demo.form.sector.tech')}</SelectItem>
                          <SelectItem value="btp">{t('demo.form.sector.construction')}</SelectItem>
                          <SelectItem value="services">{t('demo.form.sector.business')}</SelectItem>
                          <SelectItem value="sante">{t('demo.form.sector.health')}</SelectItem>
                          <SelectItem value="energie">{t('demo.form.sector.energy')}</SelectItem>
                          <SelectItem value="transport">{t('demo.form.sector.transport')}</SelectItem>
                          <SelectItem value="autre">{t('demo.form.sector.other')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teamSize" className="text-sm font-medium text-gray-700">
                        {t('demo.form.teamSize')}
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('teamSize', value)}>
                        <SelectTrigger className="h-12 bg-white border-gray-200">
                          <SelectValue placeholder={t('demo.form.teamSize.placeholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">{t('demo.form.teamSize.1-10')}</SelectItem>
                          <SelectItem value="11-50">{t('demo.form.teamSize.11-50')}</SelectItem>
                          <SelectItem value="51-200">{t('demo.form.teamSize.51-200')}</SelectItem>
                          <SelectItem value="200+">{t('demo.form.teamSize.200+')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="challenges" className="text-sm font-medium text-gray-700">
                      {t('demo.form.challenges')}
                    </Label>
                    <Textarea
                      id="challenges"
                      value={formData.challenges}
                      onChange={(e) => handleInputChange('challenges', e.target.value)}
                      placeholder={t('demo.form.challenges.placeholder')}
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
                      {t('demo.form.newsletter')}
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-cta hover:shadow-glow text-white text-base group transition-all duration-300"
                  >
                    {t('demo.form.submit')}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500">
                    {t('demo.form.privacy')}
                    <SafeLink to="/confidentialite" className="text-primary hover:underline">
                      {t('demo.form.privacy.link')}
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
                {t('demo.benefits.title')}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t('features.multisource.title')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('features.multisource.desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t('features.ai.title')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('features.ai.desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t('features.scoring.title')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('features.scoring.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo features */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {t('demo.program.title')}
                </h3>
                <div className="space-y-3">
                  {[ 
                    t('demo.program.title'),
                    t('features.scoring.title'),
                    t('features.notifications.title')
                  ].map((feature, index) => (
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
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t border-border p-4">
        <Button 
          variant="tengo"
          className="w-full h-12 text-base font-semibold"
          aria-label={t('accessibility.demo')}
          onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        >
          {t('nav.demo')}
        </Button>
      </div>
    </div>
  </>
  );
};

export default Demo;