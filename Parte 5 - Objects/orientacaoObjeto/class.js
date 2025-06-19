// Cria classe
class Pessoa {
    // Constrói a idade
    constructor(idade){
        this.idade = idade;
    }

    // Métodos
    verificaIdade(){
        if(this.idade > 18){
            console.log("Maior de idade");
        }
    }

    atribuiIdade(novaIdade){
        this.idade = novaIdade
    }
}

const pessoa = new Pessoa(34);
pessoa.verificaIdade();
pessoa.atribuiIdade(12);
pessoa.verificaIdade();

