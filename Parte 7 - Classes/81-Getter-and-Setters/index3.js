class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this._idade = idade; // underline indica que está privado
    }

    get idade(){
        console.log('Pegando a idade');
        return this._idade;
    }
}

const p1 = new Pessoa("João", 20);
console.log(p1.idade);