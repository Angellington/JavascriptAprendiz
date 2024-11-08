console.clear()
// Criar class

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} is speaking`)
    }
    comer(){
        console.log(`${this.nome} is eating`)
    }
    beber(){
        console.log(`${this.nome} is drinking`)
    }
}

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar() = function() {
    console.log(`${this.nome} is speaking`)
}

const p1 = new Pessoa('Angel', 'Minerva')

console.log(p1)
console.log(p1.nome, p1.sobrenome)
console.log(p1.beber())

const p2 = new Pessoa('lasah', 'Theocracy')
console.log(p2.beber())
console.log(p2.nome)

console.log(p1)
console.log(p2)