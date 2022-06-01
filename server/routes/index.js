const { Router } = require('express')
const userRouter = require('./UserRoute')

const router = new Router()

router.use('/user', userRouter)

module.exports = router