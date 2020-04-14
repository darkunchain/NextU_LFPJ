const { Router } = require('express')
const router = Router()


const { renderIndex, renderEvents, renderEventsUser} = require('../controllers/index_controller')

router.get('/', renderIndex)


router.get('/events', renderEvents)

router.get('/events/:user', renderEventsUser)


module.exports = router