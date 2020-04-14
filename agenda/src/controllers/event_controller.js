const event = require('../models/evento.model')
const eventCont = {}

eventCont.creaEvento = async(req, res) => {    
    const { title, start, end } = req.body    
    const newEvent = new event({title, start, end, status:true, completo:false})
    await newEvent.save()    
    res.send('nuevo evento')
}

eventCont.verEventos = async(req, res) => {
    const misEventos = await event.find()
    console.log('misEventos: ', misEventos)
    res.send('mostrar eventos')
}

eventCont.editarEvento = (req, res) => {
    console.log('req.body_editar: ', req.body)
    res.send('editar un evento')
}

eventCont.borrarEvento = (req, res) => {
    console.log('req.body_borrar: ', req.body)
    res.send('Borrar un evento')
}




module.exports = eventCont