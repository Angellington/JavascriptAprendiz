function saudar(nome, callback){
    const saudacao = `Olá, ${nome}`;
    callback(saudacao)
}

function exibirMensagem(mensagem){
    console.log(mensagem);
}

saudar("Minerva", exibirMensagem)