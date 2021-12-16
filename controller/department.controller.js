const db = require('../db')

class DepartmentController {
    async createDepartment (req, res){
        const {title} = req.body
        const newDepartment = await db.query('INSERT INTO departments (title) values ($1) RETURNING *', [title])
        res.json(newDepartment.rows)
    }
    async getDepartments (req, res){
        const departments = await db.query('SELECT * FROM departments')
        res.json(departments.rows)
    }
    async updateDepartment (req, res){
        const {id, title} = req.body
        const departments = await db.query ('UPDATE departments set title = $1 where id = $2 RETURNING *', [title, id])
        res.json(departments.rows)
    }
    
}

module.exports = new DepartmentController()