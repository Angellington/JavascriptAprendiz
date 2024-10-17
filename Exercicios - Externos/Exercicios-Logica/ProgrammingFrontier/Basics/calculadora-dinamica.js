console.clear()
const prompt = require('prompt-sync')()
const color = require('colors')

// Enviar numero e atualizar dinamicamente o R

function applyOperation(R, Rtemp, operator){
    if(operator === '+'){
        return R + Rtemp
    }
    if(operator === '-'){
        return R - Rtemp
    }

    if(operator === 'x'){
        return R * Rtemp;
    }
    if(operator === ':'){
        return R / Rtemp;
    }
    return R
}

let numbers = []
let operators_hist = []
let R = 0;
let Rtemp = 0;

while (true){
    console.clear()
    console.log(`${numbers} = ${R}`.green)
    let n = prompt('(Q to Quit) - Tab a number: ')
    console.clear()

    if(n === 'Q' || n === 'q'){
        console.log('Quitting...'.yellow)
        break
    }

    
    if(isNaN(n)){
        console.log('Is not a number!'.red)
        continue
    } else {
        n = Number(n)
        numbers.push(n)
        Rtemp = n

        if(operators_hist.length > 0){
            let last_operator = operators_hist[operators_hist.length - 1];
            R = applyOperation(R, Rtemp, last_operator)
        } else {
            R = Rtemp;
        }

        console.log(`${numbers.join(' ')} = ${R}`.green)
        while(true){
            let operation = prompt('Select an operation (+/-/x/:): ')

            if (!['+', '-', 'x', ':'].includes(operation)){
                console.log('Select a valid operator'.red)
            } else {
                numbers.push(operation);
                operators_hist.push(operation);
                break;
            }
        }
    }
}