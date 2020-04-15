const event = require('../models/evento_model')
const eventCont = {}

eventCont.creaEvento = async(req, res) => {    
    const { title, start, end } = req.body    
    const newEvent = new event({title, start, end, status:true, completo:false})
    await newEvent.save()    
}

eventCont.verEventos = async(req, res) => {
    const misEventos = await event.find()    
    res.send(misEventos)
}

eventCont.editarEvento = async(req, res) => {
    console.log('req.body_editar: ', req.body)
    const { id, inicio, fin } = req.body    
    await event.updateOne({ _id:id }, { $set : { start:inicio, end:fin }});
    //await event.save()    
}

eventCont.borrarEvento = async (req, res) => {
    console.log('req.body_borrar: ', req.body.id)
    const { id } = req.body
    await event.deleteOne({_id:id})
}




module.exports = eventCont