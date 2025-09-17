"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dumbbell,
  Target,
  Brain,
  Zap,
  MapPin,
  CheckCircle,
  Clock,
  Play,
  RotateCcw,
  Trophy,
  TrendingUp,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

const trainingModules = [
  {
    id: 1,
    title: "Precisão de Mira",
    description: "Exercícios para melhorar crosshair placement e flick shots",
    icon: Target,
    color: "text-primary",
    progress: 75,
    exercises: [
      { name: "Crosshair Placement - 15min", completed: true, time: "15min" },
      { name: "Flick Training - 10min", completed: true, time: "10min" },
      { name: "Tracking Practice - 20min", completed: false, time: "20min" },
    ],
  },
  {
    id: 2,
    title: "Posicionamento Tático",
    description: "Aprenda os melhores ângulos e posições em cada mapa",
    icon: MapPin,
    color: "text-secondary",
    progress: 40,
    exercises: [
      { name: "Ângulos Defensivos - Bind", completed: true, time: "25min" },
      { name: "Posições de Retake - Haven", completed: false, time: "30min" },
      { name: "Rotações Eficientes", completed: false, time: "20min" },
    ],
  },
  {
    id: 3,
    title: "Uso de Habilidades",
    description: "Maximize o impacto das habilidades do seu agente",
    icon: Zap,
    color: "text-accent",
    progress: 90,
    exercises: [
      { name: "Lineups de Smoke - Brimstone", completed: true, time: "30min" },
      { name: "Flash Timing - Phoenix", completed: true, time: "15min" },
      { name: "Drone Spots - Sova", completed: true, time: "25min" },
    ],
  },
  {
    id: 4,
    title: "Tomada de Decisão",
    description: "Desenvolva game sense e timing perfeito",
    icon: Brain,
    color: "text-muted",
    progress: 60,
    exercises: [
      { name: "Análise de Situações", completed: true, time: "20min" },
      { name: "Timing de Peek", completed: true, time: "15min" },
      { name: "Economia de Rounds", completed: false, time: "25min" },
    ],
  },
]

const achievements = [
  { name: "Primeira Semana", description: "Complete 7 dias consecutivos", unlocked: true },
  { name: "Mira Afiada", description: "95% de precisão em 5 sessões", unlocked: true },
  { name: "Estrategista", description: "Complete todos os módulos de posicionamento", unlocked: false },
  { name: "Especialista", description: "Domine 3 agentes diferentes", unlocked: false },
]

export default function TrainingPage() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null)

  const toggleExercise = (moduleId: number, exerciseIndex: number) => {
    // In a real app, this would update the backend
    console.log(`Toggle exercise ${exerciseIndex} in module ${moduleId}`)
  }

  const totalProgress = Math.round(
    trainingModules.reduce((acc, module) => acc + module.progress, 0) / trainingModules.length,
  )

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading font-bold text-3xl flex items-center">
              <Dumbbell className="w-8 h-8 mr-3 text-primary" />
              Planos de Treino
            </h1>
            <p className="text-muted-foreground">Treinamentos personalizados baseados na sua análise</p>
          </div>
          <Badge variant="secondary" className="glow-secondary">
            <Trophy className="w-4 h-4 mr-2" />
            Progresso: {totalProgress}%
          </Badge>
        </div>

        {/* Overall Progress */}
        <Card className="border-primary/50 glow-primary">
          <CardHeader>
            <CardTitle className="font-heading flex items-center justify-between">
              <span>Progresso Geral</span>
              <span className="text-2xl font-bold text-primary">{totalProgress}%</span>
            </CardTitle>
            <CardDescription>Seu progresso em todos os módulos de treinamento</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={totalProgress} className="h-3 mb-4" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">12</div>
                <div className="text-sm text-muted-foreground">Exercícios Completos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">8h 45m</div>
                <div className="text-sm text-muted-foreground">Tempo Total</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">7</div>
                <div className="text-sm text-muted-foreground">Dias Consecutivos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-muted">+15</div>
                <div className="text-sm text-muted-foreground">Pontos de Skill</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Training Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {trainingModules.map((module) => (
            <Card
              key={module.id}
              className={`border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer ${
                selectedModule === module.id ? "border-primary glow-primary" : ""
              }`}
              onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
            >
              <CardHeader>
                <CardTitle className="font-heading flex items-center justify-between">
                  <div className="flex items-center">
                    <module.icon className={`w-6 h-6 mr-3 ${module.color}`} />
                    {module.title}
                  </div>
                  <Badge variant="outline">{module.progress}%</Badge>
                </CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress value={module.progress} className="h-2" />

                  {selectedModule === module.id && (
                    <div className="space-y-3 animate-in slide-in-from-top-2 duration-300">
                      <h4 className="font-medium text-sm">Exercícios:</h4>
                      {module.exercises.map((exercise, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Checkbox
                              checked={exercise.completed}
                              onCheckedChange={() => toggleExercise(module.id, index)}
                            />
                            <span className={exercise.completed ? "line-through text-muted-foreground" : ""}>
                              {exercise.name}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{exercise.time}</span>
                          </div>
                        </div>
                      ))}

                      <div className="flex space-x-2 pt-2">
                        <Button size="sm" className="flex-1">
                          <Play className="w-4 h-4 mr-2" />
                          Iniciar Treino
                        </Button>
                        <Button size="sm" variant="outline">
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Resetar
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="font-heading flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-accent" />
              Conquistas
            </CardTitle>
            <CardDescription>Desbloqueie conquistas conforme progride nos treinos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    achievement.unlocked ? "border-accent/50 bg-accent/5 glow-accent" : "border-border/50 bg-muted/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{achievement.name}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                    {achievement.unlocked ? (
                      <CheckCircle className="w-6 h-6 text-accent" />
                    ) : (
                      <div className="w-6 h-6 border-2 border-muted rounded-full" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Daily Challenge */}
        <Card className="border-secondary/50 glow-secondary">
          <CardHeader>
            <CardTitle className="font-heading flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-secondary" />
              Desafio Diário
            </CardTitle>
            <CardDescription>Complete o desafio de hoje para ganhar XP extra</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-secondary/5 rounded-lg">
              <div>
                <h4 className="font-medium">Precisão Perfeita</h4>
                <p className="text-sm text-muted-foreground">Alcance 90% de precisão em 3 rounds consecutivos</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-secondary">+50 XP</div>
                <Button size="sm" className="mt-2">
                  Aceitar Desafio
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
