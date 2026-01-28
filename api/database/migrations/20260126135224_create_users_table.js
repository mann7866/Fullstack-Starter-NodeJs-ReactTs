exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('id', 36).primary()
    table.string('name', 255).notNullable()
    table.string('email', 255).notNullable()
    table.string('password', 255).notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users')
}
