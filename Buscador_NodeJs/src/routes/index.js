const express = require('express');
const router = express.Router();
const datos = require('../data.json');
const bodyParser = require('body-parser');


express().use(bodyParser.urlencoded({ extended: false }))
express().use(bodyParser.json());
//datos para select
var ciudades = []
var tipos = []
var ciudadesall = []
var tiposall = []
for (var i = 0; i < datos.length; i++) {
  ciudadesall.push(datos[i].Ciudad)
  tiposall.push(datos[i].Tipo)
  if (ciudades.indexOf(datos[i].Ciudad) == -1) {
    ciudades.push(datos[i].Ciudad)
  }
  if (tipos.indexOf(datos[i].Tipo) == -1) {
    tipos.push(datos[i].Tipo)
  }
}


router.get('/', (req, res) => {  
  res.render('index', { datos, ciudades, tipos, tiposall, ciudadesall })
});

router.post('/', (req, res) => { 
  
  console.log('bodypost',req.body);
  res.render('index', { datos, ciudades, tipos})
});


router.get('/form', (req, res) => {  
  res.render('form', { datos, ciudades, tipos })
});

router.post('/form', (req, res) => {  
  console.log('bodypost',req.body);
  res.render('form', { datos, ciudades, tipos})
});

router.get('/json', (req, res) => {
  res.json(datos)
});

// router.get('/favicon.ico', (req, res) => {
//   res.send('img/favicon-16x16.png')
// });

module.exports = router;