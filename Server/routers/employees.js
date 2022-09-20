const express = require('express');

const router = express.Router();

const employeeController = require('../controllers/EmployeeController');

router.get('/:name', employeeController.getEmployeeByName);
router.get('/:id/edit', employeeController.edit);
router.put('/:id', employeeController.update);
router.post('/store', employeeController.store);
router.post('/login', employeeController.login);
router.delete('/:id', employeeController.destroy);
router.get('', employeeController.getEmployee);


module.exports = router;