// Capturar o query CSS
const para = document.querySelector("p")

// Criar a função Atualizar nome
function AtualizarNome(){
    let nome = prompt("Digite o seu nome: ")
    para.textContent = ("Player 1: " + nome)
}

// Chamar o evento ao clicar no bloco
para.addEventListener("click", AtualizarNome)