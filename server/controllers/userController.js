const {User} = require('../models/models')
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateToken = (id, email, role, name) => {
    return jwt.sign(
        {id , email, role, name},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {name, email, password, role} = req.body
        if ( !name || !email || !password) {
            return next(ApiError.badRequest('Некорректные данные'))
        }
        const dataCheck = await User.findOne({where: {email}})
        if (dataCheck) {
            return next(ApiError.badRequest('Пользователь уже зарегистрирован'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({name, email, role, password: hashPassword})
        const token = generateToken(user.id, user.email, user.role, user.name)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})

        if (!user) {
            return next(ApiError.badRequest('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.badRequest('Неверный пароль'))
        }

        const token = generateToken(user.id, user.email, user.role, user.name)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateToken(req.user.id, req.user.email, req.user.role, req.user.name)
        return res.json({token})
    }
}

module.exports = new UserController()