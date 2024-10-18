/*
For classico - Geralmente com iteraveis (array ou strings)
For in - Retorna o indice ou chave (string, array ou objetos)
For of - Retorna o valor em si (iteráveis, arrays ou strings)

*/


// For especifico para objetos iteráveis
console.clear()

// const nome = 'Isabela Alves Bittencourt Barbosa';
const nome = ['Isabela', 'Alves', 'Bittencourt', 'Barbosa']


// Pega o tamanho para controlar o tamanho
for (let i = 0; i < nome.length; i++){
    console.log('Classic For: ', nome[i])
}

// Retorna  o indice do valor
for ( i in nome){
    console.log('For in: ', nome[i])
}

// Retorna o valor em indice
for (let valor of nome){
    console.log('For of: ', valor)
}

// Ainda tem o forEach (permite tudo por meio de uma função)
nome.forEach(function (valor, indice, array){
    console.log('For Each: ', valor, indice, array)
    });