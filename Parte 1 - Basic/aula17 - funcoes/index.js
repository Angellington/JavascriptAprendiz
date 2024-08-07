console.clear()
const prompt = require("prompt-sync")()

// Criar função
function saudacao() {
    console.log('EXPANSÃO DE DOMINIO: KINEORAMA')
}
// Chamar função
saudacao()

// Função com parametros - É necessário informar o dado
function NomeDominio(nome){
    console.log(`Bom dia ${nome}`)
}
NomeDominio('Expansão de Dominio: Kineorama')
NomeDominio('CarroChefe')

// =========  Função Saudação  =============

// Inserir dado
let nome = prompt("Digite o seu nome: ")

// Função Bom Dia
function bomdia(nome){
    console.log(`Bom dia ${nome}`)
}

// Chamar Saudacao
bomdia(nome)


// ==========  Função Soma ===============

function soma(x, y){
    x = parseInt(x)
    y = parseInt(y)
    const resultado = x + y
    return resultado
}

let num1 = prompt('Digite um número: ')
let num2 = prompt('Digite outro número: ')
console.log(soma(num1, num2))

// ======= Função Nome de Dominio =========

function domain(nome){
    let domain = prompt("Qual é o nome de sua expansão? ")
    return console.log(`O nome é: ${domain}`)
}

domain()

// ======= Funão Raiz Quadrada ===============

const raiz = function(n) {
    return n ** 0.5
};

let numRaiz = prompt("Digite um número: ")
console.log(raiz(numRaiz))


// =============== Arrow Function =============

const pot = (n) => {
    return n ** n
};

let numPot = prompt("Digite um número: ")
numPot = Number(numPot)
console.log(pot(numPot))