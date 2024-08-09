// Selecionar o paragrafo
const para = document.querySelector("p");

// Adicionar evento
para.addEventListener("click", atualizarNome);

function atualizarNome(){
    let nome = prompt("Insira um nome: ")
    para.textContent = 'Player 1' + nome
}



