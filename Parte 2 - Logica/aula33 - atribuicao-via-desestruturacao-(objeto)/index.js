const pessoa = {
    nome: 'Minerva',
    sobrenome: 'Alves',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}
console.clear()
// Atribuição via desestruturação
// Extrai do objeto pessoa o nome
const { nome, sobrenome, endereco } = pessoa;
console.log(endereco)
