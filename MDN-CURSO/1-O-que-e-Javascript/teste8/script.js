// Criar seletor

const para = document.querySelector("p")

// Criar função atualizar nome
function atualizarnome(){
    let nome = prompt("Qual é o seu nome: ")
    para.textContent = ("Player 1: " + nome)
}

// Fazer a chamada
para.addEventListener("click", atualizarnome)