const express = require('express');
const router = express.Router();
var path = require('path');

//all web routes 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});


router.get('/public/upload/images/:filename', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/upload/images/', req.params.filename));
});

module.exports = router;
