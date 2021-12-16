const Router = require('express')
const departmentRouter = new Router()
const departmentController = require('../controller/department.controller')

departmentRouter.post('/departments', departmentController.createDepartment)
departmentRouter.get('/departments', departmentController.getDepartments)
departmentRouter.put('/departments', departmentController.updateDepartment)



module.exports = departmentRouter