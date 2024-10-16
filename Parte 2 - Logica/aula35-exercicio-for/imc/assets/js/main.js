
// Capturar
const div = document.getElementById('exercise')

// Criar o objeto

const elementos = [
    {tag: 'div', texto: 'Texto 1'},
    {tag: 'p', texto: 'Texto 2'},
    {tag: 'footer', texto: 'Texto 3'},
    {tag: 'section', texto: 'Texto 4'},
]


// Para cada elemento, sera criado uma tag

function create(arg){
    return document.createElement(arg)
}

for(let i = 0; i < elementos.length; i++){
    const criar = create(elementos[i].tag)
    criar.textContent = elementos[i].texto

    div.appendChild(criar)
    
}

