myObj = {
    name: "Minerva",
    age: 30,
    myCars: {
        car1: "Ford",
        car2: "Kart",
        car3: "sasalasa"
    }
}

console.log(myObj.myCars.car2)

// Now to know object methods

const pessoa = {
    name: "Minerva",
    last_name: "Alves",
    id: 2232,
    fullName: function(){
        return this.name + " " + this.last_name
    }
}

console.log(pessoa.fullName())

// Adding method to an Object
pessoa.name = function(){
    return this.name + this.last_name()
}

console.log(pessoa.name())