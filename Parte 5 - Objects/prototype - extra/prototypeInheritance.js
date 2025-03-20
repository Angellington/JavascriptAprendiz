const personPrototype = {
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    },
}


function Person(name){
    this.name = name;
}

Object.assign(Person.prototype, personPrototype)



