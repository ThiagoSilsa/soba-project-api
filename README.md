
# 🍜 Soba API

API RESTful desenvolvida em **Node.js** com **Express**, **Prisma ORM** e arquitetura **MVC** para o gerenciamento do sistema **Soba** — uma aplicação voltada para controle de pedidos e mesas em restaurantes.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript no servidor  
- **Express.js** – Framework minimalista para criação de rotas e middlewares  
- **Prisma ORM** – Mapeamento objeto-relacional para manipulação do banco de dados  
- **MySQL** – Banco de dados
- **Nodemon** – Hot reload para ambiente de desenvolvimento  
- **Cors** – Habilitação de acessos cross-origin  
- **Dotenv** – Gerenciamento de variáveis de ambiente  

---

## 🧱 Arquitetura do Projeto (MVC)

```
📦 soba-api
├── 📁 src
│   ├── 📁 controllers     # Lógica de controle entre rotas e modelos
│   ├── 📁 routes          # Definição das rotas da aplicação
│   ├── 📁 services        # Regras de negócio e integração entre camadas
│   ├── 📁 middlewares     # Validação, autenticação e tratamento de erros
│   ├── 📁 prisma          # Configuração e schema do Prisma ORM
│   ├── app.js             # Configuração principal do servidor Express
│   └── server.js          # Inicialização da API
├── .env                   # Variáveis de ambiente
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Instalação e Execução

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/ThiagoSilsa/soba-project-api.git
cd soba-project-api
```

### 2️⃣ Instale as dependências
```bash
npm install
```

### 3️⃣ Configure o ambiente
Crie o arquivo `.env` na raiz do projeto:
```env
DATABASE_URL="file:./dev.db"  # ou URL do PostgreSQL/MySQL
PORT=8080
```

### 4️⃣ Configure o Prisma
```bash
npx prisma migrate dev
```

### 5️⃣ Execute o servidor
```bash
npm run dev
```

A API estará disponível em: **http://localhost:8080/api**

---

## 🧩 Endpoints Exemplos

| Método | Rota | Descrição |
|--------|------|------------|
| GET | /tables | Retorna todas as mesas |
| POST | /tables | Cria uma nova mesa |
| PUT | /tables/:id | Atualiza uma mesa existente |
| DELETE | /tables/:id | Remove uma mesa |
| GET | /orders | Lista todos os pedidos |
| POST | /orders | Cria um novo pedido |

---

## 🧠 Padrões e Boas Práticas

- Estrutura **MVC** clara e modularizada  
- Funções de **validação** centralizadas em middlewares  
- Tratamento de erros padronizado (try/catch + responses HTTP)  
- Uso de **async/await** em todas as requisições assíncronas  
- Código formatado com **Biome / Prettier**  

---

---

## 🧔 Autor

**Thiago [Santos]**  
💼 Desenvolvedor Full Stack  
📧 [thiagosantosprog@gmail.com]  
🔗 [LinkedIn / GitHub links]

---

## 📸 Prints do Projeto

<img width="949" height="790" alt="image" src="https://github.com/user-attachments/assets/f7e1187f-ba2b-400b-8597-75a19a82e48a" />
