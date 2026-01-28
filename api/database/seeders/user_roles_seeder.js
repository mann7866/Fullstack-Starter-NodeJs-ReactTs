const { v4: uuidv4 } = require('uuid');

module.exports = async function seedUserRoles(knex) {
  const adminRole = await knex('roles').where('name', 'admin').first();
  const teacherRole = await knex('roles').where('name', 'teacher').first();
  const studentRole = await knex('roles').where('name', 'student').first();

  const adminUser = await knex('users').where('email', 'admin@mail.com').first();
  const teacherUser = await knex('users').where('email', 'teacher@mail.com').first();
  const studentUser = await knex('users').where('email', 'student@mail.com').first();

  if (!adminRole || !adminUser) {
    throw new Error('Seeder dependency belum terpenuhi');
  }

  await knex('user_roles').del();

  await knex('user_roles').insert([
    { id: uuidv4(), user_id: adminUser.id, role_id: adminRole.id },
    { id: uuidv4(), user_id: teacherUser.id, role_id: teacherRole.id },
    { id: uuidv4(), user_id: studentUser.id, role_id: studentRole.id },
  ]);
};
