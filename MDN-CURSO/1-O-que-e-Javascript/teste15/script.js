function CriarParagraph(){
    let para = document.createElement("p") // Criar paragrafo
    para.textContent = 'Kineorama!!' // Apresentar texto
    document.body.appendChild(para) //Colocar no corpo
}

const botao = document.querySelectorAll("button")

for(let i = 0; i < botao.length; i++){
    botao[i].addEventListener("click", CriarParagraph)
}
