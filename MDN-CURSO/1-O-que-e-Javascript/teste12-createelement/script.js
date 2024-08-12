// Função Criar Paragrafo
function criarParagrafo(){
    let para = document.createElement("p") // Cria o elemento p
    para.textContent = "Você clicou no botão!"; // Adiciona texto ao elemento p
    document.body.appendChild(para) // // Exibe o elemento p
}

const botoes = document.querySelectorAll("button");

for (var i = 0; i < botoes.length; i++){
    botoes[i].addEventListener("click", criarParagrafo);
}