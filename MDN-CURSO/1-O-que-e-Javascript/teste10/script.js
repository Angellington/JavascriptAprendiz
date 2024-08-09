// Capturar o css
const para = document.querySelector("p")

// Criar a função atualizar nome
function atualizarNome(){
    let nome = prompt("Digite seu novo nome: ")
    para.textContent = 'Player 1' + nome
}

// Ativar
para.addEventListener("click", atualizarNome)