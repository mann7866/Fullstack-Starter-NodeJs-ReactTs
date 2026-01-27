const userService = require("../services/user.service");
const ResponseHelper = require("../response/responseHelper");
const UserResource = require("../resources/user.resource");

class UserController {
  constructor() {
    this.userService = userService;

    this.index = this.index.bind(this);
    this.show = this.show.bind(this);
    this.store = this.store.bind(this);
    this.update = this.update.bind(this);
    this.destroy = this.destroy.bind(this);
  }

  async index(req, res) {
    try {
      const users = await this.userService.getAll();

      return ResponseHelper.success(
        res,
        UserResource.collection(users),
        "List users berhasil",
      );
    } catch (error) {
      return ResponseHelper.error(res, error.message, 500);
    }
  }

  async show(req, res) {
    try {
      const user = await this.userService.getById(req.params.id);

      if (!user) {
        return ResponseHelper.error(res, "User tidak ditemukan", 404);
      }

      return ResponseHelper.success(
        res,
        UserResource.single(user),
        "Detail user",
      );
    } catch (error) {
      return ResponseHelper.error(res, error.message, 500);
    }
  }

  async store(req, res) {
    try {
      await this.userService.createUser(req.validated);

      return ResponseHelper.success(res, null, "User berhasil dibuat", 201);
    } catch (error) {
      return ResponseHelper.error(
        res,
        error.message,
        error.status || 500, // ⬅️ JANGAN HARD-CODE 500
        error.errors || null, // ⬅️ INI KUNCI UTAMANYA
      );
    }
  }

  async update(req, res) {
    try {
      await this.userService.updateUser(req.params.id, req.validated);

      return ResponseHelper.success(res, null, "User berhasil diupdate");
    } catch (error) {
      return ResponseHelper.error(
        res,
        error.message,
        error.status || 500, // ⬅️ JANGAN HARD-CODE 500
        error.errors || null, // ⬅️ INI KUNCI UTAMANYA
      );
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      await this.userService.deleteUser(id);

      return ResponseHelper.success(res, null, "User berhasil dihapus");
    } catch (error) {
      return ResponseHelper.error(
        res,
        error.message || "Gagal menghapus user",
        500,
      );
    }
  }
}

module.exports = new UserController();
