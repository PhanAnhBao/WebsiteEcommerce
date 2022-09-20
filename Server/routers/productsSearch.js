const express = require('express');

const router = express.Router();

const productController = require('../controllers/ProductController');


router.get('/', productController.search);
router.get('/:name', productController.getProductByName);

module.exports = router;