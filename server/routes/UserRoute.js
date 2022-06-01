const { Router } = require('express')
const UserContoller = require('../controllers/UserController')
const authMiddleware = require('../middleware/AuthMiddleware')

const router = new Router()

router.post('/registration', UserContoller.registartion)
router.post('/login',UserContoller.login)
router.get('/auth', authMiddleware, UserContoller.check)

module.exports = router
