console.clear()
const prompt = require("prompt-sync")()

// Sum two Numbers

function sum(a, b){
    return a + b;
}

let num1 = Number(prompt("Tab a first number: "));
let num2 = Number(prompt("Tab a second number: "));

console.log(sum(num1, num2));