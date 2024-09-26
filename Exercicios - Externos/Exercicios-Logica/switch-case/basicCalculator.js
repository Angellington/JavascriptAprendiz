console.clear()
// Import libraries
const prompt = require('prompt-sync')();
const color = require('colors');

// main
function sum(a, b){
    let r = a + b;
    return console.log(r);
}
function sub(a, b){
    let r = a - b;
    return console.log(r);

}
function mul(a, b){
    let r = a * b;
    return console.log(r);

}
function div(a, b){
    let r = a / b;
    return console.log(r);

}

let n1 = Number(prompt('Insert a new number: '))
let n2 = Number(prompt('Insert a new second number: '))

let opt = Number(prompt('sum (1) - sub (2) - mul (3) - div(4)'))

switch(opt){
    case (1): sum(n1, n2); break;
    case (2): sub(n1, n2); break;
    case (3): mul(n1, n2); break;
    case (4): div(n1, n2); break;
    default: console.log('Erro'.red); break;
} 