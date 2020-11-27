let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
let modulo;
let contador = 0;


for (let index = 0; index < numbers.length; index += 1) {

    resultado = numbers[index];

    modulo = (resultado % 2 == 0);

    if (modulo == false){
        contador = contador += 1;
    } else {
        contador = contador;
    }

}

if (contador > 0){
    console.log('A quantidade de números ímpares no array é de: ' + contador);
} else {
    console.log('Nenhum valor ímpar encontrado');
}
