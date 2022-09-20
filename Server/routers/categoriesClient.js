const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/CategoryController');

router.get('/:id/show', categoryController.getCategoryById);
router.get('/:id', categoryController.getProductAllowCate);
router.get('', categoryController.getCategory);


module.exports = router;