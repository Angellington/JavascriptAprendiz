class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando.`)
    }
    comer(){
        console.log(`${this.nome} está comendo.`)
    }
    beber(){
        console.log(`${this.nome} está bebendo.`)
    }
}

const p1 = new Pessoa('Maria', 'do Carmo');
const p2 = new Pessoa('Wellington', 'Ferreira');
const p3 = new Pessoa('Letícia', 'Kurebayashi');

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Pessoa2.prototype.falar = function(){
        console.log(`${this.nome} está falando!`)
    }
}

// console.log(p1, p2, p3.falar())
p3.falar()

const p4 = new Pessoa2('Isabela', 'Alves');
console.log(p4.falar())


