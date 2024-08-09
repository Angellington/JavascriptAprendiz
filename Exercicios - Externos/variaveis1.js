console.clear() //Limpandos console
const prompt = require('prompt-sync')() //Biblioteca prompt

// Variáveis a ser dadas
let first_name = prompt('Qual é o seu primerio nome: ')
let last_name = prompt('Qual é o seu ultimo nome: ')
let address = prompt("What's your address: ")
const cpf = prompt('Qual é o seu CP: ')
const nome_mae = prompt('O nome da sua mãe: ')



console.log(first_name, last_name)
console.log(`I know your address, is ${address}, right?`)

address = prompt("What's your new address: ")
console.log(`I know your address, is ${address}, right?`)

console.log(`O seu CPF é ${cpf}, acertei?`)
console.log(`O nome da sua mãe é: ${nome_mae}, correto?`)

