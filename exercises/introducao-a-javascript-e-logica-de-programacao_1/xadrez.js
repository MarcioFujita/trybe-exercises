let peca = 'CaVaLo';
let convert = peca.toLowerCase();

switch (convert) {
  case "peao":
    console.log('Movimento vertical. Pega peça na diagonal');
    break;

  case "torre":
    console.log('Movimento vertical e horizontal');
    break;

  case "cavalo":
    console.log('Movimento em L');
    break;

  case "bispo":
    console.log('Movimento em diagonal qualquer número de casas');
    break;

  case "rainha":
    console.log('Movimento em qualquer direção, qualquer número de casas');
    break;

  case "rei":
    console.log('Movimento em qualquer direção, apenas uma casa');
    break;

  default:
    console.log(peca + ' não é uma peça de xadrez');
}
