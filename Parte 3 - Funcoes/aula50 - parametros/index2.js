// function funcao(a, b, c, d, e, f){
//     console.log(a, b, c, d, e, f)
// }

// funcao(1, 2, 3)

// function funcao(a, b = 2, c = 4){
//     console.log(nome, sobrenome, idade);
// }
// funcao({ nome: 'Minerva', sobrenome: 'Alves', idade: 19});
// funcao(['Minerva Alves', 'Barbosa', 19])

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;    }
    console.log(acumulador);
}

conta('-', 0, 20, 10, 34, 23, 43)