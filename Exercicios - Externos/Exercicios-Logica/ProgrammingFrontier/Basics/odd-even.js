console.clear()
const prompt = require('prompt-sync')()

// Selecting Odd or Even number


// Player escolhe o seu numero
function my_number(){
    while (true){
        let mynumber = prompt('Tab (0 to 10): ');
    
        if(isNaN(mynumber) || mynumber > 10 || mynumber < 0){
            console.clear()
            console.log("Tab again!")
            continue
        } else {
            if(mynumber % 2 == 0){
                console.log(`Your number ${mynumber} is ODD`)
                break;
            } else {
                console.log(`Your number ${mynumber} is EVEN`)
                break;
            }
        }
    }
}

function cp_number(){
    while (true){
        let randomNumber = Math.floor(Math.random() * 11)
    
        if(isNaN(randomNumber) || randomNumber > 10 || randomNumber < 0){
            console.clear()
            console.log("Tab again!")
            continue
        } else {
            if(randomNumber % 2 == 0){
                console.log(`CP number ${randomNumber} is ODD`)
                return randomNumber;
            } else {
                console.log(`CP number ${randomNumber} is EVEN`)
                return randomNumber;
            }
        }
    }
}


let MeuNumero = my_number();
let ComputadorNumero = cp_number();

const addiction = MeuNumero + ComputadorNumero;

// Caso PLAYER selecione ODD
if(MeuNumero % 2 == 0){
    if(addiction % 2 == 0){
        console.log("IT's ODD\nYou WIN!")
    } else {
        console.log("It's EVEN\nYou Lose")
    }
} else {
    console.log("You LOSE!")
}









