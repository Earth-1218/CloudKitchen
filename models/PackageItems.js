const { DataTypes } = require('sequelize');
const { dbconnection } = require('../config/database');
const { Item } = require('../models/Item');
const { Package } = require('../models/Package');

const PackageItems = dbconnection.define('PackageItems', {
  package_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Item,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
 
}, {
  tableName: 'package_items',
  timestamps: false,
  attributes: {
    items: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.getDataValue('item') ?? {};
      },
      set() {
        throw new Error('Do not try to set the `items` value directly!');
      }
    }
  }
});

// Define associations
// PackageItems.belongsTo(Package, { foreignKey: 'package_id', as: 'package' });

PackageItems.hasOne(Item, {
  foreignKey: {
    name: 'id',
    type: DataTypes.INTEGER,
  },
  as: 'item',
  where: { package_id: dbconnection.literal('package_items.package_id') } 
});

// Item.belongsTo(PackageItems, {as: 'item'});

// Define associations
// PackageItems.belongsTo(Item, { foreignKey: 'item_id', as: 'item', where: { package_id: dbconnection.literal('package_items.package_id') } });

module.exports = {
  PackageItems
};
