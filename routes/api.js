const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register');
const loginController = require('../controllers/login');
const profileController = require('../controllers/profile');
const locationController = require('../controllers/location');
const packageController = require('../controllers/package');
const itemController = require('../controllers/item');

//all api routes (non protected)
router.use('/register', registerController);
router.use('/login', loginController); 

//all api routes (protected)
router.use('/profile', profileController); 
router.use('/location', locationController); 
router.use('/package', packageController);
router.use('/item', itemController); 

module.exports = router;

