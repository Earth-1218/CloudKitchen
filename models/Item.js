const { DataTypes } = require('sequelize');
const { dbconnection } = require('../config/database');
const Category = require('./Category'); 
const { PackageItems } = require('./PackageItems');
const itemImagePath = 'public/upload/images/';

const Item = dbconnection.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      return `${process.env.BASE_URL}${itemImagePath}${this.getDataValue('image')}`
    }
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'items',
  timestamps: false
});

// Category.hasMany(Item, { foreignKey: 'category_id' });
// Item.belongsTo(Category, { foreignKey: 'category_id' });
// Item.belongsTo(PackageItems);

// Item.belongsTo(PackageItems, {foreignKey: 'item_id'});

// module.exports = Item;


module.exports = {
  Item
};


