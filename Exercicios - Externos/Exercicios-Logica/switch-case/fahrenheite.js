// Fahrenheit 
console.clear()

const prompt = require('prompt-sync')()
const color = require('colors')

// Functions
function CelsiusToFahrenheit(C){
    let F = (C * 9/5) + 32
    return F
}

function FahrenheitToCelsius(F){
    let C = (F - 32) / 1.8
    return C    
}



function history(){
    while(true){
        console.log('Configurando o History'.rainbow)
        console.log('=-=-=-=-=-=-Select an option-=-=-=-='.bgYellow)
        console.log('(F) - View Fahrenheit history')
        console.log('(C) - View Celsius history')
        console.log('(B) - to Exit'.cyan)
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'.bgYellow)

        let h_option = prompt('Select an Option: ')

        if(h_option == 'F'){
            console.log(fahrenheit_hist)
            continue
        }

        if(h_option == 'C'){
            console.log(celsius_hist)
            continue
        }

        if(h_option == 'B'){
            break
        }        
    }
}

// Variables
let n;

// History Saving

let fahrenheit_hist = []
let celsius_hist = []
// Main

function main(){
    while (true){
        console.clear()
        console.log('=-=-=-=-=-=-Select an option-=-=-=-='.bgRed)
        console.log('(F) - Fahrenheit to Celsius')
        console.log('(C) - Celsius to Fahrenheit')
        console.log('(H) - History'.yellow)
        console.log('(Q) - to Exit'.cyan)
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'.bgRed)
    
        let option = prompt("Select: ")
        if(option === 'F'){
            console.clear()
            console.log('Fahrenheit to Celsius'.bgWhite)
            n = Number(prompt("Tab a temperature: "))
    
            console.log(`${n}Fº`.green)
            let result = FahrenheitToCelsius(n)

            let fah_result = (`${result.toFixed(1)}Cº`.red)
            fahrenheit_hist.push(fah_result)
            console.log(fah_result)

    
            let quit = prompt('Do you wanna quit? (Y/N): ')
            quit.toUpperCase
            if(quit === 'Y'){
                console.log('Quitting...')
                console.log('Done!'.yellow)
                break
            } else {
                console.clear()
                continue
            }
        }
    
        if(option === 'C'){
            console.clear()
            console.log('Celsius to Fahrenheit'.bgWhite)
            n = Number(prompt("Tab a temperature: "))
    
            console.log(`${n}Cº`.green)
            let result = CelsiusToFahrenheit(n)
    
    
            let celsius_result = (`${result.toFixed(1)}Fº`.red)
            celsius_hist.push(celsius_result)
            console.log(celsius_result)
    
            let quit = prompt('Do you wanna quit? (Y/N): ')
            quit.toUpperCase
            if(quit === 'Y'){
                console.log('Quitting...')
                console.log('Done!'.yellow)
                break
            } else {
                console.clear()
                continue
            }
            
        }
    
        if(option == 'H'){
            console.clear()
            history()
        }
        
    
        if(option == 'Q'){
            console.clear()
            console.log('Exiting...')
            console.log('DONE!'.yellow)
            break
        }
    
        console.clear()
        console.log('Tab again'.red)
    }
}

main()




