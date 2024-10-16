const elementos = [
    {tag: 'h1', texto: 'Hello'},
    {tag: 'h2', texto: 'Hello'},
    {tag: 'h3', texto: 'Hello'},
    {tag: 'h4', texto: 'Hello'},
    {tag: 'h5', texto: 'Hello'},
    {tag: 'h6', texto: 'Hello'},
]

const container = document.getElementsByClassName('container')[0]
const div = document.createElement('div')

for(let i = 0; i < elementos.length; i++){
    const { tag, texto } = elementos[i]

    let elemento = document.createElement(tag)
    elemento.innerHTML = texto

    div.appendChild(elemento)
}

container.appendChild(div)

console.log(container)