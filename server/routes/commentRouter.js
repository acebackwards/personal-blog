const Router = require('express')
const router = new Router()
const commentController = require('../controllers/commentController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create',  commentController.create)
router.post('/delete', commentController.delete)
router.get('/', checkRole('ADMIN'), commentController.getAll)


module.exports = router