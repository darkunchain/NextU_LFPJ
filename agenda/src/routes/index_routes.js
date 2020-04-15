const { Router } = require('express')
const router = Router()


const { renderIndex, miCuenta, renderAgenda} = require('../controllers/index_controller')

router.get('/', renderIndex)

router.get('/myaccount', miCuenta)

router.get('/agenda', renderAgenda)

module.exports = router