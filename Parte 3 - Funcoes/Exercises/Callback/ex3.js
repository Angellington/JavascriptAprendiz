console.clear()

// Função que simula uma operação assincrona
// Crie  uma função chamada operacaoAssincrona que recebe um tempo
// de esoera em milissegundos e um callback. A função deve esperar
// o tempo informado e logo em seguida chamar o callback

function operacaoAssinrona(tempo, callback){
    setTimeout(() => {
        callback();
    }, tempo)
}

operacaoAssinrona(2000, function() {
    console.log("Operação concluida após 2 segundos.")
})