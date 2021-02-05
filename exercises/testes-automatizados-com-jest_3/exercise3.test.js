// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

const exercise3 = require('./exercise3');

describe('Ex3 part-1: Testing new implementation', () => {
    it('should receive 3 values and return the multiplication of those values, should occur only once', () => {

        exercise3.rng = jest.fn().mockImplementation((a, b, c) => a * b * c);

        expect(exercise3.rng(2, 3, 4)).toBe(24);
        expect(exercise3.rng).toHaveBeenCalled();
        expect(exercise3.rng).toHaveBeenCalledTimes(1);
        expect(exercise3.rng).toHaveBeenCalledWith(2, 3, 4);
    });
});

describe('Ex3 part-2: Testing new implementation', () => {
    it('should receive a value and double it as return', () => {
        exercise3.rng.mockReset();
        expect(exercise3.rng).toHaveBeenCalledTimes(0);

        exercise3.rng.mockImplementation(a => a * 2);
        expect(exercise3.rng(2)).toBe(4);
        expect(exercise3.rng).toHaveBeenCalled();
        expect(exercise3.rng).toHaveBeenCalledTimes(1);
        expect(exercise3.rng).toHaveBeenCalledWith(2);
    });
});