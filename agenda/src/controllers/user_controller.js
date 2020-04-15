const users = {}

users.creaUsuario = async(req, res) => {    
    res.send('crea usuario')    
}

users.login = async(req, res) => {    
    res.render('login')    
}

users.signup = async(req, res) => {    
    res.render('signup')    
}

users.newUser = async(req, res) => {    
    res.send('nuevo usuario')    
}

users.authUser = async(req, res) => {    
    res.send('validar usuario')    
}

module.exports = users