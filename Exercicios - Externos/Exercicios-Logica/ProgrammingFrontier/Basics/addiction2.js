console.clear()

const prompt = require('prompt-sync')()
const colors = require('colors')

// CRIAR UM CODIGO QUE SOME

let numbers = []
let sum = 0


while(true){
    let number = Number(prompt('Tab a number: '))

    if(isNaN(number)){
        console.clear()
        console.log("Tab again!".red)
        continue
    } 

    console.log(numbers)
    
    numbers.push(number)
    sum += number;

    if(numbers.length > 2){
        let option = prompt('Do you want to add another one? (Y/N) :').toUpperCase();
        if(option == 'Y'){
            console.clear()
            continue
        } else {
            break
        }
    }
    
    console.clear()
}

console.log(numbers.join(`${numbers.join( ' + ')} = ${sum}`))