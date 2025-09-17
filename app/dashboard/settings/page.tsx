"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings, User, Bell, Shield, Palette, Save, Upload, Trash2 } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // Profile
    name: "João Silva",
    email: "joao.silva@email.com",
    riotId: "JoaoSilva#BR1",

    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    analysisComplete: true,
    weeklyReport: true,

    // Privacy
    profilePublic: false,
    shareStats: true,

    // Preferences
    theme: "dark",
    language: "pt-BR",
    autoAnalysis: true,
  })

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    // In a real app, this would save to backend
    console.log("Settings saved:", settings)
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="font-heading font-bold text-3xl flex items-center">
            <Settings className="w-8 h-8 mr-3 text-primary" />
            Configurações
          </h1>
          <p className="text-muted-foreground">Personalize sua experiência na plataforma</p>
        </div>

        {/* Profile Settings */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="font-heading flex items-center">
              <User className="w-5 h-5 mr-2" />
              Perfil
            </CardTitle>
            <CardDescription>Gerencie suas informações pessoais</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-6">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/gamer-avatar.png" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Alterar Foto
                </Button>
                <Button variant="outline" size="sm" className="text-destructive bg-transparent">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Remover
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" value={settings.name} onChange={(e) => handleSettingChange("name", e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={settings.email}
                  onChange={(e) => handleSettingChange("email", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="riotId">Riot ID</Label>
                <Input
                  id="riotId"
                  value={settings.riotId}
                  onChange={(e) => handleSettingChange("riotId", e.target.value)}
                  placeholder="NomeUsuario#TAG"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="font-heading flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Notificações
            </CardTitle>
            <CardDescription>Configure como você quer receber notificações</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="emailNotifications">Notificações por Email</Label>
                <p className="text-sm text-muted-foreground">Receba atualizações importantes por email</p>
              </div>
              <Switch
                id="emailNotifications"
                checked={settings.emailNotifications}
                onCheckedChange={(checked) => handleSettingChange("emailNotifications", checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="pushNotifications">Notificações Push</Label>
                <p className="text-sm text-muted-foreground">Receba notificações no navegador</p>
              </div>
              <Switch
                id="pushNotifications"
                checked={settings.pushNotifications}
                onCheckedChange={(checked) => handleSettingChange("pushNotifications", checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="analysisComplete">Análise Concluída</Label>
                <p className="text-sm text-muted-foreground">Notificar quando a análise estiver pronta</p>
              </div>
              <Switch
                id="analysisComplete"
                checked={settings.analysisComplete}
                onCheckedChange={(checked) => handleSettingChange("analysisComplete", checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="weeklyReport">Relatório Semanal</Label>
                <p className="text-sm text-muted-foreground">Receba um resumo semanal do seu progresso</p>
              </div>
              <Switch
                id="weeklyReport"
                checked={settings.weeklyReport}
                onCheckedChange={(checked) => handleSettingChange("weeklyReport", checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="font-heading flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Privacidade
            </CardTitle>
            <CardDescription>Controle a visibilidade das suas informações</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="profilePublic">Perfil Público</Label>
                <p className="text-sm text-muted-foreground">Permitir que outros usuários vejam seu perfil</p>
              </div>
              <Switch
                id="profilePublic"
                checked={settings.profilePublic}
                onCheckedChange={(checked) => handleSettingChange("profilePublic", checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="shareStats">Compartilhar Estatísticas</Label>
                <p className="text-sm text-muted-foreground">Permitir compartilhamento de stats para rankings</p>
              </div>
              <Switch
                id="shareStats"
                checked={settings.shareStats}
                onCheckedChange={(checked) => handleSettingChange("shareStats", checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="font-heading flex items-center">
              <Palette className="w-5 h-5 mr-2" />
              Preferências
            </CardTitle>
            <CardDescription>Personalize a interface e comportamento da plataforma</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="theme">Tema</Label>
                <Select value={settings.theme} onValueChange={(value) => handleSettingChange("theme", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dark">Escuro</SelectItem>
                    <SelectItem value="light">Claro</SelectItem>
                    <SelectItem value="system">Sistema</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Idioma</Label>
                <Select value={settings.language} onValueChange={(value) => handleSettingChange("language", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                    <SelectItem value="en-US">English (US)</SelectItem>
                    <SelectItem value="es-ES">Español</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="autoAnalysis">Análise Automática</Label>
                <p className="text-sm text-muted-foreground">Iniciar análise automaticamente após upload</p>
              </div>
              <Switch
                id="autoAnalysis"
                checked={settings.autoAnalysis}
                onCheckedChange={(checked) => handleSettingChange("autoAnalysis", checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button onClick={handleSave} className="glow-primary">
            <Save className="w-4 h-4 mr-2" />
            Salvar Alterações
          </Button>
        </div>
      </div>
    </DashboardLayout>
  )
}
