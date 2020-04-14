const { Schema, model } = require('mongoose')
"America/Bogota"

const eventoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,        
        required: false
    },    
    status: Boolean,
    completo: Boolean
},{
    timestamps: true   
})

module.exports = model('evento', eventoSchema)