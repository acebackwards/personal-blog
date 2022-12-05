// const {User} = require('../models/models')
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const db = require('../db')

const generateToken = (id, email, role, name) => {
    return jwt.sign(
        {id , email, role, name},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {name, email, password} = req.body
        if ( !name || !email || !password) {
            return next(ApiError.badRequest('Некорректные данные'))
        }
        const dataCheck = await db.query(`SELECT FROM users WHERE email = $1`, [email]) // find one
        if (dataCheck.rows[0]) {
            return next(ApiError.badRequest('Пользователь уже зарегистрирован'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await db.query(`INSERT INTO users (name, email, password) values ($1, $2, $3) RETURNING *`, [name, email, hashPassword])
        const token = generateToken(user.rows[0].id, user.rows[0].email, user.rows[0].role, user.rows[0].name)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await db.query(`SELECT * FROM users WHERE email = $1`, [email]) // find one

        if (!user.rows[0]) {
            return next(ApiError.badRequest('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.rows[0].password)
        if (!comparePassword) {
            return next(ApiError.badRequest('Неверный пароль'))
        }

        const token = generateToken(user.rows[0].id, user.rows[0].email, user.rows[0].role, user.rows[0].name)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateToken(req.user.id, req.user.email, req.user.role, req.user.name)
        return res.json({token})
    }
}

module.exports = new UserController()