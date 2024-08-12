// Criar a função paragrafo
function CriarParagrafo(){
    let para = document.createElement("p")
    para.textContent = 'Kineorama'
    document.body.appendChild(para)
}

// Capturar o botão
const botox = document.querySelectorAll("button")

// Para cada vez que apertar o botao
for(let i = 0; i < botox.length; i++){
    botox[i].addEventListener("click", CriarParagrafo)
}
