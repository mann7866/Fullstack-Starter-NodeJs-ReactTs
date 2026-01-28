const BaseModel = require('./base.model');

module.exports = new BaseModel({
  table: 'users',
  primaryKey: 'id',

  relations: {
    roles: {
      type: 'belongsToMany',
      table: 'roles',
      pivotTable: 'user_roles',
      foreignKey: 'user_id',
      relatedKey: 'role_id',
      relatedPrimaryKey: 'id',
      select: ['name'],
    },
  },
});
