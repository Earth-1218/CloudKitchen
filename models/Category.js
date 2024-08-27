const { DataTypes } = require('sequelize');
const { dbconnection } = require('../config/database');
const { Package } = require('./Package');

const Category = dbconnection.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  package_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Package,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'categories',
  timestamps: false
});

// Package.hasMany(Category, { foreignKey: 'package_id' });
// Category.belongsTo(Package, { foreignKey: 'package_id' });

module.exports = Category;


// CREATE TABLE categories (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(255) NOT NULL,
//   package_id INT NOT NULL,
//   FOREIGN KEY (package_id) REFERENCES packages(id) ON DELETE CASCADE
// );
