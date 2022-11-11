const Router = require('express')
const router = new Router()
const repoController = require('../controllers/repoController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create', checkRole('ADMIN'), repoController.create)
router.get('/', repoController.getAll)
router.get('/:id', repoController.getOne)

module.exports = router