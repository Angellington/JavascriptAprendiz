// Selecionar o html;
let para = document.body.querySelector("p")

// Criar função atualizar nome;
function atualizarNome(){
    let nome = prompt("Digite seu nome: ")
    para.textContent = 'Player 1: ' + nome
}

// Chamar o evento
    para.addEventListener("click", atualizarNome)