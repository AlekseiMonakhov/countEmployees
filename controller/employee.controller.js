const db = require('../db')

class EmployeeController {
    async createEmployee (req, res){
        const {id, name, age, department} = req.body
        const newEmployee = await db.query('INSERT INTO Employees (EmployeeId, EmployeeName, EmployeeAge, DepartmentTitle) values ($1, $2, $3, $4) RETURNING *', [id, name, age, department])
        res.json(newEmployee.rows)
    }
    async getEmployees (req, res){
        const employees = await db.query('SELECT * FROM Employees')
        res.json(employees.rows)

    }
    async updateEmployee (req, res){
        const {id, name, age, department} = req.body
        const employees = await db.query ('UPDATE Employees set EmployeeName = $1, EmployeeAge = $2, DepartmentTitle = $3 where EmployeeId = $4 RETURNING *', [name, age, department, id])
        res.json(employees.rows)
    
}
}
module.exports = new EmployeeController()