function filtrarPorIdade(pessoas, idadeMinima, callback){
    return pessoas.filter(pessoa => callback(pessoa, idadeMinima));
}

function verificaIdade(pessoa, idadeMinima){
    return pessoa.idade >= idadeMinima;
}

const pessoas = [
    { nome: 'Minerva', idade: 19},
    { nome: 'Annabel', idade: 40}
];

const resultado = filtrarPorIdade(pessoas, 30, verificaIdade);
console.log(resultado)