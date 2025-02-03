function aplicarOperação(array, operacao){
    return array.map(operacao);
}

function quadrado(numero){
    return numero * numero
};

const numeros = [1, 2, 3, 4, 5];
const resultado = aplicarOperação(numeros, quadrado)
console.log(resultado)