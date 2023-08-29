const express = require('express');

const route = express.Router();

route.get('/', (req,res)=>{
  res.send('Hola mi server en express');
});

route.get('/nueva-ruta', (req,res)=>{
  res.send('Hola, soy una nuea ruta');
});

module.exports = route;

