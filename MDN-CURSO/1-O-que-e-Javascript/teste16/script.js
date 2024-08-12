// Criar a função criar parágrafo
function criarParagrafo() {
    let para = document.createElement("p");
    para.textContent = "Kineorama";
    document.body.appendChild(para);
}

// Fazer a seleção do botão
const botao = document.querySelectorAll("button");

// Aplicar a função no botão
for(let i = 0; i < botao.length; i++){
    botao[i].addEventListener("click", criarParagrafo);
}
