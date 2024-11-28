const person = {};

person.firstName = "John";
person.lastName = "Doe";
person.age = 29;
person.eyeColor = "blue";

console.clear()

console.log(person)

const dublador = new Object();

dublador.nome = "Minerva";
dublador.voz = "Calma";

console.log(dublador)


const song = {
    composer: "lasah",
    composer2: "sasakure",
    name: "Nevermore",
    double: function(){
        return this.composer2.slice(0, 2).repeat(2) + this.composer.slice(-5, -1)
    }
}

console.log(song.double())
delete song.double
console.log(song)