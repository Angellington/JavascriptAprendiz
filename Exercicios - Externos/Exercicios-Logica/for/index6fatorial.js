console.clear()

// Fatorial de um numero
/* 
0! = 1
1! = 1
2! = 2 * 1
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
5! = 5 * 4 * 3 * 2 * 1
----------------------------
1! = 1 * 0!

2! = 2 * 1!

3! = 3 * 2!

4! = 4 * 3!

5! = 5 * 4!

6! = 6 * 5!
*/

for (let i = 1; i <= 10; i++) {
    let r = 1;  // Inicializa o resultado do fatorial para cada novo número
    for (let ii = 1; ii <= i; ii++) {
        r = r * ii;  // Multiplica r por cada número até i
    }
    console.log(`O fatorial de ${i} é: ${r}`);
}l