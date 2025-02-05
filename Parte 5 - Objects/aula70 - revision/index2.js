// Factory Function

// Construct Function

// Are project patterns that help us to create objects in a more organized way and with less code.

// Oneday we will have class

// Factory Function

function createPerson(name,  surname, age){
    return {
        name, surname, get FullName() {
            return `${this.name} ${this.surname}`;
        }
    }
}

const p1 = createPerson("Minerva", "Alves", 19);

console.log(p1.FullName); 


// Construct Function

function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.getFullName = function() {
        return `${this.name} ${this.surname}`;
    }
    Object.freeze(this); // Fix: use Object.freeze(this)
}

const p2 = new Person("Minerva", "Alves", 19);

console.log(p2);
p2.name = "Isabela";

console.log(p2.getFullName());



// New cria  um objeto vazio