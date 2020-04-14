const express = require('express');
const path = require('path');
var exphbs  = require('express-handlebars');

const app = express();

//%%%%% Configuraciones
app.set('port', process.env.PORT || 8090);
app.set('views', path.join(__dirname , 'views'));
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
  }));
app.set('view engine', '.hbs');

//%%%%% Middlewares
app.use(express.urlencoded({extended: false}));

//%%%%% Variables globales


//%%%%% Routes
app.use(require('./routes/index_routes'))
app.use(require('./routes/event_routes'))

//%%%%% Archivos estaticos
app.use(express.static(path.join(__dirname , 'public')));


module.exports = app;


