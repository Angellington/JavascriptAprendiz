// ForEach somente em arrays

const a1 = [1, 2, 3, 4, 5, 6, 7]

let total = 0;
a1.forEach((valor, indice, array) => {
    total += valor;
})

console.log(total)