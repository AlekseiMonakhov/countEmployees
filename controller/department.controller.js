const db = require('../db')

class DepartmentController {
    async createDepartment (req, res){
       try {
        const {dept_id, dept_name} = req.body
        const newDepartment = await db.query('INSERT INTO departments (dept_id, dept_name) values ($1, $2) RETURNING *', [dept_id, dept_name])
        res.json(newDepartment.rows)
    }  catch (error) {
        res.json(error)
    }            
    } 
    
    async getDepartments (req, res){
       try {
        const departments = await db.query('SELECT * FROM departments')
        res.json(departments.rows)
    }  catch (error) {
        res.json(error)  
    }
    }
    async updateDepartment (req, res){
        try {
         const {dept_id, dept_name} = req.body
         const departments = await db.query ('UPDATE departments set dept_name = $1 where dept_id = $2 RETURNING *', [dept_name, dept_id])
         res.json(departments.rows)
    }   catch (error) {
        res.json(error)  
    }
    }
    
}

module.exports = new DepartmentController()