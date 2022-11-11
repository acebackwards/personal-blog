const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const repoRouter = require('./repoRouter')

router.use('/user', userRouter)
router.use('/repo', repoRouter)

module.exports = router