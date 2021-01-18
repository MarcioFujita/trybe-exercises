// Exercício 1
const testingScope = (escopo) => { 
    if (escopo === true) { 
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if).';
      ifScope2 = 'Ótimo, fui utilizada no escopo !';
      console.log(`${ifScope} ${ifScope2}`);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(`${elseScope}`);
    }
    // console.log(ifScope + ' o que estou fazendo aqui ? :O'); 
    // Se necessário esta linha pode ser removida.
  }
  testingScope(true);

// Exercício 2
  // let oddsAndEvens = [13, 3, 4, 10, 7, 2].sort((a, b) => a-b)
let oddsAndEvens = [13, 3, 4, 10, 7, 2]

oddsAndEvens.sort((a, b) => a - b);

console.log(oddsAndEvens);
