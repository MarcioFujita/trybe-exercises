let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
let menorValor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {

    resultado = numbers[index];

    if (resultado <= menorValor){
        menorValor = resultado;
    } else {
        menorValor = menorValor;
    }

}

console.log('Menor valor no array: ' + menorValor);
