console.clear()
// Somar valores de um array numérico
const numeros = [10, 20, 30, 40];

let soma = 0;

for(let numero of numeros){
    soma += numero
    console.log('somando... ', numero)
}

console.log('Total!!', soma)