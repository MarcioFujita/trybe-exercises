// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")



const { expect, it } = require('@jest/globals');
const sum = require('./part1Exercise1');

describe('Testando a função sum', () => {
    it('Testando se a função sum retorna a soma do parâmetro a com b', () => {
        expect(sum(2, 3)).toEqual(5);
    });
    it('Testando se o retorno de sum(4, 5) é 9', () => {
        expect(sum(4, 5)).toEqual(9);
    });
    it('Teste se o retorno de sum(0, 0) é 0', () => {
        expect(sum(0, 0)).toEqual(0);
    });
    it('Teste se a função sum lança um erro quando os parametros são 4 e "5"', () => {
        expect(() => { sum(4, '5')}).toThrow(/parameters must be numbers/);
    });
});
