var express = require('express');
var router = express.Router();
const { dbconnection } = require('../config/database');
const { sql_queries } = require('../database/queries/sql');
const { Package } = require('../models/Package');
const { PackageItems } = require('../models/PackageItems');
const { Item } = require('../models/Item');
const { removeNulls } = require('../helpers/removeNulls');
const { authenticateUser } = require('../middlewares/auth');

router.get('/', authenticateUser, async (req, res) => {
  try {
    var packages = await dbconnection.query(sql_queries.list_packages_with_items);

    // Apply removeNulls to each package and its items
    var uniquePackages = packages.map(pkg => removeNulls(pkg))[0];

    var response = {
      'code': 200,
      'status': true,
      'message': 'success',
      'data': uniquePackages
    }
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    response = {
      'code': 500,
      'status': false,
      'message': 'failure',
      'error': 'Error while fetching packages'
    }
    res.status(500).json(response);
  }
});

router.post('/create', authenticateUser, async (req, res) => {
  try {
    packageData = req.body;
    ItemsData = packageData.items;    
    const existingPackage = await Package.findOne({
      where: {
        name: packageData.name
      }
    });
    if (existingPackage) {
      return res.status(409).json({
        'code': 409, 
        'status': false,
        'message': 'failure',
        'error': 'Package already exists, cannot create duplicate package'
      });
    }
    var package = await Package.create({
      'name': packageData.name,
      'currency':'INR',
      'price': packageData.price
    });
    ItemsData.forEach(async item_id => {
      await PackageItems.create({
        'package_id': package.id,
        'item_id': item_id,
      });
    });
    res.status(200).json({
      'code': 200, 
      'status': true,
      'message': 'success',
      'data': package
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      'code': 500, 
      'status': false,
      'message': 'failure',
      'error': 'Error while creating package'
    });
  }
});

module.exports = router;