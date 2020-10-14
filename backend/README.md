# NLW #3 // Happy - Backend

## Init

Instale as dependências com `yarn install` e rode o projeto usando `yarn dev`.

Se tudo estiver ok com a instalação, a aplicação poderá ser acessada em `localhost:3333`.

## Database

Criar migrations usando `yarn typeorm migration:create -n nome_migration`.

## Tools

- Express
- TypeORM
- SQLite

## Project files structure

```
/src
    /controllers
        ..OrphanagesController.ts
    /database
        /migrations
        ..connection.ts
        ..database.sqlite
    /models
        ..Orphanage.ts
    ..routes.ts
    ..server.ts
..ormconfig.json
..tsconfig.json
```
