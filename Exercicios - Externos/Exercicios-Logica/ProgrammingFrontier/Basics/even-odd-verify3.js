console.clear()

const prompt = require('prompt-sync')()
const color = require('colors')

function EvenOddVerify(n){
    if(n % 2 == 0){
        console.log(`${n} is EVEN`.green)
    }
    if(n % 2 != 0){
        console.log(`${n} is ODD`.red)
    }
}

for (let i = 0; i <= 100.4; i++){
    EvenOddVerify(i)
}

let ii = 0
while (true){
    EvenOddVerify(ii)
    ii++
}