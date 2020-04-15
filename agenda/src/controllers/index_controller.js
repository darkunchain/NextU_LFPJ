const indexCont = {}

indexCont.renderIndex = (req, res) => {
    res.redirect('login')
}

indexCont.miCuenta = (req, res) => {
    res.send('mi cuenta')
}

indexCont.renderAgenda = (req, res) => {
    res.render('agenda')
}



module.exports = indexCont