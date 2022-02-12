const {Router} = require('express')
const router = Router()
const userController = require('../controllers/user.controller')

router.post('/registration', userController.createUser)
router.post('/login', userController.loginUser)

module.exports = router
