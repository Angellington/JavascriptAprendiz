function meuEscopo() {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = []
    
    function recebeEventoForm (evento) {
        evento.preventDefault()

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const idade = form.querySelector('.idade')
        const altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade : idade.value,
            altura: altura.value
        })

        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}</p>` +
        `<p>${idade.value} ${altura.value}</p>`
    } 

    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()
