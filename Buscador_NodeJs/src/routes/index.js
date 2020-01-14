const express = require('express');
const router = express.Router();
const datos = require('../data.json');
var busqueda = {}


//datos para select
var ciudades = []
var tipos = []
var ciudadesall = []
var tiposall = []
var datosall = []
var precioall = []
var inc1=0
var inc2=0
var bodytipo=''
var bodyciudad=''
var sess;


async function arreglos() {
  for await (var it of datos) {
    ciudadesall[it.Id - 1] = it.Ciudad
    tiposall[it.Id - 1] = it.Tipo
    precioall[it.Id - 1] = it.Valor
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



router.get('/', (req, res) => { 
  res.render('index', { datos, ciudades, tipos, tiposall, ciudadesall, datosall, precioall, bodyciudad, bodytipo });   
});

router.post('/', (req, res) => {     
 
})


router.get('/datos', (req, res) => {
res.json(datos);
});

router.post('/datos', (req, res) => {  
  const  selectciudad = req.body.selectciudad;
  const  selecttipo = req.body.selecttipo;  
  datos.forEach((dato, i) => {    
    if (dato.Ciudad = selectciudad) {
      busqueda.Ciudad = dato.Ciudad     
    }    
  });
  console.log(busqueda)
  res.json('post successfully');  
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