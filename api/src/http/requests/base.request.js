const ResponseHelper = require('../response/responseHelper');

class BaseRequest {
  static validate(schema) {
    return (req, res, next) => {
      const { error, value } = schema.validate(req.body, {
        abortEarly: false,
      });

      if (error) {
        const errors = {};
        error.details.forEach(err => {
          errors[err.path[0]] = err.message;
        });

        return ResponseHelper.error(
          res,
          'Validation error',
          422,
          errors
        );
      }

      // 👇 INI KUNCINYA
      req.validated = value;

      next();
    };
  }
}

module.exports = BaseRequest;
