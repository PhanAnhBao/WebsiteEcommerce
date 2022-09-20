const Order = require('../models/Order');

class OrderController {

    // [GET] /api/orders
    getOrder(req, res, next) {
        Order.find({}).populate('product_id customer_id').sort({'createdAt': -1})
            .then(cus => {
                res.json(cus);
            })
            .catch(next);
    }

    // [GET] /api/orders/:id/show
    getOrderSearch(req, res, next) {
        Order.find({customer_id: req.params.id}).populate('product_id').sort({'createdAt': -1})
            .then(cus => {
                res.json(cus);
            })
            .catch(next);
    }




    // [POST] /api/orders/store
    store(req, res, next) {
        const order = new Order(req.body);
        order.save();
        res.send('SUCCESS');
    }


    // [DELETE] /api/orders/:id
    destroy(req, res, next) {
        Order.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new OrderController;