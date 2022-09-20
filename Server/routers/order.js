const express = require('express');

const router = express.Router();

const orderController = require('../controllers/OrderController');

router.post('/store', orderController.store);
router.get('/:id/show', orderController.getOrderSearch);
router.delete('/:id', orderController.destroy);
router.get('', orderController.getOrder);


module.exports = router;