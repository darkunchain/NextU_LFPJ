const express = require('express');
const path = require('path');
var exphbs  = require('express-handlebars');
const morgan = require('morgan')
const flash = require('connect-flash')
const session = require('express-session')

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
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(session({
  secret: 'palabrasecreta',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());

//%%%%% Variables globales
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg') 
  res.locals.error_msg = req.flash('error_msg')  
  next();
})

//%%%%% Routes
app.use(require('./routes/index_routes'));
app.use(require('./routes/event_routes'));
app.use(require('./routes/user_routes'));

//%%%%% Archivos estaticos
app.use(express.static(path.join(__dirname , 'public')));


module.exports = app;


