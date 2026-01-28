const jwt = require('jsonwebtoken');
const ResponseHelper = require('../response/responseHelper');

module.exports = function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return ResponseHelper.error(res, 'Token tidak ada', 401);
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, roles }
    next();
  } catch {
    return ResponseHelper.error(res, 'Token tidak valid', 401);
  }
};
