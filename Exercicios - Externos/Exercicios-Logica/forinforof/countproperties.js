console.clear()

const carro = {
    marca: "Ford",
    modelo: 'Fiesta',
    ano: 2018
}

for (let i in carro){
    console.log(i + ": " + carro[i]);
}

console.log("Número de propriedades: " + Object.keys(carro).length)

