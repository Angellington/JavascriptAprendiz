console.clear()

let n = 5;
let fatorial = 1;
let contador = n;

do {
    fatorial *= contador;
    contador --;
} while (contador > 0);

console.log(fatorial)