/*
- A função calback é um recurso muito interessante
e usado no JS

- Permite executar uma função depois de uma determinada ação

- Conceito fundamental para entender o JS Assincrono

*/

function sum(a, b, callback){
    let op = a + b;
    callback(op)
}

function mul(a, b, callback){
    let op = a * b;
    callback(op)
}

function show(num){
    console.log("A operação é: ", num)
}

sum(2, 2, show)
mul(4, 3, show)