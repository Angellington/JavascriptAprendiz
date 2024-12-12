// Usada para criar instancias de objetos, ao inves de criar um automaticamente

function carro(model, cor){
    this.model = model;
    this.cor = cor;

    this.ligar = function(){
        console.log("O carro está ligado!")
    };
}

const meuCarro = new carro('Fusca', 'Azul');
meuCarro.ligar();
console.log(meuCarro.model)
console.log(meuCarro.cor)


function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;

    // Metodos
    this.falar = () => {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    };
}
const pessoa1 = new Pessoa("Minerva", 19)
pessoa1.falar()