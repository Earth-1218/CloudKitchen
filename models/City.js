const { DataTypes } = require('sequelize');
const { dbconnection } = require('../config/database');

const City = dbconnection.define("City", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  state_code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  country_code: {
    type: DataTypes.STRING(2),
    allowNull: false
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: false
  },
  longitude: {
    type: DataTypes.DECIMAL(11, 8),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: '2024-01-01 06:31:01'
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  flag: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  wikiDataId: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Rapid API GeoDB Cities'
  }
});

City.prototype.toJSON = function () {
  var values = Object.assign({}, this.get());
  delete values.createdAt;
  delete values.updatedAt;
  return values;
}

// City.belongsTo(State, { foreignKey: 'state_id' });
// City.belongsTo(Country, { foreignKey: 'country_id' });


module.exports = {
  City
};
