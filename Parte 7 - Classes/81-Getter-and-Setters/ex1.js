class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this._idade = idade; // Idade é um atributo privado
    }

    get idade(){
        return this._idade
    }

    set idade(value){
        if(typeof(value) !== "number" || value <= 0){
            return 'Error, idade inválida'
        }
        this._idade = value // set não retorna valor
    }
}

const p1 = new Pessoa("Minerva", 19)

console.log(p1.idade)

p1.idade = 20

console.log(p1.idade)

class ContaBancaria{
    constructor(saldo){
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo
    }
    depositar(value){
        if(value <= 0) return "Você não pode dever"
        this._saldo = value + this._saldo
    }

    sacar(value){
        console.log('Value', value)
        if(value > this._saldo){
            console.log("Sem saldo o suficiente")
            return
        } 
        this._saldo = this._saldo - value
    }
}

const c1 = new ContaBancaria(200)

console.log(`O seu saldo é ${c1.saldo}R$`)

c1.depositar(100)
c1.depositar(100)


console.log(`O seu saldo é objetivamente ${c1.saldo}R$`)

c1.sacar(800)
console.log(`O seu saldo é ${c1.saldo}R$`)
