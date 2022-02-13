const {Router} = require('express')
const router = Router()
const userController = require('../controllers/user.controller')
const {check} = require('express-validator')

router.post('/registration',
    check('email', 'an-incorrect-email').isEmail(),
    check('password', 'an-incorrect-password').isLength({min: 6}),
    check('fullName', "Введіть ім'я").isLength({min: 3}),
    check('tel', 'Некоректно введений телефон').isLength({min: 10}),
    check('passwordConfirm', 'an-incorrect-repeat-password').custom((value, {req}) => {
        if (value !== req.body.password) {
            return false
        } else {
            return true
        }
    }),
    userController.createUser)
router.post('/login', userController.loginUser)

module.exports = router
