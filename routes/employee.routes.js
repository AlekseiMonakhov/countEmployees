const Router = require('express')
const employeeRouter = new Router()
const employeeController = require('../controller/employee.controller')

employeeRouter.post('/employees', employeeController.createEmployee)
employeeRouter.get('/employees', employeeController.getEmployees)
employeeRouter.put('/employees', employeeController.updateEmployee)


module.exports = employeeRouter