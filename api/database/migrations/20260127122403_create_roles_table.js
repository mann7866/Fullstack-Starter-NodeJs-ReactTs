exports.up = function (knex) {
  return knex.schema.createTable('roles', table => {
    table.string('id', 36).primary();
    table.string('name').unique().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('roles');
};
