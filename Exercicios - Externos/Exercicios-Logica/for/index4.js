const palavra = 'javascript'
let vogais = 0;
const letrasVogais = 'aeiou';

for(let i = 0; i < palavra.length; i++){
    if(letrasVogais.includes(palavra[i])){
        vogais++;
    }
}

// Vogais é incrementado!
console.log(`O número de vogais é: ${vogais}`)