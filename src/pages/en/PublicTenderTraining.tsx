import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { ArticleRecommendations } from "@/components/ArticleRecommendations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Video,
  FileText,
  Globe,
  Lightbulb
} from "lucide-react";

const PublicTenderTraining = () => {
  return (
    <>
      <SEOHead />
      <StructuredData />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-20">
          <article className="container mx-auto max-w-4xl px-4">
            {/* Header */}
            <header className="mb-12">
              <Badge className="mb-6 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200">
                <BookOpen className="w-4 h-4 mr-2" />
                Respond effectively to tenders
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                Public Procurement Training: Where to Start?
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Complete guide to training, certifications, and resources for mastering public procurement
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>September 25, 2025</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </header>

            {/* Introduction */}
            <section className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Public procurement is a complex field</strong> with its own rules, terminology, and best practices. For companies wanting to enter this market or improve their results, proper training is a decisive competitive advantage.
              </p>
              
              <blockquote className="border-l-4 border-indigo-500 pl-6 my-8 bg-indigo-50/50 py-4 rounded-r-lg">
                <p className="text-lg font-medium text-foreground mb-2">
                  &quot;Companies with trained teams have a 45% higher success rate in public tenders.&quot;
                </p>
                <cite className="text-sm text-muted-foreground">— UK Government Procurement Study</cite>
              </blockquote>
            </section>

            {/* Training Types */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Types of training available</h2>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <GraduationCap className="w-8 h-8 text-indigo-600 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">In-person courses</h3>
                        <p className="text-muted-foreground text-sm mb-3">Immersive training with experts, ideal for teams.</p>
                        <div className="flex gap-2 flex-wrap">
                          <Badge variant="outline" className="text-xs">1-3 days</Badge>
                          <Badge variant="outline" className="text-xs">Interactive</Badge>
                          <Badge variant="outline" className="text-xs">Certificate</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Video className="w-8 h-8 text-purple-600 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">Online training</h3>
                        <p className="text-muted-foreground text-sm mb-3">Flexible e-learning at your own pace.</p>
                        <div className="flex gap-2 flex-wrap">
                          <Badge variant="outline" className="text-xs">Self-paced</Badge>
                          <Badge variant="outline" className="text-xs">Accessible 24/7</Badge>
                          <Badge variant="outline" className="text-xs">Cost-effective</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Users className="w-8 h-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">Personalised coaching</h3>
                        <p className="text-muted-foreground text-sm mb-3">Individual support for rapid progress.</p>
                        <div className="flex gap-2 flex-wrap">
                          <Badge variant="outline" className="text-xs">Tailored</Badge>
                          <Badge variant="outline" className="text-xs">1-on-1</Badge>
                          <Badge variant="outline" className="text-xs">Practical cases</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Essential Skills */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Essential skills to develop</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-indigo-200 bg-indigo-50/50">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4 text-indigo-800">Regulatory fundamentals</h3>
                    <ul className="space-y-2 text-sm text-indigo-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Public procurement regulations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Procedure types</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Deadlines and timelines</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Legal requirements</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50/50">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4 text-purple-800">Response writing</h3>
                    <ul className="space-y-2 text-sm text-purple-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Technical proposal structure</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Presentation of references</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Commercial writing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Value differentiation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-blue-50/50">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4 text-primary">Pricing strategy</h3>
                    <ul className="space-y-2 text-sm text-primary">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Detailed costing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Price schedule analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Competitive positioning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Variant proposals</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-success/20 bg-success/10/50">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4 text-success">Market intelligence</h3>
                    <ul className="space-y-2 text-sm text-success">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Monitoring tools</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Prior analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Buyer research</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Go/No Go qualification</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Resources */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Free resources to get started</h2>

              <div className="space-y-4">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Government portals</h3>
                        <p className="text-sm text-muted-foreground">Official guidance and documentation from procurement authorities.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <FileText className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Practical guides</h3>
                        <p className="text-sm text-muted-foreground">Free downloadable guides on key topics: proposal writing, pricing, regulations.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Video className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Webinars</h3>
                        <p className="text-sm text-muted-foreground">Regular free sessions on tender best practices and updates.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Creating a Training Plan */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Building your training plan</h2>
              
              <div className="space-y-6">
                <Card className="border-0 shadow-xl bg-gradient-to-r from-indigo-50 to-purple-50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Lightbulb className="w-8 h-8 text-indigo-600" />
                      <h3 className="font-bold text-xl">Recommended progression</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                        <div>
                          <h4 className="font-bold">Month 1-2: Fundamentals</h4>
                          <p className="text-sm text-muted-foreground">Understand regulations, procedure types, key terminology.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                        <div>
                          <h4 className="font-bold">Month 3-4: Response writing</h4>
                          <p className="text-sm text-muted-foreground">Master technical proposal structure and commercial writing.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                        <div>
                          <h4 className="font-bold">Month 5-6: Advanced strategy</h4>
                          <p className="text-sm text-muted-foreground">Pricing optimisation, competitive analysis, market intelligence.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* How Charly Helps */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Learning by doing with Charly</h2>
              
              <p className="text-foreground leading-relaxed mb-6">
                The best way to learn public procurement is through practice. Charly AI guides you through each step, explaining concepts as you encounter them in real opportunities.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Guided analysis</h4>
                    <p className="text-sm text-muted-foreground">Charly explains each section of tender documents and what to focus on.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Contextual tips</h4>
                    <p className="text-sm text-muted-foreground">Receive relevant advice at each stage of your response preparation.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Best practice templates</h4>
                    <p className="text-sm text-muted-foreground">Learn from optimised response structures and proven approaches.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Performance feedback</h4>
                    <p className="text-sm text-muted-foreground">Understand why you win or lose and how to improve.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <Card className="border-0 shadow-2xl bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
                <CardContent className="p-8 md:p-12 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Start your learning journey
                  </h2>
                  <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
                    Discover how Charly AI can accelerate your public procurement skills while helping you win more contracts.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <SafeLink to="/en/demo">
                      <Button size="lg" className="bg-card text-indigo-700 hover:bg-indigo-50">
                        Book a demo
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </SafeLink>
                    <SafeLink to="/en/resources">
                      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                        Browse resources
                      </Button>
                    </SafeLink>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Article Recommendations */}
            <ArticleRecommendations currentArticleUrl="/en/public-tender-training" />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PublicTenderTraining;
