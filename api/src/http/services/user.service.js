const userRepository = require("../../contracts/repositories/user.repository");

class UserService {
  constructor(userRepo) {
    this.userRepository = userRepo;
  }

  async getAll() {
    return this.userRepository.all();
  }

  async getById(id) {
    return this.userRepository.find(id);
  }

  async createUser(data) {
    const { email } = data;

    // 🔍 VALIDASI UNIQUE EMAIL
    const exists = await this.userRepository.findByEmail(email);

    if (exists) {
      const error = new Error("Validation error");
      error.status = 422;
      error.errors = {
        email: "Email already exists",
      };
      throw error;
    }

    return this.userRepository.create(data);
  }

  async updateUser(id, data) {
    const { email } = data;

    if (email) {
      const exists = await this.userRepository.findByEmail(email);

      if (exists && exists.id !== Number(id)) {
        const error = new Error("Validation error");
        error.status = 422;
        error.errors = {
          email: "Email already exists",
        };
        throw error;
      }
    }

    return this.userRepository.update(id, data);
  }

  async deleteUser(id) {
    return this.userRepository.delete(id);
  }
}

// inject repository
module.exports = new UserService(userRepository);
