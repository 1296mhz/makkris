var express = require('express');
var router = express.Router();
var typeOfWork = require('../controllers/typeOfWork');


router.get('/', typeOfWork.findTypeOfWorkAll);
router.get('/:id', typeOfWork.findTypeOfWorkById);
router.post('/', typeOfWork.addTypeOfWork);
router.put('/:id', typeOfWork.updateTypeOfWork);
router.delete('/:id', typeOfWork.deleteTypeOfWork);

module.exports = router;