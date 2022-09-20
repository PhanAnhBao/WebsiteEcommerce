const express = require('express');

const router = express.Router();

const brandController = require('../controllers/BrandController');

router.get('/:id/show', brandController.getBrandById);
router.get('/:id', brandController.getProductAllowBrand);
router.get('', brandController.getBrand);



module.exports = router;