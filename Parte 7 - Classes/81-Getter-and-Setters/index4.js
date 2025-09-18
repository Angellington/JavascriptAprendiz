class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this._idade = idade;
    }

    set idade(valor){
        if(typeof valor !== "number" || valor < 0){
            console.log("Idade inválida");
            return;
        }
        this._idade = valor;
    }
}

const p1 = new Pessoa("João", 20);
p1.idade = 30;

console.log(p1._idade)