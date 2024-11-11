const paragraphs = document.querySelector('.paragraphs')
const ps = paragraphs.querySelectorAll('p')



const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody)



// Pegar a cor do fundo no paragrafo
for (let p of ps){
    p.style.backgroundColor = backgroundColorBody
    p.style.color = "#FFFFFF"
}

