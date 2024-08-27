const { DataTypes } = require('sequelize');
const { dbconnection } = require('../config/database');
const Package = require('./Package');

const SpecialityLiveCounterOption = dbconnection.define('SpecialityLiveCounterOption', {
  option_name: {
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
  tableName: 'speciality_live_counter_options',
  timestamps: false
});

Package.hasMany(SpecialityLiveCounterOption, { foreignKey: 'package_id' });
SpecialityLiveCounterOption.belongsTo(Package, { foreignKey: 'package_id' });

module.exports = SpecialityLiveCounterOption;
