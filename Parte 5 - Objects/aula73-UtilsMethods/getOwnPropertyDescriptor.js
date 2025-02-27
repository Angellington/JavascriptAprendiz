// Object.defineProperty (define uma propriedade)

const produto = { nome: 'Produto', preco: 1.8 }

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    false: 'algo'
})

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.nome = "Outra coisa"
// delete produto.preco;

console.log(produto.nome);

 
// Object values
console.log(Object.values(produto))
console.log(Object.entries(produto))

for(let [key, value] of Object.entries(produto)){
    console.log(key, value);
}