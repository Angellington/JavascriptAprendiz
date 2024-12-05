console.clear()

// function funcao(){
//     console.log(arguments[2]);
// }

// funcao('Valor', 12, 3, 34, 53);

function funcao(a, b, c){
    let total = 0;
    for (let argumento of arguments){
        total += argumento
    }

    console.log(total)
}

funcao(2, 3, 4, 5, 6, 7, 8, 9 )