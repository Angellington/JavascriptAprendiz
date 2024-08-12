//
function criarParagrafo(){
    let para = document.createElement("p");
    para.textContent = 'Vazio Imensurável';
    document.body.appendChild(para);
}

//
const botao = document.querySelectorAll("button");
for (let i = 0; i < botao.length; i++){
    botao[i].addEventListener("click", criarParagrafo);
}


