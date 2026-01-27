class BaseModel {
  constructor({ table, primaryKey = 'id', relations = {} }) {
    this.table = table;
    this.primaryKey = primaryKey;
    this.relations = relations;
  }

  with(relationName, db) {
    const relation = this.relations[relationName];
    if (!relation) {
      throw new Error(`Relation "${relationName}" tidak ditemukan`);
    }

    return db(this.table)
      .leftJoin(
        relation.table,
        `${relation.table}.${relation.foreignKey}`,
        `${this.table}.${this.primaryKey}`
      )
      .select(`${this.table}.*`);
  }

  withMany(relationName, db) {
    const relation = this.relations[relationName];
    if (!relation) {
      throw new Error(`Relation "${relationName}" tidak ditemukan`);
    }

    return db(this.table)
      .leftJoin(
        relation.table,
        `${relation.table}.${relation.foreignKey}`,
        `${this.table}.${this.primaryKey}`
      )
      .select(
        `${this.table}.*`,
        `${relation.table}.${relation.select || '*'}`
      );
  }
}

module.exports = BaseModel;
