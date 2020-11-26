let bruto = 5000.00;
let salarioBase;
let brutoIr;
let valorDesconto;
let liquido;

if (bruto <= 1556.94){
    salarioBase = (bruto * 0.92);
} else if (bruto >= 1556.95 && bruto <= 2594.92){
    salarioBase = (bruto * 0.91);
} else if (bruto >= 2594.93 && bruto <= 5189.82){
    salarioBase = (bruto * 0.89);
} else {
    salarioBase = (bruto - 570.88);
}

if (salarioBase <= 1903.98){
    console.log('Isento de Imposto de Renda. Salário líquido a receber: R$' + salarioBase);

} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    brutoIr = (salarioBase * 0.925);
    brutoIr = brutoIr.toFixed(2);
    valorDesconto = (salarioBase - brutoIr);
    valorDesconto = (valorDesconto - 142.80);
    valorDesconto = valorDesconto.toFixed(2);
    liquido = (salarioBase - valorDesconto);
    console.log('Salário líquido a receber: R$' + liquido);

} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    brutoIr = (salarioBase * 0.85);
    brutoIr = brutoIr.toFixed(2);
    valorDesconto = (salarioBase - brutoIr);
    valorDesconto = (valorDesconto - 354.80);
    valorDesconto = valorDesconto.toFixed(2);
    liquido = (salarioBase - valorDesconto);
    console.log('Salário líquido a receber: R$' + liquido);

} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    brutoIr = (salarioBase * 0.775);
    brutoIr = brutoIr.toFixed(2);
    valorDesconto = (salarioBase - brutoIr);
    valorDesconto = (valorDesconto - 636.13);
    valorDesconto = valorDesconto.toFixed(2);
    liquido = (salarioBase - valorDesconto);
    console.log('Salário líquido a receber: R$' + liquido);

} else {
    brutoIr = (salarioBase * 0.725);
    brutoIr = brutoIr.toFixed(2);
    valorDesconto = (salarioBase - brutoIr);
    valorDesconto = (valorDesconto - 869.36);
    valorDesconto = valorDesconto.toFixed(2);
    liquido = (salarioBase - valorDesconto);
    console.log('Salário líquido a receber: R$' + liquido);
}

/*salarioBase -  %   = valor1
     2670     - 7.5% = 200.25
valor1 - parcela = desconto  
200.25 -  142.80  =  57.45
salarioBase - desconto = liquido
   2670     -   57.45  = 2612.55 */
