const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (array) => {
    const result = [];
    for (let index = 0; index < array.length; index += 1) {
        result.push(array[index].length);
    }
    return result;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

// 1- Escreva a função wordLengths para passar nos testes já implementados.