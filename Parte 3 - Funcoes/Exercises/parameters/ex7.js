console.clear()
const prompt = require("prompt-sync")()
console.clear()

/* 
Crie uma função chaada criarMensagem que recebea um objeto como parametro com
as propriedades nome, idade, e cidade. Torne as propriedades idade e cidade opcionais

*/

criarMensagem({ nome: "Angel" });

function criarMensagem( {nome, idade = "Desconhecida", cidade = "Não informada"} ){
    return `${nome} tem ${idade} anos e mora em ${cidade}.`
}

console.log(criarMensagem({ nome: "Angel", cidade: "Esteio", idade: 19 }))