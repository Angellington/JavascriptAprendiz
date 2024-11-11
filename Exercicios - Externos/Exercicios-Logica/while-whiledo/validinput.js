console.clear()
const prompt = require('prompt-sync')()
const color = require('colors')

/* Peca ao usuario uma senha*/

password = "Teste347"


while(true){
    console.clear()
    let password_input = prompt("Tab the passaword: ")

    
    if(password_input !== password){
        console.log("Incorrect password".red)
        continue
    } else {
        break
    }
}

console.log("SYSTEM ACCESS!!".green)