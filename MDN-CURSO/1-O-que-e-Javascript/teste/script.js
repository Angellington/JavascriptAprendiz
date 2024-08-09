const para = document.querySelector("p"); // Selecionar o CSS

para.addEventListener("click", atualizarNome); // O evento listener (clicar, e uma funcao)

// função atualizar nome
function atualizarNome() {
    let nome = prompt("Insira um novo nome");
    para.textContent = "Player 1: " + nome
}
//T=textContent a micro função

