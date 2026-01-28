const { v4: uuidv4 } = require('uuid');

module.exports = async function seedRoles(knex) {
  await knex('roles').del();

  await knex('roles').insert([
    { id: uuidv4(), name: 'admin' },
    { id: uuidv4(), name: 'teacher' },
    { id: uuidv4(), name: 'student' },
  ]);
};
