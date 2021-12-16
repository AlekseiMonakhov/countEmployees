const express = require('express')  
const employeeRouter = require('./routes/employee.routes')
const departmentRouter = require('./routes/department.routes')
const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use("/api", employeeRouter)
app.use("/api", departmentRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
