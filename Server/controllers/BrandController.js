const Brand = require('../models/Product-Brands');
const Product = require('../models/Product');

class BrandController {

    // [GET] /api/brands
    getBrand(req, res, next) {
        Brand.find({}).sort({'createdAt': -1})
        .then(bra => {
            res.json(bra);
        })
        .catch(next);
    }

    // [GET] /api/categories/:name
    getBrandByName(req, res, next) {
        Brand.find({brand_name:  new RegExp(req.params.name, 'i')})
            .then(cus => {
                res.json(cus);
            })
            .catch(next);
    }

    // [GET] /api/brands/:id/show
    getBrandById(req, res, next) {
        Brand.findById(req.params.id)
        .then(cate => {
            res.json(cate);
        })
        .catch(next);
    }

    // [GET] /api/brands/:id
    getProductAllowBrand(req, res, next) {
        Product.find({ brandIds: req.params.id }).populate('brandIds').sort({'createdAt': -1})
            .then(product => {
                res.json(product);
            })
            .catch(next);
    }


    // [GET] /api/:id/brands
    edit(req, res, next) {
        Brand.findById(req.params.id)
        .then((pro) => {
            res.json(pro);
        })
    }


    // [POST] /api/brands/store
    store(req, res, next) {
        const brand = new Brand(req.body);
        brand.save();
        res.send('SUCCESS');
    } 

    // [PUT] /api/brands/:id
    update(req, res, next) {
        Brand.updateOne({_id: req.params.id}, req.body)
        .then(() => res.json())
        .catch(next);
    }

    // [DELETE] /api/brands/:id
    destroy(req, res, next) {
        Brand.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new BrandController;