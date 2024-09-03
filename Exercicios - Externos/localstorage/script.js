// // Passo 1 - Criar o Objeto

// manga = {
//     nome: 'Nige Jouzo no Wakagimi',
//     revista: 'Shonnen Jump',
//     generoA: 'Shonnen',
//     generoB: 'Historico'
// }

// const para1 = document.querySelector(".passo1")
// para1.innerHTML = manga // Output: [object Object]

// // Passo 2 - Criar o LocalStorage (chave, e o dado)

// localStorage.setItem('manga', JSON.stringify(manga))

// const para2 = document.querySelector(".passo2")
// para2.innerHTML = localStorage.getItem('manga')
// // Output: {"nome":"Nige Jouzo no Wakagimi","revista":"Shonnen Jump","generoA":"Shonnen","generoB":"Historico"}

// // Passo 3 - Recuperar o objeto
// const mangaString = localStorage.getItem('manga')
// const mangaObjeto = JSON.parse(mangaString)

// const para3 = document.querySelector('.passo3')
// para3.innerHTML = `<b>O nome do mangá: </b>${mangaObjeto.nome} <br>
// <b>O nome da revista:</b> ${mangaObjeto.revista} <br>
// <b>Os gêneros do mangá:</b> ${mangaObjeto.generoA} e ${mangaObjeto.generoB}.`




