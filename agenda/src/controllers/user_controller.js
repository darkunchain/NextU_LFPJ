const usuario = require('../models/usuario_model')
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

users.signupDup = async(req, res) => {
    console.log(req.params.errors)  
    res.render('signup')    
}

users.newUser = async(req, res) => {    
    const { user, pass} = req.body
    if (pass.length < 4){
        req.flash('error_msg', 'el password debe ser de por lo menos 4 caracteres')
        console.log('contrasena < 4')
    }
    const validaUsuario = await usuario.findOne({user:user})
    console.log('validausuario: ', validaUsuario)
    if (validaUsuario) {
        console.log('valida usuario')
        req.flash('error_msg', 'El usuario ya existe en la base de datos')        
    }else {        
        req.flash('success_msg', 'Usuario registrado satisfactoriamente')
        nuevoUsuario = new usuario({user,pass})        
        await nuevoUsuario.save()   
        console.log('dentro del if',nuevoUsuario)  
        
    }  
    console.log('fuera del if')
    res.redirect('login')
        
    
        
}

users.authUser = async(req, res) => {
    req.flash('success_msg', 'Usuario validado satisfactoriamente')    
    validausuario = usuario.findOne()    
    res.redirect('login')    
}

users.logout = async(req, res) => {    
    res.send('logout')    
}

module.exports = users