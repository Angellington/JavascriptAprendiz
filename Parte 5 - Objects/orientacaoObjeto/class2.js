class Animal {
    constructor(nome){
        this.nome = nome;
    }

    fazerSom(){
        console.log("Som genérico");
    }
}

class Cachorro extends Animal {
    fazerSom(){
        console.log("Woof! Woof! Woof")
    }
}

class Gato extends Animal {
    fazerSom(){
        console.log("Meow! Meow! Meow!")
    }
}

const dog = new Cachorro("Rex");
const cat1 = new Gato("Jolly");
const cat2 = new Gato("Minie");
console.log(dog.nome)
dog.fazerSom()

console.log(cat1.nome)
cat2.fazerSom()