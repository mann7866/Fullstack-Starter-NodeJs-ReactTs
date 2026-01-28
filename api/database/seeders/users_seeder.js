const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

module.exports = async function seedUsers(knex) {
  await knex('users').del();

  const password = await bcrypt.hash('password', 10);

  await knex('users').insert([
    {
      id: uuidv4(),
      name: 'Admin User',
      email: 'admin@mail.com',
      password,
    },
    {
      id: uuidv4(),
      name: 'Teacher User',
      email: 'teacher@mail.com',
      password,
    },
    {
      id: uuidv4(),
      name: 'Student User',
      email: 'student@mail.com',
      password,
    },
  ]);
};
