var express = require('express');
var router = express.Router();
const { authenticateUser } = require('../middlewares/auth');

router.get('/', authenticateUser, async (req, res) => {
    var response = {
        'code': 200,
        'status': true,
        'message': 'success',
        'data': req.user
    }
    res.status(200).json(response);
});

module.exports = router;