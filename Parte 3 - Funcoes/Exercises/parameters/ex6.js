console.clear()
const prompt = require("prompt-sync")()
console.clear()

/* 
Crie uma função chamada exibeDados que receba um objeto 
com as propriedades nome, sobrenome e idade, e retorne uma string formatada.
*/

function exibeDados (nome, sobrenome, idade){
    return console.log(`${nome.nome} ${nome.sobrenome} tem ${nome.idade} anos.`)

}

exibeDados({ nome: "Angel", sobrenome: "Minerva", idade: 19});
