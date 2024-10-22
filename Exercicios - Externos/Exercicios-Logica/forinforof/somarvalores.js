console.clear()

const numeros = {
    a: 10,
    b: 20,
    c: 30
};

let soma = 0;

for (let i in numeros){
    soma += numeros[i]
}

console.log("Soma total: " + soma)