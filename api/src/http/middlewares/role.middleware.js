const ResponseHelper = require('../response/responseHelper');

module.exports = function role(allowedRoles = []) {
  return (req, res, next) => {
    const userRoles = req.user.roles || [];

    const hasAccess = allowedRoles.some(role =>
      userRoles.includes(role)
    );

    if (!hasAccess) {
      return ResponseHelper.error(res, 'Akses ditolak', 403);
    }

    next();
  };
};
