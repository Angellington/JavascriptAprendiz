console.clear();
const prompt = require('prompt-sync')();
const colors = require('colors');

let numbers = [];

// Loop para adicionar números
while (true) {
    let number = prompt("Tab a Number: ");
    
    // Verifica se é um número
    if (isNaN(Number(number))) {
        console.clear();
        console.log("Tab again".red);
        continue;
    } else {
        numbers.push(Number(number)); // Armazena como número
        console.clear();
        console.log("Current numbers:", numbers);
    }

    // Verifica se deseja adicionar mais números
    while (true) {
        let option = prompt("Deseja adicionar mais números? (Y/N): ").toUpperCase();
        
        if (option === "Y") {
            console.clear();
            break; // Sai do loop e continua pedindo números
        } else if (option === "N") {
            console.log("Final numbers:", numbers);
            process.exit(); // Sai do programa
        } else {
            console.log("Please enter Y or N.".yellow);
        }
    }
}
