class Animal {
    constructor(){
        if(new.target === Animal){
            throw new Error("Não é possível instanciar uma class abstrata.")
        }
    }

    emitirSom(){
        throw new Error("O metodo emitir som deve ser implementado pela subclasse")
    }
}

class Cachorro extends Animal {
    emitirSom(){
        return 'Au au aut'
    }
}

class Gato extends Animal {
    emitirSom(){
        return 'Meow'
    }
}


// Tentando instanciar a class abstrata gera error


try {
    const animal = new Animal();
} catch (e) {
    console.log(e.message)
}

// Criando instancias das subclasses
const cachorro = new Cachorro();
console.log(cachorro.emitirSom());

const gato = new Gato();
console.log(gato.emitirSom());

