"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Upload,
  FileVideo,
  CheckCircle,
  AlertCircle,
  Play,
  Clock,
  Target,
  BarChart3,
  Brain,
  Zap,
  Eye,
  MapPin,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

interface UploadedFile {
  id: string
  name: string
  size: number
  progress: number
  status: "uploading" | "processing" | "completed" | "error"
  analysis?: {
    overallScore: number
    aim: number
    positioning: number
    abilities: number
    decision: number
    awareness: number
    mapName: string
    agent: string
    duration: string
    highlights: string[]
    improvements: string[]
  }
}

export default function UploadPage() {
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const droppedFiles = Array.from(e.dataTransfer.files)
    processFiles(droppedFiles)
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || [])
    processFiles(selectedFiles)
  }, [])

  const processFiles = (fileList: File[]) => {
    const videoFiles = fileList.filter((file) => file.type.startsWith("video/"))

    videoFiles.forEach((file) => {
      const newFile: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        progress: 0,
        status: "uploading",
      }

      setFiles((prev) => [...prev, newFile])

      // Simulate upload progress
      simulateUpload(newFile.id)
    })
  }

  const simulateUpload = (fileId: string) => {
    let progress = 0
    const uploadInterval = setInterval(() => {
      progress += Math.random() * 15
      if (progress >= 100) {
        progress = 100
        clearInterval(uploadInterval)

        // Update to processing
        setFiles((prev) =>
          prev.map((file) => (file.id === fileId ? { ...file, progress: 100, status: "processing" } : file)),
        )

        // Simulate processing
        setTimeout(() => {
          const mockAnalysis = {
            overallScore: Math.floor(Math.random() * 30) + 70,
            aim: Math.floor(Math.random() * 30) + 70,
            positioning: Math.floor(Math.random() * 30) + 60,
            abilities: Math.floor(Math.random() * 30) + 75,
            decision: Math.floor(Math.random() * 30) + 65,
            awareness: Math.floor(Math.random() * 30) + 70,
            mapName: ["Bind", "Haven", "Split", "Ascent", "Icebox"][Math.floor(Math.random() * 5)],
            agent: ["Jett", "Sage", "Phoenix", "Sova", "Brimstone"][Math.floor(Math.random() * 5)],
            duration: "32:45",
            highlights: [
              "Excelente controle de spray no round 15",
              "Ótimo timing de habilidade no round 8",
              "Clutch impressionante no round 23",
            ],
            improvements: [
              "Melhorar posicionamento em retakes",
              "Usar mais smokes defensivas",
              "Comunicar rotações mais cedo",
            ],
          }

          setFiles((prev) =>
            prev.map((file) => (file.id === fileId ? { ...file, status: "completed", analysis: mockAnalysis } : file)),
          )
        }, 3000)
      } else {
        setFiles((prev) =>
          prev.map((file) => (file.id === fileId ? { ...file, progress: Math.min(progress, 100) } : file)),
        )
      }
    }, 200)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="font-heading font-bold text-3xl">Upload de Gameplay</h1>
          <p className="text-muted-foreground">Envie seus vídeos de Valorant para análise detalhada por IA</p>
        </div>

        {/* Upload Area */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="font-heading flex items-center">
              <Upload className="w-5 h-5 mr-2 text-primary" />
              Enviar Vídeo de Gameplay
            </CardTitle>
            <CardDescription>
              Arraste e solte seus vídeos aqui ou clique para selecionar. Formatos suportados: MP4, AVI, MOV
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
                isDragOver
                  ? "border-primary bg-primary/5 glow-primary"
                  : "border-border hover:border-primary/50 hover:bg-primary/5"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                multiple
                accept="video/*"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />

              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <FileVideo className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {isDragOver ? "Solte os arquivos aqui" : "Arraste seus vídeos aqui"}
                  </h3>
                  <p className="text-muted-foreground mb-4">ou</p>
                  <Button className="glow-primary">Selecionar Arquivos</Button>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p>Tamanho máximo: 2GB por arquivo</p>
                  <p>Duração recomendada: 10-60 minutos</p>
                </div>
              </div>
            </div>

            {/* Upload Tips */}
            <Alert className="mt-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Dicas para melhor análise:</strong> Certifique-se de que o vídeo inclui pelo menos 5 rounds
                completos, com áudio de comunicação da equipe e interface do jogo visível.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Uploaded Files */}
        {files.length > 0 && (
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="font-heading">Arquivos Enviados</CardTitle>
              <CardDescription>Acompanhe o progresso da análise dos seus vídeos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {files.map((file) => (
                  <div key={file.id} className="space-y-4">
                    {/* File Info */}
                    <div className="flex items-center justify-between p-4 bg-card/50 rounded-lg border border-border/50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FileVideo className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{file.name}</div>
                          <div className="text-sm text-muted-foreground">{formatFileSize(file.size)}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Badge
                          variant={
                            file.status === "completed"
                              ? "default"
                              : file.status === "error"
                                ? "destructive"
                                : "secondary"
                          }
                          className={
                            file.status === "processing"
                              ? "animate-pulse"
                              : file.status === "completed"
                                ? "glow-accent"
                                : ""
                          }
                        >
                          {file.status === "uploading" && <Clock className="w-3 h-3 mr-1" />}
                          {file.status === "processing" && <Brain className="w-3 h-3 mr-1" />}
                          {file.status === "completed" && <CheckCircle className="w-3 h-3 mr-1" />}
                          {file.status === "uploading" && "Enviando"}
                          {file.status === "processing" && "Analisando"}
                          {file.status === "completed" && "Concluído"}
                          {file.status === "error" && "Erro"}
                        </Badge>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    {(file.status === "uploading" || file.status === "processing") && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            {file.status === "uploading" ? "Enviando arquivo..." : "Processando com IA..."}
                          </span>
                          <span className="font-medium">{Math.round(file.progress)}%</span>
                        </div>
                        <Progress value={file.progress} className="h-2" />
                      </div>
                    )}

                    {/* Analysis Results */}
                    {file.status === "completed" && file.analysis && (
                      <div className="space-y-6 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-heading font-semibold text-lg">Análise Completa</h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>Mapa: {file.analysis.mapName}</span>
                              <span>Agente: {file.analysis.agent}</span>
                              <span>Duração: {file.analysis.duration}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-primary">{file.analysis.overallScore}</div>
                            <div className="text-sm text-muted-foreground">Score Geral</div>
                          </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          {[
                            { label: "Mira", value: file.analysis.aim, icon: Target, color: "text-primary" },
                            {
                              label: "Posicionamento",
                              value: file.analysis.positioning,
                              icon: MapPin,
                              color: "text-secondary",
                            },
                            { label: "Habilidades", value: file.analysis.abilities, icon: Zap, color: "text-accent" },
                            { label: "Decisão", value: file.analysis.decision, icon: Brain, color: "text-muted" },
                            { label: "Consciência", value: file.analysis.awareness, icon: Eye, color: "text-primary" },
                          ].map((metric, index) => (
                            <div key={index} className="text-center p-3 bg-card/50 rounded-lg">
                              <metric.icon className={`w-6 h-6 mx-auto mb-2 ${metric.color}`} />
                              <div className="text-2xl font-bold">{metric.value}</div>
                              <div className="text-xs text-muted-foreground">{metric.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Highlights and Improvements */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <h4 className="font-heading font-medium text-accent flex items-center">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Destaques da Partida
                            </h4>
                            <ul className="space-y-2">
                              {file.analysis.highlights.map((highlight, index) => (
                                <li key={index} className="text-sm bg-accent/5 p-2 rounded border-l-2 border-accent">
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-3">
                            <h4 className="font-heading font-medium text-destructive flex items-center">
                              <AlertCircle className="w-4 h-4 mr-2" />
                              Áreas para Melhorar
                            </h4>
                            <ul className="space-y-2">
                              {file.analysis.improvements.map((improvement, index) => (
                                <li
                                  key={index}
                                  className="text-sm bg-destructive/5 p-2 rounded border-l-2 border-destructive"
                                >
                                  {improvement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
                          <Button variant="outline" className="flex items-center bg-transparent">
                            <Play className="w-4 h-4 mr-2" />
                            Ver Replay Comentado
                          </Button>
                          <Button variant="outline" className="flex items-center bg-transparent">
                            <BarChart3 className="w-4 h-4 mr-2" />
                            Relatório Detalhado
                          </Button>
                          <Button variant="outline" className="flex items-center bg-transparent">
                            <Target className="w-4 h-4 mr-2" />
                            Gerar Plano de Treino
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recent Uploads */}
        {files.length === 0 && (
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="font-heading">Uploads Recentes</CardTitle>
              <CardDescription>Seus últimos vídeos analisados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileVideo className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-heading font-medium text-lg mb-2">Nenhum vídeo enviado ainda</h3>
                <p className="text-muted-foreground mb-6">
                  Comece enviando seu primeiro vídeo de gameplay para receber análises detalhadas
                </p>
                <Button variant="outline">Ver Exemplos de Análise</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  )
}
