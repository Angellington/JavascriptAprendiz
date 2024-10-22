console.clear()
// Use o for...of para iterar sobre uma string e contar quantas vezes uma determinada letra aparece

const palavra = "javascript";
const letraParaContar = "a";
let valor = 0;

for( let letra of palavra){
    if(letra == letraParaContar){
        valor++;
    }
}
console.log(valor)

