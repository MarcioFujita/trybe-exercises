const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  return arrays.reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);

//   return arrays.reduce((previousArray, currentArray) => {
//       currentArray.forEach((item) => previousArray.push(item));
//       return previousArray;
//   });
}
console.log(flatten());
assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);

// Dada uma matriz de matrizes, transforme em uma única matriz.
