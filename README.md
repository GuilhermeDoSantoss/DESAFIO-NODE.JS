# DESAFIO BACKEND - Node.Js

Esta é uma API RESTful desenvolvida em [AdonisJS](https://adonisjs.com/) para gerenciar o cadastro de alunos, professores, salas e alocação de alunos em salas, conforme requisitos de um sistema escolar. O projeto foi estruturado para demonstrar domínio de boas práticas de backend, modelagem de dados, regras de negócio e organização de código.

---

## 📚 **Funcionalidades**

### Aluno
- **Cadastro**: Alunos podem se cadastrar informando nome, e-mail, matrícula e data de nascimento.
- **Edição**: Alunos podem editar seus dados.
- **Exclusão**: Alunos podem excluir seu cadastro.
- **Consulta**: Alunos podem consultar seus dados.
- **Salas**: Alunos podem consultar todas as salas em que estão alocados, visualizando o nome do professor responsável e o número da sala.

### Professor
- **Cadastro**: Professores podem se cadastrar informando nome, e-mail, matrícula e data de nascimento.
- **Edição**: Professores podem editar seus dados.
- **Exclusão**: Professores podem excluir seu cadastro.
- **Consulta**: Professores podem consultar seus dados.
- **Salas**: Professores podem cadastrar, editar, excluir e consultar salas.
- **Alocação**: Professores podem alocar e remover alunos em suas próprias salas.
- **Listagem de alunos**: Professores podem consultar todos os alunos de uma sala.

### Sala
- **Cadastro**: Professores podem cadastrar salas informando número, capacidade e disponibilidade.
- **Regras**:
  - Não é permitido alocar o mesmo aluno mais de uma vez na mesma sala.
  - Não é permitido exceder a capacidade da sala.
  - Apenas o professor criador pode alocar/remover alunos em sua sala.

---

## 🗂️ **Estrutura do Projeto**

- `app/Models`: Modelos ORM (Aluno, Professor, Sala) e seus relacionamentos.
- `app/Controllers/Http`: Controllers responsáveis pelas regras de negócio e endpoints.
- `database/migrations`: Migrations para criação das tabelas e relacionamentos.
- `start/routes.ts`: Definição das rotas da API.

---

## 🚀 **Como rodar o projeto**

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/my-school-api.git
   cd my-school-api
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o banco de dados**
   - Edite `.env` com as credenciais do seu banco (exemplo: SQLite, MySQL, PostgreSQL).

4. **Rode as migrations**
   ```bash
   node ace migration:run
   ```

5. **Inicie o servidor**
   ```bash
   node ace serve --watch
   ```

6. **Acesse a API**
   - Por padrão, disponível em `http://localhost:3333`

---

## 📑 **Principais Rotas**

| Método | Rota                                 | Descrição                                 |
|--------|--------------------------------------|-------------------------------------------|
| POST   | /alunos                              | Cadastro de aluno                         |
| PUT    | /alunos/:id                          | Editar aluno                              |
| DELETE | /alunos/:id                          | Excluir aluno                             |
| GET    | /alunos/:id                          | Consultar aluno                           |
| GET    | /alunos/:alunoId/salas               | Salas do aluno                            |
| POST   | /professores                         | Cadastro de professor                     |
| PUT    | /professores/:id                     | Editar professor                          |
| DELETE | /professores/:id                     | Excluir professor                         |
| GET    | /professores/:id                     | Consultar professor                       |
| POST   | /salas                               | Cadastro de sala                          |
| PUT    | /salas/:id                           | Editar sala                               |
| DELETE | /salas/:id                           | Excluir sala                              |
| GET    | /salas/:id                           | Consultar sala                            |
| POST   | /salas/:salaId/alunos/:alunoId       | Alocar aluno em sala                      |
| DELETE | /salas/:salaId/alunos/:alunoId       | Remover aluno da sala                     |
| GET    | /salas/:salaId/alunos                | Listar alunos de uma sala                 |

---

## ⚖️ **Regras de Negócio**

- **Cadastro de aluno/professor**: Nome, e-mail, matrícula e data de nascimento obrigatórios.
- **Cadastro de sala**: Número, capacidade e disponibilidade obrigatórios.
- **Alocação de aluno**:
  - Não pode alocar o mesmo aluno mais de uma vez na mesma sala.
  - Não pode exceder a capacidade da sala.
  - Apenas o professor criador pode alocar/remover alunos em sua sala.
- **Consulta de salas do aluno**: Retorna nome do aluno, nome do professor e número da sala.

---

## 💡 **Diferenciais**

- Código limpo, organizado e comentado.
- Separação clara entre regras de negócio e acesso a dados.
- Validações e mensagens de erro claras.
- Pronto para testes com ferramentas como Insomnia/Postman.

---

## 👩‍💻 **Sobre mim**

Este projeto foi desenvolvido com foco em clareza, organização e respeito às regras de negócio, para facilitar a avaliação técnica e demonstrar domínio de backend com AdonisJS.
