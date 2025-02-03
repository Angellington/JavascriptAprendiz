console.clear()
const prompt = require("prompt-sync")()
console.clear()

/* 
Crie uma função chamada somaPares 
que recebe uma quantidade indefinida 
de argumentos e retorna a soma apenas 
dos números pares.
*/

function somaPares(a, b, c){
    let total = 0;

    for(let argument of arguments){
        if(argument % 2 == 0){
            total += argument;
        }
    }
    console.log(total)
}

somaPares(1, 3, 5, 7, 9, 11)