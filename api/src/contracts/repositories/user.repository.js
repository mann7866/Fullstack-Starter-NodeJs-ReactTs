const db = require('../../config/database');
const UserInterface = require('../interfaces/user.interface');
const UserModel = require('../../http/models/user.model');

class UserRepository extends UserInterface {
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
    return db(UserModel.table).insert(data);
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

module.exports = new UserRepository();
