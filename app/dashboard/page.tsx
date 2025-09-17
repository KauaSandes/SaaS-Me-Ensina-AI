"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Target,
  MapPin,
  Zap,
  Eye,
  Upload,
  CheckCircle,
  Clock,
  Award,
  Play,
  Brain,
  Users,
  Lightbulb,
  BarChart3,
  AlertTriangle,
  Trophy,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function DashboardPage() {
  const [trainingTasks, setTrainingTasks] = useState([
    { id: 1, task: "Treino de crosshair placement", time: "15 min", completed: false },
    { id: 2, task: "Análise de posicionamento defensivo", time: "20 min", completed: true },
    { id: 3, task: "Prática de spray patterns", time: "10 min", completed: false },
    { id: 4, task: "Review de partida anterior", time: "25 min", completed: false },
  ])

  const toggleTask = (id: number) => {
    setTrainingTasks((prev) => prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const completedTasks = trainingTasks.filter((task) => task.completed).length
  const totalTasks = trainingTasks.length

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <Card className="border-primary/50 glow-primary bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h1 className="font-heading font-bold text-3xl">
                  Bem-vindo, <span className="text-primary">João Silva!</span>
                </h1>
                <p className="text-muted-foreground text-lg">Pronto para sua próxima análise?</p>
              </div>
              <div className="flex items-center space-x-6">
                <Button size="lg" className="glow-primary bg-primary hover:bg-primary/90">
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Nova Partida
                </Button>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-secondary/50 glow-secondary">
          <CardHeader>
            <CardTitle className="font-heading flex items-center">
              <BarChart3 className="w-6 h-6 mr-3 text-secondary" />
              Resumo da Análise
            </CardTitle>
            <CardDescription>Visão geral da sua última partida analisada</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Performance Geral</span>
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30 font-medium">Boa</Badge>
                </div>
                <div className="text-2xl font-bold text-secondary">7.2/10</div>
                <Progress value={72} className="h-2" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Pontos Fortes</span>
                  <Trophy className="w-4 h-4 text-accent" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm">• Tempo de reação excelente</div>
                  <div className="text-sm">• Boa economia de rounds</div>
                  <div className="text-sm">• Comunicação efetiva</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Áreas de Melhoria</span>
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm">• Posicionamento defensivo</div>
                  <div className="text-sm">• Uso de habilidades</div>
                  <div className="text-sm">• Rotações em equipe</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <h2 className="font-heading font-bold text-2xl mb-6">Métricas de Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                label: "Precisão de Mira",
                value: 73,
                status: "Bom",
                color: "text-primary",
                bgColor: "bg-primary/10",
                statusColor: "text-primary",
              },
              {
                icon: MapPin,
                label: "Posicionamento",
                value: 58,
                status: "Melhorar",
                color: "text-destructive",
                bgColor: "bg-destructive/10",
                statusColor: "text-destructive",
              },
              {
                icon: Zap,
                label: "Tempo de Reação",
                value: 85,
                status: "Excelente",
                color: "text-accent",
                bgColor: "bg-accent/10",
                statusColor: "text-accent",
              },
              {
                icon: Eye,
                label: "Consciência Tática",
                value: 67,
                status: "Bom",
                color: "text-secondary",
                bgColor: "bg-secondary/10",
                statusColor: "text-secondary",
              },
            ].map((metric, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-primary"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                      <metric.icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    {metric.status === "Excelente" ? (
                      <Badge variant="default">{metric.status}</Badge>
                    ) : metric.status === "Bom" ? (
                      <Badge className="bg-secondary/20 text-secondary border-secondary/30 font-medium">
                        {metric.status}
                      </Badge>
                    ) : (
                      <Badge variant="destructive">{metric.status}</Badge>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold">{metric.value}%</div>
                      <div className="text-sm font-medium">{metric.label}</div>
                    </div>
                    <Progress value={metric.value} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="border-accent/50 glow-accent">
          <CardHeader>
            <CardTitle className="font-heading flex items-center">
              <Brain className="w-6 h-6 mr-3 text-accent" />
              Análise de Game Sense
            </CardTitle>
            <CardDescription>Avaliação da sua inteligência tática e tomada de decisões</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Leitura de Jogo</span>
                  <span className="text-2xl font-bold text-accent">8.1/10</span>
                </div>
                <Progress value={81} className="h-3" />
                <p className="text-sm text-muted-foreground">
                  Excelente capacidade de prever movimentos inimigos e antecipar rotações.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Timing de Habilidades</span>
                  <span className="text-2xl font-bold text-destructive">5.4/10</span>
                </div>
                <Progress value={54} className="h-3" />
                <p className="text-sm text-muted-foreground">
                  Precisa melhorar o uso estratégico de habilidades em momentos cruciais.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Economia de Rounds</span>
                  <span className="text-2xl font-bold text-secondary">7.8/10</span>
                </div>
                <Progress value={78} className="h-3" />
                <p className="text-sm text-muted-foreground">
                  Boa gestão econômica, mas pode ser mais agressivo em eco rounds.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Adaptabilidade</span>
                  <span className="text-2xl font-bold text-primary">6.9/10</span>
                </div>
                <Progress value={69} className="h-3" />
                <p className="text-sm text-muted-foreground">
                  Consegue se adaptar bem às estratégias inimigas durante a partida.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/50 glow-primary bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="font-heading flex items-center">
              <Users className="w-6 h-6 mr-3 text-primary" />
              Seu Coach IA
            </CardTitle>
            <CardDescription>Feedback personalizado e motivacional do seu treinador virtual</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Fala principal motivacional */}
              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading font-semibold text-lg text-primary">Parabéns pelo progresso, João!</h3>
                    <p className="text-foreground leading-relaxed">
                      Analisando sua última partida, posso ver uma evolução significativa no seu tempo de reação e na
                      leitura de jogo. Você está no caminho certo para subir de rank! Sua precisão de mira melhorou 15%
                      nas últimas duas semanas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feedback específico */}
              <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading font-semibold text-lg text-secondary">Pontos de Destaque</h3>
                    <p className="text-foreground leading-relaxed">
                      Seu controle de spray no round 12 foi impressionante! Você conseguiu eliminar 3 inimigos com
                      apenas um pente. Continue praticando esse padrão de tiro, pois está dominando muito bem o Vandal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conselho estratégico */}
              <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading font-semibold text-lg text-accent">Dica Estratégica</h3>
                    <p className="text-foreground leading-relaxed">
                      Notei que você tende a se posicionar muito agressivamente em rounds de eco. Tente jogar mais para
                      tempo e informação nesses momentos. Isso pode aumentar suas chances de vitória em 20-30%.
                    </p>
                  </div>
                </div>
              </div>

              {/* Próximos passos */}
              <div className="bg-muted/10 p-6 rounded-lg border-l-4 border-muted">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading font-semibold text-lg text-muted-foreground">Próximos Passos</h3>
                    <p className="text-foreground leading-relaxed">
                      Para a próxima semana, foque em melhorar seu posicionamento defensivo. Pratique segurar ângulos
                      mais seguros e use mais as smokes para criar vantagens. Com essas melhorias, você estará pronto
                      para o Diamond!
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="flex justify-center pt-4">
                <Button className="glow-primary bg-primary hover:bg-primary/90">
                  <Play className="w-4 h-4 mr-2" />
                  Ver Análise Completa
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-accent/50 glow-accent">
          <CardHeader>
            <CardTitle className="font-heading flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-accent" />
                Plano de Treino
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-sm text-muted-foreground">
                  {completedTasks}/{totalTasks} concluídas
                </div>
                <Progress value={(completedTasks / totalTasks) * 100} className="w-20 h-2" />
              </div>
            </CardTitle>
            <CardDescription>Treinos personalizados baseados na sua análise</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trainingTasks.map((task) => (
                <div
                  key={task.id}
                  className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-300 ${
                    task.completed
                      ? "bg-accent/5 border-accent/50"
                      : "bg-card border-border/50 hover:border-accent/50 hover:bg-accent/5"
                  }`}
                >
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTask(task.id)}
                    className="data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                  />
                  <div className="flex-1">
                    <div className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                      {task.task}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{task.time}</span>
                  </div>
                  {task.completed && (
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      Concluído
                    </Badge>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <Button className="glow-accent bg-accent hover:bg-accent/90">
                <Award className="w-4 h-4 mr-2" />
                Gerar Novo Plano
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
