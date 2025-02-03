function buscarDados(callback){
    setTimeout(() => {
        const dados = { nome: "Minerva", idade: 19 };
        callback(dados)
    }, 2000)
}

function exibirDados(dados){
    console.log(`Nome: ${dados.nome}, idade: ${dados.idade}`)
}

buscarDados(exibirDados)