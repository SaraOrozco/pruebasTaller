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

    it('Flujo 3', () => {
        var resultado = principal.calculadora('sin(pi/2)');
        expect(resultado).toBe(1);
    });

    it('Flujo 4', () => {
        var resultado = principal.calculadora('tan(pi)');
        expect(resultado).toBe(0);
    });

    it('Flujo 5', () => {
        var resultado = principal.calculadora('cot(1)');
        expect(resultado).toBe(0.64);
    });

    it('Flujo 6', () => {
        var resultado = principal.calculadora('abs(-5)');
        expect(resultado).toBe(5);
    });

    it('Flujo 7', () => {
        var resultado = principal.calculadora('max(-50, 0, 5)');
        expect(resultado).toBe(5);
    });

    it('Flujo 8', () => {
        var resultado = principal.calculadora('min(-50, 0, 5)');
        expect(resultado).toBe(-50);
    });

    it('Flujo 9', () => {
        var resultado = principal.calculadora('log10(1)');
        expect(resultado).toBe(0);
    });

    it('Flujo 10', () => {
        var resultado = principal.calculadora('round(-20.56)');
        expect(resultado).toBe(-21);
    });
    it('Flujo 11', () => {
        var resultado = principal.calculadora('exp(-1)');
        expect(resultado).toBe(0.37);
    });

    it('Flujo 12', () => {
        var resultado = principal.calculadora('cosh(0)');
        expect(resultado).toBe(1);
    });

    it('Flujo 13', () => {
        var resultado = principal.calculadora('acos(-1)');
        expect(resultado).toBe(3.14);
    });

    it('Flujo 14', () => {
        var resultado = principal.calculadora('pow(4, 0.5)');
        expect(resultado).toBe(2);
    });

    it('Flujo 15', () => {
        var resultado = principal.calculadora('sign(20)');
        expect(resultado).toBe(1);
    });

});