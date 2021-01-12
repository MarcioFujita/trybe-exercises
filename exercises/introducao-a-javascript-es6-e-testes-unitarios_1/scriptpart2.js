// Exercício 1
const fatorial = (numero) => {
    let result = 0;
    let numFor = numero - 1
    for (let index = numFor; index > 0; index -= 1) {
        result = result + (numero * index);
    }
    console.log(`O fatorial de ${numero} é: ${result}`);
}
fatorial(4);

// Exercício 2
const maiorPalavra = (frase) => {
    let separado = frase.split(' ');
    let resultadoParcial = '';
    let resultado = '';
    let size = 0;
    for (let index = 0; index < separado.length; index +=1) {
        resultadoParcial = separado[index];
        let tamanho = resultadoParcial.length;
        if (tamanho > size) {
            size = tamanho;
            resultado = resultadoParcial;
        }
    }
    console.log(`A maior palavra da frase é: ${resultado}`);
}
maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu')
