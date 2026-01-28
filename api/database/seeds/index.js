const seedRoles = require('../seeders/roles_seeder');
const seedUsers = require('../seeders/users_seeder');
const seedUserRoles = require('../seeders/user_roles_seeder');

exports.seed = async function (knex) {
  console.log('🌱 Seeding database...');

  await seedRoles(knex);
  await seedUsers(knex);
  await seedUserRoles(knex);

  console.log('✅ Seeding selesai');
};
