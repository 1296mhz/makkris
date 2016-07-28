var express = require('express');
var router = express.Router();
var status = require('../controllers/status');


router.get('/', status.findStatusAll);
router.get('/:id', status.findStatusById);
router.post('/', status.addStatus);
router.put('/:id', status.updateStatus);
router.delete('/:id', status.deleteStatus);

module.exports = router;