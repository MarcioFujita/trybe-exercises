// 1- Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const exercise1 = require('./exercise1');

describe('Ex1: Testing rng function', () => {
    it('Testing rng function', () => {
        exercise1.rng = jest.fn().mockReturnValue(10);

        expect(exercise1.rng()).toBe(10);
        expect(exercise1.rng).toHaveBeenCalled();
        expect(exercise1.rng).toHaveBeenCalledTimes(1);
    });
});
