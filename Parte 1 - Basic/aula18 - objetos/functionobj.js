console.clear()
const prompt = require("prompt-sync")() 

// Função por Objetos
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

let nome = prompt('Digite um nome: ')
let sobrenome = prompt('Digite o sobrenome: ')
let idade = prompt("Digite a idade: ")
idade = Number(idade)

const pessoa1 = criaPessoa(nome, sobrenome, idade)
const pessoa2 = criaPessoa('Angel', 'Snow', 16)
const pessoa3 = criaPessoa('SuperRetro', 'Bits', 13)
const pessoa4 = criaPessoa('Anjo', 'de Neve', 16)


console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade)
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade)

// Função por Objeto Dois

function criaDeUsuario (login, senha) {
     return {login, senha}
}

const user1 = criaDeUsuario('Ben', '200506203')
console.log(user1.login, user1.senha)