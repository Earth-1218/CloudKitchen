require('dotenv').config();
const { DataTypes } = require('sequelize');
const { dbconnection } = require('../config/database');

const User = dbconnection.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM('user', 'admin'),
    defaultValue: 'user',
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  registeredAt: {
    type: DataTypes.VIRTUAL,
    get() {
      const date = this.getDataValue('createdAt');
      return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    },
    set() {
      throw new Error('Do not try to set the `createdAt` value!');
    },
  }
});

User.prototype.toJSON = function () {
  var values = Object.assign({}, this.get());
  delete values.password;
  delete values.createdAt;
  delete values.updatedAt;
  return values;
}

module.exports = {
  User
};