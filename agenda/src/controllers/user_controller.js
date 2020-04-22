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
    console.log('signup_reqbody: ', req) 
    res.send('nuevo usuario')    
}

users.authUser = async(req, res) => {    
    res.send('validar usuario')    
}

users.logout = async(req, res) => {    
    res.send('logout')    
}

module.exports = users