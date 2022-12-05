const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "admin1508642",
    host: "localhost",
    port: 5432,
    database: "personal_blog_pg"
})


module.exports = pool
