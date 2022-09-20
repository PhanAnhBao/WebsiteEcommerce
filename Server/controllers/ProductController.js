const { isObjectIdOrHexString } = require('mongoose');
const Product = require('../models/Product');
const Category = require('../models/Product-Categories');
class ProductController {

    // [GET] /api/products/:slug
    show(req, res, next) {
        Product.findOne({ product_slug: req.params.slug }).populate('categoryIds brandIds')
            .then(pro => res.json(pro));
    }

    // [GET] /api/products
    getProduct(req, res, next) {
        Product.find({}).populate('brandIds').sort({'createdAt': -1})
            .then(product => {
                res.json(product);
            })
            .catch(next);
    }

    // [GET] /api/products/:name
    getProductByName(req, res, next) {
        Product.find({product_name:  new RegExp(req.params.name, 'i')})
            .then(product => {
                res.json(product);
            })
            .catch(next);
    }


    // [GET] /api/products?name=''
    search(req, res, next) {
        Product.find({product_name:  new RegExp(req.query.name, 'i')}).sort({'createdAt': -1})
            .then(product => {
                res.json(product);
            })
            .catch(next);
    }

    // [GET] /api/products/limit
    getProductLimited(req, res, next) {
        Product.find({}).sort({'createdAt': -1})
            .limit(9)
            .then(product => {
                res.json(product);
            })
            .catch(next);
    }


    // [POST] /api/products/store
    store(req, res, next) {
        const product = new Product(req.body);
        product.save();
        res.send('SUCCESS');
    }

    // [GET] /api/:id/product
    edit(req, res, next) {
        Product.findById(req.params.id)
            .then((pro) => {
                res.json(pro);
            });
    }

    // [PUT] /api/products/:id
    update(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.json())
            .catch(next);
    }

    // [DELETE] /api/products/:id
    destroy(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

module.exports = new ProductController;