import { knex as setupKnex } from 'knex'

export const knex = setupKnex({
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db', // onde esta sendo salvo o banco de dados
  },
})
