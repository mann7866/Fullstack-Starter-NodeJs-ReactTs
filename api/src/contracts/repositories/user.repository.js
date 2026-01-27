const db = require("../../config/database");
const UserInterface = require("../interfaces/user.interface");

class UserRepository extends UserInterface {
  async all() {
    return db("users").select("*");
  }

  async find(id) {
    return db("users").where("id", id).first();
  }

  async findByEmail(email) {
    return db("users").where("email", email).first();
  }

  async create(data) {
    return db("users").insert(data);
  }

  async update(id, data) {
    return db("users").where("id", id).update(data);
  }

  async delete(id) {
    return db("users").where("id", id).del();
  }
}

module.exports = new UserRepository();
