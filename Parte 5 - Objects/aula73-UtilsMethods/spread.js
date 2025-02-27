// Espalhar elementos de um array, propriedades de objeto ou argumentos de uma função
// facilita a cópia e a combinação de arrays e objetos, além de tornar o código mais consico e legível

// EM arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1] // copiando os valores

console.log(arr2)



// Em concatenação
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const arr5 = [...arr3, ...arr4]
console.log(arr5)


// In objects

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };

// Isso pode muito bem ser usado para evitar reutilização de código
console.log(obj3)


// Replacing Properties
const user = { name: "Alice", age: 25 };
const updateUser =  {...user, age: 26 };


// In functions
function sum(a, b, c){
    return a + b + c;
}

const numbers =  [1, 2, 3];
console.log(sum(...numbers));