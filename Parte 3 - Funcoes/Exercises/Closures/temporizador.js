console.clear()

function criaTempororizador(){
    const inicio = Date.now()

    return function() {
        const agora = Date.now();
        const segundos = Math.floor((agora - inicio) / 1000);
        console.log(`Passaram-se ${segundos} segundos`)
    }
}

const temporizador = criaTempororizador()

setTimeout(temporizador, 2000)
setTimeout(temporizador, 5000)