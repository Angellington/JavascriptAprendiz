// Criar  função criar paragrafo
function createParagraph(){
    let para = document.createElement("p"); // Criar o Elemento HTML
    para.textContent = "Red Kai"; // O texto dentro
    document.body.appendChild(para); // Chamar
}

// Capturar o botão
const botion = document.querySelectorAll("button");

// Chamar a append
for(let i = 0; i < botion.length; i++){
    botion[i].addEventListener("click", createParagraph)
}