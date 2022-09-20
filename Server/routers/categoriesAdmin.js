const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/CategoryController');


router.get('/:name', categoryController.getCategoryByName);
router.get('/:id/edit', categoryController.edit);
router.put('/:id', categoryController.update);
router.post('/store', categoryController.store);
router.delete('/:id', categoryController.destroy);
router.get('', categoryController.getCategory);
router.get('/:slug', categoryController.show);


module.exports = router;