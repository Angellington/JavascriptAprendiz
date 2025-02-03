// Função que se chama - É bom que ela tenha um fim - tem limite
console.clear()
function recursiva(max){
    if(max >= 100000) return;
    max++;
    console.log(max)
    recursiva(max)
}

recursiva(0)