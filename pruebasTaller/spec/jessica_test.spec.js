
var principal = require('../principal/principal');

describe('Mi test', ()=>{
    it('Flujo 1', ()=>{
        var resultado = principal.calculadora(6, 5, '+');
        expect(resultado).toBe(10);
    });
});


