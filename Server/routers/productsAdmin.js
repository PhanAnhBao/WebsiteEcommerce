const express = require('express');

const router = express.Router();

const productController = require('../controllers/ProductController');
router.get('/:name', productController.getProductByName);
router.get('/:id/edit', productController.edit);
router.put('/:id', productController.update);
router.post('/store', productController.store);
router.delete('/:id', productController.destroy);
router.get('', productController.getProduct);


   

module.exports = router;