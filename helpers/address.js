require('dotenv').config();
const { Country } = require('../models/Country');
const { State } = require('../models/State');
const { City } = require('../models/City');

// Function to handle location requests
async function getLocation(place, id) {
  try {
    if (place === 'countries') {
      return await Country.findAll();
    } else if (place === 'states' && id) {
      return await State.findAll({ where: { country_id: id } });
    } else if (place === 'cities' && id) {
      return await City.findAll({ where: { state_id: id } });
    } else {
      return {'status':false,'message':'Some unexpected error'};
    }
  } catch (error) {
    return {'status':false,'message':error.message};
  }
}

module.exports = {
  getLocation
};

