let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
    resultado = (resultado + numbers[index]);
}

resultado = resultado / 10;
console.log('A média aritmética dos valores no array é: ' + resultado);

if (resultado > 20){
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor que 20');
}
