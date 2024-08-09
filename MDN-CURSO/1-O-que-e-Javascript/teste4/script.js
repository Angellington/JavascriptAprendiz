// Selecionar o CSS
const para = document.querySelector("p")

// Criar a função Atualizar nome
function atualizarNome(){
    nome = prompt("Digite o seu nome: ")
    para.textContent = "Player 1: " + nome
}

// Adicionar a chamada do evento
para.addEventListener("click", atualizarNome)