const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize-client");

class User extends Model {}

User.init({
  pseudo: {
    type: DataTypes.STRING
  },
  /* firstname: {
    type: DataTypes.STRING
  }, */
  /* lastname: {
    type: DataTypes.STRING
  }, */
  /* email: {
    type: DataTypes.STRING
  }, */
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role:{
    type: DataTypes.ENUM(["member", "admin"]),
    allowNull:false,
    defaultValue:"member"
  }
}, {
  sequelize,
  tableName: "user"
});

module.exports = User;