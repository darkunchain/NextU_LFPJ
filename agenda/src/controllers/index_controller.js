const indexCont = {}

indexCont.renderIndex = (req, res) => {
    res.render('index')
}

indexCont.renderEvents = (req, res) => {
    res.render('index')
}

indexCont.renderEventsUser = (req, res) => {
    res.send('Recibido')
}



module.exports = indexCont