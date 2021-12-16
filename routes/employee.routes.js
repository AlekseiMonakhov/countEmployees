const Router = require('express')
const employeeRouter = new Router()
const employeeController = require('../controller/employee.controller')

employeeRouter.post('/e', employeeController.createEmployee)
employeeRouter.get('/e', employeeController.getEmployees)
employeeRouter.put('/e', employeeController.updateEmployee)


module.exports = employeeRouter