const Employee = require('../models/Employee');

class EmployeeController {

    // [GET] /api/employees
    getEmployee(req, res, next) {
        Employee.find({}).sort({'createdAt': -1})
            .then(cus => {
                res.json(cus);
            })
            .catch(next);
    }

    // [GET] /api/employees/:name
    getEmployeeByName(req, res, next) {
        Employee.find({ admin_name: new RegExp(req.params.name, 'i') })
            .then(cus => {
                res.json(cus);
            })
            .catch(next);
    }

    // [GET] /api/:id/employees
    edit(req, res, next) {
        Employee.findById(req.params.id)
            .then((pro) => {
                res.json(pro);
            })
    }


    // [POST] /api/employees/store
    store(req, res, next) {
        const email = req.body.admin_email;

        Employee.findOne({ admin_email: email })
            .then((data) => {
                if (data) {
                    res.json('Exist');
                }
                else {
                    const employee = new Employee(req.body);
                    employee.save();
                    res.send('SUCCESS');
                }
            })
    }
    // [POST] /api/employees/login
    login(req, res, next) {
        const email = req.body.admin_email;
        const pass = req.body.admin_password;

        Employee.findOne({admin_email: email, admin_password: pass})
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

    

    // [PUT] /api/employees/:id
    update(req, res, next) {
        Employee.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.json())
            .catch(next);
    }

    // [DELETE] /api/employees/:id
    destroy(req, res, next) {
        Employee.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new EmployeeController;