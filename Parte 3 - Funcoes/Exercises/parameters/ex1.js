console.clear()
const prompt = require("prompt-sync")()
console.clear()

// Sum all

function somaTudo(a, b, c){
    let total = 0;
    for(let argument of arguments){
        total += argument;
    }  
    console.log(total)
}

somaTudo(1, 2, 3, 4)