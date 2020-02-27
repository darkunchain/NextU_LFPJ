const { Schema, model } = require('mongoose')

const eventoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: String,
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFin: Date,
    horaInicio: {
        type: String,
        required: true
    },
    horaFin: String,
    status: Boolean,
    completo: Boolean
},{
    timestamps: true   
})

module.exports = model('evento', eventoSchema)