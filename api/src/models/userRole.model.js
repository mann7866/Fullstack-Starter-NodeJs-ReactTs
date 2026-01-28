const BaseModel = require('./base.model');

module.exports = new BaseModel({
  table: 'user_roles',
  primaryKey: 'id',

  foreignKeys: {
    user: 'user_id',
    role: 'role_id',
  },
});
