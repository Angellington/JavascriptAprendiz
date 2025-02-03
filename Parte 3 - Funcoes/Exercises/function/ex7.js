console.clear()
const prompt = require("prompt-sync")()
console.clear()

let array = [1, 23, 5,4, 6, 34, 53, 64, 23];

function ordenarArray(array){
    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if(array[j] > array[j + 1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(ordenarArray(array))