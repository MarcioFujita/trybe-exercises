let numbers = [];
let divided = [];
valor = 0;


for (let index = 1; index <= 25; index += 1) {

    numbers.push(index);

}

for (let index = 0; index < numbers.length; index += 1){

    valor = numbers[index];
    valor = valor / 2;
    divided.push(valor);

}

console.log('Elementos do array numbers: ' + numbers);
console.log('Elementos do array anterior divididos por 2: ' + divided);
