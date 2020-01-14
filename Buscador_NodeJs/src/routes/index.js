const express = require('express');
const router = express.Router();
const datos = require('../data.json');
var busqueda = [{}];


//datos para select
var ciudades = []
var tipos = []
var inc1=0
var inc2=0

async function arreglos() {
  for await (var it of datos) {  
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
  res.render('index', { datos, ciudades, tipos});   
});

router.post('/', (req, res) => { 
})


router.get('/datos', (req, res) => {
res.json(datos);
});

router.post('/busqueda', (req, res) => {  
  const  selectciudad = req.body.selectciudad;
  const  selecttipo = req.body.selecttipo;
  const  selectvalor = req.body.selectvalor;  
  busqueda.length = 0
  var pat = new RegExp(/\w*/g);
  var arr = selectvalor.match(pat);  
  var min = Number(arr[0]);  
  var max = Number(arr[2]);
  console.log(selectciudad, selecttipo, selectvalor)     
    if (selectciudad && selecttipo) {
      datos.forEach((dato) => {  
        if(dato.Ciudad == selectciudad && dato.Tipo == selecttipo && Number(dato.Valor) <= max && Number(dato.Valor) >= min){
          busqueda.push({
            "Id" : busqueda.length,"Direccion" : dato.Direccion,"Ciudad" : dato.Ciudad,"Telefono" : dato.Telefono,
            "Codigo_Postal" : dato.Codigo_Postal,"Tipo" : dato.Tipo,"Precio" : dato.Precio,"Valor" : dato.Valor
          });
        }
      });console.log('if1')      
    }else if(selecttipo){
      datos.forEach((dato) => {  
        if(dato.Tipo == selecttipo && Number(dato.Valor) <= max && Number(dato.Valor) >= min){
          busqueda.push({
            "Id" : busqueda.length,"Direccion" : dato.Direccion,"Ciudad" : dato.Ciudad,"Telefono" : dato.Telefono,
            "Codigo_Postal" : dato.Codigo_Postal,"Tipo" : dato.Tipo,"Precio" : dato.Precio,"Valor" : dato.Valor
          });
        }
      });console.log('if2')       
    }else if(selectciudad){
      datos.forEach((dato) => {  
        if(dato.Ciudad == selectciudad && Number(dato.Valor) <= max && Number(dato.Valor) >= min){
          busqueda.push({
            "Id" : busqueda.length,"Direccion" : dato.Direccion,"Ciudad" : dato.Ciudad,"Telefono" : dato.Telefono,
            "Codigo_Postal" : dato.Codigo_Postal,"Tipo" : dato.Tipo,"Precio" : dato.Precio,"Valor" : dato.Valor
          });
        }
      });console.log('if3')          
    }else{
      console.log('algun error hay en el codigo')
    }    
  res.json('post successfully');  
  });

  router.get('/busqueda', (req, res) => {
    res.json(busqueda)
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

 router.get('/favicon.ico', (req, res) => {
  res.send('img/favicon-16x16.png')
 });

module.exports = router;