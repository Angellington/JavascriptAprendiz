console.clear()
const prompt = require('prompt-sync')()
const color = require('colors')



for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(`${i} is even`.green)
    } else {
        console.log(`${i} is odd`.yellow)
    }
}
