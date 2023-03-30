const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize-client");


class Versionpoll extends Model {}

Versionpoll.init({
  name: {
    type: DataTypes.STRING,
    allowNull:false
  }
}, {
  sequelize,
  tableName: "version"
});

module.exports = Versionpoll;
