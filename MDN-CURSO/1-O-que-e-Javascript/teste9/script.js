// Capturar o query
const para = document.querySelector("p")

// Criar a função Atualzizar nome
function AtualizarNome(){
    let nome = prompt("Digite seu nome: ")
    para.textContent = ('Player 1: ' + nome)
}

// Chamada da função
para.addEventListener("click", AtualizarNome)