const Customer = require('../models/Customer');

class CustomerController {

    // [GET] /api/customers
    getCustomer(req, res, next) {
        Customer.find({}).sort({ 'createdAt': -1 })
            .then(cus => {
                res.json(cus);
            })
            .catch(next);
    }

    // [GET] /api/customers/:name
    getCustomerByName(req, res, next) {
        Customer.find({ customer_name: new RegExp(req.params.name, 'i') })
            .then(cus => {
                res.json(cus);
            })
            .catch(next);
    }

    // [GET] /api/customers/:id/edit
    edit(req, res, next) {
        Customer.findById(req.params.id)
            .then((pro) => {
                res.json(pro);
            })
    }   


    // [POST] /api/customers/store
    store(req, res, next) {
        const email = req.body.customer_email;

        Customer.findOne({ customer_email: email })
            .then((data) => {
                if (data) {
                    res.json('Exist');
                }
                else {
                    const customer = new Customer(req.body);
                    customer.save();
                    res.send('SUCCESS');
                }
            })

    }

    // [POST] /api/customers/login
    login(req, res, next) {
        const email = req.body.customer_email;
        const pass = req.body.customer_password;

        Customer.findOne({ customer_email: email, customer_password: pass })
            .then(data => {
                if (data) {
                    res.json(data);
                }
                else {
                    res.json('Not Correct');
                }
            })
            .catch(e => {
                console.log(e);
            })
    }

    // [PUT] /api/customers/:id
    update(req, res, next) {
        Customer.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.json())
            .catch(next);
    }

    // [DELETE] /api/customers/:id
    destroy(req, res, next) {
        Customer.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CustomerController;