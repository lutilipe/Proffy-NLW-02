import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('connections', (table) => {
    table.increments('id').unsigned().primary()

    table
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    table
      .timestamp('createdAt', { precision: 6 })
      .defaultTo(knex.fn.now(6))
      .notNullable()
  })
}
export async function down(knex: Knex) {
  return knex.schema.dropTable('connections')
}
