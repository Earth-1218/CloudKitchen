var express = require('express');
var router = express.Router();
const { dbconnection } = require('../config/database');
const { sql_queries } = require('../database/queries/sql');
const { Item } = require('../models/Item');
const { removeNulls } = require('../helpers/removeNulls');
const { getImageFromBase64String } = require('../helpers/getImageFromBase64String');
const { authenticateUser } = require('../middlewares/auth');
const { itemImagePath } = 'public/upload/images/';

router.get('/', authenticateUser, async (req, res) => {
  try {
    var items = await dbconnection.query(sql_queries.list_items_with_category);
  
    // Apply removeNulls to each package and its items
    var uniqueItems = items.map(item => removeNulls(item))[0];

    var response = {
      'code': 200,
      'status': true,
      'message': 'success',
      'data': uniqueItems
    }
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    response = {
      'code': 500,
      'status': false,
      'message': 'failure',
      'error': 'Error while fetching items'
    }
    res.status(500).json(response);
  }
});

router.post('/create', authenticateUser, async (req, res) => {
  try {
    itemData = req.body;   
    const existingItem = await Item.findOne({
      where: {
        name: itemData.name
      }
    });
    if (existingItem) {
      return res.status(409).json({
        'code': 409, 
        'status': false,
        'message': 'failure',
        'error': 'Item already exists, cannot create duplicate item'
      });
    }
    var image = (itemData.image && itemData.image != '') ? getImageFromBase64String(itemData.image) : '';
    var item = await Item.create({
      'category_id': itemData.category_id,
      'name': itemData.name,
      'description': itemData.description,
      'price': itemData.price,
      'image': image,
    });
    res.status(200).json({
      'code': 200, 
      'status': true,
      'message': 'success',
      'data': item
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