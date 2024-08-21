console.clear()
const prompt = require("prompt-sync")()

/*

--- Operadores Lógicos ---
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO

*/

// Checar se tem dinheiro no bolso E se está fazendo Sol

function dinheiro(){
    let CacheAtual = prompt("Quanto dinheiro você tem(R$): ")
    CacheAtual = parseInt(CacheAtual)
    if (CacheAtual === 0){
        TemDinheiro = false
        console.log("Você está zerado!")
    } else {
        console.log("Você está endinheirado BUAHAHAHAA")
    }

    return CacheAtual
}

function Sol(){
    let tempo = ['chuvoso', 'sol', 'nublado']
    let sel = prompt("Selecione o tempo atual: [1]chuvoso, [2]sol, [3]nublado - Aqui:")
    sel = parseInt(sel)
    sel = sel - 1

    return tempo[sel]
}


let dindin = dinheiro()
let tempo = Sol()

console.log(dindin, tempo)

if (dindin === 0 && tempo ===  'sol' ){
    console.log("Você está sem dinheiro e em dia ensolarado")
} else if (dindin > 0 && tempo === 'sol') {
    console.log("Você está com dinheiro em dia ensolarado")
} else {
    console.log("Que dia ruim!")
}


