const express = require('express');
const path = require('path');
const morgan =require('morgan');



// inicializacion
const app = express();


//importar rutas
const rutas = require('./routes/index');

// configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', rutas);

// inicio del servidor
app.listen(app.get('port'), () => {
  console.log('Servidor corriendo en el puerto ', app.get('port'));
});


