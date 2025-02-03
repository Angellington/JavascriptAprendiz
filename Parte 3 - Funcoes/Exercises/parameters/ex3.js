console.clear()
const prompt = require("prompt-sync")()
console.clear()

/* 
Crie uma função chamada saudacao que receba dois parâmetros:
nome e mensagem. 

parâmetro mensagem deve ter um valor padrão de "Bem-vindo(a)!". 
 
A função deve retornar a mensagem formatada.


*/

function greetings(name, message){
    return (`${name}, ${message}`);
}

let message = "Welcome!"

let name = prompt("Tab your name: ")

console.log(greetings(name, message))