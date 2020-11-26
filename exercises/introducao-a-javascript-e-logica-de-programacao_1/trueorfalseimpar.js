let a = 1;
let b = 2;
let c = 3;
let moduloUm;
let moduloDois;
let moduloTres;


moduloUm = (a % 2 == 0);
moduloDois = (b % 2 == 0);
moduloTres = (c % 2 == 0);

if (moduloUm == false || moduloDois == false || moduloTres == false) {
  console.log(true)
}else {
    console.log(false)
}
