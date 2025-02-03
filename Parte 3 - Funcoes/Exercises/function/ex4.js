console.clear()
const prompt = require("prompt-sync")()

// Criar um fatorial
/*
1 = 1
2 = 2 x 1
3 = 3 x 2 x 1
4 = 4 x 3 x 2 

*/

let n = Number(prompt("Tab a number: "));

function fatorial(n){
    let fat = 1;
    for(let i = 1; i <= n; i++){
        fat *= i
    }

    console.log(fat)
}

fatorial(n)