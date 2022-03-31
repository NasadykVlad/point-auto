const {Router} = require('express')
const router = Router()
const carsController = require('../controllers/cars.controller')
const {check} = require('express-validator')

router.get('/getForSearch', carsController.searchListCars)
router.get('/getUserCars', carsController.listUsersCars)
router.post('/getModels', carsController.searchOtherModel)
router.get('/getAllCars', carsController.getAllCars)

module.exports = router
