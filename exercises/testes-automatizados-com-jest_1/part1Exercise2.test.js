// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado


const { TestScheduler } = require('jest');
const myRemove = require('./part1Exercise2');

describe('Test of function myRemove', () => {
    const array = [1, 2, 3, 4];
    test('myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item', () => {
        expect(myRemove(array, 1)).toEqual([2, 3, 4]);
    });
    test('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove(array, 3)).toEqual([1, 2, 4]);
    });
    test('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array esperado', () => {
        expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
    });
    test('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado e não sofre alterações', () => {
        expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
    });
});