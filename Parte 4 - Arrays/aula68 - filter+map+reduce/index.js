// combinar os dois

//retornar a soma do dobro dos pares

// -> filtrar pares
// -> dobrar valores
// -> reduzir (somar tudo)

const numeros = [5, 10, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]


// Unimos tudo!
const pares = numeros
.filter((valor) => valor % 2  == 0)
.map( (valor) => valor * 2)
.reduce( (acumulador, valor) => acumulador += valor)

console.log(pares)