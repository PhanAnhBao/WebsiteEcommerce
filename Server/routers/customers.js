const express = require('express');

const router = express.Router();

const customerController = require('../controllers/CustomerController');

router.get('/:name', customerController.getCustomerByName);
router.get('/:id/edit', customerController.edit);
router.put('/:id', customerController.update);
router.post('/store', customerController.store);
router.post('/login', customerController.login);
router.delete('/:id', customerController.destroy);
router.get('', customerController.getCustomer);


module.exports = router;