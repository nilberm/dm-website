# DM Website - Debora Mara Digital Art

Website de portfólio e e-commerce para artista digital, com sistema de pedidos e dashboard administrativo.

## 🚀 Funcionalidades

- **Portfólio**: Galeria de tipos de desenho com preços dinâmicos
- **Sistema de Pedidos**: Calculadora de preços e integração com WhatsApp
- **Dashboard Admin**: Gerenciamento de preços e imagens sem backend
- **Responsivo**: Interface moderna e mobile-friendly

## 🛠️ Tecnologias

- Next.js 15 + React 19
- TypeScript
- Tailwind CSS
- React Hook Form
- Swiper (carrosséis)

## 📋 Configuração

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
# Senha do dashboard admin (DEFINA UMA SENHA SEGURA!)
ADMIN_PASSWORD=sua_senha_super_segura_aqui

# URL base para chamadas da API (opcional)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 3. Executar o projeto

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o site.

## 🔐 Dashboard Admin

- **Acesso**: `/admin/login`
- **Senha**: Definida na variável `ADMIN_PASSWORD`
- **Funcionalidades**:
  - Editar preços dos tipos de desenho
  - Gerenciar galeria de imagens
  - Atualizar descrições
  - Sem necessidade de banco de dados!

## 📱 Deploy

### Netlify (Recomendado)

1. Conecte o repositório ao Netlify
2. Configure as variáveis de ambiente no painel do Netlify:
   - `ADMIN_PASSWORD`: Sua senha segura
3. Deploy automático a cada push

### Vercel

1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── admin/             # Dashboard administrativo
│   ├── api/               # API routes
│   └── order/             # Páginas de pedido
├── components/            # Componentes React
│   └── admin/            # Componentes do dashboard
├── data/                 # Dados dos tipos de desenho
└── utils/                # Utilitários
```

## 🔧 Personalização

### Adicionar novos tipos de desenho

1. Acesse o dashboard admin
2. Edite o arquivo `src/data/drawingTypes.json`
3. Ou use a interface do dashboard

### Alterar preços

1. Faça login no dashboard admin
2. Clique em "Editar" no tipo desejado
3. Modifique os preços
4. Salve as alterações

## 🛡️ Segurança

- Senha do admin em variáveis de ambiente
- Autenticação via cookies seguros
- Middleware de proteção de rotas
- Validação de dados no backend

## 📞 Suporte

Para dúvidas ou problemas, verifique:
1. Se as variáveis de ambiente estão configuradas
2. Se o arquivo `drawingTypes.json` existe
3. Se as permissões de arquivo estão corretas
