const pessoa = {
    name: "Minerva",
    lastName: "Alves",
};

console.log(pessoa.name);
console.log(pessoa["name"]); // Acessando propriedade por meio de string

const key = "name";

console.log(pessoa[key]); // Acessando propriedade por meio de variável

// Constructor Object

const pessoa1 = new Object();

// freeze pessoa
Object.freeze(pessoa1);
pessoa1.name = "Minerva";

console.log(pessoa1)

pessoa1.lastName = "Alves";

console.log(pessoa1)

delete pessoa1.name;

console.log(pessoa1)


pessoa1.falar = function() {
    console.log(`${this.lastName} está falando`);
}

pessoa1.falar();
pessoa1.age = 20;

pessoa1.getBirthdate = function() {
    return new Date().getFullYear() - this.age; // Fix: use this.age
}

console.log(pessoa1.getBirthdate());

// agr pode ter coisas dentro de um objeto

for (let key in pessoa1) {
    console.log(pessoa1[key]);
}

