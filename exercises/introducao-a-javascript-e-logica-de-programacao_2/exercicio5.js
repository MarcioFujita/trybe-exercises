let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
let maiorValor = 0;

for (let index = 0; index < numbers.length; index += 1) {

    resultado = numbers[index];

    if (resultado >= maiorValor){
        maiorValor = resultado;
    } else {
        maiorValor = maiorValor;
    }

}

console.log('Maior valor no array: ' + maiorValor);
