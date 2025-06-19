// PRODUTO
// Camiseta, caneca, lapi

// ABSTRAIR

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
}

Camiseta.prototype = Object.create(Produto.prototype)


const produto = new Produto('Gen', 11)
console.log(produto)