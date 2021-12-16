const db = require('../db')

class EmployeeController {
    async createEmployee (req, res){
        try {
         const {employee_id, employee_name, employee_dept} = req.body
         const newEmployee = await db.query('INSERT INTO employees (employee_id, employee_name, employee_dept) values ($1, $2, $3) RETURNING *', [employee_id, employee_name, employee_dept])
         res.json(newEmployee.rows)
    }   catch (error) {
         res.json(error) 
    }
    }     
    async getEmployees (req, res){
        try {
         const employees = await db.query('SELECT * FROM employees')
         res.json(employees.rows)
    }   catch (error) {
         res.json(error)  
    }
    }
    async updateEmployee (req, res){
        try {
         const {employee_id, employee_name, employee_dept} = req.body
         const employees = await db.query ('UPDATE employees set employee_name = $1, employee_dept = $2 where employee_id = $3 RETURNING *', [employee_name, employee_dept, employee_id])
         res.json(employees.rows)
    }   catch (error) {
         res.json(error)
    }       
    }
}

module.exports = new EmployeeController()