const { Router } = require('express')
const router = Router()


const { renderAdd} = require('../controllers/event_controller')

router.get('/events/add', renderAdd)

router.get('/events/add', renderAdd)




module.exports = router