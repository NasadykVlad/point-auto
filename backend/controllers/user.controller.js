const db = require('../db');
const {validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, fullName) => {
    return jwt.sign({id, fullName}, 'dsadjdjs*7dsah&@djdsad=sa2001-sa-215', {expiresIn: '1h'})
}

class UserController {
    async createUser(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(200).json({
                    errors: errors.array(),
                    message: 'Некоректні дані при реєстрації'
                })
            }

            const {userId, fullName, email, tel, password, passwordConfirm} = req.body

            const hashPassword = await bcrypt.hash(password, 12)
            const hashPasswordConfirm = await bcrypt.hash(passwordConfirm, 12)

            await db.query(`INSERT INTO users (user_id, tel, fullname, email, password, password_confirm) values ($1, $2, $3, $4, $5, $6)`, [userId, tel, fullName, email, hashPassword, hashPasswordConfirm])

            return res.json({message: 'user-created'})
        } catch (e) {
            console.log(e)
        }
    }

    async loginUser(req, res) {
        try {
            const {email, password} = req.body

            const query = await db.query(`SELECT * FROM users WHERE email=($1)`, [email])
            const user = query.rows[0]

            if (user) {
                const comparePassword = bcrypt.compareSync(password, user.password)
                if (comparePassword) {
                    const token = generateJwt(user.user_id, user.email)
                    res.json({token})
                } else {
                    res.json({status: 'password-is-not-correct'})
                }
            } else {
                res.json({status: 'user-is-not-defined'})

            }
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new UserController();
