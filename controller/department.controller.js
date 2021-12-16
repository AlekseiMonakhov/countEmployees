const db = require('../db')

class DepartmentController {
    async createDepartment (req, res){
       try {
        const {id, title} = req.body
        const newDepartment = await db.query('INSERT INTO Departments (DepartmentId, DepartmentTitle) values ($1, $2) RETURNING *', [id, title])
        res.json(newDepartment.rows)
    }  catch (error) {
        res.json(error)
    }            
    } 
    
    async getDepartments (req, res){
       try {
        const departments = await db.query('SELECT * FROM Departments')
        res.json(departments.rows)
    }  catch (error) {
        res.json(error)  
    }
    }
    async updateDepartment (req, res){
        try {
         const {id, title} = req.body
         const departments = await db.query ('UPDATE Departments set DepartmentTitle = $1 where DepartmentId = $2 RETURNING *', [title, id])
         res.json(departments.rows)
    }   catch (error) {
        res.json(error)  
    }
    }
    
}

module.exports = new DepartmentController()