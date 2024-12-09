// CALLBACK -> Imagina que tem uma função que leia um arquivo, e após chamar os dados
console.clear()


function lerArquivo(arquivo, callback){
    console.log("Lendo arquivo de: ", '../Closures/ex1.js');

    // Simulando uma assíncronismo com setTimeout
    setTimeout(() => {
        const dados = "Conteúdo do arquivo";
        callback(dados);
    }, 2000)
};

function processarConteudo(conteudo){
    console.log("Processando conteúdo: ", conteudo);
}

lerArquivo("meuarquivo.txt", processarConteudo)