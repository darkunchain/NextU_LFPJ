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


// async function newjson() {
//   var newjson = []
//   for await (var it of datos) {
//     newjson[it.Id - 1] = it   
//   }
//   console.log(newjson)
// } newjson();



router.get('/', (req, res) => {  
  sess=req.session;  
  bodyciudad=sess.ciudad;
  bodytipo=sess.tipo;
  console.log('sess.ciudad: ', sess.ciudad, '  sess.tipo: ', sess.tipo)
  res.render('index', { datos, ciudades, tipos, tiposall, ciudadesall, datosall, precioall, bodyciudad, bodytipo })  
  
});

router.post('/', (req, res) => {  
  sess=req.session;
  sess.ciudad = req.body.vselectciudad,
  sess.tipo = req.body.vselecttipo
  //console.log('bodyciudad: ', sess.ciudad, '  bodytipo: ', sess.tipo)  
  res.redirect('/')
})

/* Ruta original
router.post('/', (req, res) => {  
  var bodyciudad = req.body.vselectciudad;
  var bodytipo = req.body.vselecttipo;
  //res.send( { bodyciudad, bodytipo })
  //res.write('</body></html>');
  //res.end('done')
  //res.redirect('/');
}); */


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