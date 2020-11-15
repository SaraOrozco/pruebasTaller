var Math = require('mathjs');

exports.calculadora = function(operacion) {
    var resultado = Math.evaluate(operacion);
    return Math.round(resultado, 2);

}