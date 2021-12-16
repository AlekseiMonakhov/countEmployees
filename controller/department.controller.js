const db = require('../db')

class DepartmentController {
    async createDepartment (req, res){
        const {id, title} = req.body
        const newDepartment = await db.query('INSERT INTO Departments (DepartmentId, DepartmentTitle) values ($1, $2) RETURNING *', [id, title])
        res.json(newDepartment.rows)
    }
    async getDepartments (req, res){
        const departments = await db.query('SELECT * FROM Departments')
        res.json(departments.rows)
    }
    async updateDepartment (req, res){
        const {id, title} = req.body
        const departments = await db.query ('UPDATE Departments set DepartmentTitle = $1 where DepartmentId = $2 RETURNING *', [title, id])
        res.json(departments.rows)
    }
    
}

module.exports = new DepartmentController()