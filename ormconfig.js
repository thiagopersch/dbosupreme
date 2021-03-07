module.exports = {
  name: 'default',
  type: 'postgres',
  host: process.env.POSTGRES_HOST ?? '127.0.01',
  port: process.env.POSTGRES_PORT ?? 5432,
  username: process.env.POSTGRES_USERNAME ?? 'postgres',
  password: process.env.POSTGRES_PASSWORD ?? 'sema-dev',
  database: process.env.POSTGRES_DATABASE ?? 'sema-dev',
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
};
