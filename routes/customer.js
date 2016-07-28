/**
 * Created by cshlovjah on 19.07.16.
 */
var express = require('express');
var router = express.Router();
var customer = require('../controllers/customer');

router.get('/', customer.findCustomerAll);
router.get('/:id', customer.findCustomerById);
router.post('/', customer.addCustomer);
router.put('/:id', customer.updateCustomer);
router.delete('/:id', customer.deleteCustomer);

module.exports = router;