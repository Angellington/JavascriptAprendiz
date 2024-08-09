// Selecionar parágrafo
const para = document.querySelector("p");

// Chamar função ao clicar
para.addEventListener("click", atualizarNome);

function atualizarNome(){
    let nome = prompt("Insira um novo nome: ")
    para.textContent = "Player 1: " + nome
};
