function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 10))
}


Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 10)

p1.aumento(100)

const p2 = {
    nome: "Caneca",
    preoc: 15
}

Object.setPrototypeOf(p2, Produto.prototype)

console.log(p1)