# Setup project locally

## Database

For the database we already have a `docker-compose.yml` file that will create a PostgreSQL database.

To run the database locally, run the following command:

```bash
docker-compose up -d
```

To stop the database, run the following command:

```bash
docker-compose down
```

### Prisma

Before running the migrations, you need to initialize the environment variables.

For the current configuration just replace the env variables with this values:

```
POSTGRES_PRISMA_URL="postgres://postgres:root@localhost:5432/wakidb?pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NON_POOLING="postgres://postgres:root@localhost:5432/wakidb"
```

To run the migrations, run the following command:

```bash
npx prisma db push
or
yarn db:push # If you are using yarn we have a script for you on this project
```

To generate the initial data run:

```bash
npx prisma db seed
or
yarn db:seed # If you are using yarn we have a script for you on this project
```


