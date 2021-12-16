const Router = require('express')
const departmentRouter = new Router()
const departmentController = require('../controller/department.controller')

departmentRouter.post('/d', departmentController.createDepartment)
departmentRouter.get('/d', departmentController.getDepartments)
departmentRouter.put('/d', departmentController.updateDepartment)



module.exports = departmentRouter