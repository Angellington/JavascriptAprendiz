console.clear()
const color = require('colors')

let i = 50000000;
while (true){
    if(i % 1 === 0){
        console.log(`${i}`.red)
    }
    if(i % 2 === 0){
        console.log(`${i}`.white)
    }
    if(i % 3 === 0){
        console.log(`${i}`.yellow)
    }
    if(i % 4 === 0){
        console.log(`${i}`.black)
    }
    if(i % 5 === 0){
        console.log(`${i}`.cyan)
    }
    if(i % 6 === 0){
        console.log(`${i}`.green)
    }
    if(i % 7 === 0){
        console.log(`${i}`.grey)
    }
    if(i % 8 === 0){
        console.log(`${i}`.rainbow)
    }
    if(i % 9 === 0){
        console.log(`${i}`.blue)
    }
    
    i++
}