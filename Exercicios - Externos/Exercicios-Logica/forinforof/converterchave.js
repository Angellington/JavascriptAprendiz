const { object } = require("prop-types");

console.clear()

const animal = {
    tipo: "cachorro",
    raca: "Labrador",
    idade: 3
};

const chavesArray = [];

for (let key in animal){
    chavesArray.push(key)
}

console.log(chavesArray)