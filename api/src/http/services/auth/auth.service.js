const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepo = require('../../../contracts/repositories/user.repository');

class AuthService {

  async login(email, password) {
    const user = await userRepo.findByEmail(email);
    if (!user) throw new Error('Email tidak ditemukan');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error('Password salah');

    const roles = await userRepo.findRoles(user.id);

    const token = jwt.sign(
      {
        id: user.id,
        roles: roles.map(r => r.name),
      },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return { token };
  }

}

module.exports = new AuthService();
