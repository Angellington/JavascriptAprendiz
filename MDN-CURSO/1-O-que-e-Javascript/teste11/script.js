// Capturar o paragrafo, tag
const para = document.querySelector("p")

// Criar a função atualizar nome
function atualizarNome(){
    let nome = prompt("Digite um nome: ")
    para.textContent = 'PlaYer 1: ' + nome
}

// Chamada da função e como
para.addEventListener("click", atualizarNome)