/* 
Object.values
Object.entrie
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o 'prop)

... (spread)

// We seen
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma única proprieadade)

*/

// Spread Operator

const produto =  { 
    nome: 'Produto', 
    preco: 1.8 
};

const caneca = {
    ...produto, 
    material: "porcelana"
}

produto.nome = 'mi'

console.log(caneca)
console.log(produto)

// Assign Operator - ps... Spread vence
const canecaAssign = Object.assign({}, produto, { material: 'jasmim'});
console.log(canecaAssign)

// Object Key
let keys_produto = Object.keys(produto)

for (let key of Object.keys(produto)){
    console.log(key, produto[key])
}

// Using forEach
keys_produto.forEach(key => {
    console.log(key)
})


// Object.getOwnPropertyDescriptor(o, prop)


