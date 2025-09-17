"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  History,
  Search,
  Filter,
  Calendar,
  MapPin,
  Target,
  TrendingUp,
  TrendingDown,
  Play,
  BarChart3,
  Download,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

const matchHistory = [
  {
    id: 1,
    date: "2024-01-15",
    map: "Bind",
    agent: "Jett",
    duration: "45:32",
    result: "Vitória",
    score: 92,
    kills: 25,
    deaths: 12,
    assists: 8,
    trend: "up",
    highlights: ["Ace no round 18", "Clutch 1v3", "95% de headshot rate"],
  },
  {
    id: 2,
    date: "2024-01-14",
    map: "Haven",
    agent: "Sage",
    duration: "38:15",
    result: "Derrota",
    score: 78,
    kills: 18,
    deaths: 15,
    assists: 12,
    trend: "down",
    highlights: ["Boa utilização de wall", "Ressurreições estratégicas"],
  },
  {
    id: 3,
    date: "2024-01-13",
    map: "Ascent",
    agent: "Phoenix",
    duration: "42:08",
    result: "Vitória",
    score: 85,
    kills: 22,
    deaths: 10,
    assists: 6,
    trend: "up",
    highlights: ["Excelente entry fragging", "Uso eficiente de flashes"],
  },
  {
    id: 4,
    date: "2024-01-12",
    map: "Split",
    agent: "Sova",
    duration: "35:45",
    result: "Vitória",
    score: 88,
    kills: 20,
    deaths: 11,
    assists: 15,
    trend: "up",
    highlights: ["Drones precisos", "Informações valiosas para equipe"],
  },
  {
    id: 5,
    date: "2024-01-11",
    map: "Icebox",
    agent: "Brimstone",
    duration: "40:22",
    result: "Derrota",
    score: 72,
    kills: 16,
    deaths: 18,
    assists: 10,
    trend: "down",
    highlights: ["Smokes bem posicionadas", "Boa coordenação de equipe"],
  },
]

export default function HistoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterMap, setFilterMap] = useState("all")
  const [filterResult, setFilterResult] = useState("all")

  const filteredMatches = matchHistory.filter((match) => {
    const matchesSearch =
      match.agent.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.map.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesMap = filterMap === "all" || match.map === filterMap
    const matchesResult = filterResult === "all" || match.result === filterResult

    return matchesSearch && matchesMap && matchesResult
  })

  const averageScore = Math.round(matchHistory.reduce((acc, match) => acc + match.score, 0) / matchHistory.length)
  const winRate = Math.round(
    (matchHistory.filter((match) => match.result === "Vitória").length / matchHistory.length) * 100,
  )

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading font-bold text-3xl flex items-center">
              <History className="w-8 h-8 mr-3 text-primary" />
              Histórico de Partidas
            </h1>
            <p className="text-muted-foreground">Acompanhe sua evolução ao longo do tempo</p>
          </div>
          <Button className="glow-primary">
            <Download className="w-4 h-4 mr-2" />
            Exportar Relatório
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Partidas Analisadas</p>
                  <p className="text-2xl font-bold">{matchHistory.length}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Score Médio</p>
                  <p className="text-2xl font-bold text-secondary">{averageScore}</p>
                </div>
                <Target className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Taxa de Vitória</p>
                  <p className="text-2xl font-bold text-accent">{winRate}%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Tempo Total</p>
                  <p className="text-2xl font-bold">6h 42m</p>
                </div>
                <Calendar className="w-8 h-8 text-muted" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="font-heading flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filtros e Busca
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por agente ou mapa..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Select value={filterMap} onValueChange={setFilterMap}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filtrar por mapa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os mapas</SelectItem>
                  <SelectItem value="Bind">Bind</SelectItem>
                  <SelectItem value="Haven">Haven</SelectItem>
                  <SelectItem value="Ascent">Ascent</SelectItem>
                  <SelectItem value="Split">Split</SelectItem>
                  <SelectItem value="Icebox">Icebox</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterResult} onValueChange={setFilterResult}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filtrar por resultado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os resultados</SelectItem>
                  <SelectItem value="Vitória">Vitórias</SelectItem>
                  <SelectItem value="Derrota">Derrotas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Match List */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="font-heading">Partidas Recentes</CardTitle>
            <CardDescription>Clique em uma partida para ver a análise detalhada</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredMatches.map((match) => (
                <div
                  key={match.id}
                  className="p-6 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-primary cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{match.map}</span>
                      </div>
                      <Badge variant="outline">{match.agent}</Badge>
                      <Badge
                        variant={match.result === "Vitória" ? "default" : "destructive"}
                        className={match.result === "Vitória" ? "bg-accent text-accent-foreground" : ""}
                      >
                        {match.result}
                      </Badge>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-primary">{match.score}</span>
                          {match.trend === "up" ? (
                            <TrendingUp className="w-4 h-4 text-accent" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-destructive" />
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground">Score IA</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center p-2 bg-background/50 rounded">
                      <div className="text-lg font-bold">{match.kills}</div>
                      <div className="text-xs text-muted-foreground">Kills</div>
                    </div>
                    <div className="text-center p-2 bg-background/50 rounded">
                      <div className="text-lg font-bold">{match.deaths}</div>
                      <div className="text-xs text-muted-foreground">Deaths</div>
                    </div>
                    <div className="text-center p-2 bg-background/50 rounded">
                      <div className="text-lg font-bold">{match.assists}</div>
                      <div className="text-xs text-muted-foreground">Assists</div>
                    </div>
                    <div className="text-center p-2 bg-background/50 rounded">
                      <div className="text-lg font-bold">{match.duration}</div>
                      <div className="text-xs text-muted-foreground">Duração</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Destaques:</h4>
                    <div className="flex flex-wrap gap-2">
                      {match.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2 mt-4 pt-4 border-t border-border/50">
                    <Button variant="outline" size="sm">
                      <Play className="w-4 h-4 mr-2" />
                      Ver Replay
                    </Button>
                    <Button variant="outline" size="sm">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Análise Completa
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
