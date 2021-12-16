const Pool = require('pg').Pool
const pool = new Pool({
    user: 'tester',
    password: 'test',
    host: "localhost",
    port: 5432,
    db: "employees"
})

module.exports = pool