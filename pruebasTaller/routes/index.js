var express = require('express');
var router = express.Router();
var principal = require('../principal/principal');
var Math = require('mathjs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/operation', function(req, res, next){  
  //const  {strOperation} = req.body;
  console.log(req.body.strOperation);
  console.log('Hablalo mi faiii');
  var strResultado = '';
  if (req.body.strOperation == ''){
    res.render('index', { title: 'NO SE DETECTO UNA OPERACION'});   
  } else {
    strResultado = principal.calculadora(req.body.strOperation);
    res.render('index', { title: 'Resultado de la operacion : '+ req.body.strOperation + ' = ' + strResultado });   
  }  
});

module.exports = router;
