//               0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [primeiroNumver, segundoNumero, ...resto] = numeros;
console.log(primeiroNumver, segundoNumero) // 1 2
console.log(resto) // [ 3, 4, 5, 6, 7, 8, 9 ]

