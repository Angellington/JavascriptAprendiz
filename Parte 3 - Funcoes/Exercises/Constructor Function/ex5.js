function Produto(nome, preco, categoria){
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;

    this.desconto = (percentualDesconto) => {
        const valorDesconto = this.preco * (percentualDesconto / 100);
        return this.preco - valorDesconto;  
    };
}

const produto = new Produto("Bife", 40, "Carnes");
console.log(produto.desconto(15))
