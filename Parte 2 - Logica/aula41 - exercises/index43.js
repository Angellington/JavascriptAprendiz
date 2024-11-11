// Escreva uma função que recebe um numero e retorne:
// Numero divisivel por 3 = Fizz
// Numero divisivel por 5 = Buzz
// Numero divisivel por 3 e 5 = FizzBuzz
// Numero NAO é divisivel por 3 e 5 = retorna o proprio numero
// Checear se o numero é mesmo um numero
// Use a função com numeros de 0 a 10
console.clear()
const prompt = require("prompt-sync")();

let n = prompt("Tab a number: ");

// parte 1

function Parte1(n){
    if(n % 3 == 0){
        console.log("Fizz");
    }
}

Parte1(n)