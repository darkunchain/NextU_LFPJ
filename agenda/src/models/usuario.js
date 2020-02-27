const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },  
    password: {
        type: String,
        required: true
    },
    status: Boolean
},{   
    timestamps: true   
});

//%%%%%%%%%%% Metodo para cifrar la contraseña %%%%%%%%%%%%%%//
usuarioSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

//%%%%%%%%%%% Metodo para comparar la contraseña cifrada %%%%%%%%%%%%%%//
usuarioSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = model('usuario', usuarioSchema)