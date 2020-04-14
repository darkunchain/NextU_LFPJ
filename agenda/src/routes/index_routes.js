const { Router } = require('express')
const router = Router()


const { renderIndex, renderLogin, miCuenta, renderAgenda} = require('../controllers/index_controller')

router.get('/', renderIndex)


router.get('/login', renderLogin)

router.get('/myaccount', miCuenta)

router.get('/agenda', renderAgenda)

module.exports = router