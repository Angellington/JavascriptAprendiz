console.clear()

// Criar função que retorna função
// Deve incrementar um contador e retornar o seu falor
console.clear()
function funcaoParaTal(){
    let x = 0; // Definido fora da funcao incrementar e deixar de resetar

    function incrementar(){
        x++
        return x;
    }
    return incrementar
}

// Armazenar em uma variavel;
const incremento = funcaoParaTal()

console.log(incremento())
console.log(incremento())