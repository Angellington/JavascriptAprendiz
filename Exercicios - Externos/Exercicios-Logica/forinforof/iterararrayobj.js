console.clear()
// User for...if para iterar sobre um array de objetos e exibir as propriedades de cada objeto no console.

const alunos = [
    { nome: "João", idade: 20},
    { nome: "Ana", idade: 22},
    { nome: "Carlos", idade: 19}
];

//iterar e exibir as proprieades de cada objeto

for (let aluno of alunos){
    console.log(`O ${aluno.nome} tem ${aluno.idade} anos!`)
}

