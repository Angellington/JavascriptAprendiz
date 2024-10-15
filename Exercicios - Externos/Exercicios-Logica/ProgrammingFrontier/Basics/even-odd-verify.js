console.clear()
const prompt = require('prompt-sync')()
const color = require('colors')
function OddEvenVerify(n){
    if(n % 2 == 0){
        console.clear()
        console.log(`${n} is EVEN`.green)
    } else {
        console.clear()
        console.log(`${n} is ODD`.green)
    }
}

while (true){
    let n = prompt("Tab a number: ")

    if(isNaN(n)){
        console.clear()
        console.log("It's not a number!".red)
        continue
    } else {
        OddEvenVerify(n)
        break
    }
}
