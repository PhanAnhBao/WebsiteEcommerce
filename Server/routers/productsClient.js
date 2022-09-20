const express = require('express');

const router = express.Router();

const productController = require('../controllers/ProductController');

router.get('/limit', productController.getProductLimited);
router.get('', productController.getProduct);
router.get('/:slug', productController.show);

   

module.exports = router;