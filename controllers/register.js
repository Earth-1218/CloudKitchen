var path = require('path');
const express = require('express');
const router = express.Router();
const { User, sequelize } = require('../models/User');
const { generateToken, hashPassword } = require('../middlewares/auth');

router.post('/', (req, res) => {
  sequelize.sync().then(() => {
    User.findOne({ where: { email: req.body.email } }).then(existingUser => {
      if (existingUser) {
        var response = {
          'code': 400,
          'status': false,
          'message': 'failure',
          'error': 'User already exists with this email'
        }
        res.status(400).json(response);
      } else {
        hashPassword(req.body.password).then(hashedPassword => {
          User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
          }).then(user => {
            const token = generateToken({ id: user.id, email: user.email });
            var response = {
              'code': 200,
              'status': true,
              'message': 'success',
              'api_token': token
            }
            res.json(response);
          }).catch(error => {
            console.error('Failed to create a new record:', error);
            var response = {
              'code': 500,
              'status': false,
              'message': 'failure',
              'error': 'Failed to create user'
            }
            res.status(500).json(response);
          });
        }).catch(error => {
          console.error('Failed to create user:', error);
          var response = {
            'code': 500,
            'status': false,
            'message': 'failure',
            'error': 'Failed to create user'
          }
          res.status(500).json(response);
        });
      }
    }).catch(error => {
      console.error('Failed to check if user exists:', error);
      var response = {
        'code': 500,
        'status': false,
        'message': 'failure',
        'error': 'Failed to create user'
      }
      res.status(500).json(response);
    });
  }).catch(error => {
    console.error('Failed to create user:', error);
    var response = {
      'code': 500,
      'status': false,
      'message': 'failure',
      'error': 'Failed to create user'
    }
    res.status(500).json(response);
  });
});

module.exports = router;
