## Installation

```sh
npm install
npm run prisma:generate -- --allow-no-models
```

## Development

```sh
npm run db:migrate
npm run dev
```

## Database Seeding

> <span style="color: red; font-weight: bold;">! important:</span> First, ensure Docker Desktop is running
>
> Then start the development server with docker container for PostgreSQL:

```sh
npm run start:dev
```

> <span style="color: red; font-weight: bold;">! important:</span> To avoid duplications when re-seeding, follow these steps:

```sh
# 1. Reset the database (this will clear all existing data)
npx prisma migrate reset --force

# 2. Apply migrations
npm run db:migrate

# 3. Seed the database with initial data
npm run db:seed
```

## Linting/Formatting

```sh
npm run lint
npm run format
```

## Testing

```sh
npm run test
```

## Deploying

```sh
# install dependencies
npm install --include=dev

# transpile prisma schema
npm run prisma:generate -- --allow-no-models

# transpile TypeScript into JavaScript
npm run build
npm run sentry:sourcemaps

# apply database migrations/seeders
npm run db:migrate
npm run db:seed

# start application
npm run start
```
