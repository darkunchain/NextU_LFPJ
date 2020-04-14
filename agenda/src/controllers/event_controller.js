const eventCont = {}

eventCont.creaEvento = (req, res) => {
    console.log('req.body: ', req.body)
    res.send('nuevo evento')
}

eventCont.verEventos = (req, res) => {
    res.send('mostrar eventos')
}

eventCont.editarEvento = (req, res) => {
    res.send('editar un evento')
}

eventCont.borrarEvento = (req, res) => {
    res.send('Borrar un evento')
}




module.exports = eventCont