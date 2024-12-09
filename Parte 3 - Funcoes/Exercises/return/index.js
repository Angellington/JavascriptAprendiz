console.clear()
const prompt = require("prompt-sync")()
console.clear()

/* 
Escreva uma função celsiusParaFahrenheit que converta uma temperatura de Celsius para Fahrenheit e retorne o resultado.

Fórmula: 𝐹 = 𝐶 × 1.8 + 32
( F= C × 1.8 + 32 )
*/

function celsiusForFahrenheit(celsius){
    return celsius * 1.8 + 32
}

console.log(celsiusForFahrenheit(25))