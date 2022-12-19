"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stories_Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Stories, Actions }) {
      this.belongsTo(User, { foreignKey: "userID" });
      this.belongsTo(Stories, { foreignKey: "storyID" });
      this.belongsTo(Actions, { foreignKey: "actionsID" });
    }
  }
  Stories_Users.init(
    {
      userID: DataTypes.NUMBER,
      storyID: DataTypes.NUMBER,
      actionsID: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Stories_Users",
    }
  );
  return Stories_Users;
};
