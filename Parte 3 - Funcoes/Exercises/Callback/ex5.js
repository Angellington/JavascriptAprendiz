console.clear()

function verificarPar(numero, callback){
    if (numero % 2 === 0){
        callback("Par");
    } else {
        callback("Nao par")
    }
}

verificarPar(9, function(mensagem) {
    console.log(mensagem)
})