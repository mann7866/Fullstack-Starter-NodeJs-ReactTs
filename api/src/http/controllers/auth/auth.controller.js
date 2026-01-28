const authService = require('../../services/auth/auth.service');
const ResponseHelper = require('../../response/responseHelper');

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const data = await authService.login(email, password);

      return ResponseHelper.success(res, data, 'Login berhasil');
    } catch (err) {
      return ResponseHelper.error(res, err.message, 401);
    }
  }
}

module.exports = new AuthController();
