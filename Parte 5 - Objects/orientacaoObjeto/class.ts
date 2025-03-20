interface Animal {
    nome: string;
    fazerSom(): void;
}

class Cachorro implements Animal{
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
    fazerSom(){
        console.log("Au! Au!")
    }
}

const dog = new Cachorro("Rex");
dog.fazerSom()