// Crie uma classe Animal com:
// - propriedades: nome, idade
// - método: fazerSom() que retorna "Som genérico de animal"

// Crie uma classe Cachorro que herda de Animal e:
// - adiciona propriedade: raca
// - sobrescreve fazerSom() para retornar "Au Au!"

// Crie uma classe Gato que herda de Animal e:
// - adiciona método: miar() que retorna "Miau!"
// - sobrescreve fazerSom() para retornar "Miau!"

// Teste:
// const dog = new Cachorro("Rex", 3, "Labrador");
// const cat = new Gato("Mimi", 2);
// console.log(dog.fazerSom()); // "Au Au!"
// console.log(cat.miar());     // "Miau!"

class Animal{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    fazerSom(){
        return `${this.nome} está fazendo um som audível.`;
    }

    idadeFunc(){
        return `${this.nome} tem ${this.idade} anos.`;
    }
}

class Cachorro extends Animal{
    constructor(nome, idade, raca){
        super(nome, idade);
        this.raca = raca;
    }

    fazerSom(){
        return "Au Au!";
    }
}

class Gato extends Animal{
    constructor(nome, idade){
        super(nome, idade);
    }

    miar(){
        return "Miau!";
    }
}


const dog = new Animal("Rex", 3)

console.log(dog.idadeFunc());

const dog2 = new Cachorro("PIGMEU", 5, "Labrador");
console.log(dog2.fazerSom());

const cat1 = new Gato("Minie", 1.5);
const cat2 = new Gato("Jolly", 1.7);

console.log(cat1.miar());
console.log(cat2.fazerSom());

