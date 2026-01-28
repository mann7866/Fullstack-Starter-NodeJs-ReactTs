const db = require('../../config/database');
const { v4: uuidv4 } = require('uuid');
const UserModel = require('../../models/user.model');

const guardRepository = require('../guards/repo.guard');
const rules = require('../guards/rules/user.rule');

class UserRepository {
  async all() {
    return db(UserModel.table).select('*');
  }

  async find(id) {
    return db(UserModel.table)
      .where(UserModel.primaryKey, id)
      .first();
  }

  async findByEmail(email) {
    return db(UserModel.table)
      .where('email', email)
      .first();
  }

  async create(data) {
    return db(UserModel.table).insert({
      id: uuidv4(),
      ...data,
    });
  }

  async findRoles(userId) {
    return UserModel
      .withPivot('roles', db)
      .where(`${UserModel.table}.id`, userId);
  }

  async update(id, data) {
    return db(UserModel.table)
      .where(UserModel.primaryKey, id)
      .update(data);
  }

  async delete(id) {
    return db(UserModel.table)
      .where(UserModel.primaryKey, id)
      .del();
  }
}
module.exports = guardRepository(new UserRepository(), rules);
