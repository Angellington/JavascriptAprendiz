console.clear()

const globalVar = "I am Global";

function showVariables(){
    const localVar = "I am local"
    console.log(globalVar, localVar)
}

showVariables()
console.log(globalVar)
// console.log(localVar) - Outscope