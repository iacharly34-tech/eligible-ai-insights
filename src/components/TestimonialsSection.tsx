import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Directrice Commercial",
      company: "TechFlow Solutions",
      avatar: "MD",
      rating: 5,
      text: "Grâce à eligibly.ai, nous avons multiplié par 3 notre taux de succès sur les marchés publics. L'IA détecte vraiment les bonnes opportunités.",
      metrics: "+47% taux de succès"
    },
    {
      name: "Pierre Martin",
      role: "Responsable Développement",
      company: "InnovateCorp",
      avatar: "PM",
      rating: 5,
      text: "6 heures par semaine économisées en veille ! Le scoring automatique nous fait gagner un temps précieux et nous aide à prioriser nos efforts.",
      metrics: "6h/semaine économisées"
    },
    {
      name: "Sophie Laurent",
      role: "CEO",
      company: "GreenTech",
      avatar: "SL",
      rating: 5,
      text: "Interface intuitive et résultats au rendez-vous. Nous avons remporté 2.8M€ de marchés en 6 mois grâce aux opportunités détectées par la plateforme.",
      metrics: "2.8M€ remportés"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 mb-6">
            Témoignages
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ils ont transformé leur{" "}
            <span className="text-primary">performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment nos clients utilisent eligibly.ai pour décrocher plus de marchés publics 
            et développer leur activité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-card border border-border/50 shadow-card hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-3 h-3 text-primary-foreground" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Metrics Badge */}
                <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
                  {testimonial.metrics}
                </Badge>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="bg-gradient-primary rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-8">Résultats moyens de nos clients</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold mb-2">+47%</div>
              <div className="text-white/80">Augmentation du taux de succès</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">6h</div>
              <div className="text-white/80">Économisées par semaine en veille</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">85%</div>
              <div className="text-white/80">De clients satisfaits recommandent</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};