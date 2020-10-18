var principal = require('../principal/principal');
var Math = require('mathjs');

describe('Mi test', () => {
    it('Flujo 1', () => {
        var resultado = principal.calculadora('3 * (5 + 6 ) / 11');
        expect(resultado).toBe(3);
    });
    it('Flujo 2', () => {
        var resultado = principal.calculadora('cos(pi/2)');
        expect(resultado).toBe(0);
    });

});