console.clear()
// For in -> Lê indices ou chaves do objeto
const frutas = ['Pera', 'Banana', 'Uva']

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

// Lê cada indice do array
for (i in frutas){
    console.log(frutas[i])
}

const pessoa = [
    {nome: 'Angel', idade: '19 anos', altura: '1.78'},
    {nome: 'Isabela', idade: '17 anos', aluta: '1.63'}
];

const livro = {
    nome: 'The Last Malancholy - Parte 2 (Blueberry)',
    livro: 'Livro 4',
    paginas: '534 páginas'
}

for (let key in pessoa){
    console.log(pessoa[key].nome)
}

for (key in livro){
    console.log(livro[key])
}


