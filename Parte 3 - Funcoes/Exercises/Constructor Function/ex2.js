console.clear()

function Pessoa(nome, idade, profissao){
    // Atributos
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;

    this.apresentar = () => {
        return `Olá, meu nome é ${nome}, tenho ${idade} anos e sou ${profissao}`;
    };
}

const pessoa1 = new Pessoa("Minerva", 19, "Analista")

console.log(pessoa1.apresentar())