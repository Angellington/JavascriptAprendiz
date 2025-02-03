console.clear()
const prompt = require("prompt-sync")()
console.clear()

// Palindrom

let char = prompt("Word: ")


function palindrom(char){
    let reverse_text = char.split("").reverse().join("").toLowerCase()
    new_char = char.toLowerCase()

    return (new_char == reverse_text) ? "Is Palindrom" : "Does not Palindrom";
}

console.log(palindrom(char))