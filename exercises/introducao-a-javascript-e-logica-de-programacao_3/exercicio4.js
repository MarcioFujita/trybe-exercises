let n = 9;
let n2 = 1;
let n3 = (n - 1);
let space = '';
let asteriscos = '';

for (let index = 1; index <= n; index += 1){
    space = space + ' ';
    asteriscos = asteriscos + '*';
}

for (let index = 1; index <= n; index += 2){
    console.log(space.substr(n2) + asteriscos.substr(n3));
    n2 = n2 + 1;
    n3 = n3 - 2;
}
