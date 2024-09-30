console.clear();
// Import libraries
const prompt = require('prompt-sync')()
const color = require("colors")

/* 
-------Conversor de Moedas----------
1. Escolher a moeda
2. Colocar o valor
3. Escolher a moeda de conversão
4. Converter
5. Ir de novo
6. Sair do codigo
*/

let moedas = [null, 'Real', 'Dólar', 'Euro', 'Iene' ]
let cmoedas = [null, '']



let opcao;

while (true){
    console.log("Insira a moeda de conversão: \n(1) - Real\n(2) - Dólar\n(3) - Euro\n(4) - Iene");
    opcao = prompt(':')

    if(isNaN(opcao)){
        console.clear()
        console.log('Try again!'.red)
    } else {
        opcao = Number(opcao);
        if(opcao >= 1 && opcao <= 4){
            break;
        } else {
            console.clear()
            console.log('Opção inválida'.yellow)
        }
    }
}

// console.clear()
// console.log('O que você escolheu foi: ' + moedas[opcao].yellow)
// console.log('...')
// console.log('...')
// console.log('...')


// let valor;
// while (true){
//     console.log('Digite o valor: ')
//     valor = prompt(': ');

//     if(isNaN(valor)){
//         console.clear()
//         console.log('Digit a valid value'.red)
//     } else {
//         valor = Number(valor);
//         break;
//     }
// }

// let convert;
// console.log('Insira a moeda que quer converter: \n(1) - Real\n(2) - Dólar\n(3) - Euro\n(4) - Iene')
// while(true){
//     convert = prompt(': ');

//     if(isNaN(convert)){
//         console.clear()
//         console.log('Digit a valid value'.red)
//     } else {
//         convert = Number(convert)
        
//     }
// }

// Converter qualquer moeda em dolar
// Do dolar ir para as outras


// // converter real para dolar
// let n = Number(prompt('Insira um valor: '));

// const taxacambioBRL_USD = 5.438;
// const taxacambioYEN_USD = 145.56;
// const taxacambioEUR_USD = 1.05;

// const taxacambioUSD_BRL = 0.18;

// // Real para Dolar
// function BRL_USD(n){
//     let dolar = n / taxacambioBRL_USD;
//     dolar = dolar.toFixed(2)
//     if(n > dolar){
//         console.log(`${n}R$ \n`.green + `${dolar}$`.red )
//     } else {
//         console.log(`${n}R$ \n`.red + `${dolar}$`.green)
//     }
// }

// // Iene para dolar
// function YEN_USD(n){
//     let dolar = n / taxacambioYEN_USD;
//     dolar = dolar.toFixed(2);
//     if(n > dolar){
//         console.log(`${n}¥ \n`.green + `${dolar}$`.red )
//     } else {
//         console.log(`${n}¥ \n`.red + `${dolar}$`.green)
//     }
// }

// // Euro para dolar
// function EUR_USD(n){
//     let dolar = n * taxacambioEUR_USD;
//     dolar = dolar.toFixed(2)
//     if(n > dolar){
//         console.log(`${n} EUR \n`.green + `${dolar}$`.red )
//     } else {
//         console.log(`${n} EUR \n`.red + `${dolar}$`.green)
//     }
// }

// // Dolar para Real
// function USD_BRL(n){
//     let real = n / taxacambioUSD_BRL;
//     real = real.toFixed(2)
//     if(n > real){
//         console.log(`${n}$ \n`.green + `${real}R$`.red)
//     } else {
//         console.log(`${n}$ \n`.red + `${real}R$`.green)
//     }
// }



// EUR_USD(n)


// BRL_USD(n)






// git add