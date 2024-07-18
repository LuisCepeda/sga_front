This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Para el funcionamiento completo del proyecto es necesario tener 

- Contenedor de [`sga-auth`](https://github.com/LuisCepeda/sga_auth) 
- Contenedor de [`sga-users`](https://github.com/LuisCepeda/sga_users)
- Contenedor de [`sga-geo`](https://github.com/LuisCepeda/sga_geo) (en desarrollo)
- Contenedor de [`sga-mpr`](https://github.com/LuisCepeda/sga_mpr)

Para ello puede usarse el docker-compose, el cual requiere de un archivo con las siguientes variables de entorno (en el drive del proyecto se encuentra el archivo .env.development.local)

```
# MongoDB
COMPOSE_MONGO_INITDB_ROOT_USERNAME
COMPOSE_MONGO_INITDB_ROOT_PASSWORD
COMPOSE_MONGO_INITDB_DATABASE

# PostgreSQL
COMPOSE_POSTGRES_USER
COMPOSE_POSTGRES_PASSWORD
COMPOSE_POSTGRES_DB

# sgaapi
PORT=3003
COMPOSE_MONGODB_URI

# sgausers
USERS_SERVICE_PORT
USERS_DATABASE_URL

# sgaauth
AUTH_SERVICE_PORT
AUTH_USERS_DOMAIN
AUTH_JWT_SECRET

# sgageo
GEO_SERVICE_PORT
```

Primero, ejecute el docker compose:

```bash
docker compose --env-file .env.development.local up --build  -d
```
Verificar que los contenedores se esten ejecutando correctamente.

El proyecto hace uso de las siguientes variables de entorno (.env.local):

```
NEXT_PUBLIC_AUTH_API
NEXT_PUBLIC_REFORESTATION_PROJECTS_API
NEXT_PUBLIC_GEO_API

NEXTAUTH_URL

NEXTAUTH_SECRET

BASE_URL
```

Ya con las variables de entorno establecidas se ejecuta el proyecto usando el siguiente comando

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.






This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
