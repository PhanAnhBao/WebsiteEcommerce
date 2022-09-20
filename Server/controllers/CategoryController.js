const Category = require('../models/Product-Categories');
const Product = require('../models/Product');

class CategoryController {

    // [GET] /api/categories
    getCategory(req, res, next) {
        Category.find({}).sort({'createdAt': -1})
        .then(cate => {
            res.json(cate);
        })
        .catch(next);
    }

    // [GET] /api/categories/:id/show
    getCategoryById(req, res, next) {
        Category.findById(req.params.id)
        .then(cate => {
            res.json(cate);
        })
        .catch(next);
    }

    // [GET] /api/categories/:name
    getCategoryByName(req, res, next) {
        Category.find({category_name:  new RegExp(req.params.name, 'i')})
            .then(cus => {
                res.json(cus);
            })
            .catch(next);
    }

    // [GET] /api/category/:id
    getProductAllowCate(req, res, next) {
        Product.find({ categoryIds: req.params.id }).populate('categoryIds').sort({'createdAt': -1})
            .then(product => {
                res.json(product);
            })
            .catch(next);
    }

    // [GET] /api/categories/:slug
    show(req, res, next) {
        Category.findOne({ category_slug: req.params.slug })
            .then(pro => res.json(pro));
    }

    // [GET] /api/:id/categories
    edit(req, res, next) {
        Category.findById(req.params.id)
        .then((pro) => {
            res.json(pro);
        })
    }

    // [POST] /api/categories/store
    store(req, res, next) {
        const category = new Category(req.body);
        category.save();
        res.send('SUCCESS');
    } 

    // [PUT] /api/categories/:id
    update(req, res, next) {
        Category.updateOne({_id: req.params.id}, req.body)
        .then(() => res.json())
        .catch(next);
    }

    // [DELETE] /api/categories/:id
    destroy(req, res, next) {
        Category.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CategoryController;