export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading font-bold text-4xl mb-8">Política de Privacidade</h1>

        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="font-heading font-semibold text-2xl mb-4">Coleta de Informações</h2>
            <p className="text-muted-foreground leading-relaxed">
              Coletamos informações que você nos fornece diretamente, como nome, email e vídeos de gameplay para
              análise.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl mb-4">Uso das Informações</h2>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos suas informações para fornecer análises personalizadas, melhorar nossos serviços e comunicar
              atualizações importantes.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl mb-4">Proteção de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais
              contra acesso não autorizado.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl mb-4">Seus Direitos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento através
              das configurações da conta.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
