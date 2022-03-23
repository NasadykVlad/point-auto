const db = require('../db');
const {validationResult} = require('express-validator')

class carsController {
   async searchListCars (req, res) {
       try {
           let cars = await db.query('SELECT * FROM brands_models_cars')

           res.json({cars: cars.rows})
       } catch (e) {
           console.log(e)
       }
   }

    async listUsersCars (req, res) {
        try {
            let cars = await db.query('SELECT brand, model, year, price, region, run, photos, top_car  FROM user_cars')

            res.json({cars: cars.rows})
        } catch (e) {
            console.log(e)
        }
    }

    async searchOtherModel (req, res) {
       try {
           const {brand} = req.body
           let modelsArr = []

           let models = await db.query(`SELECT model FROM brands_models_cars WHERE brand=($1)`, [brand])

           models.rows.forEach(car => {
               modelsArr.push(car.model)
           })

           res.json({models: modelsArr})
       } catch (e) {
           console.log(e)
       }
    }

}

module.exports = new carsController();
