const express = require('express');

const router = express.Router();

const brandController = require('../controllers/BrandController');

router.get('/:name', brandController.getBrandByName);
router.get('/:id/edit', brandController.edit);
router.put('/:id', brandController.update);
router.post('/store', brandController.store);
router.delete('/:id', brandController.destroy);
router.get('', brandController.getBrand);



module.exports = router;