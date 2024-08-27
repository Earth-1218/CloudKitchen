var express = require('express');
var router = express.Router();
const { getLocation } = require('../helpers/address');
const { authenticateUser } = require('../middlewares/auth');

router.post('/', authenticateUser, async (req, res) => {
    try {
        const location = await getLocation(req.body.place, req.body.id);
        var response = {
            'code': 200,
            'status': true,
            'message': 'success',
            'data': location
        }
        res.status(200).json(response);
    } catch (error) {
        var response = {
            'code': 500,
            'status': true, 
            'message': 'failure', 
            'error': error.message
        }
        res.status(500).json(response);
    }
});

module.exports = router;