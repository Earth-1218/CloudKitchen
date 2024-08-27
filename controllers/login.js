var path = require('path');
const express = require('express');
const router = express.Router();
const { User } = require('../models/User');
const { generateToken, comparePassword } = require('../middlewares/auth');

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      var response = {
        'code': 400,
        'status': false,
        'message': 'failure',
        'error': 'Invalid email or password.'
      }
      return res.status(400).json(response);
    }
    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword) {
      var response = {
        'code': 400,
        'status': false,
        'message': 'failure',
        'error': 'Invalid email or password.'
      }
      return res.status(400).json();
    }
    const token = generateToken({ id: user.id, email: user.email });
    var response = {
      'code': 200,
      'status': true,
      'message': 'success',
      'api_token': token
    }
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    var response = {
      'code': 500,
      'status': false,
      'message': 'failure',
      'error': 'Error in login.'
    }
    res.status(500).json(response);
  }
});

module.exports = router;
