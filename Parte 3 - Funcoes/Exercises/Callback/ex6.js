console.clear()

function realizarFuncao(callback){
    setTimeout(() => {
        callback("Ação concluída!");
    }, 3000);
}

realizarFuncao(function(mensagem){
    console.log(mensagem)
})