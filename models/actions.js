"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Actions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Stories_Users }) {
      this.hasMany(Stories_Users, { foreignKey: "actions" });
    }
  }
  Actions.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Actions",
    }
  );
  return Actions;
};
