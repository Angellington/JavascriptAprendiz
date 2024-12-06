console.clear()
const prompt = require("prompt-sync")();

let n1 = Number(prompt("Tab a number: "))
let n2 = Number(prompt("Tab a number: "))

// Function to use a HIGHEST NUMBER - Operador Ternário

function HighNumber(n1, n2){
    return (n1 > n2) ? n1 : n2
}

console.log(HighNumber(n1, n2))