const mongoose = require('mongoose');


const { AGENDA_HOST, AGENDA_DB } = process.env;
const MONGODB_URI = `mongodb://${AGENDA_HOST}/${AGENDA_DB}`;



mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Database conectada'))
    .catch(err => console.log(err));