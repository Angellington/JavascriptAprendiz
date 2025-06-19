class Animal {
    constructor(nome){
        if(this.constructor === Animal){
            throw new Error("Classe abstrata 'Animal' não pode ser instanciada diretamente")
        }
        this.nome = nome;
    }

    fazerSom(){
        throw new Error("O metodo fazerSom() deve ser implementado pela classe filha")
    }
}

class Cachorro extends Animal{
    fazerSom(){
        console.log("Woof Woof!")
    }
}

const dog = new Cachorro("Bilú")

