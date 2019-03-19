const express = require('express');
const router = express.Router();
const datos = require('../data.json');


router.get('/', (req, res) => {  
  //res.json(datos)
  res.render('index', { datos })
});

router.get('/json', (req, res) => {  
  res.json(datos)
  
});




module.exports = router;