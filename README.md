# Back End - API - Policard Mobile

La rest_api de la aplicación mobile de Policard
Documentacion POSTMAN
https://documenter.getpostman.com/view/25342026/2s93Joy64K

## Intalacion

clona el repositorio

```sh
 git clone https://github.com/
```

Instala las dependencias

```sh
 npm i
```

### PostgreSQL

- Crea una base de datos en PostgreSQL.
- Crea un usuario para PostgreSQL.
- En el archivo `app/config/db.config.js` actualiza los datos correspondientes.
  > Importante: Ignorar archivo migrate.js momentaneo.js y carpetas database, key

<!--  De momento ignorar

La api esta conectado con una base de datos en PostgreSQL para ello:
- Crea una base de datos en PostgreSQL.
- Crea un usuario para PostgreSQL.
- En el archivo `key/credentials.js` actualiza los datos correspondientes.
- Haz migracion de las tablas

#### Migracion de la base de datos
Ejecuta el comando
```sh
 npm run migrate
``` -->

## Levantar el servidor

Ejecuta el comando

```sh
 npm run start
```
