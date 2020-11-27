let n = 5;
let n2 = 0;
let space = '';
let asteriscos = '';

for (let index = 1; index <= n; index += 1){
    space = space + ' ';
}

for (let index = 1; index <= n; index += 1){
    asteriscos = asteriscos + '*'; 
    console.log(space.substr(n2) + asteriscos);
    n2 = n2 + 1;
}
