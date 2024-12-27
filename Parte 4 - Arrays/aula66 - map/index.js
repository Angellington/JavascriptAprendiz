// Função Filter, map e reduce (as mais importantes)
// Map altera o valor

// // Retorne os números maiores que 10
// const numeros = [5, 10, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// //dobra numeros

// const doubleNUm = numeros.map(  (valor, index, array) => valor * 2 )


// console.log(doubleNUm)

// const testemap = numeros.map( function(valor, index, array){
//     console.log(valor, index, array)
//     return index
// })

// console.log("Index: ", testemap)













function callbackFilter(valor){
    return valor > 10
}
// //  numeros.filter(valor, indice, array)

// // Passou a referencia da funçao
// const numerosFiltrados = numeros.filter(callbackFilter)
// console.log(numerosFiltrados)


// // OU voce pde fazer uma função anonima

// const numerosFilters = numeros.filter(function callbackFilter(valor){
//     return valor > 10;
// })

// console.log(numerosFilters)

// // OU 

// const numbersFilters = numeros.filter(valor => valor > 10)

// console.log(numbersFilters)


// //Exemplo Complexo
// // filter -> sempre retorna um array com a mesma quantidade ou menos

const pessoas = [
    {nome: 'Minerva', idade:  19},
    {nome: 'Matheus', idade:  8},
    {nome: 'Dudu', idade:  7},
    {nome: 'Kakau', idade:  9},
    {nome: 'Josué', idade:  92},
    {nome: 'Moisés', idade:  120},
];

// Para cada elemento, retornar uma string com o nome da pessoa

// const nomes = pessoas.map( (obj) => obj.nome )

// const idades = pessoas.map( function(obj){
//     delete obj.nome
//     return { idade: obj.idade}
// })

const idadin = pessoas.map( (obj) => ({idade: obj.idade}))

console.log(idadin)

const comIds = pessoas.map( (obj, index) => {
    const newObj = { ...obj };
    newObj.id = index;
    return newObj;
})

console.log(comIds)

console.log(pessoas)

















// // Retorne as pessoas que tem o nome com 5 letras ouu mais
// // const nomesA = pessoas.filter( obj => obj.nome.length >= 6)
// // const nomesB = pessoas.filter( obj => obj.idade < 50)
// const nomesC = pessoas.filter( obj => obj.nome.toLowerCase().endsWith('a') )

// console.log(nomesC)