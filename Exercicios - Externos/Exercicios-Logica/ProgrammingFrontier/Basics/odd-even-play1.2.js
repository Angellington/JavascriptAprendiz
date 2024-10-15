console.clear()
// eslint-disable-next-line no-undef
const prompt = require('prompt-sync')()



function Choosing(){
    while (true){
        let option = prompt("Please, what do you think? (0) Even | (1) Odd: ");
        
        if((option != 0 && option != 1) || isNaN(option)){
            console.clear()
            console.log("WRONG!!!")
            continue
        } else {
            if(option == 0){
                option = 'EVEN'
                console.clear()
                console.log("You chooses EVEN")
                return option
            } else {
                option = 'ODD'
                console.clear()
                console.log("You chooses ODD")
                return option
            }
        }
    }
}

function MyNumber(){
    while (true){
        let my_number = Number(prompt("Tab (1) to (10): "))
        if(my_number > 10 || isNaN(my_number)){
            console.clear()
            console.log("Tab again!")
            continue
        } else {
            if(my_number % 2 == 0){
                console.clear()
                return my_number
            } else {
                console.clear(0)
                return my_number
            }
        }
    }
}

function CPNumber(){
    while (true){
        let cp_number = Math.floor(Math.random() * 11)
        if(cp_number > 10 || isNaN(cp_number)){
            console.clear()
            console.log("Tab again!")
            continue
        } else {
            if(cp_number % 2 == 0){
                console.clear()
                console.log(`CP Number is ${cp_number}`)
                return cp_number
            } else {
                console.clear(0)
                console.log(`CP Numver is ${cp_number}`)      
                return cp_number
            }
        }
    }
}




let option = Choosing()
let mynumber = MyNumber()
let cpnumber = CPNumber()

let decision = mynumber + cpnumber;

if(decision % 2 == 0){
    if(option == 'EVEN'){
        console.log("(EVEN) - YOU WIN!!")
    } else {
        console.log("(ODD) - YOU LOSES!!")
    }
} else {
    console.log("(ODD) - YOU WIN!!")
}



console.log(`Your choice: ${option}, Your number: ${mynumber}, CP number: ${cpnumber}`);
