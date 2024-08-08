console.clear()
/*
Tipos Primitivos (Imutáveis) - string | number | boolean | undefined | null (bigint, symbol)
*/

/*
Referencia (mutável) - array, object, function - Passados por referência
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
}
const b = {...a}
a.nome = 'Carlos'
console.log(b)