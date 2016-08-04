var express = require('express');
var router = express.Router();
var status = require('../controllers/status');
var Utilz = require('../libs/Utilz');
var utilz = new Utilz();


router.get('/', utilz.isLoggedIn);

router.get('/', status.findStatusAll);


module.exports = router;