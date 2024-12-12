function somarComCallback(a, b, calback){
    const soma = a + b;
    calback(soma);
}

function exibitResultado(resultado){
    console.log("Resultado da soma: " + resultado);
}


somarComCallback(5, 10, exibitResultado)