const Joi = require('joi');
const BaseRequest = require('./base.request');

class UserRequest {
  static create() {
    return BaseRequest.validate(
      Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
      })
    );
  }

  static update() {
    return BaseRequest.validate(
      Joi.object({
        name: Joi.string().min(3).optional(),
        email: Joi.string().email().optional(),
      })
    );
  }
}

module.exports = UserRequest;
