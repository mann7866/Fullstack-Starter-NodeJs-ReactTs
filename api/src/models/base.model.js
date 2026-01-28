class BaseModel {
  constructor({ table, primaryKey = "id", relations = {} }) {
    this.table = table;
    this.primaryKey = primaryKey;
    this.relations = relations;
  }

  withBelongsTo(relationName, db) {
    const relation = this.relations[relationName];

    if (!relation || relation.type !== "belongsTo") {
      throw new Error(`Relation "${relationName}" bukan belongsTo`);
    }

    return db(this.table)
      .leftJoin(
        relation.table,
        `${relation.table}.${relation.ownerKey || relation.primaryKey || "id"}`,
        `${this.table}.${relation.foreignKey}`,
      )
      .select(`${this.table}.*`);
  }

  withHasOne(relationName, db) {
    const relation = this.relations[relationName];

    if (!relation || relation.type !== "hasOne") {
      throw new Error(`Relation "${relationName}" bukan hasOne`);
    }

    return db(this.table)
      .leftJoin(
        relation.table,
        `${relation.table}.${relation.foreignKey}`,
        `${this.table}.${this.primaryKey}`,
      )
      .select(`${this.table}.*`);
  }

  withHasMany(relationName, db) {
    const relation = this.relations[relationName];

    if (!relation || relation.type !== "hasMany") {
      throw new Error(`Relation "${relationName}" bukan hasMany`);
    }

    return db(this.table)
      .leftJoin(
        relation.table,
        `${relation.table}.${relation.foreignKey}`,
        `${this.table}.${this.primaryKey}`,
      )
      .select(`${this.table}.*`);
  }

  async withPivotMany(relationName, db, id) {
    const relation = this.relations[relationName];

    if (!relation || relation.type !== "belongsToMany") {
      throw new Error(`Relation "${relationName}" bukan belongsToMany`);
    }

    return db(relation.table)
      .join(
        relation.pivotTable,
        `${relation.table}.${relation.relatedPrimaryKey}`,
        `${relation.pivotTable}.${relation.relatedKey}`,
      )
      .where(`${relation.pivotTable}.${relation.foreignKey}`, id)
      .select(...relation.select);
  }

  withPivot(relationName, db) {
    const relation = this.relations[relationName];

    if (!relation || relation.type !== "belongsToMany") {
      throw new Error(`Relation "${relationName}" bukan belongsToMany`);
    }

    return db(this.table)
      .join(
        relation.pivotTable,
        `${relation.pivotTable}.${relation.foreignKey}`,
        `${this.table}.${this.primaryKey}`,
      )
      .join(
        relation.table,
        `${relation.table}.${relation.relatedPrimaryKey}`,
        `${relation.pivotTable}.${relation.relatedKey}`,
      )
      .select(
        `${this.table}.*`,
        ...relation.select.map((col) => `${relation.table}.${col}`),
      );
  }
}

module.exports = BaseModel;
