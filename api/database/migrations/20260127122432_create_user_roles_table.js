exports.up = function (knex) {
  return knex.schema.createTable('user_roles', table => {
    table.string('id', 36).primary();
    table.string('user_id', 36)
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');

    table.string('role_id', 36)
      .references('id')
      .inTable('roles')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('user_roles');
};
