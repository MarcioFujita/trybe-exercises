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

// Exercício 4
// Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".
