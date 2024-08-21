console.clear()
const prompt = require("prompt-sync")()
/*
Operadores de Comparação

> Maior que
>= Maior ou Igual

< Menor que
<= Menor que ou Igual

== igualdade (valor)
=== igualdate estita (valor e tipo)

!= diferente (valor)
!== diferente estrito (valor e tipo)
*/


function maiorQue(a, b){
    a = prompt("Digite um número: ")
    b = prompt("Digite outro número: ")
    a = parseInt(a)
    b = parseInt(b)

    if (a > b){
        console.log(`${a} é maior que ${b}`)
    } else if (a < b) {
        console.log(`${b} é menor que ${a}`)
    } else {
        console.log(`Ambos os valores são iguais`)
    }
}

maiorQue()
// console.log(10 >= 2) // Output: true

// igualdade
const num1 = 23 // number
const num2 = '23' // string
console.log(num1 === num2)