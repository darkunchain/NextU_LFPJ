const express = require('express');
const router = express.Router();
const datos = require('../data.json');

//datos para select
var ciudades = []
var tipos = []
for (var i = 0; i < datos.length; i++) {
  if (ciudades.indexOf(datos[i].Ciudad) == -1) {
    ciudades.push(datos[i].Ciudad)
  }
  if (tipos.indexOf(datos[i].Tipo) == -1) {
    tipos.push(datos[i].Tipo)
  }
}


router.get('/', (req, res) => {  
  res.render('index', { datos, ciudades, tipos })
});

router.post('/', (req, res) => {  
  console.log(req.body);  
});

router.get('/json', (req, res) => {
  res.json(datos)
});

module.exports = router;