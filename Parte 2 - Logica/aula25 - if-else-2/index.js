console.clear()
const numero = 23;

// if (numero >= 0 && numero <= 5){
//     console.log("Sim, é maior que zero")
//     console.log("Sim, o número está entre zero e cinco")
// } else {
//     console.log("Seu numero está fora do escopo")
// }

// console.log("O número não está entre 0 e 5")

if (numero >= 0 && numero <= 5) {
    console.log("O numero está entre 0 e 5")
} else if (numero >= 6 && numero <= 8) {
    console.log("O numero está entre 0 e 8")
} else if (numero >= 9 && numero <= 11){
    console.log("O numero está entre 9 e 11")
} else if (1 === 1){
    console.log("REAL") // O IF ELSE só retorna o que é TRUE
} else {
    console.log("O número não está entre 0 e 11")
}


console.log("... Aqui é o resto do código")