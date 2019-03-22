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
var datosall = []
var inc1=0
var inc2=0

async function arreglos() {
  for await (var it of datos) {
    ciudadesall[it.Id - 1] = it.Ciudad
    tiposall[it.Id - 1] = it.Tipo;
    datosall[it.Id - 1] = it
    if (ciudades.indexOf(it.Ciudad) == -1) {
      ciudades[inc1] = it.Ciudad
      inc1 = inc1 + 1
    }
    if (tipos.indexOf(it.Tipo) == -1) {
      tipos[inc2] = it.Tipo
      inc2 = inc2 + 1
    }
  }
} arreglos();


// async function newjson() {
//   var newjson = []
//   for await (var it of datos) {
//     newjson[it.Id - 1] = it   
//   }
//   console.log(newjson)
// } newjson();




router.get('/', (req, res) => {  
  res.render('index', { datos, ciudades, tipos, tiposall, ciudadesall, datosall })
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