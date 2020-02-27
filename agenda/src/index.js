require('dotenv').config();
const app = require('./app')
require('./database')

app.listen(app.get('port'), () => {
    console.log('servidor corriendo en puerto', app.get('port'))
})

