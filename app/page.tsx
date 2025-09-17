import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, BarChart3, Brain, Zap, Shield, Users, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl">Me Ensina AI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Recursos
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Planos
            </Link>
            <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Depoimentos
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Entrar</Link>
            </Button>
            <Button asChild className="glow-primary">
              <Link href="/register">Começar Agora</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 glow-secondary">
              <Zap className="w-4 h-4 mr-2" />
              IA Avançada para Valorant
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6 text-balance">
              Domine o Valorant com
              <span className="text-primary"> Coaching IA</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
              Analise seus vídeos de gameplay e receba relatórios detalhados com insights personalizados para elevar sua
              performance ao próximo nível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 glow-primary" asChild>
                <Link href="/register">Experimente Grátis</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
                <Link href="#demo">Ver Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Recursos Avançados de Análise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossa IA analisa cada aspecto do seu gameplay para fornecer insights precisos e acionáveis.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Análise de Mira",
                description: "Avaliação detalhada da precisão, tempo de reação e posicionamento de crosshair.",
                color: "text-primary",
              },
              {
                icon: BarChart3,
                title: "Métricas de Performance",
                description: "Dashboards interativos com estatísticas avançadas e tendências de melhoria.",
                color: "text-secondary",
              },
              {
                icon: Brain,
                title: "Decisões Táticas",
                description: "Análise de tomada de decisão, rotações e consciência de mapa em tempo real.",
                color: "text-accent",
              },
              {
                icon: Shield,
                title: "Posicionamento",
                description: "Feedback sobre posições defensivas e ofensivas para maximizar impacto.",
                color: "text-muted",
              },
              {
                icon: Zap,
                title: "Habilidades",
                description: "Otimização do uso de habilidades e timing para cada agente.",
                color: "text-primary",
              },
              {
                icon: Users,
                title: "Trabalho em Equipe",
                description: "Análise de comunicação e coordenação com a equipe.",
                color: "text-secondary",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-primary"
              >
                <CardHeader>
                  <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                  <CardTitle className="font-heading">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Planos de Assinatura</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano ideal para acelerar sua evolução no Valorant.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Iniciante",
                price: "R$ 19",
                originalPrice: "R$ 39",
                period: "/mês",
                description: "Perfeito para começar sua jornada",
                features: ["5 análises por mês", "Relatórios básicos", "Métricas essenciais", "Suporte por email"],
                popular: true,
                available: true,
              },
              {
                name: "Pro",
                price: "R$ 59",
                period: "/mês",
                description: "Para jogadores sérios",
                features: [
                  "Análises ilimitadas",
                  "Relatórios avançados",
                  "Todas as métricas",
                  "Planos de treino personalizados",
                  "Suporte prioritário",
                  "Comparação com pros",
                ],
                popular: false,
                available: false,
              },
              {
                name: "Elite",
                price: "R$ 99",
                period: "/mês",
                description: "Para aspirantes a profissionais",
                features: [
                  "Tudo do Pro",
                  "Coaching 1:1 mensal",
                  "Análise de equipe",
                  "Acesso antecipado",
                  "Suporte 24/7",
                  "Sessões de revisão ao vivo",
                ],
                popular: false,
                available: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-primary glow-primary" : "border-border/50"} ${!plan.available ? "opacity-60" : ""} hover:border-primary/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Mais Popular
                  </Badge>
                )}
                {!plan.available && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-muted text-muted-foreground">
                    Em Breve
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="font-heading text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center">
                    {plan.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through mr-2">{plan.originalPrice}</span>
                    )}
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <Badge variant="destructive" className="mx-auto">
                      50% OFF - Promoção de Lançamento
                    </Badge>
                  )}
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular && plan.available ? "glow-primary" : ""}`}
                    variant={plan.popular && plan.available ? "default" : "outline"}
                    disabled={!plan.available}
                    asChild={plan.available}
                  >
                    {plan.available ? <Link href="/register">Começar Agora</Link> : <span>Em Desenvolvimento</span>}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">O que os Jogadores Dizem</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Milhares de jogadores já melhoraram sua performance com nossa plataforma.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rafael Silva",
                rank: "Immortal 2",
                content:
                  "Subí 3 ranks em 2 meses usando o Me Ensina AI. As análises são incrivelmente precisas e me ajudaram a identificar erros que eu nem sabia que estava cometendo.",
                rating: 5,
              },
              {
                name: "Ana Costa",
                rank: "Diamond 1",
                content:
                  "A análise de posicionamento mudou completamente meu jogo. Agora entendo quando e onde me posicionar em cada mapa. Recomendo demais!",
                rating: 5,
              },
              {
                name: "Pedro Oliveira",
                rank: "Ascendant 3",
                content:
                  "Os relatórios são muito detalhados e fáceis de entender. O plano de treino personalizado me ajudou a focar nas áreas certas para melhorar.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.rank}</CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="border-primary/50 glow-primary bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="text-center py-16">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Pronto para Dominar o Valorant?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Junte-se a milhares de jogadores que já estão melhorando com nossa IA avançada.
              </p>
              <Button size="lg" className="text-lg px-8 py-6 glow-primary" asChild>
                <Link href="/register">Começar Gratuitamente</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-heading font-bold text-xl">Me Ensina AI</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A plataforma de coaching IA mais avançada para Valorant.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Preços
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="text-muted-foreground hover:text-foreground transition-colors">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="text-muted-foreground hover:text-foreground transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Termos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">© 2024 Me Ensina AI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
