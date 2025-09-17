export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading font-bold text-4xl mb-8">Termos de Uso</h1>

        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="font-heading font-semibold text-2xl mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao acessar e usar o ValorantAI, você concorda em cumprir estes termos de uso e todas as leis e
              regulamentos aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl mb-4">2. Uso da Plataforma</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nossa plataforma destina-se exclusivamente ao aprimoramento de habilidades no jogo Valorant através de
              análise de IA. É proibido usar o serviço para qualquer finalidade ilegal ou não autorizada.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl mb-4">3. Privacidade dos Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Respeitamos sua privacidade. Os vídeos enviados são processados de forma segura e não são compartilhados
              com terceiros sem seu consentimento explícito.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl mb-4">4. Limitações de Responsabilidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              O ValorantAI fornece análises baseadas em IA para fins educacionais. Não garantimos melhorias específicas
              no desempenho do jogo e não nos responsabilizamos por resultados individuais.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
