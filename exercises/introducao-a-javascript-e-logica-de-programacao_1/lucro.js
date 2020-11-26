let custo = 200.50;
let venda = 300.00;
let custoMaisImposto;
let lucroUnitario;
let lucroTotal;

if (custo < 0 || venda < 0) {
  console.log('O valor de custo e/ou o valor de venda tem que ser iguais ou maiores que zero');
}else {
  custoMaisImposto = (custo * 1.20);
  lucroUnitario = (venda - custoMaisImposto);
  lucroTotal = (lucroUnitario * 1000);
  lucroTotal = lucroTotal.toFixed(2);
  console.log('O lucro total é de: R$ ' + lucroTotal);
}
