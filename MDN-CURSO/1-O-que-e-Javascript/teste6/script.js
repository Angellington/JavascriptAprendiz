// Capturar o query
const para = document.querySelector("p")

// Criar função AtualizarNome
function AtualizarNome(){
    let nome = prompt("Qual é o seu nome: ")
    para.textContent = "Player 1: " + nome
}

// Como a função vai ser ativada, ao clicar no para
para.addEventListener("click", AtualizarNome)