## Description

Demonstração de uso de um "microsserviço" onde roda um banco somente para os logs(MongoDB) um para os dados da aplicação(SQLite).

- Para ORM foi usado o Prisma
- Aqui temos uma demonstração de uso do GitHub Actions onde podemos rodar uma instlação e testes.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```