# Atividade 04 — Autenticação com JWT + Cookie httpOnly

Continuação da To-Do List (NestJS + TypeORM + Postgres + React), seguindo o
**Roteiro da Aula 07 (23/10)**: cadastro, login, logout e proteção das rotas
de tarefas lendo o `sub` do JWT guardado em cookie `httpOnly`.

## O que foi implementado (backend-final)

| Passo do roteiro | Arquivo(s) |
|---|---|
| 1. Dependências | `package.json` (`@nestjs/jwt`, `@nestjs/passport`, `passport`, `passport-jwt`, `bcryptjs`, `cookie-parser`) |
| 2. Entidade + migration | `src/users/entities/user.entity.ts`, `src/migrations/*-CreateUsers.ts`, `src/data-source.ts` |
| 3. UsersModule/Service | `src/users/` |
| 4. AuthService + DTO | `src/auth/auth.service.ts`, `src/auth/dto/auth.dto.ts` |
| 5. Strategy + Guard | `src/auth/jwt.strategy.ts`, `src/auth/jwt-auth.guard.ts` |
| 6. Controller + Module | `src/auth/auth.controller.ts`, `src/auth/auth.module.ts` |
| 7. Ligação e proteção | `src/app.module.ts`, `src/main.ts` (`cookieParser`), `TarefasController` com `@UseGuards(JwtAuthGuard)` |

Endpoints: `POST /api/auth/register`, `POST /api/auth/login`,
`POST /api/auth/logout`, `GET /api/auth/me` e `/api/tarefas*` (protegidas).

O frontend (`frontend/`) já traz Login, Cadastro e a rota protegida de tarefas.

## Como rodar

```bash
# 1) Postgres + frontend (porta 5173)
docker compose up --build -d

# 2) Backend (porta 3000), em outro terminal
cd backend-final
npm install
npm run migration:run
npm run start:dev
```

Abra http://localhost:5173 → sem sessão cai em `/login`.

## Testes feitos (curl, com cookie jar)

Registrar 201 · e-mail inválido 400 · e-mail duplicado 409 · login 201 (cookie
`HttpOnly; SameSite=Lax`) · `/auth/me` 200 com `{userId,email}` · tarefas sem
cookie 401 · criar/listar/editar/excluir logado 201/200/200/204 · senha errada
401 · logout limpa o cookie e `/auth/me` volta a 401.
