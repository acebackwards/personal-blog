const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const repoRouter = require('./repoRouter')
const commentRouter = require('./commentRouter')
const ratingRouter = require('./ratingRouter')

router.use('/user', userRouter)
router.use('/repo', repoRouter)
router.use('/comment', commentRouter)
router.use('/rating', ratingRouter)

module.exports = router