const { Router } = require('express')
const router = Router()


const { creaUsuario, login, signup, authUser, newUser } = require('../controllers/user_controller')

router.get('/user/all', creaUsuario)

router.get('/login', login)

router.post('/login', authUser)

router.get('/signup', signup)

router.post('/signup', newUser)



module.exports = router