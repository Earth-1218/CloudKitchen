const { DataTypes } = require('sequelize');
const { dbconnection } = require('../config/database');

const State = dbconnection.define("State", {
  name: {
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
  fips_code: {
    type: DataTypes.STRING,
    allowNull: true
  },
  iso2: {
    type: DataTypes.STRING,
    allowNull: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: true
  },
  longitude: {
    type: DataTypes.DECIMAL(11, 8),
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW
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

State.prototype.toJSON = function () {
  var values = Object.assign({}, this.get());
  delete values.createdAt;
  delete values.updatedAt;
  return values;
}

// State.belongsTo(Country, { foreignKey: 'country_id' });

module.exports = {
  State
};
