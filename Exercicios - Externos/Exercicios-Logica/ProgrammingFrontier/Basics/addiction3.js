console.clear()

const prompt = require('prompt-sync')()
const color = require('colors')


let numbers = []
let number;

function sum(a, b){
    return a + b
}

function sumAll(numbers){
    return numbers.reduce(sum, 0)
}

while(true){
    

    if(numbers.length > 1){
        console.clear()
        console.log(`${numbers.join(' + ')} = `.yellow + `${sumAll(numbers)}`.green)
        let option = prompt("Do you want quit (Y/N): ").toUpperCase();
        if(option !== 'N'){
            break
        }
    }
    console.log(`${numbers.join(' + ')} = `.yellow + `${sumAll(numbers)}`.green)
    console.clear()
    number = prompt('Tab a number: ')
    number = Number(number)

    if(!isNaN(number)){
        numbers.push(number);
    } else {
        console.log('Please enter a valid number. '.red)
    }
}