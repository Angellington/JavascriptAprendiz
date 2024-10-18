const paragraphs = document.querySelector('.paragraphs')
const ps = paragraphs.querySelectorAll('p')

for (let p of ps){
    console.log(p)
}

const estilosBody = getComputedStyle(document.body)
// Pegar a cor do fundo no paragrafo
