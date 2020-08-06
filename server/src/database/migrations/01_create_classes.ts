import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('classes', (table) => {
    table.increments('id').unsigned().primary()
    table.string('subject').notNullable()
    table.decimal('cost').notNullable()

    table
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
}
export async function down(knex: Knex) {
  return knex.schema.dropTable('classes')
}
