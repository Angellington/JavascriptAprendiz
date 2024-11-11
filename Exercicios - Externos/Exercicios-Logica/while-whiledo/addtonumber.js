console.clear()
const prompt = require("prompt-sync")()

let n = prompt("Tab a number: ")

let count = 1;

while(count <= n){
    console.log(count)
    count += count

    if(count == n){
        console.log("After end")
    }
}