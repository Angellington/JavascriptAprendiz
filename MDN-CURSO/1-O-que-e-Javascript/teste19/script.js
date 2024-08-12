// Criar a função CriarParagrafo
function createParagraph(){
    let para = document.createElement("p");
    para.textContent = "Griffithh";
    document.body.appendChild(para)
}

// Selecionar o botão
const button = document.querySelectorAll("button")

// Ativar a função
for(let i = 0; i < button.length; i++){
    button[i].addEventListener("click", createParagraph)
}