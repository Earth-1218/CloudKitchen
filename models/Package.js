const { DataTypes } = require('sequelize');
const { dbconnection } = require('../config/database');
const { PackageItems } = require('../models/PackageItems');

const Package = dbconnection.define('Package', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  currency: {
    type: DataTypes.STRING(10),
    allowNull: false
  }
}, {
  tableName: 'packages',
  timestamps: true
});

Package.hasMany(PackageItems,{
  foreignKey: {
    name: 'package_id',
    type: DataTypes.INTEGER,
  },
  as: 'package_item'
});

module.exports = {
  Package
};
