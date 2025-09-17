"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Target, Calendar, Award, BarChart3 } from "lucide-react"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"
import { XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from "recharts"
import { DashboardLayout } from "@/components/dashboard-layout"

const performanceData = [
  { skill: "Mira", value: 85, maxValue: 100 },
  { skill: "Posicionamento", value: 72, maxValue: 100 },
  { skill: "Habilidades", value: 90, maxValue: 100 },
  { skill: "Decisão", value: 68, maxValue: 100 },
  { skill: "Consciência", value: 78, maxValue: 100 },
]

const weeklyProgressData = [
  { day: "Seg", score: 65 },
  { day: "Ter", score: 72 },
  { day: "Qua", score: 68 },
  { day: "Qui", score: 85 },
  { day: "Sex", score: 82 },
  { day: "Sáb", score: 90 },
  { day: "Dom", score: 88 },
]

const monthlyData = [
  { month: "Jan", score: 65, matches: 28 },
  { month: "Fev", score: 72, matches: 32 },
  { month: "Mar", score: 78, matches: 35 },
  { month: "Abr", score: 85, matches: 40 },
]

export default function ProgressPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading font-bold text-3xl">Progresso Semanal</h1>
            <p className="text-muted-foreground">Acompanhe sua evolução detalhada e métricas de performance</p>
          </div>
          <Badge variant="secondary" className="glow-secondary">
            <TrendingUp className="w-4 h-4 mr-2" />
            +12% esta semana
          </Badge>
        </div>

        {/* Weekly Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-primary/50 glow-primary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Partidas Analisadas</p>
                  <p className="text-2xl font-bold">8/10</p>
                  <p className="text-xs text-primary">Meta semanal</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="w-6 h-6 text-primary" />
                </div>
              </div>
              <Progress value={80} className="mt-4" />
            </CardContent>
          </Card>

          <Card className="border-secondary/50 glow-secondary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Metas de Treino</p>
                  <p className="text-2xl font-bold">3/5</p>
                  <p className="text-xs text-secondary">Concluídas</p>
                </div>
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
              </div>
              <Progress value={60} className="mt-4" />
            </CardContent>
          </Card>

          <Card className="border-accent/50 glow-accent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Melhoria Geral</p>
                  <p className="text-2xl font-bold text-accent">+12%</p>
                  <p className="text-xs text-accent">vs. semana anterior</p>
                </div>
                <div className="p-3 bg-accent/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Radar Chart */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="font-heading flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                Análise Detalhada de Performance
              </CardTitle>
              <CardDescription>Comparação com suas médias históricas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={performanceData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis dataKey="skill" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 100]}
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                    />
                    <Radar
                      name="Performance"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Progress Chart */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="font-heading flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-secondary" />
                Evolução Mensal
              </CardTitle>
              <CardDescription>Progresso dos últimos 4 meses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                    <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="hsl(var(--secondary))"
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--secondary))", strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Performance Metrics */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="font-heading">Métricas Detalhadas</CardTitle>
            <CardDescription>Análise completa de todas as suas habilidades</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  skill: "Precisão de Mira",
                  value: 73,
                  change: "+5%",
                  status: "Bom",
                  icon: Target,
                  color: "text-primary",
                },
                {
                  skill: "Posicionamento",
                  value: 58,
                  change: "-2%",
                  status: "Melhorar",
                  icon: Target,
                  color: "text-destructive",
                },
                {
                  skill: "Tempo de Reação",
                  value: 85,
                  change: "+8%",
                  status: "Excelente",
                  icon: Target,
                  color: "text-accent",
                },
                {
                  skill: "Consciência Tática",
                  value: 67,
                  change: "+3%",
                  status: "Bom",
                  icon: Target,
                  color: "text-secondary",
                },
              ].map((metric, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg bg-${metric.color.split("-")[1]}/10`}>
                      <metric.icon className={`w-5 h-5 ${metric.color}`} />
                    </div>
                    <Badge
                      variant={
                        metric.status === "Excelente"
                          ? "default"
                          : metric.status === "Bom"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {metric.status}
                    </Badge>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{metric.value}%</div>
                    <div className="text-sm text-muted-foreground">{metric.skill}</div>
                    <div className={`text-xs ${metric.change.startsWith("+") ? "text-accent" : "text-destructive"}`}>
                      {metric.change} vs. semana anterior
                    </div>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
