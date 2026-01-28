class ResponseHelper {
  static success(res, data = null, message = 'Success', statusCode = 200, meta = null) {
    const response = {
      success: true,
      message,
      data,
    };

    if (meta) {
      response.meta = meta;
    }

    return res.status(statusCode).json(response);
  }

  static error(res, message = 'Error', statusCode = 500, errors = null) {
    const response = {
      success: false,
      message,
      errors,
    };

    if (errors) {
      response.errors = errors;
    }

    return res.status(statusCode).json(response);
  }
}

module.exports = ResponseHelper;
