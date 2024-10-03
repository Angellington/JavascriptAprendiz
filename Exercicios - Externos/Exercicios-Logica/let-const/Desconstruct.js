console.clear()
const pessoa = { nome: 'Isabela', idade: 16, cidade: "Esteio" };

const { nome, idade } = pessoa; // Desconstruction
console.log(nome, idade)

let numeros = [1, 2, 3]
let [a, b] = numeros;
console.log(a, b);
