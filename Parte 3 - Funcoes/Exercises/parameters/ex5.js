const { number } = require("prop-types");

console.clear()
const prompt = require("prompt-sync")()
console.clear()

/* 
Crie uma função chamada calculadora que receba o 
operador como primeiro parâmetro (ex: +, -, *, /),
um acumulador inicial como segundo parâmetro, e 
uma lista de números como restante dos argumentos. 

A função deve realizar a operação indicada em cada número da lista.
*/


function calculator(operator, ...numbers) {
    if (numbers.length === 0) {
        console.log("Please, provide at least one number!");
        return null;
    }

    let total = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (operator === "+") {
            total += numbers[i];
        } else if (operator === "-") {
            total -= numbers[i];
        } else if (operator === "*") {
            total *= numbers[i];
        } else if (operator === "/") {
            if (numbers[i] === 0) {
                console.log("Error: Cannot divide by zero.");
                return null;
            }
            total /= numbers[i];
        } else {
            console.log("Invalid operator. Please use +, -, *, or /.");
            return null;
        }
    }

    return total;
}

   


console.log(calculator('*', 2, 3, 4, 3, 10))