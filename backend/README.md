# NLW #3 // Happy - Backend

## Init

Instale as dependências com `yarn install` e rode o projeto usando `yarn dev`.

Se tudo estiver ok com a instalação, a aplicação poderá ser acessada em `localhost:3333`.

## Database

Criar migrations usando `yarn typeorm migration:create -n nome_migration`.

## Tools

- Express - *server*
- TypeORM e SQLite - *database*
- Multer - *upload images*
- Yup - *validation*

## Project files structure

```
/src
    /config
        ..upload.ts
    /controllers
        ..OrphanagesController.ts
    /database
        /migrations
        ..connection.ts
        ..database.sqlite
    /errors
        ..handler.ts
    /models
        ..Image.ts
        ..Orphanage.ts
    /views
        ..images_view.ts
        ..orphanages_view.ts
    ..routes.ts
    ..server.ts
/uploads
..ormconfig.json
..tsconfig.json
```
