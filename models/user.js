"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Role }) {
      this.belongsTo(Role, { foreignKey: "roleID" });
    }
  }
  User.init(
    {
      fullName: DataTypes.STRING,
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
      roleID: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
