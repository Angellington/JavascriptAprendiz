console.clear()
const prompt = require("prompt-sync")()

// Characteres count
let string = prompt("Digit a char: ")

function stringCount(string){
    return string.length
};

console.log(`The characters are: ${stringCount(string)}`)