const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/models')

const generateJwt = (id, email) => {
    return jwt.sign(
        {id, email},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
        )
}

class UserContoller{
    async registartion(req, res, next){
        const{email, password} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Invalid email or password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже зарегестрирован'))
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const user = await User.create({email, password: hashPassword})
        const token = generateJwt(user.id, user.email)
        return res.json({token})

    }

    async login(req, res, next){
        const {email, password} = req.body
        const user =  await User.findOne({where:{email}})
        if(!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword) {
            return next(ApiError.internal('Неверно указан пароль'))
        }
        const token = generateJwt(user.id, user.email)
        return res.json({token})
        
    }
    async check(req, res){
        const token = generateJwt(req.user.id, req.user.email)
        return res.json({token})
    }
}

module.exports = new UserContoller()