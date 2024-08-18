# Desafío de Backend

Este es un proyecto de servicio RESTful creado con tecnologías JavaScript, Node, Express, Mongo, Mongoose y JWT, el aplicativo contiene las entidades **Users** (usuario y escritor del blog) y **Post** (post del blog), el flujo de datos permite la creación de usuarios y darles a estos mismos la oportunidad de un inicio de sesión para poder crear entradas (**Post**) en una red social de contenido tecnológico.

## Instalación

1. Clonar el repositorio

```bash
git clone git@github.com:Arisbeth1409/backend-challenge.git
```

2. Ir al directorio del proyecto:

```bash
cd backend-challenge
```

3. Instala las dependencias:

```bash
npm install
```

4. Creación de archivo `.env` en la raíz del proyecto:

```bash
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=
PORT=
JWT_SECRET=
```

## Iniciar servidor de desarrollo

Ejecutar:

```bash
npm run dev
```

## Lista de endpoints

### User

**_Atributos:_**

- name (string)
- profilePic (string)
- email (string)
- password (string)
- created_at (date)
- updated_at (date)

`POST /user`: Registro de usuarios

`GET /user/:id`: Obtención de usuarios por ID

`POST /auth/login`: Creación de JWT cada que es llamado

### Post

**_Atributos:_**

- title (string)
- image (string)
- body (string )
- user (ObjectId referencia a UserId)
- created_at (date)
- updated_at (date)

`POST /posts`: Crear post, este será asignado al usuario que inició sesión, _requiere autorización_

`GET /posts`: Lista de todos los posts soporta el filtrado por titulo usando el query param llamado `search` ejemplo : `/posts?search=javascript`

`PATCH /posts/:id`: Permitir actualizar un post, no se debe permitir cambiar el usuario de un post, _requiere autorización_

`DELETE /posts/:id`: Eliminar un post, solo el usuario dueño del post puede ejecutar esta acción _requiere autorización_

## Despliegue de aplicación

[https://backend-challenge-h27z.onrender.com/](https://backend-challenge-h27z.onrender.com/)
