require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

// error
app.use(errorHandler)


// app.get('/', (req, res) => {
//     res.send("It's working")
// })

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))

// const start = async () => {
//     try {
//         await sequelize.authenticate()
//         await sequelize.sync()
//         app.listen(PORT, () => {console.log('Server started successfully!')})
//     } catch (e) {
//         console.log(e)
//     }
// }
//
// start()