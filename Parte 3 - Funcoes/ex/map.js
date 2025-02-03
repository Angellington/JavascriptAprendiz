const array = [0, 1, 2, 3, 4, 5, 6, 7];

const newArray = array.map((number) => {
    console.log(number); // Exibe cada número no console
    return number * 2; // Retorna o número multiplicado por 2
});

console.log(newArray); // Saída: [0, 2, 4, 6, 8, 10, 12, 14]
