console.clear()
const prompt = require('prompt-sync')()

// Selecting Odd or Even number

while (true){
    let mynumber = prompt('Tab (0 to 10): ');

    if(isNaN(mynumber) || mynumber > 10 || mynumber < 0){
        console.log("Tab again!")
        continue
    } else {
        if(mynumber % 2 == 0){
            console.log("Your number is ODD")
            break;
        } else {
            console.log("Your number is even")
            break;
        }
    }
}

