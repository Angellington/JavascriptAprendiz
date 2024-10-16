console.clear()

const prompt = require('prompt-sync')()
const color = require('colors');
const { number } = require('prop-types');

// -- Adicionar numero e ao mesmo tempo soma dinamicamente

let numbers = []
let R = 0;
let numberfunction = 0;

// Funções
function sum(a, b){
    return parseFloat(a) + parseFloat(b);
}
function sub(a, b){
    return parseFloat(a) - parseFloat(b);
}
function mul(a, b){
    return parseFloat(a) * parseFloat(b);
}
function div(a, b){
    if (b == 0){
        console.log('Division by zero is not allowed'.red)
        return a;
    }
    return parseFloat(a) / parseFloat(b);
}


while(true){
    console.clear()
    console.log(`${numbers.join(' ')} = computing...`.green)
    n = prompt('(Q - for QUIT) -Insert a number: ')


    if(n === 'Q' || n === 'q'){
        console.log('Quitting...')
        break
    }

    if(!isNaN(n) && n.trim() !== ''){
        n = parseFloat(n)
        console.clear()
        numbers.push(n)

        if (R === 0){
            R = n;
        }
        

        console.log(`${numbers.join(' ')} = ${R}`.green)
        let operation = prompt('Select Operation: (+/-/x/:): ')

        while (true){
            if(['+', '-', 'x', ':'].includes(operation)){
                numbers.push(operation)
                if(operation === '+'){
                    console.log(R)
                    numberfunction = sum(R, n)
                    R = numberfunction
                    numberfunction = R
                    break
                }
                if(operation === '-'){
                    numberfunction = sub(R, n)
                    numberfunction -= R
                    break
                }
                if(operation === 'x'){
                    numberfunction = mul(R, n)
                    break
                }
                if(operation === ':'){
                    numberfunction = div(R, n)
                    break
                }
            } else {
                operation = prompt('Invalid operation. Please select (+/-/x/:): '.red)
            }
        }
        continue
    } else {
        console.log('Invalid input. Please enter a valid numver. '.red)
    }
}