const indexCont = {}

indexCont.renderIndex = (req, res) => {
    res.render('index')
}

indexCont.renderLogin = (req, res) => {
    res.send('login')
}

indexCont.miCuenta = (req, res) => {
    res.send('mi cuenta')
}

indexCont.renderAgenda = (req, res) => {
    res.render('agenda')
}



module.exports = indexCont