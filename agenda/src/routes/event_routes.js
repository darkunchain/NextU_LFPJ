const { Router } = require('express')
const router = Router()


const {renderForm, creaEvento, verEventos, editarEvento, borrarEvento} = require('../controllers/event_controller')

//router.get('/events/add', renderForm)

router.post('/events/new', creaEvento)

router.get('/events/all', verEventos)

router.get('/events/edit/:id', editarEvento)

router.get('/events/delete/:id', borrarEvento)




module.exports = router