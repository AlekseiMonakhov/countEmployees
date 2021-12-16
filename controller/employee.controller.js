const db = require('../db')

class EmployeeController {
    async createEmployee (req, res){
        const {surname, firstname, patronymic} = req.body
        const newEmployee = await db.query('INSERT INTO employees (surname, firstname, patronymic) values ($1, $2, $3) RETURNING *', [surname, firstname, patronymic])
        res.json(newEmployee.rows)
    }
    async getEmployees (req, res){
        const employees = await db.query('SELECT * FROM employees')
        res.json(employees.rows)

    }
    async updateEmployee (req, res){
        const {id, surname, firstname, patronymic} = req.body
        const employees = await db.query ('UPDATE employees set surname = $1, firstname = $2, patronymic = $3 where id = $4 RETURNING *', [surname, firstname, patronymic, id])
        res.json(employees.rows)
    
}
}
module.exports = new EmployeeController()