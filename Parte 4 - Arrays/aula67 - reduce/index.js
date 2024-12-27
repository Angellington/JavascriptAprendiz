// filtrar (useo filter)
// se deseja alterar (use map)
// se deseja reduzir o array (use  reduzir)

const numeros = [5, 10, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce(function(acumulador, valor){
    // acumulador.push(valor * 2)
    acumulador += valor;
    return acumulador;
}, []) // valor inicial do acumulador

console.log(total)

// reduzir um array a um unico elemento

const pessoas = [
    {nome: 'Minerva', idade:  19},
    {nome: 'Matheus', idade:  8},
    {nome: 'Dudu', idade:  7},
    {nome: 'Kakau', idade:  9},
    {nome: 'Josué', idade:  92},
    {nome: 'Moisés', idade:  120},
];


// const maisVelha = pessoas.reduce(function(acumulador, valor){
//     if(acumulador.idade  > valor.idade) return acumulador;
//     return
// })