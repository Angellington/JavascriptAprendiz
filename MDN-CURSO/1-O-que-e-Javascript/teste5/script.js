// Capturar o query CSS
const para = document.querySelector("p")

// Criar função atualizar nome
function atualizarNome(){
    nome = prompt("Atualize seu nome: ")
    para.textContent = "Player 1" + nome
}

// Chamadada do evento
para.addEventListener("click", atualizarNome)