## Landing Page - SOS Máquinas Agrícolas

### Objetivo
Landing page estática em **HTML + CSS puro** (sem frameworks, sem JS) sobre a **SOS Máquinas Agrícolas**, com fachada da loja como hero e um catálogo visual dos produtos enviados.

### Identidade visual (extraída das imagens)
- Verde escuro `#1f6b3a`, laranja vibrante `#f08a1f`, branco e cinza
- Tagline: *"Soluções que movem o seu campo!"*
- WhatsApp: **(61) 99636-6749** · Loja aberta até 18h

### Produtos identificados (8 itens)
1. Diafragma do Bico Antigotejo Duplo
2. Diafragma do Porta Bico
3. Diafragma em Viton Trijet/Pentajet
4. Quadrijet Completo – Modelo Jacto
5. Rotor da Bomba Centrífuga
6. Sensor Feedback
7. Palhetas para Granulados
8. Palheta Calcário Hércules

### Estrutura da página

1. **Header / Navegação fixa**
   - Logo textual "SOS Máquinas Agrícolas" (verde + laranja)
   - Links: Início · Produtos · Serviços · Contato
   - Botão WhatsApp em destaque

2. **Hero**
   - Foto da fachada da loja como background, com overlay escuro
   - Título: "SOS Máquinas Agrícolas"
   - Subtítulo: "Soluções que movem o seu campo!"
   - Botões: "Ver Produtos" e "Falar no WhatsApp"

3. **Seção Serviços / Funcionalidades**
   - 4 cards com ícones (SVG/emoji simples):
     - Peças para Pulverização
     - Peças Hidráulicas
     - Retentores e Rolamentos
     - Prensa de Mangueiras
   - Texto curto descrevendo cada serviço

4. **Catálogo de Produtos** *(substitui "Pricing" — usaremos os 8 produtos enviados em vez de tabela de preços, já que ainda não foram informados valores)*
   - Grid responsivo de 8 cards
   - Cada card: imagem do produto + nome + botão "Solicitar orçamento via WhatsApp"
   - Imagens serão registradas como assets Lovable (sem copiar binário para o repo)

5. **Sobre / Diferenciais**
   - 3 destaques: Alta Resistência · Compatível com equipamentos Jacto/Hércules · Atendimento direto pelo WhatsApp

6. **Rodapé / Contato**
   - WhatsApp (61) 99636-6749 · Horário: Seg–Sáb até 18:00h
   - Copyright SOS Máquinas Agrícolas

### Arquivos a criar
- `public/landing-agricola/index.html`
- `public/landing-agricola/styles.css`
- 9 asset pointers JSON em `src/assets/` (fachada + 8 produtos), referenciados pela URL CDN no HTML

### Observação sobre preços
A seção originalmente pedida de "Preços" será apresentada como **catálogo de produtos com botão "Solicitar orçamento"**, já que você ainda não enviou valores. Se quiser preços fixos depois, é só me passar a tabela e eu adiciono.

### Critérios de aceitação
- 100% HTML + CSS puro
- Fachada como hero, 8 produtos com foto e nome no catálogo
- Paleta verde/laranja consistente com a marca
- Responsivo (mobile, tablet, desktop)
- Todos os CTAs apontam para o WhatsApp informado