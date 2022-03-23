const express = require('express')
require('dotenv').config()
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(express.json({extended: true}))

app.use('/api/auth', require("./routes/user.routes"))
app.use('/api/cars', require("./routes/cars.routes"))

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`server started on ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}

start()
