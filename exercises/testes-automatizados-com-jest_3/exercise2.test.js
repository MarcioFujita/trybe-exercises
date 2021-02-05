// 2- Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

const exercise2 = require('./exercise2');

describe('Ex2: Testing new implementation', () => {
    it('should receive 2 values and return the division of the first by the second value, should occur only once', () => {

        exercise2.rng = jest.fn().mockImplementation((a, b) => a / b);

        expect(exercise2.rng(6, 3)).toBe(2);
        expect(exercise2.rng).toHaveBeenCalledTimes(1);
    });
});
