const BaseModel = require('./base.model');

module.exports = new BaseModel({
  table: 'users',
  primaryKey: 'id',

//   relations: {
//     profile: {
//       table: 'profiles',
//       foreignKey: 'user_id',
//     },
//   },
});
