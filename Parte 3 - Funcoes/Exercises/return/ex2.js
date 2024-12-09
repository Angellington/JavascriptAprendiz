console.clear()
const prompt = require("prompt-sync")()
console.clear()

function mulArray(numbers){
    let total = 1;
    for(let number of numbers){
        total *= number
    }
    return total
}

console.log(mulArray([1, 2, 3]))