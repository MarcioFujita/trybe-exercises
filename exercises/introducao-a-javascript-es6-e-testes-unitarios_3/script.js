const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// Exercicio 1
assert.strictEqual(typeof sum, 'function');

// Exercicio 2
assert.strictEqual(sum(4, 5), 9);

// Exercicio 3
assert.strictEqual(sum(0, 0), 0);

// Exercicio 4
assert.throws(() => {
    sum(4, '5');
  });

// Exercicio 5
assert.throws(() => {
    sum(4, '5');
}, /^Error: parameters must be numbers$/);


// 1- A função sum(a, b) retorna a soma do parâmetro a com o b
// 2- Teste se o retorno de sum(4, 5) é 9
// 3- Teste se o retorno de sum(0, 0) é 0
// 4- Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
// 5- Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")