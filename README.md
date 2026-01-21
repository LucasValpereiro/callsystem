# 🎫 CallSystem

Sistema de gerenciamento de chamados técnicos desenvolvido com React e Firebase.

[![Netlify Status](https://api.netlify.com/api/v1/badges/acb20a32-eb7e-4acc-9ad0-9ea0ac68f875/deploy-status)](https://app.netlify.com/projects/valpercallsystem/deploys)

## 🚀 Demonstração

Acesse o projeto em produção: [https://valpercallsystem.netlify.app/](https://valpercallsystem.netlify.app/)

## 📋 Sobre o Projeto

CallSystem é uma aplicação web para gerenciamento de tickets/chamados de suporte técnico. Permite que usuários registrem, acompanhem e gerenciem solicitações de atendimento de forma organizada e eficiente.

### ✨ Funcionalidades

- 🔐 **Autenticação de Usuários**: Login e cadastro de novos usuários
- 📝 **Gerenciamento de Chamados**: Criação, visualização e edição de tickets
- 👥 **Gerenciamento de Clientes**: Cadastro e controle de clientes
- 📊 **Dashboard**: Visualização de chamados com filtros por status (Aberto, Em Progresso, Atendido)
- 🔍 **Detalhes do Chamado**: Visualização completa das informações de cada ticket
- 👤 **Perfil do Usuário**: Edição de dados pessoais e foto de perfil
- 📱 **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela

## 🖼️ Screenshots

<div align="center">

### Tela de Login
<img src="./login.png" alt="Tela de Login" width="600"/>

### Tela de Cadastro
<img src="./cadastro.png" alt="Tela de Cadastro" width="600"/>

### Dashboard de Chamados
<img src="./dashboard.png" alt="Dashboard" width="800"/>

### Detalhes do Chamado
<img src="./detalhes.png" alt="Detalhes do Chamado" width="600"/>

### Novo Chamado
<img src="./novo-chamado.png" alt="Novo Chamado" width="600"/>

### Editar Chamado
<img src="./editar-chamado.png" alt="Editar Chamado" width="600"/>

### Cadastro de Clientes
<img src="./clientes.png" alt="Cadastro de Clientes" width="600"/>

### Perfil do Usuário
<img src="./perfil.png" alt="Perfil" width="600"/>

</div>

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **Firebase Authentication** - Autenticação de usuários
- **Firebase Firestore** - Banco de dados NoSQL em tempo real
- **React Router DOM** - Gerenciamento de rotas
- **Context API** - Gerenciamento de estado global
- **CSS3** - Estilização da aplicação

## ⚠️ Observação Importante sobre Imagens

**As imagens de perfil dos usuários não são armazenadas no momento devido às limitações do plano gratuito do Firebase.** 

O Firebase Realtime Database gratuito utilizado no projeto permite apenas:
- ✅ **Authentication** - Autenticação de usuários
- ✅ **Firestore Database** - Banco de dados NoSQL

Para utilizar o **Firebase Storage** (armazenamento de arquivos/imagens), seria necessário um plano pago. Por esse motivo, a funcionalidade de upload de fotos de perfil está desabilitada na versão atual.

## 📦 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- NPM ou Yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/LucasValpereiro/callsystem.git
```

2. Entre na pasta do projeto:
```bash
cd callsystem
```

3. Instale as dependências:
```bash
npm install
```

4. Configure as variáveis de ambiente do Firebase:
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione suas credenciais do Firebase:
```env
REACT_APP_FIREBASE_API_KEY=sua_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=seu_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=seu_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
REACT_APP_FIREBASE_APP_ID=seu_app_id
```

5. Execute o projeto:
```bash
npm start
```

6. Acesse no navegador: `http://localhost:3000`

## 📦 Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `build/`.

## 🚀 Deploy

O projeto está hospedado no [Netlify](https://www.netlify.com/) e configurado para deploy automático a partir da branch `main`.

### Deploy Manual

Caso queira fazer deploy manual:

```bash
# Instalar o Netlify CLI
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy
netlify deploy --prod --dir=build
```

## 📁 Estrutura do Projeto

```
callsystem/
├── public/
├── src/
│   ├── components/
│   ├── contexts/
│   ├── pages/
│   ├── services/
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adicionando nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

**Lucas Valpereiro**

- LinkedIn: [www.linkedin.com/in/lucas-valpereiro-6876111b5](https://www.linkedin.com/in/lucas-valpereiro-6876111b5)
- GitHub: [@LucasValpereiro](https://github.com/LucasValpereiro)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
