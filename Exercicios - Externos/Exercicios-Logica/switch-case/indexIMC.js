// Calculadora de IMC (classificação)
console.clear();

// Import Libraries
const prompt = require('prompt-sync')();
const color = require('colors')

// 

let width = Number(prompt('Give me a width: '))
let height = Number(prompt('Give me a height: '))


/* 
IMC = peso(kg)
     altura(m)²
*/

function ImcCalculate(width, height){
    const imc = width / height**2;
    return imc * 100
}

const imc = ImcCalculate(width, height)

switch (true) {
    case (imc > 40):
        console.log('Obesidade Grau III');
        break;
    case (imc >= 35 && imc <= 40):
        console.log('Obesidade Grau II');
        break;
    case (imc >= 30 && imc < 35):
        console.log('Obesidade Grau I');
        break;
    case (imc >= 25 && imc < 30):
        console.log('Acima do Peso');
        break;
    case (imc >= 18.5 && imc < 25):
        console.log('Peso Normal');
        break;
    case (imc >= 17 && imc < 18.5):
        console.log('Abaixo do Peso');
        break;
    case (imc < 17):
        console.log('Muito Abaixo do Peso');
        break;
    default:
        console.log('Valor inválido');
        break;
}

console.log(imc.toFixed(2))